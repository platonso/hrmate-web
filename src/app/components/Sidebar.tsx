import { useAuth } from './AuthContext';
import svgPaths from "../../imports/svg-kae9lsjw89";

interface SidebarProps {
  currentView: string;
  onNavigate: (view: string) => void;
}

export function Sidebar({ currentView, onNavigate }: SidebarProps) {
  const { logout, user } = useAuth();

  return (
    <div className="h-screen w-[296px] bg-[#fafaf9] flex flex-col relative">
      {/* Logo */}
      <div className="absolute bottom-0 h-[1056px] left-[20px] pointer-events-none top-[24px]">
        <div className="h-[48px] pointer-events-auto sticky top-0 w-[77px]">
          <svg className="h-[24px] w-[77px]" fill="none" viewBox="0 0 77 12">
            <path d="M0 12V0H2.24665V5.12588H8.17781V0H10.4065V12H8.17781V7.06082H2.24665V12H0Z" fill="#292524"/>
            <path d="M14.1504 12V0H19.1649C19.8119 0 20.423 0.0622347 20.9982 0.186704C21.5733 0.299858 22.0826 0.503536 22.5259 0.797737C22.9692 1.08062 23.3167 1.471 23.5683 1.96888C23.82 2.46676 23.9458 3.08345 23.9458 3.81895C23.9458 4.42999 23.8319 4.96747 23.6043 5.4314C23.3766 5.89533 23.0591 6.28571 22.6517 6.60255C22.2563 6.91938 21.783 7.16266 21.2318 7.33239L24.0177 12H21.5014L19.0031 7.67185H16.397V12H14.1504ZM16.397 5.78784H18.8594C19.2668 5.78784 19.6382 5.75955 19.9737 5.70297C20.3212 5.63508 20.6207 5.52758 20.8724 5.38048C21.136 5.23338 21.3337 5.03536 21.4655 4.78642C21.6093 4.52617 21.6871 4.19802 21.6991 3.80198C21.6991 3.32673 21.5913 2.95332 21.3756 2.68175C21.1719 2.41018 20.8724 2.21782 20.477 2.10467C20.0935 1.99151 19.6322 1.93494 19.093 1.93494H16.397V5.78784Z" fill="#292524"/>
            <path d="M27.2477 12V0H30.3211L33.8438 6.05941L37.3306 0H40.3142V12H38.0675V2.68175L34.2752 9.16549H33.3226L29.4943 2.68175V12H27.2477Z" fill="#292524"/>
            <path d="M42.7004 12L47.5711 0H50.2491L55.1019 12H52.6755L51.8308 9.77652H45.9715L45.1088 12H42.7004ZM46.6904 7.85856H51.0939L48.9011 2.13861L46.6904 7.85856Z" fill="#292524"/>
            <path d="M59.3335 12V1.93494H55.3614V0H65.5342V1.93494H61.5621V12H59.3335Z" fill="#292524"/>
            <path d="M68.0314 12V0H77V1.93494H70.278V5.09194H76.1193V6.99293H70.278V10.0651H77V12H68.0314Z" fill="#292524"/>
          </svg>
        </div>
      </div>

      {/* Navigation */}
      <div className="absolute inset-[72px_16px_24px_16px] overflow-auto">
        <div className="absolute h-[240px] left-0 right-0 top-0">
          {/* Профиль */}
          <button
            onClick={() => onNavigate('profile')}
            className={`absolute ${currentView === 'profile' ? 'bg-white border border-[#f5f5f4]' : 'border border-[rgba(0,0,0,0)]'
              } border-solid h-[32px] left-0 right-0 rounded-[8px] top-0`}
          >
            <div className="-translate-y-1/2 absolute left-[8px] size-[18px] top-1/2">
              <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 18 18">
                <g clipPath="url(#clip0_47_151)">
                  <path d={svgPaths.p36f11d00} stroke={currentView === 'profile' ? '#292524' : '#79716B'} strokeWidth="1.5" />
                  <path d={svgPaths.p10873840} stroke={currentView === 'profile' ? '#292524' : '#79716B'} strokeWidth="1.5" />
                  <path d={svgPaths.p2ee41140} stroke={currentView === 'profile' ? '#292524' : '#79716B'} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </g>
                <defs>
                  <clipPath id="clip0_47_151">
                    <rect fill="white" height="18" width="18" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className={`-translate-y-1/2 absolute flex flex-col h-[20px] justify-center leading-[0] left-[38px] text-[14px] top-1/2 font-['Geist:Medium',sans-serif] font-medium ${currentView === 'profile' ? 'text-[#292524]' : 'text-[#79716b]'
              }`}>
              <p className="leading-[20px]">Профиль</p>
            </div>
          </button>

          {/* Заявки */}
          <button
            onClick={() => onNavigate('my-requests')}
            className={`absolute ${(currentView === 'my-requests' || currentView === 'request-details' || currentView === 'create-request') ? 'bg-white border border-[#f5f5f4]' : 'border border-[rgba(0,0,0,0)]'
              } border-solid h-[32px] left-0 right-0 rounded-[8px] top-[36px]`}
          >
            <div className="-translate-y-1/2 absolute left-[8px] size-[18px] top-1/2">
              <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 18 18">
                <g clipPath="url(#clip0_1_430)">
                  <path d={svgPaths.p1d1d7d00} stroke={(currentView === 'my-requests' || currentView === 'request-details' || currentView === 'create-request') ? '#292524' : '#79716B'} strokeLinecap="round" strokeWidth="1.5" />
                  <path d={svgPaths.p33092980} stroke={(currentView === 'my-requests' || currentView === 'request-details' || currentView === 'create-request') ? '#292524' : '#79716B'} strokeLinecap="round" strokeWidth="1.5" />
                </g>
                <defs>
                  <clipPath id="clip0_1_430">
                    <rect fill="white" height="18" width="18" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className={`-translate-y-1/2 absolute flex flex-col h-[20px] justify-center leading-[0] left-[38px] text-[14px] top-1/2 font-['Geist:Medium',sans-serif] font-medium ${(currentView === 'my-requests' || currentView === 'request-details' || currentView === 'create-request') ? 'text-[#292524]' : 'text-[#79716b]'
              }`}>
              <p className="leading-[20px]">Заявки</p>
            </div>
          </button>

          {/* Сотрудники (только для HR/Admin) */}
          {(user?.role === 'hr' || user?.role === 'admin') && (
            <button
              onClick={() => onNavigate('users')}
              className={`absolute ${(currentView === 'users' || currentView === 'user-details') ? 'bg-white border border-[#f5f5f4]' : 'border border-[rgba(0,0,0,0)]'
                } border-solid h-[32px] left-0 right-0 rounded-[8px] top-[72px]`}
            >
              <div className="-translate-y-1/2 absolute left-[8px] size-[18px] top-1/2">
                <svg className="absolute block inset-0 size-full" viewBox="0 0 18 18" fill="none">
                  <g stroke={(currentView === 'users' || currentView === 'user-details') ? '#292524' : '#79716B'} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="3.5" cy="5" r="1.5" />
                    <path d="M3.5 7c-1.5 0-2.5 1-2.5 2.5s1 2 2.5 2 2.5-1 2.5-2-1-2.5-2.5-2.5z" />

                    <circle cx="14.5" cy="5" r="1.5" />
                    <path d="M14.5 7c-1.5 0-2.5 1-2.5 2.5s1 2 2.5 2 2.5-1 2.5-2-1-2.5-2.5-2.5z" />

                    <circle cx="9" cy="5" r="2" fill="white" />
                    <path d="M9 7.5c-2.5 0-4.5 1.5-4.5 4s2 3 4.5 3 4.5-1.5 4.5-3-2-4-4.5-4z" fill="white" />

                    <circle cx="9" cy="5" r="2" />
                    <path d="M9 7.5c-2.5 0-4.5 1.5-4.5 4s2 3 4.5 3 4.5-1.5 4.5-3-2-4-4.5-4z" />
                  </g>
                </svg>
              </div>
              <div className={`-translate-y-1/2 absolute flex flex-col h-[20px] justify-center leading-[0] left-[38px] text-[14px] top-1/2 font-['Geist:Medium',sans-serif] font-medium ${(currentView === 'users' || currentView === 'user-details') ? 'text-[#292524]' : 'text-[#79716b]'
                }`}>
                <p className="leading-[20px]">Сотрудники</p>
              </div>
            </button>
          )}
        </div>

        {/* Выйти (внизу) */}
        <button
          onClick={() => {
            if (confirm('Вы уверены, что хотите выйти?')) {
              logout();
            }
          }}
          className="absolute border border-[rgba(0,0,0,0)] border-solid bottom-0 h-[32px] left-0 right-0 rounded-[8px]"
        >
          <div className="-translate-y-1/2 absolute left-[8px] size-[18px] top-1/2">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#79716B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15.5 8.04045C15.4588 6.87972 15.3216 6.15451 14.8645 5.58671C14.2114 4.77536 13.0944 4.52064 10.8605 4.01121L9.85915 3.78286C6.4649 3.00882 4.76777 2.6218 3.63388 3.51317C2.5 4.40454 2.5 6.1257 2.5 9.56803V14.432C2.5 17.8743 2.5 19.5955 3.63388 20.4868C4.76777 21.3782 6.4649 20.9912 9.85915 20.2171L10.8605 19.9888C13.0944 19.4794 14.2114 19.2246 14.8645 18.4133C15.3216 17.8455 15.4588 17.1203 15.5 15.9595" />
              <path d="M18.5 9.01172C18.5 9.01172 21.5 11.2212 21.5 12.0117C21.5 12.8023 18.5 15.0117 18.5 15.0117M21 12.0117H8.5" />
            </svg>
          </div>
          <div className="-translate-y-1/2 absolute flex flex-col font-['Geist:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] left-[38px] text-[14px] top-1/2">
            <p className="leading-[20px] text-[#79716b]">Выйти</p>
          </div>
        </button>
      </div>
    </div>
  );
}
