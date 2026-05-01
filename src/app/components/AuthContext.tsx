import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import axios, { AxiosError } from 'axios';
import { api } from '../api';

export type UserRole = 'employee' | 'hr' | 'admin';

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  position?: string;
  isActive: boolean;
}

export interface AuthResult {
  success: boolean;
  error?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<AuthResult>;
  register: (data: RegisterData) => Promise<AuthResult>;
  logout: () => void;
  loading: boolean;
}

interface RegisterData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  position: string;
  role: UserRole;
}

interface JWTPayload {
  id: string;
  role: string;
  email?: string;
}

function parseJWT(token: string): JWTPayload | null {
  try {
    const parts = token.split('.');
    if (parts.length !== 3) return null;
    const payload = JSON.parse(atob(parts[1]));
    return payload;
  } catch {
    return null;
  }
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initAuth = async () => {
      const token = localStorage.getItem('auth_token');
      if (token) {
        try {
          const userData = await api.getMe();
          setUser(userData);
        } catch (error) {
          api.logout();
        }
      }
      setLoading(false);
    };

    initAuth();
  }, []);

  const login = async (email: string, password: string): Promise<AuthResult> => {
    try {
      const response = await api.login({ email, password });
      api.setToken(response.token);
      
      const userData = await api.getMe();
      setUser(userData);
      
      localStorage.setItem('user_email', email);
      return { success: true };
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<{error?: {code?: string, message?: string}}>;
        
        if (axiosError.response?.status === 403 && axiosError.response.data?.error?.code === 'USER_NOT_ACTIVE') {
          return { success: false, error: 'Аккаунт не активен' };
        }
        
        if (axiosError.response?.status === 401) {
          return { success: false, error: 'Неверный email или пароль' };
        }
        
        return { success: false, error: axiosError.response?.data?.error?.message || 'Ошибка входа' };
      }
      return { success: false, error: 'Произошла непредвиденная ошибка' };
    }
  };

  const register = async (data: RegisterData): Promise<AuthResult> => {
    try {
      const response = await api.register({
        email: data.email,
        password: data.password,
        firstName: data.firstName,
        lastName: data.lastName,
        position: data.position,
        role: data.role,
      });
      api.setToken(response.token);
      
      const payload = parseJWT(response.token);
      if (payload) {
        setUser({
          id: payload.id,
          email: data.email,
          firstName: data.firstName,
          lastName: data.lastName,
          role: data.role,
          position: data.position,
          isActive: true,
        });
      }
      
      localStorage.setItem('user_email', data.email);
      return { success: true };
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<{error?: {message?: string}}>;
        
        if (axiosError.response?.status === 409) {
          return { success: false, error: 'Пользователь с таким email уже существует' };
        }
        
        return { success: false, error: axiosError.response?.data?.error?.message || 'Ошибка регистрации' };
      }
      return { success: false, error: 'Произошла непредвиденная ошибка' };
    }
  };

  const logout = () => {
    api.logout();
    localStorage.removeItem('user_email');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}