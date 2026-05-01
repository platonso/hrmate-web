import { useState } from 'react';
import { useAuth, UserRole } from './AuthContext';
import { Logo } from './Logo';
import { useTheme } from './ThemeProvider';
import { Moon, Sun } from 'lucide-react';

interface RegisterScreenProps {
  onSwitchToLogin: () => void;
}

export function RegisterScreen({ onSwitchToLogin }: RegisterScreenProps) {
  const { theme, setTheme } = useTheme();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    position: '',
    role: 'employee' as UserRole,
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const { register } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (formData.password.length < 6) {
      setError('Пароль должен содержать минимум 6 символов');
      return;
    }

    try {
      const result = await register(formData);
      if (!result.success) {
        setError(result.error || 'Ошибка регистрации');
      }
    } catch {
      setError('Произошла непредвиденная ошибка');
    }
  };

  return (
    <div className="absolute bg-[#fafaf9] dark:bg-stone-950 inset-0 flex flex-col items-center justify-center overflow-y-auto py-12">
      <button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="fixed bottom-4 left-4 p-2 text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors rounded-lg hover:bg-black/5 dark:hover:bg-white/5"
      >
        {theme === 'dark' ? <Moon size={20} /> : <Sun size={20} />}
      </button>

      <Logo className="w-[135px] h-[20px] text-[#292524] dark:text-stone-100 mb-8 shrink-0" />
      <div className="relative h-[655px] w-[384px] shrink-0">
        {/* Белая карточка с формой */}
        <div className="absolute bg-white dark:bg-stone-900 border border-[#e7e5e4] dark:border-stone-800 border-solid left-0 right-0 rounded-[16px] top-[78.39px] bottom-0 flex flex-col">
          <form onSubmit={handleSubmit} className="flex-1 flex flex-col px-6 pb-6">
            {/* Поля формы с отступами */}
            <div className="flex-1 flex flex-col gap-4 pt-12">
              {/* Имя */}
              <div className="flex flex-col gap-1">
                <label className="font-['Geist:Medium',sans-serif] font-medium text-[14px] text-[#292524] dark:text-stone-300">
                  Имя <span className="text-[#ff2056] dark:text-red-400">*</span>
                </label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className="bg-white dark:bg-stone-900 border border-[#e7e5e4] dark:border-stone-700 h-[36px] rounded-[8px] px-3 font-['Geist:Regular',sans-serif] text-[14px] text-[#292524] dark:text-stone-100 focus:outline-none focus:border-[#292524] dark:focus:border-stone-500"
                  required
                />
              </div>

              {/* Фамилия */}
              <div className="flex flex-col gap-1">
                <label className="font-['Geist:Medium',sans-serif] font-medium text-[14px] text-[#292524] dark:text-stone-300">
                  Фамилия <span className="text-[#ff2056] dark:text-red-400">*</span>
                </label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className="bg-white dark:bg-stone-900 border border-[#e7e5e4] dark:border-stone-700 h-[36px] rounded-[8px] px-3 font-['Geist:Regular',sans-serif] text-[14px] text-[#292524] dark:text-stone-100 focus:outline-none focus:border-[#292524] dark:focus:border-stone-500"
                  required
                />
              </div>


              {/* Email */}
              <div className="flex flex-col gap-1">
                <label className="font-['Geist:Medium',sans-serif] font-medium text-[14px] text-[#292524] dark:text-stone-300">
                  Email <span className="text-[#ff2056] dark:text-red-400">*</span>
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-white dark:bg-stone-900 border border-[#e7e5e4] dark:border-stone-700 h-[36px] rounded-[8px] px-3 font-['Geist:Regular',sans-serif] text-[14px] text-[#292524] dark:text-stone-100 focus:outline-none focus:border-[#292524] dark:focus:border-stone-500"
                  required
                />
              </div>

              {/* Должность */}
              <div className="flex flex-col gap-1">
                <label className="font-['Geist:Medium',sans-serif] font-medium text-[14px] text-[#292524] dark:text-stone-300">
                  Должность <span className="text-[#ff2056] dark:text-red-400">*</span>
                </label>
                <input
                  type="text"
                  value={formData.position}
                  onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                  className="bg-white dark:bg-stone-900 border border-[#e7e5e4] dark:border-stone-700 h-[36px] rounded-[8px] px-3 font-['Geist:Regular',sans-serif] text-[14px] text-[#292524] dark:text-stone-100 focus:outline-none focus:border-[#292524] dark:focus:border-stone-500"
                  required
                />
              </div>

              {/* Пароль */}
              <div className="flex flex-col gap-1">
                <label className="font-['Geist:Medium',sans-serif] font-medium text-[14px] text-[#292524] dark:text-stone-300">
                  Пароль <span className="text-[#ff2056] dark:text-red-400">*</span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="w-full bg-white dark:bg-stone-900 border border-[#e7e5e4] dark:border-stone-700 h-[36px] rounded-[8px] px-3 pr-10 font-['Geist:Regular',sans-serif] text-[14px] text-[#292524] dark:text-stone-100 focus:outline-none focus:border-[#292524] dark:focus:border-stone-500"
                    required
                  />
                  <button
                    type="button"
                    aria-label="view-password"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-0 top-0 p-2 size-9 text-stone-500 dark:text-stone-400 cursor-pointer hover:text-stone-950 dark:hover:text-stone-200"
                  >
                    {showPassword ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeWidth="1.5" vectorEffect="non-scaling-stroke" d="M21.544 11.045c.304.426.456.64.456.955 0 .316-.152.529-.456.955C20.178 14.871 16.689 19 12 19c-4.69 0-8.178-4.13-9.544-6.045C2.152 12.529 2 12.315 2 12c0-.316.152-.529.456-.955C3.822 9.129 7.311 5 12 5c4.69 0 8.178 4.13 9.544 6.045Z"></path>
                        <path stroke="currentColor" strokeWidth="1.5" vectorEffect="non-scaling-stroke" d="M15 12a3 3 0 1 0-6 0 3 3 0 0 0 6 0Z"></path>
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" vectorEffect="non-scaling-stroke" d="M19.439 15.439a19.5 19.5 0 0 0 2.105-2.484c.304-.426.456-.64.456-.955 0-.316-.152-.529-.456-.955C20.178 9.129 16.689 5 12 5c-.908 0-1.77.155-2.582.418m-2.67 1.33c-2.017 1.36-3.506 3.195-4.292 4.297-.304.426-.456.64-.456.955 0 .316.152.529.456.955C3.822 14.871 7.311 19 12 19c1.99 0 3.765-.744 5.253-1.747"></path>
                        <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" vectorEffect="non-scaling-stroke" d="M9.858 10A2.929 2.929 0 1 0 14 14.142"></path>
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" vectorEffect="non-scaling-stroke" d="m3 3 18 18"></path>
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Role Selection */}
              <div className="flex flex-col gap-1">
                <label className="font-['Geist:Medium',sans-serif] font-medium text-[14px] text-[#292524] dark:text-stone-300">
                  Роль <span className="text-[#ff2056] dark:text-red-400">*</span>
                </label>
                <div className="relative">
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value as UserRole })}
                    className="w-full bg-white dark:bg-stone-900 border border-[#e7e5e4] dark:border-stone-700 h-[36px] rounded-[8px] px-3 pr-10 font-['Geist:Regular',sans-serif] text-[14px] text-[#292524] dark:text-stone-100 focus:outline-none focus:border-[#292524] dark:focus:border-stone-500 appearance-none"
                  >
                    <option value="employee">Сотрудник</option>
                    <option value="hr">HR</option>
                  </select>
                  <div className="absolute right-0 inset-y-0 flex items-center pr-3 pointer-events-none text-stone-500 dark:text-stone-400" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Кнопка регистрации с отступом снизу */}
            <div className="pt-6">
              <button
                type="submit"
                className="w-full bg-[#44403b] dark:bg-stone-800 border-2 border-[#292524] dark:border-stone-700 h-[32px] rounded-[12px] hover:bg-[#292524] dark:hover:bg-stone-700 transition-colors uppercase font-['Geist_Mono',sans-serif] font-normal text-[14px] text-[#fafaf9] dark:text-stone-100"
              >
                СОЗДАТЬ АККАУНТ
              </button>
            </div>

            {/* Error Message Card */}
            {error && (
              <div className="flex items-center gap-3 bg-[#fff1f2] dark:bg-red-950/30 border border-[#fecdd3] dark:border-red-900 rounded-[12px] p-4 mt-6 transition-all w-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-[#e11d48] dark:text-red-400">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                <span className="text-[#e11d48] dark:text-red-400 text-[14px] font-['Geist:Medium',sans-serif] leading-tight">{error}</span>
              </div>
            )}
          </form>
        </div>

        {/* Серая карточка с заголовком */}
        <div className="absolute bg-[#f5f5f4] dark:bg-stone-900 border border-[#e7e5e4] dark:border-stone-800 border-solid font-normal h-[102px] leading-[0] left-0 right-0 rounded-[16px] top-0 z-10 flex flex-col justify-center px-6">
          <div className="font-['Inter:Regular',sans-serif] text-[#44403b] dark:text-stone-100 text-[23.4px] mb-1">
            <p className="leading-[28.8px]">Регистрация</p>
          </div>
          <div className="font-['Geist:Regular',sans-serif] text-[#79716b] dark:text-stone-400 text-[14px]">
            <p>
              <span className="leading-[18px]">Уже есть аккаунт? </span>
              <button
                onClick={onSwitchToLogin}
                className="[text-decoration-skip-ink:none] decoration-solid font-['Geist:Medium',sans-serif] font-medium text-[14px] leading-[16px] underline hover:text-stone-300 transition-colors"
              >
                Вход
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}