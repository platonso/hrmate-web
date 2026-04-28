import axios, { AxiosInstance, AxiosError } from 'axios';

const API_BASE_URL = '/api'

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: 'employee' | 'hr' | 'admin';
  position?: string;
  isActive: boolean;
}

export interface FormResponse {
  id: string;
  title: string;
  description?: string;
  startDate?: string;
  endDate?: string;
  status: 'pending' | 'approved' | 'rejected';
  createdAt: string;
  userId: string;
}

export interface DocumentResponse {
  id: string;
  name: string;
}

export interface Resolution {
  comment?: string;
  resolvedAt?: string;
  responseDocs?: DocumentResponse[];
}

export interface FormWithDocsResponse extends FormResponse {
  description?: string;
  startDate?: string;
  endDate?: string;
  attachDocs?: DocumentResponse[];
  resolution?: Resolution;
}

export interface FormsWithUserResponse {
  forms: FormResponse[];
  user: User;
}

export interface AuthResponse {
  token: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  position: string;
  role: 'employee' | 'hr';
}

export interface ErrorResponse {
  error: {
    code: string;
    message: string;
  };
}

class ApiClient {
  private client: AxiosInstance;
  private token: string | null = null;

  constructor() {
    this.client = axios.create({
      baseURL: API_BASE_URL,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.token = localStorage.getItem('auth_token');
    if (this.token) {
      this.client.defaults.headers.common['Authorization'] = `Bearer ${this.token}`;
    }

    this.client.interceptors.response.use(
      (response) => response,
      (error: AxiosError<ErrorResponse>) => {
        if (error.response?.status === 401) {
          this.logout();
          window.location.replace('/');
        }
        return Promise.reject(error);
      }
    );
  }

  setToken(token: string) {
    this.token = token;
    localStorage.setItem('auth_token', token);
    this.client.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }

  clearToken() {
    this.token = null;
    localStorage.removeItem('auth_token');
    delete this.client.defaults.headers.common['Authorization'];
  }

  logout() {
    this.clearToken();
  }

  async login(data: LoginRequest): Promise<AuthResponse> {
    const response = await this.client.post<AuthResponse>('/login', data);
    return response.data;
  }

  async register(data: RegisterRequest): Promise<AuthResponse> {
    const response = await this.client.post<AuthResponse>('/register', data);
    return response.data;
  }

  async getMe(): Promise<User> {
    const response = await this.client.get<User>('/me');
    return response.data;
  }

  async getForms(params?: { user_id?: string; status?: string }): Promise<FormResponse[]> {
    const response = await this.client.get<FormResponse[]>('/forms', { params });
    return response.data;
  }

  async getHrForms(params?: { user_id?: string; status?: string }): Promise<FormsWithUserResponse[]> {
    const response = await this.client.get<FormsWithUserResponse[]>('/hr/forms', { params });
    return response.data;
  }

  async getAdminForms(params?: { user_id?: string; status?: string }): Promise<FormsWithUserResponse[]> {
    const response = await this.client.get<FormsWithUserResponse[]>('/admin/forms', { params });
    return response.data;
  }

  async getForm(id: string): Promise<FormWithDocsResponse> {
    const response = await this.client.get<FormWithDocsResponse>(`/forms/${id}`);
    return response.data;
  }

  async getHrForm(id: string): Promise<FormWithDocsResponse> {
    const response = await this.client.get<FormWithDocsResponse>(`/hr/forms/${id}`);
    return response.data;
  }

  async getAdminForm(id: string): Promise<FormWithDocsResponse> {
    const response = await this.client.get<FormWithDocsResponse>(`/admin/forms/${id}`);
    return response.data;
  }

  async createForm(data: {
    title: string;
    description?: string;
    startDate?: string;
    endDate?: string;
    documents?: File[];
  }): Promise<FormWithDocsResponse> {
    const formData = new FormData();
    formData.append('title', data.title);
    if (data.description) formData.append('description', data.description);
    if (data.startDate) formData.append('startDate', data.startDate);
    if (data.endDate) formData.append('endDate', data.endDate);
    if (data.documents) {
      data.documents.forEach((doc) => {
        formData.append('documents', doc);
      });
    }

    const response = await this.client.post<FormWithDocsResponse>('/forms', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  }

  async approveForm(id: string, data?: { comment?: string; documents?: File[] }): Promise<FormResponse> {
    const formData = new FormData();
    if (data?.comment) formData.append('comment', data.comment);
    if (data?.documents) {
      data.documents.forEach((doc) => {
        formData.append('documents', doc);
      });
    }

    const response = await this.client.patch<FormResponse>(`/hr/forms/${id}/approve`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  }

  async rejectForm(id: string, data?: { comment?: string; documents?: File[] }): Promise<FormResponse> {
    const formData = new FormData();
    if (data?.comment) formData.append('comment', data.comment);
    if (data?.documents) {
      data.documents.forEach((doc) => {
        formData.append('documents', doc);
      });
    }

    const response = await this.client.patch<FormResponse>(`/hr/forms/${id}/reject`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  }

  async deleteForm(id: string): Promise<void> {
    await this.client.delete(`/admin/forms/${id}`);
  }

  async getHrUsers(): Promise<User[]> {
    const response = await this.client.get<User[]>('/hr/users');
    return response.data;
  }

  async getAdminUsers(): Promise<User[]> {
    const response = await this.client.get<User[]>('/admin/users');
    return response.data;
  }

  async activateUser(id: string): Promise<User> {
    const response = await this.client.patch<User>(`/admin/users/${id}/activate`);
    return response.data;
  }

  async deactivateUser(id: string): Promise<User> {
    const response = await this.client.patch<User>(`/admin/users/${id}/deactivate`);
    return response.data;
  }

  async downloadDocument(id: string): Promise<Blob> {
    const response = await this.client.get(`/documents/${id}/download`, {
      responseType: 'blob',
    });
    return response.data;
  }

  getFormUrl(id: string): string {
    return `${API_BASE_URL}/forms/${id}`;
  }

  getHrFormUrl(id: string): string {
    return `${API_BASE_URL}/hr/forms/${id}`;
  }

  getAdminFormUrl(id: string): string {
    return `${API_BASE_URL}/admin/forms/${id}`;
  }
}

export const api = new ApiClient();