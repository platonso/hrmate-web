import { useAuth } from './AuthContext';
import { Logo } from './Logo';
import svgPaths from "../../imports/svg-kae9lsjw89";
import { useTheme } from './ThemeProvider';
import { Moon, Sun } from 'lucide-react';

interface SidebarProps {
  currentView: string;
  onNavigate: (view: string) => void;
}

export function Sidebar({ currentView, onNavigate }: SidebarProps) {
  const { logout, user } = useAuth();
  const { theme, setTheme } = useTheme();

  return (
    <div className="h-screen w-[296px] bg-[#fafaf9] dark:bg-stone-950 flex flex-col relative">
      {/* Logo */}
      <div className="absolute bottom-0 h-[1056px] left-[20px] pointer-events-none top-[24px]">
        <div className="h-[48px] pointer-events-auto sticky top-0 w-[90px]">
          <Logo className="h-[14px] w-[90px] text-[#292524] dark:text-stone-100 mt-1" />
        </div>
      </div>

      {/* Navigation */}
      <div className="absolute inset-[72px_16px_24px_16px] overflow-auto">
        <div className="absolute h-[240px] left-0 right-0 top-0">
          {/* Профиль */}
          <button
            onClick={() => onNavigate('profile')}
            className={`absolute ${currentView === 'profile' ? 'bg-white dark:bg-stone-900 border-[#f5f5f4] dark:border-stone-800' : 'border-[rgba(0,0,0,0)] dark:border-transparent'
              } border h-[32px] left-0 right-0 rounded-[8px] top-0 transition-colors hover:bg-black/5 dark:hover:bg-white/5`}
          >
            <div className="-translate-y-1/2 absolute left-[8px] size-[18px] top-1/2">
              <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 18 18">
                <g clipPath="url(#clip0_47_151)">
                  <path d={svgPaths.p36f11d00} stroke={currentView === 'profile' ? 'currentColor' : '#79716B'} strokeWidth="1.5" className={currentView === 'profile' ? 'text-[#292524] dark:text-stone-100' : 'text-[#79716b] dark:text-stone-400'} />
                  <path d={svgPaths.p10873840} stroke={currentView === 'profile' ? 'currentColor' : '#79716B'} strokeWidth="1.5" className={currentView === 'profile' ? 'text-[#292524] dark:text-stone-100' : 'text-[#79716b] dark:text-stone-400'} />
                  <path d={svgPaths.p2ee41140} stroke={currentView === 'profile' ? 'currentColor' : '#79716B'} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" className={currentView === 'profile' ? 'text-[#292524] dark:text-stone-100' : 'text-[#79716b] dark:text-stone-400'} />
                </g>
                <defs>
                  <clipPath id="clip0_47_151">
                    <rect fill="white" height="18" width="18" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className={`-translate-y-1/2 absolute flex flex-col h-[20px] justify-center leading-[0] left-[38px] text-[14px] top-1/2 font-['Geist:Medium',sans-serif] font-medium ${currentView === 'profile' ? 'text-[#292524] dark:text-stone-100' : 'text-[#79716b] dark:text-stone-400'
              }`}>
              <p className="leading-[20px]">Профиль</p>
            </div>
          </button>

          {/* Заявки */}
          <button
            onClick={() => onNavigate('my-requests')}
            className={`absolute ${(currentView === 'my-requests' || currentView === 'request-details' || currentView === 'create-request') ? 'bg-white dark:bg-stone-900 border-[#f5f5f4] dark:border-stone-800' : 'border-[rgba(0,0,0,0)] dark:border-transparent'
              } border h-[32px] left-0 right-0 rounded-[8px] top-[36px] transition-colors hover:bg-black/5 dark:hover:bg-white/5`}
          >
            <div className="-translate-y-1/2 absolute left-[8px] size-[18px] top-1/2">
              <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 18 18">
                <g clipPath="url(#clip0_1_430)">
                  <path d={svgPaths.p1d1d7d00} stroke={(currentView === 'my-requests' || currentView === 'request-details' || currentView === 'create-request') ? 'currentColor' : '#79716B'} strokeLinecap="round" strokeWidth="1.5" className={(currentView === 'my-requests' || currentView === 'request-details' || currentView === 'create-request') ? 'text-[#292524] dark:text-stone-100' : 'text-[#79716b] dark:text-stone-400'} />
                  <path d={svgPaths.p33092980} stroke={(currentView === 'my-requests' || currentView === 'request-details' || currentView === 'create-request') ? 'currentColor' : '#79716B'} strokeLinecap="round" strokeWidth="1.5" className={(currentView === 'my-requests' || currentView === 'request-details' || currentView === 'create-request') ? 'text-[#292524] dark:text-stone-100' : 'text-[#79716b] dark:text-stone-400'} />
                </g>
                <defs>
                  <clipPath id="clip0_1_430">
                    <rect fill="white" height="18" width="18" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className={`-translate-y-1/2 absolute flex flex-col h-[20px] justify-center leading-[0] left-[38px] text-[14px] top-1/2 font-['Geist:Medium',sans-serif] font-medium ${(currentView === 'my-requests' || currentView === 'request-details' || currentView === 'create-request') ? 'text-[#292524] dark:text-stone-100' : 'text-[#79716b] dark:text-stone-400'
              }`}>
              <p className="leading-[20px]">Заявки</p>
            </div>
          </button>

          {/* Сотрудники (только для HR/Admin) */}
          {(user?.role === 'hr' || user?.role === 'admin') && (
            <button
              onClick={() => onNavigate('users')}
              className={`absolute ${(currentView === 'users' || currentView === 'user-details') ? 'bg-white dark:bg-stone-900 border-[#f5f5f4] dark:border-stone-800' : 'border-[rgba(0,0,0,0)] dark:border-transparent'
                } border h-[32px] left-0 right-0 rounded-[8px] top-[72px] transition-colors hover:bg-black/5 dark:hover:bg-white/5`}
            >
              <div className="-translate-y-1/2 absolute left-[8px] size-[18px] top-1/2">
                <svg className="absolute block inset-0 size-full" viewBox="0 0 18 18" fill="none">
                  <g stroke={(currentView === 'users' || currentView === 'user-details') ? 'currentColor' : '#79716B'} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className={(currentView === 'users' || currentView === 'user-details') ? 'text-[#292524] dark:text-stone-100' : 'text-[#79716b] dark:text-stone-400'}>
                    <circle cx="3.5" cy="5" r="1.5" />
                    <path d="M3.5 7c-1.5 0-2.5 1-2.5 2.5s1 2 2.5 2 2.5-1 2.5-2-1-2.5-2.5-2.5z" />

                    <circle cx="14.5" cy="5" r="1.5" />
                    <path d="M14.5 7c-1.5 0-2.5 1-2.5 2.5s1 2 2.5 2 2.5-1 2.5-2-1-2.5-2.5-2.5z" />

                    <circle cx="9" cy="5" r="2" className={(currentView === 'users' || currentView === 'user-details') ? 'fill-white dark:fill-stone-900' : 'fill-[#fafaf9] dark:fill-stone-950'} />
                    <path d="M9 7.5c-2.5 0-4.5 1.5-4.5 4s2 3 4.5 3 4.5-1.5 4.5-3-2-4-4.5-4z" className={(currentView === 'users' || currentView === 'user-details') ? 'fill-white dark:fill-stone-900' : 'fill-[#fafaf9] dark:fill-stone-950'} />

                    <circle cx="9" cy="5" r="2" />
                    <path d="M9 7.5c-2.5 0-4.5 1.5-4.5 4s2 3 4.5 3 4.5-1.5 4.5-3-2-4-4.5-4z" />
                  </g>
                </svg>
              </div>
              <div className={`-translate-y-1/2 absolute flex flex-col h-[20px] justify-center leading-[0] left-[38px] text-[14px] top-1/2 font-['Geist:Medium',sans-serif] font-medium ${(currentView === 'users' || currentView === 'user-details') ? 'text-[#292524] dark:text-stone-100' : 'text-[#79716b] dark:text-stone-400'
                }`}>
                <p className="leading-[20px]">Сотрудники</p>
              </div>
            </button>
          )}
        </div>

        {/* Выйти и Тема (внизу) */}
        <div className="absolute bottom-0 left-0 right-0 flex flex-col gap-2">
          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="border border-[rgba(0,0,0,0)] border-solid h-[32px] w-full rounded-[8px] flex items-center relative hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
          >
            <div className="-translate-y-1/2 absolute left-[8px] size-[18px] top-1/2 flex items-center justify-center text-[#79716B] dark:text-stone-400">
              {theme === 'dark' ? <Moon size={16} /> : <Sun size={16} />}
            </div>
            <div className="-translate-y-1/2 absolute flex flex-col font-['Geist:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] left-[38px] text-[14px] top-1/2">
              <p className="leading-[20px] text-[#79716b] dark:text-stone-400">
                {theme === 'dark' ? 'Светлая тема' : 'Темная тема'}
              </p>
            </div>
          </button>

          {/* Logout */}
          <button
            onClick={() => {
              if (confirm('Вы уверены, что хотите выйти?')) {
                logout();
              }
            }}
            className="border border-[rgba(0,0,0,0)] border-solid h-[32px] w-full rounded-[8px] flex items-center relative hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
          >
            <div className="-translate-y-1/2 absolute left-[8px] size-[18px] top-1/2">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-[#79716b] dark:text-stone-400" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15.5 8.04045C15.4588 6.87972 15.3216 6.15451 14.8645 5.58671C14.2114 4.77536 13.0944 4.52064 10.8605 4.01121L9.85915 3.78286C6.4649 3.00882 4.76777 2.6218 3.63388 3.51317C2.5 4.40454 2.5 6.1257 2.5 9.56803V14.432C2.5 17.8743 2.5 19.5955 3.63388 20.4868C4.76777 21.3782 6.4649 20.9912 9.85915 20.2171L10.8605 19.9888C13.0944 19.4794 14.2114 19.2246 14.8645 18.4133C15.3216 17.8455 15.4588 17.1203 15.5 15.9595" />
                <path d="M18.5 9.01172C18.5 9.01172 21.5 11.2212 21.5 12.0117C21.5 12.8023 18.5 15.0117 18.5 15.0117M21 12.0117H8.5" />
              </svg>
            </div>
            <div className="-translate-y-1/2 absolute flex flex-col font-['Geist:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] left-[38px] text-[14px] top-1/2">
              <p className="leading-[20px] text-[#79716b] dark:text-stone-400">Выйти</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
