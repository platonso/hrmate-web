import { useState } from 'react';
import { useAuth } from './AuthContext';

interface LoginScreenProps {
  onSwitchToRegister: () => void;
}

export function LoginScreen({ onSwitchToRegister }: LoginScreenProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const success = await login(email, password);
    if (!success) {
      setError('Неверный email или пароль');
    }
  };

  return (
    <div className="absolute bg-[#fafaf9] inset-0 flex items-center justify-center">
      <div className="relative h-[344px] w-[384px]">
        {/* Белая карточка с формой */}
        <div className="absolute bg-white border border-[#e7e5e4] border-solid h-[266px] left-0 right-0 rounded-[16px] top-[78.39px]">
          <form onSubmit={handleSubmit}>
            {/* Email Label */}
            <div className="-translate-y-1/2 absolute flex flex-col font-['Geist:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] left-[24px] right-[312.28px] text-[#292524] text-[14px] top-[58px]">
              <p>
                <span className="leading-[20px]">Email</span>
                <span className="leading-[20px] text-[#ff2056]">{` *`}</span>
              </p>
            </div>

            {/* Email Input */}
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="absolute bg-white border border-[#e7e5e4] border-solid h-[36px] left-[24px] right-[24px] rounded-[8px] top-[72px] px-3 font-['Geist:Regular',sans-serif] text-[14px] text-[#292524] focus:outline-none focus:border-[#292524]"
              required
            />

            {/* Password Label */}
            <div className="-translate-y-1/2 absolute flex flex-col font-['Geist:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] left-[24px] right-[284.19px] text-[#292524] text-[14px] top-[134px]">
              <p>
                <span className="leading-[20px]">Password</span>
                <span className="leading-[20px] text-[#ff2056]">{` *`}</span>
              </p>
            </div>

            {/* Password Input */}
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="absolute bg-white border border-[#e7e5e4] border-solid h-[36px] left-[24px] right-[24px] rounded-[8px] top-[148px] px-3 pr-10 font-['Geist:Regular',sans-serif] text-[14px] text-[#292524] focus:outline-none focus:border-[#292524]"
              required
            />

            {/* Password Toggle Button */}
            <button
              type="button"
              aria-label="view-password"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-0 p-2 size-9 text-stone-500 cursor-pointer hover:text-stone-950"
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
              className="absolute bg-[#44403b] border-2 border-[#292524] border-solid h-[32px] left-[24px] right-[24px] rounded-[12px] top-[208px] hover:bg-[#292524] transition-colors"
            >
              <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Geist_Mono:SemiBold',sans-serif] font-semibold h-[20px] justify-center leading-[0] left-[calc(50%+0.16px)] text-[#fafaf9] text-[14px] text-center top-1/2 uppercase">
                <p className="leading-[20px]">ВОЙТИ</p>
              </div>
            </button>
          </form>
        </div>

        {/* Серая карточка с заголовком */}
        <div className="absolute bg-[#f5f5f4] border border-[#e7e5e4] border-solid font-normal h-[102px] leading-[0] left-0 right-0 rounded-[16px] top-0">
          <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] h-[28.8px] justify-center left-[24px] not-italic right-[297.28px] text-[#44403b] text-[23.4px] top-[38.4px]">
            <p className="leading-[28.8px]">Вход</p>
          </div>
          <div className="-translate-y-1/2 absolute flex flex-col font-['Geist:Regular',sans-serif] h-[18px] justify-center left-[24px] right-[138px] text-[#79716b] text-[14px] top-[67px]">
            <p>
              <span className="leading-[18px]">{`Нет аккаунта? `}</span>
              <button
                onClick={onSwitchToRegister}
                className="[text-decoration-skip-ink:none] decoration-solid font-['Geist:Medium',sans-serif] font-medium text-[14px] leading-[16px] underline"
              >
                Регистрация
              </button>
            </p>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="absolute top-[250px] left-[24px] right-[24px] text-[#ff2056] text-[12px] font-['Geist:Regular',sans-serif]">
            {error}
          </div>
        )}
      </div>

    </div>
  );
}