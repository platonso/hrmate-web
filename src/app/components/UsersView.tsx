import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { useAuth } from './AuthContext';
import { api, User as ApiUser } from '../api';
import svgPaths from "../../imports/svg-kae9lsjw89";

interface UsersViewProps {
  onViewUser: (user: User) => void;
}

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  position?: string;
  role: 'employee' | 'hr' | 'admin';
  isActive: boolean;
}

export function UsersView({ onViewUser }: UsersViewProps) {
  const { user: currentUser } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      setError(null);
      try {
        let apiUsers: ApiUser[];
        
        if (currentUser?.role === 'admin') {
          apiUsers = await api.getAdminUsers();
        } else {
          apiUsers = await api.getHrUsers();
        }
        
        const mappedUsers: User[] = apiUsers.map((u) => ({
          id: u.id,
          firstName: u.firstName,
          lastName: u.lastName,
          email: u.email,
          position: u.position,
          role: u.role,
          isActive: u.isActive,
        }));
        
        setUsers(mappedUsers);
      } catch (err) {
        console.error('Failed to fetch users:', err);
        setError('Не удалось загрузить пользователей');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [currentUser]);

  const filteredUsers = users.filter(user =>
    user.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (user.position?.toLowerCase().includes(searchQuery.toLowerCase()) ?? false)
  );

  if (loading) {
    return (
      <div className="h-full py-6 overflow-y-auto">
        <div className="flex items-center justify-center h-64">
          <div className="text-[#79716b] dark:text-stone-400 font-['Geist:Regular',sans-serif]">Загрузка...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-full py-6 overflow-y-auto">
        <div className="flex items-center justify-center h-64">
          <div className="text-[#ff2056] font-['Geist:Regular',sans-serif]">{error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full py-6 flex flex-col">
      <h1 className="font-['Geist:SemiBold',sans-serif] font-semibold text-[18px] leading-[28px] text-[#292524] dark:text-stone-100 mb-2">
        Сотрудники
      </h1>
      <p className="font-['Geist:Regular',sans-serif] text-[14px] leading-[20px] text-[#79716b] dark:text-stone-400 mb-6">
        Просмотр и управление сотрудниками организации.
      </p>

      <div className="flex items-center justify-between mb-6">
        <div className="h-[36px] w-1/2 relative">
          <input
            type="text"
            placeholder="Поиск по имени, email, должности..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="absolute bg-white dark:bg-stone-900 border border-[#e7e5e4] dark:border-stone-800 border-solid h-[36px] left-0 right-0 rounded-[8px] px-3 pr-10 font-['Geist:Regular',sans-serif] text-[14px] focus:outline-none focus:border-[#292524] dark:border-stone-700"
          />
          <div className="absolute bottom-[2px] right-[2px] rounded-[12px] top-[2px] w-[32px] flex items-center justify-center">
            <svg className="size-[14px]" fill="none" viewBox="0 0 14 14">
              <path d={svgPaths.p17393000} stroke="#A6A09B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
            </svg>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-stone-900 border border-[#e7e5e4] dark:border-stone-800 border-solid rounded-[8px] overflow-hidden flex flex-col">
        <div className="bg-[#f5f5f4] dark:bg-stone-800/50 border-b border-[#e7e5e4] dark:border-stone-800 font-['Geist_Mono:Medium',sans-serif] font-medium h-[48px] text-[12px] text-[#79716b] dark:text-stone-400 uppercase flex items-center px-4 shrink-0">
          <div className="flex-[3] tracking-[0.48px]">Фамилия</div>
          <div className="flex-[3] tracking-[0.48px]">Имя</div>
          <div className="flex-[3] tracking-[0.48px]">Должность</div>
          <div className="flex-[3] tracking-[0.48px]">Email</div>
          <div className="flex-[2] tracking-[0.48px]">Статус</div>
        </div>

        <div className="divide-y divide-[#f5f5f4] dark:divide-stone-800 overflow-y-auto max-h-[750px]">
          {filteredUsers.length === 0 ? (
            <div className="px-4 py-8 text-center text-[#79716b] dark:text-stone-400 font-['Geist:Regular',sans-serif] text-[14px]">
              Пользователи не найдены
            </div>
          ) : (
            filteredUsers.map(user => (
              <div
                key={user.id}
                onClick={() => onViewUser(user)}
                className="h-[56px] px-4 flex items-center cursor-pointer hover:bg-[#fafaf9] dark:bg-stone-950 transition-colors"
              >
                <div className="flex-[3] flex items-center">
                  <span className="font-['Geist:Medium',sans-serif] font-medium text-[14px] text-[#292524] dark:text-stone-100 leading-[20px]">
                    {user.lastName}
                  </span>
                </div>
                <div className="flex-[3] flex items-center">
                  <span className="font-['Geist:Medium',sans-serif] font-medium text-[14px] text-[#292524] dark:text-stone-100 leading-[20px]">
                    {user.firstName}
                  </span>
                </div>
                <div className="flex-[3] flex items-center">
                  <span className="font-['Geist:Regular',sans-serif] text-[14px] text-[#292524] dark:text-stone-100 leading-[20px]">
                    {user.position || '—'}
                  </span>
                </div>
                <div className="flex-[3] flex items-center">
                  <span className="font-['Geist:Medium',sans-serif] font-medium text-[14px] text-[#292524] dark:text-stone-100 leading-[20px]">
                    {user.email}
                  </span>
                </div>
                <div className="flex-[2] flex items-center">
                  <span className={`inline-block px-2 py-1 rounded-[4px] font-['Geist:Medium',sans-serif] font-medium text-[12px] ${
                    user.isActive
                      ? 'bg-[#16a34a] text-white'
                      : 'bg-[#a6a09b] text-white'
                  }`}>
                    {user.isActive ? 'Активен' : 'Неактивен'}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}