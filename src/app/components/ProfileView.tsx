import { useState } from 'react';
import { useAuth } from './AuthContext';
import { toast } from 'sonner';

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

export function ProfileView() {
  const { user } = useAuth();
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = async (value: string, field: string) => {
    await navigator.clipboard.writeText(value);
    setCopiedField(field);
    toast.success('Скопировано');
    setTimeout(() => setCopiedField(null), 2000);
  };

  const getRoleText = (role: string) => {
    switch (role) {
      case 'employee': return 'Сотрудник';
      case 'hr': return 'HR-специалист';
      case 'admin': return 'Администратор';
      default: return role || 'Разработчик';
    }
  };

  const InputField = ({ label, value, fieldKey }: { label: string, value: string, fieldKey: string }) => (
    <div className="flex flex-col gap-2">
      <label className="font-['Geist:Medium',sans-serif] font-medium text-[14px] text-[#292524] leading-[20px]">
        {label}
      </label>
      <div className="relative h-[36px] w-full bg-white border border-[#e7e5e4] rounded-[8px] flex items-center px-3">
        <span className="font-['Geist:Regular',sans-serif] text-[14px] text-[#292524] flex-1">
          {value}
        </span>
        <button 
          onClick={() => handleCopy(value, fieldKey)}
          className="absolute right-[12px] hover:scale-110 transition-transform"
        >
          {copiedField === fieldKey ? <CheckIcon /> : <CopyIcon />}
        </button>
      </div>
    </div>
);

  return (
    <div className="h-full py-6 overflow-y-auto">
      <h1 className="font-['Geist:SemiBold',sans-serif] font-semibold text-[18px] leading-[28px] text-[#292524] mb-2">
        Профиль
      </h1>
      <p className="font-['Geist:Regular',sans-serif] text-[14px] leading-[20px] text-[#79716b] mb-6">
        Здесь отображается ваша личная информация и данные аккаунта.
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
              <InputField label="Имя" value={user?.firstName || ''} fieldKey="firstName" />
              <InputField label="Фамилия" value={user?.lastName || ''} fieldKey="lastName" />
              <InputField label="Email" value={user?.email || ''} fieldKey="email" />
            </div>
            <div className="w-[calc(33.333%-10.666px)]">
              <InputField label="Должность" value={user?.position || ''} fieldKey="position" />
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
            <div className="min-w-[320px] w-1/3">
              <InputField 
                label="ID" 
                value={user?.id || ''} 
                fieldKey="userId" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
