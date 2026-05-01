import { useState } from 'react';
import { useAuth } from './AuthContext';
import { Logo } from './Logo';
import { useTheme } from './ThemeProvider';
import { Moon, Sun } from 'lucide-react';

interface LoginScreenProps {
  onSwitchToRegister: () => void;
}

export function LoginScreen({ onSwitchToRegister }: LoginScreenProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const { theme, setTheme } = useTheme();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setError('');
    setIsLoading(true);

    try {
      const result = await login(email, password);
      if (!result.success) {
        setError(result.error || 'Неверный email или пароль');
      }
    } catch {
      setError('Ошибка входа');
    } finally {
      setIsLoading(false);
    }

    return false;
  };

  return (
    <div className="absolute bg-[#fafaf9] dark:bg-stone-950 inset-0 flex flex-col items-center justify-center">
      <button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="fixed bottom-4 left-4 p-2 text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors rounded-lg hover:bg-black/5 dark:hover:bg-white/5"
      >
        {theme === 'dark' ? <Moon size={20} /> : <Sun size={20} />}
      </button>

      <Logo className="w-[135px] h-[20px] text-[#292524] dark:text-stone-100 mb-8" />
      <div className="relative h-[344px] w-[384px]">
        {/* Белая карточка с формой */}
        <div className="absolute bg-white dark:bg-stone-900 border border-[#e7e5e4] dark:border-stone-800 border-solid h-[266px] left-0 right-0 rounded-[16px] top-[78.39px]">
          <form onSubmit={handleSubmit}>
            {/* Email Label */}
            <div className="-translate-y-1/2 absolute flex flex-col font-['Geist:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] left-[24px] right-[312.28px] text-[#292524] dark:text-stone-300 text-[14px] top-[58px]">
              <p>
                <span className="leading-[20px]">Email</span>
                <span className="leading-[20px] text-[#ff2056] dark:text-red-400">{` *`}</span>
              </p>
            </div>

            {/* Email Input */}
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="absolute bg-white dark:bg-stone-900 border border-[#e7e5e4] dark:border-stone-700 border-solid h-[36px] left-[24px] right-[24px] rounded-[8px] top-[72px] px-3 font-['Geist:Regular',sans-serif] text-[14px] text-[#292524] dark:text-stone-100 focus:outline-none focus:border-[#292524] dark:focus:border-stone-500"
              required
            />

            {/* Password Label */}
            <div className="-translate-y-1/2 absolute flex flex-col font-['Geist:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] left-[24px] right-[284.19px] text-[#292524] dark:text-stone-300 text-[14px] top-[134px]">
              <p>
                <span className="leading-[20px]">Password</span>
                <span className="leading-[20px] text-[#ff2056] dark:text-red-400">{` *`}</span>
              </p>
            </div>

            {/* Password Input */}
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="absolute bg-white dark:bg-stone-900 border border-[#e7e5e4] dark:border-stone-700 border-solid h-[36px] left-[24px] right-[24px] rounded-[8px] top-[148px] px-3 pr-10 font-['Geist:Regular',sans-serif] text-[14px] text-[#292524] dark:text-stone-100 focus:outline-none focus:border-[#292524] dark:focus:border-stone-500"
              required
            />

            {/* Password Toggle Button */}
            <button
              type="button"
              aria-label="view-password"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-0 p-2 size-9 text-stone-500 dark:text-stone-400 cursor-pointer hover:text-stone-950 dark:hover:text-stone-200"
              style={{ top: '148px', left: '324px' }}
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

        {/* Login Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="absolute bg-[#44403b] dark:bg-stone-800 border-2 border-[#292524] dark:border-stone-700 border-solid h-[32px] left-[24px] right-[24px] rounded-[12px] top-[208px] hover:bg-[#292524] dark:hover:bg-stone-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Geist_Mono',sans-serif] font-normal h-[20px] justify-center leading-[0] left-[calc(50%+0.16px)] text-[#fafaf9] dark:text-stone-100 text-[14px] text-center top-1/2 uppercase">
              <p className="leading-[20px]">{isLoading ? 'ВХОД...' : 'ВОЙТИ'}</p>
            </div>
          </button>
          </form>
        </div>

        {/* Серая карточка с заголовком */}
        <div className="absolute bg-[#f5f5f4] dark:bg-stone-900 border border-[#e7e5e4] dark:border-stone-800 border-solid font-normal h-[102px] leading-[0] left-0 right-0 rounded-[16px] top-0">
          <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] h-[28.8px] justify-center left-[24px] not-italic right-[297.28px] text-[#44403b] dark:text-stone-100 text-[23.4px] top-[38.4px]">
            <p className="leading-[28.8px]">Вход</p>
          </div>
          <div className="-translate-y-1/2 absolute flex flex-col font-['Geist:Regular',sans-serif] h-[18px] justify-center left-[24px] right-[138px] text-[#79716b] dark:text-stone-400 text-[14px] top-[67px]">
            <p>
              <span className="leading-[18px]">{`Нет аккаунта? `}</span>
              <button
                onClick={onSwitchToRegister}
                className="[text-decoration-skip-ink:none] decoration-solid font-['Geist:Medium',sans-serif] font-medium text-[14px] leading-[16px] underline hover:text-stone-300 transition-colors"
              >
                Регистрация
              </button>
            </p>
          </div>
        </div>

        {/* Error Message Card */}
        {error && (
          <div className="absolute flex items-center gap-3 bg-[#fff1f2] dark:bg-red-950/30 border border-[#fecdd3] dark:border-red-900 rounded-[12px] p-4 left-0 right-0 transition-all" style={{ top: '360px' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-[#e11d48] dark:text-red-400">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
            <span className="text-[#e11d48] dark:text-red-400 text-[14px] font-['Geist:Medium',sans-serif] leading-tight">{error}</span>
          </div>
        )}
      </div>

    </div>
  );
}