import svgPaths from "./svg-xpcb84cifr";

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

export default function Form() {
  return (
    <div className="relative size-full" data-name="Form">
      <BackgroundBorder />
      <BackgroundBorder1 />
    </div>
  );
}