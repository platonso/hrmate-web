import { useState } from 'react';
import { toast } from 'sonner';
import { useAuth, User as CurrentUser } from './AuthContext';
import { api } from '../api';

const LockIcon = () => (
  <svg className="w-4 h-4 shrink-0" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.84553 12.5631C2.99545 13.6767 3.91775 14.549 5.04011 14.6006C5.98451 14.644 6.94387 14.6667 8.00031 14.6667C9.05679 14.6667 10.0161 14.644 10.9605 14.6006C12.0829 14.549 13.0052 13.6767 13.1551 12.5631C13.253 11.8365 13.3337 11.0917 13.3337 10.3333C13.3337 9.57492 13.253 8.8302 13.1551 8.10352C13.0052 6.99 12.0829 6.11764 10.9605 6.06604C10.0161 6.02264 9.05679 6 8.00031 6C6.94387 6 5.98451 6.02264 5.04011 6.06604C3.91775 6.11764 2.99545 6.99 2.84553 8.10352C2.74769 8.8302 2.66699 9.57492 2.66699 10.3333C2.66699 11.0917 2.74769 11.8365 2.84553 12.5631Z" stroke="#A6A09B" strokeWidth="1.2"/>
    <path d="M5 6.00005V4.33337C5 2.67652 6.34316 1.33337 8 1.33337C9.65688 1.33337 11 2.67652 11 4.33337V6.00005" stroke="#A6A09B" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10.667 10.3268V10.3335" stroke="#A6A09B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 10.3268V10.3335" stroke="#A6A09B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5.33301 10.3268V10.3335" stroke="#A6A09B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CopyIcon = () => (
  <svg className="w-4 h-4 shrink-0" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_18_1415)">
      <path d="M6 10C6 8.1144 6 7.1716 6.58579 6.58579C7.1716 6 8.1144 6 10 6H10.6667C12.5523 6 13.4951 6 14.0809 6.58579C14.6667 7.1716 14.6667 8.1144 14.6667 10V10.6667C14.6667 12.5523 14.6667 13.4951 14.0809 14.0809C13.4951 14.6667 12.5523 14.6667 10.6667 14.6667H10C8.1144 14.6667 7.1716 14.6667 6.58579 14.0809C6 13.4951 6 12.5523 6 10.6667V10Z" stroke="#A6A09B" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.3329 6.00001C11.3313 4.02862 11.3015 3.00748 10.7277 2.3083C10.6169 2.17327 10.4931 2.04946 10.3581 1.93865C9.62047 1.33334 8.52467 1.33334 6.33301 1.33334C4.14135 1.33334 3.04553 1.33334 2.30796 1.93865C2.17293 2.04946 2.04913 2.17327 1.93831 2.3083C1.33301 3.04586 1.33301 4.14169 1.33301 6.33334C1.33301 8.52501 1.33301 9.62081 1.93831 10.3584C2.04912 10.4934 2.17293 10.6172 2.30796 10.728C3.00715 11.3019 4.02828 11.3317 5.99967 11.3333" stroke="#A6A09B" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </g>
    <defs>
      <clipPath id="clip0_18_1415">
        <rect width="16" height="16" fill="white"/>
      </clipPath>
    </defs>
  </svg>
);

const CheckIcon = () => (
  <svg className="w-4 h-4 shrink-0" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.33301 8.00001L6.66634 11.3333L12.6663 5.33334" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  position?: string;
  role: 'employee' | 'hr' | 'admin';
  isActive: boolean;
}

interface UserDetailsViewProps {
  user: User;
  currentUser: CurrentUser;
  onBack: () => void;
}

export function UserDetailsView({ user, currentUser, onBack }: UserDetailsViewProps) {
  const [formData, setFormData] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    position: user.position || ''
  });
  const [isActive, setIsActive] = useState(user.isActive);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = async (value: string, field: string) => {
    await navigator.clipboard.writeText(value);
    setCopiedField(field);
    toast.success('Скопировано');
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleToggleActive = async () => {
    const action = isActive ? 'деактивировать' : 'активировать';
    if (!confirm(`Вы уверены, что хотите ${action} пользователя ${user.firstName} ${user.lastName}?`)) {
      return;
    }

    setIsSubmitting(true);
    try {
      if (isActive) {
        await api.deactivateUser(user.id);
        toast.success('Пользователь деактивирован');
        setIsActive(false);
      } else {
        await api.activateUser(user.id);
        toast.success('Пользователь активирован');
        setIsActive(true);
      }
    } catch (error) {
      console.error('Failed to toggle user status:', error);
      toast.error('Не удалось изменить статус пользователя');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="h-full py-6 overflow-y-auto">
      {/* Header */}
      <div
        onClick={onBack}
        className="mb-4 flex items-center gap-[6px] text-[#79716b] hover:text-[#292524] transition-colors cursor-pointer"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className="font-['Geist:Medium',sans-serif] font-medium text-[14px]">Назад</span>
      </div>

      <h1 className="font-['Geist:SemiBold',sans-serif] font-semibold text-[18px] leading-[28px] text-[#292524] mb-2">
        Информация о пользователе
      </h1>
      <p className="font-['Geist:Regular',sans-serif] text-[14px] leading-[20px] text-[#79716b] mb-6">
        Личная информация и данные аккаунта сотрудника.
      </p>

      <div className="space-y-6">
        {/* Personal Info */}
        <div className="border border-[#e7e5e4] border-solid rounded-[8px] overflow-hidden">
            <div className="bg-[#f5f5f4] border-b border-[#e7e5e4] h-[48px] px-4 flex items-center">
              <h2 className="font-['Geist:Medium',sans-serif] font-medium text-[14px] text-[#292524] leading-[20px]">
                Личные данные
              </h2>
            </div>

            <div className="bg-white p-4">
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="flex flex-col gap-2">
                  <label className="font-['Geist:Medium',sans-serif] font-medium text-[14px] text-[#292524] leading-[20px]">
                    Имя
                  </label>
                  <div className="relative h-[36px] w-full bg-white border border-[#e7e5e4] rounded-[8px] flex items-center px-3">
                    <span className="font-['Geist:Regular',sans-serif] text-[14px] text-[#292524] flex-1">
                      {formData.firstName}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleCopy(formData.firstName, 'firstName')}
                      className="absolute right-[12px] hover:scale-110 transition-transform"
                    >
                      {copiedField === 'firstName' ? <CheckIcon /> : <CopyIcon />}
                    </button>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-['Geist:Medium',sans-serif] font-medium text-[14px] text-[#292524] leading-[20px]">
                    Фамилия
                  </label>
                  <div className="relative h-[36px] w-full bg-white border border-[#e7e5e4] rounded-[8px] flex items-center px-3">
                    <span className="font-['Geist:Regular',sans-serif] text-[14px] text-[#292524] flex-1">
                      {formData.lastName}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleCopy(formData.lastName, 'lastName')}
                      className="absolute right-[12px] hover:scale-110 transition-transform"
                    >
                      {copiedField === 'lastName' ? <CheckIcon /> : <CopyIcon />}
                    </button>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-['Geist:Medium',sans-serif] font-medium text-[14px] text-[#292524] leading-[20px]">
                    Email
                  </label>
                  <div className="relative h-[36px] w-full bg-white border border-[#e7e5e4] rounded-[8px] flex items-center px-3">
                    <span className="font-['Geist:Regular',sans-serif] text-[14px] text-[#292524] flex-1">
                      {formData.email}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleCopy(formData.email, 'email')}
                      className="absolute right-[12px] hover:scale-110 transition-transform"
                    >
                      {copiedField === 'email' ? <CheckIcon /> : <CopyIcon />}
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-[calc(33.333%-10.666px)]">
                <div className="flex flex-col gap-2">
                  <label className="font-['Geist:Medium',sans-serif] font-medium text-[14px] text-[#292524] leading-[20px]">
                    Должность
                  </label>
                  <div className="relative h-[36px] w-full bg-white border border-[#e7e5e4] rounded-[8px] flex items-center px-3">
                    <span className="font-['Geist:Regular',sans-serif] text-[14px] text-[#292524] flex-1">
                      {formData.position || '—'}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleCopy(formData.position || '', 'position')}
                      className="absolute right-[12px] hover:scale-110 transition-transform"
                    >
                      {copiedField === 'position' ? <CheckIcon /> : <CopyIcon />}
                    </button>
                  </div>
                </div>
              </div>
            </div>
        </div>

        {/* Account Info */}
        <div className="border border-[#e7e5e4] border-solid rounded-[8px] overflow-hidden">
          <div className="bg-[#f5f5f4] border-b border-[#e7e5e4] h-[48px] px-4 flex items-center">
            <h2 className="font-['Geist:Medium',sans-serif] font-medium text-[14px] text-[#292524] leading-[20px]">
              Данные аккаунта
            </h2>
          </div>

          <div className="bg-white p-4">
            <div className="flex gap-4">
              <div className="min-w-[360px]">
                <div className="flex flex-col gap-2">
                  <label className="font-['Geist:Medium',sans-serif] font-medium text-[14px] text-[#292524] leading-[20px]">
                    ID
                  </label>
                  <div className="relative h-[36px] w-full bg-white border border-[#e7e5e4] rounded-[8px] flex items-center px-3">
                    <span className="font-['Geist:Regular',sans-serif] text-[14px] text-[#a6a09b] truncate pr-8 flex-1">
                      {user.id}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleCopy(user.id, 'userId')}
                      className="absolute right-[12px] hover:scale-110 transition-transform"
                    >
                      {copiedField === 'userId' ? <CheckIcon /> : <CopyIcon />}
                    </button>
                  </div>
                </div>
              </div>
              <div className="min-w-[250px]">
                <div className="flex flex-col gap-2">
                  <label className="font-['Geist:Medium',sans-serif] font-medium text-[14px] text-[#292524] leading-[20px]">
                    Роль
                  </label>
                  <div className="relative h-[36px] w-full bg-white border border-[#e7e5e4] rounded-[8px] flex items-center px-3">
                    <span className="font-['Geist:Regular',sans-serif] text-[14px] text-[#a6a09b] flex-1">
                      {user.role === 'employee' ? 'Сотрудник' : user.role === 'hr' ? 'HR-специалист' : user.role === 'admin' ? 'Администратор' : user.role}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleCopy(user.role, 'role')}
                      className="absolute right-[12px] hover:scale-110 transition-transform"
                    >
                      {copiedField === 'role' ? <CheckIcon /> : <CopyIcon />}
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-['Geist:Medium',sans-serif] font-medium text-[14px] text-[#292524] leading-[20px]">
                  Статус
                </label>
                <div className="flex items-center gap-3">
                  <span className={`inline-flex items-center gap-2 px-2 py-1 rounded-[4px] font-['Geist:Medium',sans-serif] font-medium text-[12px] ${
                    isActive
                      ? 'bg-[#16a34a] text-white'
                      : 'bg-[#a6a09b] text-white'
                  }`}>
                    {isActive ? 'Активен' : 'Неактивен'}
                  </span>
                  {(currentUser?.role === 'admin') && (
                    <button
                      onClick={handleToggleActive}
                      disabled={isSubmitting}
                      className="px-3 py-1 bg-white border border-[#e7e5e4] rounded-[6px] font-['Geist:Medium',sans-serif] font-medium text-[13px] text-[#292524] hover:bg-[#f5f5f4] transition-colors disabled:opacity-50"
                    >
                      {isActive ? 'Деактивировать' : 'Активировать'}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}