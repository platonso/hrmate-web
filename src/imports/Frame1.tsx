import svgPaths from "./svg-siklasnz9t";

function Input() {
  return <div className="absolute bg-white border border-[#e7e5e4] border-solid h-[36px] left-[24px] right-[24px] rounded-[8px] top-[72px]" data-name="Input" />;
}

function Input1() {
  return <div className="absolute bg-white border border-[#e7e5e4] border-solid h-[36px] left-[24px] right-[24px] rounded-[8px] top-[148px]" data-name="Input" />;
}

function ButtonViewPasswordSvg() {
  return (
    <div className="absolute h-[16px] left-[330px] overflow-clip right-[36px] top-[158px]" data-name="Button - view-password → SVG">
      <div className="absolute inset-[20.83%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-5.36%_-3.75%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3333 10.3333">
            <path d={svgPaths.p16addd00} id="Vector" stroke="var(--stroke-0, #79716B)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[41.67%_41.67%_37.41%_37.41%]" data-name="Vector">
        <div className="absolute inset-[-14.93%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.34793 4.34793">
            <path d={svgPaths.pd5a8def} id="Vector" stroke="var(--stroke-0, #79716B)" strokeLinecap="round" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-4.17%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
            <path d="M0.5 0.5L12.5 12.5" id="Vector" stroke="var(--stroke-0, #79716B)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#44403b] border-2 border-[#292524] border-solid h-[32px] left-[24px] right-[24px] rounded-[12px] top-[208px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Geist_Mono:SemiBold',sans-serif] font-semibold h-[20px] justify-center leading-[0] left-[calc(50%+0.16px)] text-[#fafaf9] text-[14px] text-center top-1/2 uppercase w-[42.328px]">
        <p className="leading-[20px]">Login</p>
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="absolute bg-white border border-[#e7e5e4] border-solid h-[266px] left-0 right-0 rounded-[16px] top-[78.39px]" data-name="Background+Border">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Geist:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] left-[24px] right-[312.28px] text-[#292524] text-[14px] top-[58px]">
        <p>
          <span className="leading-[20px]">Email</span>
          <span className="leading-[20px] text-[#ff2056]">{` *`}</span>
        </p>
      </div>
      <Input />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Geist:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] left-[24px] right-[284.19px] text-[#292524] text-[14px] top-[134px]">
        <p>
          <span className="leading-[20px]">Password</span>
          <span className="leading-[20px] text-[#ff2056]">{` *`}</span>
        </p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Geist:Regular',sans-serif] font-normal h-[13px] justify-center leading-[0] left-[275.72px] right-[23.67px] text-[#79716b] text-[10px] top-[134px]">
        <p className="leading-[15px]">Forgot password?</p>
      </div>
      <Input1 />
      <ButtonViewPasswordSvg />
      <Button />
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="absolute bg-[#f5f5f4] border border-[#e7e5e4] border-solid font-normal h-[102px] leading-[0] left-0 right-0 rounded-[16px] top-0" data-name="Background+Border">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] h-[28.8px] justify-center left-[24px] not-italic right-[297.28px] text-[#44403b] text-[23.4px] top-[38.4px]">
        <p className="leading-[28.8px]">Вход</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Geist:Regular',sans-serif] h-[18px] justify-center left-[24px] right-[138px] text-[#79716b] text-[14px] top-[67px]">
        <p>
          <span className="leading-[20px]">{`Нет аккаунта? `}</span>
          <span className="[text-decoration-skip-ink:none] decoration-solid font-['Geist:SemiBold',sans-serif] font-semibold leading-[20px] underline">Регистрация</span>
        </p>
      </div>
    </div>
  );
}

function Form() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[344px] left-1/2 top-1/2 w-[384px]" data-name="Form">
      <BackgroundBorder />
      <BackgroundBorder1 />
    </div>
  );
}

function Container() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[1096px] left-1/2 top-1/2 w-[1152px]" data-name="Container">
      <Form />
    </div>
  );
}

function Background() {
  return (
    <div className="absolute bg-[#fafaf9] h-[1080px] left-0 right-0 top-0" data-name="Background">
      <Container />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Geist_Mono:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] left-[880.78px] right-[880.46px] text-[#a6a09b] text-[12px] text-center top-[1168px]">
        <p className="leading-[16px]">© 2026 • HRMATE INC.</p>
      </div>
    </div>
  );
}

function Component1920WLight() {
  return (
    <div className="absolute bg-white h-[1080px] left-[99px] overflow-x-clip overflow-y-auto top-[99px] w-[1920px]" data-name="1920w light">
      <Background />
    </div>
  );
}

function Login() {
  return (
    <div className="absolute bg-[#444] border border-[rgba(255,255,255,0.1)] border-solid h-[1280px] left-0 overflow-clip rounded-[2px] top-0 w-[2120px]" data-name="Login">
      <Component1920WLight />
    </div>
  );
}

function Svg() {
  return (
    <div className="-translate-y-1/2 absolute left-[8px] size-[18px] top-1/2" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1_430)" id="SVG">
          <path d={svgPaths.p1d1d7d00} id="Vector" stroke="var(--stroke-0, #292524)" strokeLinecap="round" strokeWidth="1.125" />
          <path d={svgPaths.p33092980} id="Vector_2" stroke="var(--stroke-0, #292524)" strokeLinecap="round" strokeWidth="1.125" />
        </g>
        <defs>
          <clipPath id="clip0_1_430">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Component() {
  return (
    <div className="absolute bg-white border border-[#f5f5f4] border-solid h-[32px] left-0 right-0 rounded-[8px] top-[72px]" data-name="Мои заявки">
      <Svg />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold h-[20px] justify-center leading-[0] left-[38px] text-[#292524] text-[14px] top-1/2 w-[81.986px]">
        <p className="leading-[20px]">Мои заявки</p>
      </div>
    </div>
  );
}

function Svg1() {
  return (
    <div className="absolute inset-[calc(21.88%-0.56px)_calc(89.77%+0.8px)_calc(21.88%-0.56px)_calc(3.41%-0.93px)]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="SVG">
          <path d={svgPaths.p107c9e00} id="Vector" stroke="var(--stroke-0, #79716B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
        </g>
      </svg>
    </div>
  );
}

function Component1() {
  return (
    <div className="absolute border border-[rgba(0,0,0,0)] border-solid h-[32px] left-0 opacity-50 right-0 rounded-[8px] top-[36px]" data-name="Создать заявку">
      <Svg1 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Geist:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] left-[38px] text-[#79716b] text-[14px] top-1/2 w-[123px]">
        <p className="leading-[20px]">Создать заявку</p>
      </div>
    </div>
  );
}

function Svg2() {
  return (
    <div className="-translate-y-1/2 absolute left-[8px] size-[18px] top-1/2" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1_415)" id="SVG">
          <path d={svgPaths.p36f11d00} id="Vector" stroke="var(--stroke-0, #79716B)" strokeWidth="1.125" />
          <path d={svgPaths.p10873840} id="Vector_2" stroke="var(--stroke-0, #79716B)" strokeWidth="1.125" />
          <path d={svgPaths.p2ee41140} id="Vector_3" stroke="var(--stroke-0, #79716B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
        </g>
        <defs>
          <clipPath id="clip0_1_415">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Component2() {
  return (
    <div className="absolute border border-[rgba(0,0,0,0)] border-solid h-[32px] left-0 opacity-50 right-0 rounded-[8px] top-0" data-name="Профиль">
      <Svg2 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Geist:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] left-[38px] text-[#79716b] text-[14px] top-1/2 w-[61.729px]">
        <p className="leading-[20px]">Профиль</p>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="absolute h-[192px] left-0 right-0 top-0" data-name="Nav">
      <Component />
      <Component1 />
      <Component2 />
    </div>
  );
}

function Svg3() {
  return (
    <div className="-translate-y-1/2 absolute left-[8px] size-[18px] top-1/2" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="SVG">
          <path d={svgPaths.p27e53e00} id="Vector" stroke="var(--stroke-0, #79716B)" strokeLinecap="round" strokeWidth="1.125" />
          <path d={svgPaths.p1b4bd500} id="Vector_2" stroke="var(--stroke-0, #79716B)" strokeWidth="1.125" />
        </g>
      </svg>
    </div>
  );
}

function Link() {
  return (
    <div className="absolute border border-[rgba(0,0,0,0)] border-solid bottom-0 h-[32px] left-0 right-0 rounded-[8px]" data-name="Link">
      <Svg3 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Geist:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] left-[38px] text-[#79716b] text-[14px] top-1/2 w-[73.643px]">
        <p className="leading-[20px]">Настройки</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute inset-[72px_16px_24px_16px] overflow-auto" data-name="Container">
      <Nav />
      <Link />
    </div>
  );
}

function Svg4() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[139px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 139 24">
        <g id="SVG">
          <path d="M14 13L12 10L10 13" id="Vector" stroke="var(--stroke-0, #292524)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p31ae7a00} id="Vector_2" stroke="var(--stroke-0, #292524)" strokeLinejoin="round" strokeWidth="2" />
          <path d="M16 22C16 22 13 16 10 13" id="Vector_3" stroke="var(--stroke-0, #292524)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M8 22C8 22 11 16 14 13" id="Vector_4" stroke="var(--stroke-0, #292524)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p1fb36d00} fill="var(--fill-0, #292524)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function LinkGoToHome() {
  return (
    <div className="h-[48px] pointer-events-auto sticky top-0 w-[139px]" data-name="Link - Go to home">
      <Svg4 />
    </div>
  );
}

function Aside() {
  return (
    <div className="absolute h-[1080px] left-[324px] right-[1300px] top-0" data-name="Aside">
      <Container1 />
      <div className="absolute bottom-0 h-[1056px] left-[20px] pointer-events-none top-[24px]">
        <LinkGoToHome />
      </div>
    </div>
  );
}

function Svg5() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-37.85px)] size-[18px] top-1/2" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="SVG">
          <path d="M9 3V15M15 9H3" id="Vector" stroke="var(--stroke-0, #FAFAF9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-[#44403b] border-2 border-[#292524] border-solid h-[32px] left-[838.3px] right-0 rounded-[12px] top-0" data-name="Button">
      <Svg5 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Geist_Mono:SemiBold',sans-serif] font-semibold h-[20px] justify-center leading-[0] left-[calc(50%+11.2px)] text-[#fafaf9] text-[14px] text-center top-1/2 tracking-[0.7px] uppercase w-[64.096px]">
        <p className="leading-[20px]">Создать</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute h-[18px] left-[12px] overflow-clip right-[32px] top-[8px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Geist:Regular',sans-serif] font-normal h-[18px] justify-center leading-[0] left-0 text-[#a6a09b] text-[14px] top-[9px] w-[41.596px]">
        <p className="leading-[normal]">Поиск</p>
      </div>
    </div>
  );
}

function Input2() {
  return (
    <div className="absolute bg-white border border-[#e7e5e4] border-solid h-[36px] left-0 overflow-clip right-0 rounded-[8px] top-0" data-name="Input">
      <Container2 />
    </div>
  );
}

function Svg6() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[14px] top-1/2" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="SVG">
          <path d={svgPaths.p17393000} id="Vector" stroke="var(--stroke-0, #A6A09B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
        </g>
      </svg>
    </div>
  );
}

function ButtonSearch() {
  return (
    <div className="absolute border border-[rgba(0,0,0,0)] border-solid bottom-[2px] right-[2px] rounded-[12px] top-[2px] w-[32px]" data-name="Button - Search">
      <Svg6 />
    </div>
  );
}

function Form1() {
  return (
    <div className="absolute h-[36px] left-0 right-[672px] top-[80px]" data-name="Form">
      <Input2 />
      <ButtonSearch />
    </div>
  );
}

function ParagraphBackgroundHorizontalBorder() {
  return (
    <div className="bg-[#f5f5f4] border-[#e7e5e4] border-b border-solid font-['Geist_Mono:Medium',sans-serif] font-medium h-[49px] leading-[0] pointer-events-auto rounded-tl-[16px] rounded-tr-[16px] sticky text-[#79716b] text-[12px] top-0 uppercase" data-name="Paragraph+Background+HorizontalBorder">
      <div className="-translate-y-1/2 absolute flex flex-col h-[16px] justify-center left-[16px] right-[912.82px] top-1/2">
        <p className="leading-[16px]">Тема</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col h-[16px] justify-center left-[468px] right-[446.47px] top-1/2">
        <p className="leading-[16px]">Статус</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col h-[16px] justify-center left-[713px] right-[194.24px] top-1/2">
        <p className="leading-[16px]">Создана</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="-translate-y-1/2 absolute h-[20px] left-0 overflow-clip right-[24px] top-1/2" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold h-[18px] justify-center leading-[0] left-0 text-[#292524] text-[14px] top-[10px] w-[108.277px]">
        <p className="leading-[20px]">Password Reset</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="-translate-y-1/2 absolute h-[40px] left-0 overflow-clip top-1/2 w-[452px]" data-name="Container">
      <Container4 />
    </div>
  );
}

function Container5() {
  return (
    <div className="-translate-y-1/2 absolute h-[16px] left-[452px] overflow-clip top-1/2 w-[140px]" data-name="Container">
      <div className="absolute bottom-0 flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[#292524] text-[12px] top-0 w-[100.555px]">
        <p className="leading-[16px]">На рассмотрении</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="-translate-y-1/2 absolute h-[16px] left-[697px] overflow-clip top-1/2 w-[140px]" data-name="Container">
      <div className="absolute bottom-0 flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[#292524] text-[12px] top-0 w-[69.416px]">
        <p className="leading-[16px]">15 Apr, 2026</p>
      </div>
    </div>
  );
}

function Svg7() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[15px] top-1/2" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="SVG">
          <path d={svgPaths.p27852e00} fill="var(--fill-0, #A6A09B)" id="Vector" stroke="var(--stroke-0, #A6A09B)" strokeWidth="0.9375" />
        </g>
      </svg>
    </div>
  );
}

function ButtonButton() {
  return (
    <div className="absolute border border-[rgba(0,0,0,0)] border-solid bottom-0 right-0 rounded-[8px] top-0 w-[24px]" data-name="Button → Button">
      <Svg7 />
    </div>
  );
}

function Container7() {
  return (
    <div className="-translate-y-1/2 absolute h-[24px] left-[888px] overflow-clip top-1/2 w-[40px]" data-name="Container">
      <div className="absolute bottom-0 right-0 top-0 w-[24px]" data-name="Button menu" />
      <ButtonButton />
    </div>
  );
}

function Link1() {
  return (
    <div className="absolute h-[40px] left-[16px] right-[14px] top-[65px]" data-name="Link">
      <Container3 />
      <Container5 />
      <Container6 />
      <Container7 />
    </div>
  );
}

function Container9() {
  return (
    <div className="-translate-y-1/2 absolute h-[20px] left-0 overflow-clip right-[24px] top-1/2" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold h-[18px] justify-center leading-[0] left-0 text-[#292524] text-[14px] top-[10px] w-[137.326px]">
        <p className="leading-[20px]">Account Verification</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="-translate-y-1/2 absolute h-[40px] left-0 overflow-clip top-1/2 w-[452px]" data-name="Container">
      <Container9 />
    </div>
  );
}

function Container10() {
  return (
    <div className="-translate-y-1/2 absolute h-[16px] left-[452px] overflow-clip top-1/2 w-[140px]" data-name="Container">
      <div className="absolute bottom-0 flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[#292524] text-[12px] top-0 w-[75.205px]">
        <p className="leading-[16px]">Согласовано</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="-translate-y-1/2 absolute h-[16px] left-[697px] overflow-clip top-1/2 w-[140px]" data-name="Container">
      <div className="absolute bottom-0 flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[#292524] text-[12px] top-0 w-[69.416px]">
        <p className="leading-[16px]">15 Apr, 2026</p>
      </div>
    </div>
  );
}

function Svg8() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[15px] top-1/2" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="SVG">
          <path d={svgPaths.p27852e00} fill="var(--fill-0, #A6A09B)" id="Vector" stroke="var(--stroke-0, #A6A09B)" strokeWidth="0.9375" />
        </g>
      </svg>
    </div>
  );
}

function ButtonButton1() {
  return (
    <div className="absolute border border-[rgba(0,0,0,0)] border-solid bottom-0 right-0 rounded-[8px] top-0 w-[24px]" data-name="Button → Button">
      <Svg8 />
    </div>
  );
}

function Container12() {
  return (
    <div className="-translate-y-1/2 absolute h-[24px] left-[888px] overflow-clip top-1/2 w-[40px]" data-name="Container">
      <div className="absolute bottom-0 right-0 top-0 w-[24px]" data-name="Button menu" />
      <ButtonButton1 />
    </div>
  );
}

function Link2() {
  return (
    <div className="absolute h-[40px] left-[16px] right-[14px] top-[137px]" data-name="Link">
      <Container8 />
      <Container10 />
      <Container11 />
      <Container12 />
    </div>
  );
}

function Container14() {
  return (
    <div className="-translate-y-1/2 absolute h-[20px] left-0 overflow-clip right-[24px] top-1/2" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold h-[18px] justify-center leading-[0] left-0 text-[#292524] text-[14px] top-[10px] w-[102.768px]">
        <p className="leading-[20px]">Welcome Email</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="-translate-y-1/2 absolute h-[40px] left-0 overflow-clip top-1/2 w-[452px]" data-name="Container">
      <Container14 />
    </div>
  );
}

function Container15() {
  return (
    <div className="-translate-y-1/2 absolute h-[16px] left-[452px] overflow-clip top-1/2 w-[140px]" data-name="Container">
      <div className="absolute bottom-0 flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[#292524] text-[12px] top-0 w-[64.026px]">
        <p className="leading-[16px]">Отклонена</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="-translate-y-1/2 absolute h-[16px] left-[697px] overflow-clip top-1/2 w-[140px]" data-name="Container">
      <div className="absolute bottom-0 flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[#292524] text-[12px] top-0 w-[69.416px]">
        <p className="leading-[16px]">15 Apr, 2026</p>
      </div>
    </div>
  );
}

function Svg9() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[15px] top-1/2" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="SVG">
          <path d={svgPaths.p27852e00} fill="var(--fill-0, #A6A09B)" id="Vector" stroke="var(--stroke-0, #A6A09B)" strokeWidth="0.9375" />
        </g>
      </svg>
    </div>
  );
}

function ButtonButton2() {
  return (
    <div className="absolute border border-[rgba(0,0,0,0)] border-solid bottom-0 right-0 rounded-[8px] top-0 w-[24px]" data-name="Button → Button">
      <Svg9 />
    </div>
  );
}

function Container17() {
  return (
    <div className="-translate-y-1/2 absolute h-[24px] left-[888px] overflow-clip top-1/2 w-[40px]" data-name="Container">
      <div className="absolute bottom-0 right-0 top-0 w-[24px]" data-name="Button menu" />
      <ButtonButton2 />
    </div>
  );
}

function Link3() {
  return (
    <div className="absolute h-[40px] left-[16px] right-[14px] top-[209px]" data-name="Link">
      <Container13 />
      <Container15 />
      <Container16 />
      <Container17 />
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div className="absolute bg-white border border-[#e7e5e4] border-solid h-[267px] left-0 overflow-clip right-0 rounded-[16px] top-[140px]" data-name="Background+Border">
      <div className="absolute h-[266px] inset-[0_0_-1px_0] pointer-events-none">
        <ParagraphBackgroundHorizontalBorder />
      </div>
      <Link1 />
      <Link2 />
      <Link3 />
    </div>
  );
}

function Main() {
  return (
    <div className="absolute h-[1056px] left-[628px] right-[324px] top-[24px]" data-name="Main">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold h-[28px] justify-center leading-[0] left-0 right-[854.66px] text-[#292524] text-[18px] top-[14px]">
        <p className="leading-[28px]">Мои заявки</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Geist:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] left-0 right-[436.23px] text-[#79716b] text-[14px] top-[46px]">
        <p className="leading-[20px]">Управляйте заявками и отслеживайте статус рассмотрения.</p>
      </div>
      <Button1 />
      <Form1 />
      <BackgroundBorder2 />
    </div>
  );
}

function Content() {
  return (
    <div className="absolute contents left-[324px] right-[324px] top-0" data-name="Content">
      <Aside />
      <Main />
    </div>
  );
}

function Component1920WDefault() {
  return (
    <div className="absolute h-[1080px] left-[99px] overflow-x-clip overflow-y-auto top-[99px] w-[1920px]" style={{ backgroundImage: "linear-gradient(90deg, rgb(250, 250, 249) 0%, rgb(250, 250, 249) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="1920w default">
      <Content />
    </div>
  );
}

function MyForms() {
  return (
    <div className="absolute bg-[#444] border border-[rgba(255,255,255,0.1)] border-solid h-[1280px] left-[2460px] overflow-clip rounded-[2px] top-0 w-[2120px]" data-name="My Forms">
      <Component1920WDefault />
    </div>
  );
}

function Svg10() {
  return (
    <div className="-translate-y-1/2 absolute left-[8px] size-[18px] top-1/2" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1_459)" id="SVG">
          <path d={svgPaths.p1d1d7d00} id="Vector" stroke="var(--stroke-0, #B9B5B2)" strokeLinecap="round" strokeWidth="1.125" />
          <path d={svgPaths.p33092980} id="Vector_2" stroke="var(--stroke-0, #B9B5B2)" strokeLinecap="round" strokeWidth="1.125" />
        </g>
        <defs>
          <clipPath id="clip0_1_459">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Component3() {
  return (
    <div className="absolute border border-[rgba(245,245,244,0)] border-solid h-[32px] left-0 right-0 rounded-[8px] top-[72px]" data-name="Мои заявки">
      <Svg10 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Geist:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] left-[38px] text-[#b9b5b2] text-[14px] top-1/2 w-[81.986px]">
        <p className="leading-[20px]">Мои заявки</p>
      </div>
    </div>
  );
}

function Svg11() {
  return (
    <div className="absolute inset-[calc(21.88%-0.56px)_calc(89.77%+0.8px)_calc(21.88%-0.56px)_calc(3.41%-0.93px)]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="SVG">
          <path d={svgPaths.p107c9e00} id="Vector" stroke="var(--stroke-0, #79716B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
        </g>
      </svg>
    </div>
  );
}

function Component4() {
  return (
    <div className="absolute border border-[rgba(0,0,0,0)] border-solid h-[32px] left-0 opacity-50 right-0 rounded-[8px] top-[36px]" data-name="Создать заявку">
      <Svg11 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Geist:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] left-[38px] text-[#79716b] text-[14px] top-1/2 w-[123px]">
        <p className="leading-[20px]">Создать заявку</p>
      </div>
    </div>
  );
}

function Svg12() {
  return (
    <div className="-translate-y-1/2 absolute left-[8px] size-[18px] top-1/2" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1_445)" id="SVG">
          <path d={svgPaths.p36f11d00} id="Vector" stroke="var(--stroke-0, #292524)" strokeWidth="1.125" />
          <path d={svgPaths.p10873840} id="Vector_2" stroke="var(--stroke-0, #292524)" strokeWidth="1.125" />
          <path d={svgPaths.p2ee41140} id="Vector_3" stroke="var(--stroke-0, #292524)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
        </g>
        <defs>
          <clipPath id="clip0_1_445">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Component5() {
  return (
    <div className="absolute bg-white border border-[#f5f5f4] border-solid h-[32px] left-0 right-0 rounded-[8px] top-0" data-name="Мои заявки">
      <Svg12 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold h-[20px] justify-center leading-[0] left-[38px] text-[#292524] text-[14px] top-1/2 w-[81.986px]">
        <p className="leading-[20px]">Профиль</p>
      </div>
    </div>
  );
}

function Nav1() {
  return (
    <div className="absolute h-[192px] left-0 right-0 top-0" data-name="Nav">
      <Component3 />
      <Component4 />
      <Component5 />
    </div>
  );
}

function Svg13() {
  return (
    <div className="-translate-y-1/2 absolute left-[8px] size-[18px] top-1/2" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="SVG">
          <path d={svgPaths.p27e53e00} id="Vector" stroke="var(--stroke-0, #79716B)" strokeLinecap="round" strokeWidth="1.125" />
          <path d={svgPaths.p1b4bd500} id="Vector_2" stroke="var(--stroke-0, #79716B)" strokeWidth="1.125" />
        </g>
      </svg>
    </div>
  );
}

function Link4() {
  return (
    <div className="absolute border border-[rgba(0,0,0,0)] border-solid bottom-0 h-[32px] left-0 right-0 rounded-[8px]" data-name="Link">
      <Svg13 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Geist:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] left-[38px] text-[#79716b] text-[14px] top-1/2 w-[73.643px]">
        <p className="leading-[20px]">Настройки</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute inset-[72px_16px_24px_16px] overflow-auto" data-name="Container">
      <Nav1 />
      <Link4 />
    </div>
  );
}

function Svg14() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[139px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 139 24">
        <g id="SVG">
          <path d="M14 13L12 10L10 13" id="Vector" stroke="var(--stroke-0, #292524)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p31ae7a00} id="Vector_2" stroke="var(--stroke-0, #292524)" strokeLinejoin="round" strokeWidth="2" />
          <path d="M16 22C16 22 13 16 10 13" id="Vector_3" stroke="var(--stroke-0, #292524)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M8 22C8 22 11 16 14 13" id="Vector_4" stroke="var(--stroke-0, #292524)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p1fb36d00} fill="var(--fill-0, #292524)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function LinkGoToHome1() {
  return (
    <div className="h-[48px] pointer-events-auto sticky top-0 w-[139px]" data-name="Link - Go to home">
      <Svg14 />
    </div>
  );
}

function Aside1() {
  return (
    <div className="absolute h-[1080px] left-[316px] right-[1316px] top-0" data-name="Aside">
      <Container18 />
      <div className="absolute bottom-0 h-[1056px] left-[20px] pointer-events-none top-[24px]">
        <LinkGoToHome1 />
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-[#44403b] border-2 border-[#292524] border-solid h-[24px] left-[877.19px] right-[24px] rounded-[8px] top-[16px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Geist_Mono:SemiBold',sans-serif] font-semibold h-[16px] justify-center leading-[0] left-[calc(50%+0.19px)] text-[#fafaf9] text-[12px] text-center top-1/2 uppercase w-[29.184px]">
        <p className="leading-[16px]">Save</p>
      </div>
    </div>
  );
}

function BackgroundHorizontalBorder() {
  return (
    <div className="absolute bg-[#f5f5f4] border-[#e7e5e4] border-b border-solid h-[57px] left-0 right-0 top-0" data-name="Background+HorizontalBorder">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Geist:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] left-[24px] right-[835.65px] text-[#292524] text-[16px] top-[28px]">
        <p className="leading-[24px]">Personal Info</p>
      </div>
      <Button2 />
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute h-[20px] left-[12px] overflow-auto right-[8.34px] top-[7px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Geist:Regular',sans-serif] font-normal h-[18px] justify-center leading-[0] left-0 text-[#292524] text-[14px] top-[10px] w-[41.746px]">
        <p className="leading-[20px]">Platon</p>
      </div>
    </div>
  );
}

function Input3() {
  return (
    <div className="absolute bg-white border border-[#e7e5e4] border-solid h-[36px] left-[24px] overflow-clip right-[660px] rounded-[8px] top-[48px]" data-name="Input">
      <Container19 />
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute h-[20px] left-[12px] overflow-auto right-[8.33px] top-[7px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Geist:Regular',sans-serif] font-normal h-[18px] justify-center leading-[0] left-0 text-[#292524] text-[14px] top-[10px] w-[9.369px]">
        <p className="leading-[20px]">S</p>
      </div>
    </div>
  );
}

function Input4() {
  return (
    <div className="absolute bg-white border border-[#e7e5e4] border-solid h-[36px] left-[333px] overflow-clip right-[351px] rounded-[8px] top-[48px]" data-name="Input">
      <Container20 />
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute h-[20px] left-[12px] overflow-auto right-[8.34px] top-[7px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Geist:Regular',sans-serif] font-normal h-[18px] justify-center leading-[0] left-0 text-[#a6a09b] text-[14px] top-[10px] w-[150.126px]">
        <p className="leading-[20px]">plat100916@gmail.com</p>
      </div>
    </div>
  );
}

function Input5() {
  return (
    <div className="absolute bg-[#f5f5f4] border border-[#e7e5e4] border-solid h-[36px] left-[641px] overflow-clip right-[43px] rounded-[8px] top-[48px]" data-name="Input">
      <Container21 />
    </div>
  );
}

function Input6() {
  return <div className="absolute bg-white border border-[#e7e5e4] border-solid h-[36px] left-[24px] right-[660px] rounded-[8px] top-[124px]" data-name="Input" />;
}

function Background2() {
  return (
    <div className="absolute bg-white h-[184px] left-0 right-0 top-[57px]" data-name="Background">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Geist:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] left-[24px] right-[852.8px] text-[#292524] text-[14px] top-[34px]">
        <p>
          <span className="leading-[20px]">First Name</span>
          <span className="leading-[20px] text-[#ff2056]">{` *`}</span>
        </p>
      </div>
      <Input3 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Geist:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] left-[332.66px] right-[544.91px] text-[#292524] text-[14px] top-[34px]">
        <p>
          <span className="leading-[20px]">Last Name</span>
          <span className="leading-[20px] text-[#ff2056]">{` *`}</span>
        </p>
      </div>
      <Input4 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Geist:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] left-[641.33px] right-[270.94px] text-[#79716b] text-[14px] top-[34px]">
        <p>
          <span className="leading-[20px]">Email</span>
          <span className="leading-[20px] text-[#ff2056]">{` *`}</span>
        </p>
      </div>
      <Input5 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Geist:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] left-[24px] right-[833.65px] text-[#292524] text-[14px] top-[110px]">
        <p className="leading-[20px]">Должность</p>
      </div>
      <Input6 />
    </div>
  );
}

function Form2() {
  return (
    <div className="absolute border border-[#e7e5e4] border-solid h-[243px] left-0 overflow-clip right-0 rounded-[12px] top-[80px]" data-name="Form">
      <BackgroundHorizontalBorder />
      <Background2 />
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute bg-[#44403b] border-2 border-[#292524] border-solid h-[24px] left-[877.19px] right-[24px] rounded-[8px] top-[16px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Geist_Mono:SemiBold',sans-serif] font-semibold h-[16px] justify-center leading-[0] left-[calc(50%+0.19px)] text-[#fafaf9] text-[12px] text-center top-1/2 uppercase w-[29.184px]">
        <p className="leading-[16px]">Save</p>
      </div>
    </div>
  );
}

function BackgroundHorizontalBorder1() {
  return (
    <div className="absolute bg-[#f5f5f4] border-[#e7e5e4] border-b border-solid h-[57px] left-0 right-0 top-0" data-name="Background+HorizontalBorder">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Geist:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] left-[24px] right-[838.43px] text-[#292524] text-[16px] top-[28px]">
        <p className="leading-[24px]">Account Info</p>
      </div>
      <Button3 />
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute h-[20px] left-[12px] overflow-auto right-[32.34px] top-[7px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Geist:Regular',sans-serif] font-normal h-[18px] justify-center leading-[0] left-0 text-[#a6a09b] text-[14px] top-[10px] w-[194.481px]">
        <p className="leading-[20px]">69dfe4fbb68c5830cb068610</p>
      </div>
    </div>
  );
}

function Svg15() {
  return (
    <div className="absolute h-[16px] left-[266px] overflow-clip right-[6px] top-[8px]" data-name="SVG">
      <div className="absolute inset-[37.5%_16.67%_8.33%_16.67%]" data-name="Vector">
        <div className="absolute inset-[-3.46%_-2.81%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.2667 9.26668">
            <path d={svgPaths.p3d922a00} id="Vector" stroke="var(--stroke-0, #A6A09B)" strokeWidth="0.6" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%_31.25%_62.5%_31.25%]" data-name="Vector">
        <div className="absolute inset-[-6.43%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.6 5.26668">
            <path d={svgPaths.p35071380} id="Vector" stroke="var(--stroke-0, #A6A09B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.6" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[64.54%_33.33%_35.42%_66.67%]" data-name="Vector">
        <div className="absolute inset-[-0.4px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.8 0.80668">
            <path d="M0.4 0.4V0.40668" id="Vector" stroke="var(--stroke-0, #A6A09B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.8" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[35.42%] left-1/2 right-1/2 top-[64.54%]" data-name="Vector">
        <div className="absolute inset-[-0.4px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.8 0.80668">
            <path d="M0.4 0.4V0.40668" id="Vector" stroke="var(--stroke-0, #A6A09B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.8" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[64.54%_66.67%_35.42%_33.33%]" data-name="Vector">
        <div className="absolute inset-[-0.4px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.8 0.80668">
            <path d="M0.4 0.4V0.40668" id="Vector" stroke="var(--stroke-0, #A6A09B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.8" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Input7() {
  return (
    <div className="absolute bg-[#f5f5f4] border border-[#e7e5e4] border-solid h-[36px] left-[24px] overflow-clip right-[660px] rounded-[8px] top-[48px]" data-name="Input">
      <Container22 />
      <Svg15 />
    </div>
  );
}

function Background3() {
  return (
    <div className="absolute bg-white h-[108px] left-0 right-0 top-[57px]" data-name="Background">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Geist:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] left-[24px] right-[873.56px] text-[#79716b] text-[14px] top-[34px]">
        <p className="leading-[20px]">User ID</p>
      </div>
      <Input7 />
    </div>
  );
}

function Form3() {
  return (
    <div className="absolute border border-[#e7e5e4] border-solid h-[167px] left-0 overflow-clip right-0 rounded-[12px] top-[347px]" data-name="Form">
      <BackgroundHorizontalBorder1 />
      <Background3 />
    </div>
  );
}

function Main1() {
  return (
    <div className="absolute h-[573px] left-[620px] right-[332px] top-[24px]" data-name="Main">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold h-[28px] justify-center leading-[0] left-0 right-[810.62px] text-[#292524] text-[18px] top-[14px]">
        <p className="leading-[28px]">Профиль</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Geist:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] left-0 right-[272.76px] text-[#79716b] text-[14px] top-[46px]">
        <p className="leading-[20px]">Make sure your account details are accurate to keep it compliant with anti-spam laws and in good standing.</p>
      </div>
      <Form2 />
      <Form3 />
    </div>
  );
}

function Background1() {
  return (
    <div className="absolute bg-[#fafaf9] h-[1080px] left-0 right-[-8px] top-0" data-name="Background">
      <Aside1 />
      <Main1 />
    </div>
  );
}

function Component1920WDefault1() {
  return (
    <div className="absolute bg-white h-[1080px] left-[99px] overflow-x-clip overflow-y-auto top-[99px] w-[1920px]" data-name="1920w default">
      <Background1 />
    </div>
  );
}

function Profile() {
  return (
    <div className="absolute bg-[#444] border border-[rgba(255,255,255,0.1)] border-solid h-[1280px] left-[4624px] overflow-clip rounded-[2px] top-0 w-[2120px]" data-name="Profile">
      <Component1920WDefault1 />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="relative size-full">
      <Login />
      <MyForms />
      <Profile />
    </div>
  );
}