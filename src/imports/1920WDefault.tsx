import svgPaths from "./svg-kae9lsjw89";
import { imgVector } from "./svg-kx2sx";

function Nav() {
  return <div className="absolute h-[192px] left-0 right-0 top-0" data-name="Nav" />;
}

function Svg() {
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
      <Svg />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Geist:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] left-[38px] text-[#79716b] text-[14px] top-1/2 w-[73.643px]">
        <p className="leading-[20px]">Настройки</p>
      </div>
    </div>
  );
}

function Svg1() {
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
    <div className="absolute bg-white border border-[#f5f5f4] border-solid h-[32px] left-[16px] right-0 rounded-[8px] top-[36px]" data-name="Мои заявки">
      <Svg1 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold h-[20px] justify-center leading-[0] left-[38px] text-[#292524] text-[14px] top-1/2 w-[81.986px]">
        <p className="leading-[20px]">Заявки</p>
      </div>
    </div>
  );
}

function Svg2() {
  return (
    <div className="-translate-y-1/2 absolute left-[8px] size-[18px] top-1/2" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_47_151)" id="SVG">
          <path d={svgPaths.p36f11d00} id="Vector" stroke="var(--stroke-0, #79716B)" strokeWidth="1.125" />
          <path d={svgPaths.p10873840} id="Vector_2" stroke="var(--stroke-0, #79716B)" strokeWidth="1.125" />
          <path d={svgPaths.p2ee41140} id="Vector_3" stroke="var(--stroke-0, #79716B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
        </g>
        <defs>
          <clipPath id="clip0_47_151">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute border border-[rgba(0,0,0,0)] border-solid h-[32px] left-[16px] opacity-50 right-0 rounded-[8px] top-0" data-name="Button">
      <Svg2 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Geist:Medium',sans-serif] font-medium h-[21px] justify-center leading-[0] left-[68.86px] text-[#79716b] text-[14px] text-center top-1/2 w-[61.729px]">
        <p className="leading-[21px]">Профиль</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute inset-[72px_16px_24px_16px] overflow-auto" data-name="Container">
      <Nav />
      <Link />
      <Component />
      <Button />
    </div>
  );
}

function Svg3() {
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
      <Svg3 />
    </div>
  );
}

function Aside() {
  return (
    <div className="absolute h-[1080px] left-[324px] right-[1300px] top-0" data-name="Aside">
      <Container />
      <div className="absolute bottom-0 h-[1056px] left-[20px] pointer-events-none top-[24px]">
        <LinkGoToHome />
      </div>
    </div>
  );
}

function Svg4() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-38px)] size-[18px] top-1/2" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="SVG">
          <path d="M9 3V15M15 9H3" id="Vector" stroke="var(--stroke-0, #FAFAF9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Group4() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-[calc(50%-1.95px)] top-1/2">
      <Svg4 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Geist_Mono:SemiBold',sans-serif] font-semibold h-[20px] justify-center leading-[0] left-[calc(50%+11.05px)] text-[#fafaf9] text-[14px] text-center top-1/2 tracking-[0.7px] uppercase w-[64.096px]">
        <p className="leading-[20px]">Создать</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-[#44403b] border-2 border-[#292524] border-solid h-[36px] left-[848px] right-0 rounded-[12px] top-[80px]" data-name="Button">
      <Group4 />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute h-[18px] left-[12px] overflow-clip right-[32px] top-[8px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Geist:Regular',sans-serif] font-normal h-[18px] justify-center leading-[0] left-0 text-[#a6a09b] text-[14px] top-[9px] w-[41.596px]">
        <p className="leading-[normal]">Поиск</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="absolute bg-white border border-[#e7e5e4] border-solid h-[36px] left-0 overflow-clip right-0 rounded-[8px] top-0" data-name="Input">
      <Container1 />
    </div>
  );
}

function Svg5() {
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
      <Svg5 />
    </div>
  );
}

function Form() {
  return (
    <div className="absolute h-[36px] left-0 right-[647px] top-[80px]" data-name="Form">
      <Input />
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
      <div className="-translate-y-1/2 absolute flex flex-col h-[16px] justify-center left-[418px] right-[496.47px] top-1/2">
        <p className="leading-[16px]">Статус</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col h-[16px] justify-center left-[653px] right-[254.24px] top-1/2">
        <p className="leading-[16px]">Создана</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col h-[16px] justify-center left-[823px] right-[66px] top-1/2">
        <p className="leading-[16px]">Выполнена</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="-translate-y-1/2 absolute h-[20px] left-0 overflow-clip right-[24px] top-1/2" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Geist:Medium',sans-serif] font-medium h-[18px] justify-center leading-[0] left-0 text-[#292524] text-[14px] top-[10px] w-[108.277px]">
        <p className="leading-[20px]">Password Reset</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="-translate-y-1/2 absolute h-[40px] left-0 overflow-clip top-1/2 w-[452px]" data-name="Container">
      <Container3 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[8.33%]" data-name="Group">
      <div className="absolute inset-[8.33%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1px_-1px] mask-size-[12px_12px]" style={{ maskImage: `url('${imgVector}')` }} data-name="Vector">
        <div className="absolute inset-[-7.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5 11.5">
            <path d={svgPaths.p1ba1bc00} fill="var(--fill-0, #7C86FF)" id="Vector" stroke="var(--stroke-0, #4F39F6)" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group />
    </div>
  );
}

function Svg6() {
  return (
    <div className="-translate-y-1/2 absolute h-[12px] left-0 overflow-clip right-[128px] top-1/2" data-name="SVG">
      <ClipPathGroup />
    </div>
  );
}

function Group2() {
  return (
    <div className="-translate-y-1/2 absolute contents left-0 right-px top-1/2">
      <Svg6 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Geist_Mono:SemiBold',sans-serif] font-semibold h-[16px] justify-center leading-[0] left-[20px] right-px text-[#292524] text-[12px] top-1/2 tracking-[0.48px] uppercase">
        <p className="leading-[16px]">На рассмотрении</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="-translate-y-1/2 absolute h-[16px] left-[402px] overflow-clip top-1/2 w-[140px]" data-name="Container">
      <Group2 />
    </div>
  );
}

function Container5() {
  return (
    <div className="-translate-y-1/2 absolute h-[16px] left-[637px] overflow-clip top-1/2 w-[140px]" data-name="Container">
      <div className="absolute bottom-0 flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[#292524] text-[12px] top-0 w-[69.416px]">
        <p className="leading-[16px]">15.04.2026</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="-translate-y-1/2 absolute h-[16px] left-[807px] overflow-clip top-1/2 w-[109px]" data-name="Container">
      <div className="absolute bottom-0 flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[#292524] text-[12px] top-0 w-[69.416px]">
        <p className="leading-[16px]">—</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="absolute h-[40px] left-[16px] right-[14px] top-[65px]" data-name="Link">
      <Container2 />
      <Container4 />
      <Container5 />
      <Container6 />
    </div>
  );
}

function Container8() {
  return (
    <div className="-translate-y-1/2 absolute h-[20px] left-0 overflow-clip right-[24px] top-1/2" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Geist:Medium',sans-serif] font-medium h-[18px] justify-center leading-[0] left-0 text-[#292524] text-[14px] top-[10px] w-[137.326px]">
        <p className="leading-[20px]">Account Verification</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="-translate-y-1/2 absolute h-[40px] left-0 overflow-clip top-1/2 w-[452px]" data-name="Container">
      <Container8 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[8.33%]" data-name="Group">
      <div className="absolute inset-[8.33%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1px_-1px] mask-size-[12px_12px]" style={{ maskImage: `url('${imgVector}')` }} data-name="Vector">
        <div className="absolute inset-[-7.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5 11.5">
            <path d={svgPaths.p1ba1bc00} fill="var(--fill-0, #9AE600)" id="Vector" stroke="var(--stroke-0, #5EA500)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ClipPathGroup1() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group3 />
    </div>
  );
}

function Svg7() {
  return (
    <div className="-translate-y-1/2 absolute h-[12px] left-0 overflow-clip right-[128px] top-1/2" data-name="SVG">
      <ClipPathGroup1 />
    </div>
  );
}

function Group1() {
  return (
    <div className="-translate-y-1/2 absolute contents left-0 right-[33px] top-1/2">
      <Svg7 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Geist_Mono:SemiBold',sans-serif] font-semibold h-[16px] justify-center leading-[0] left-[20px] right-[33px] text-[#292524] text-[12px] top-1/2 tracking-[0.48px] uppercase">
        <p className="leading-[16px]">Согласовано</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="-translate-y-1/2 absolute h-[16px] left-[402px] overflow-clip top-1/2 w-[140px]" data-name="Container">
      <Group1 />
    </div>
  );
}

function Container10() {
  return (
    <div className="-translate-y-1/2 absolute h-[16px] left-[637px] overflow-clip top-1/2 w-[140px]" data-name="Container">
      <div className="absolute bottom-0 flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[#292524] text-[12px] top-0 w-[69.416px]">
        <p className="leading-[16px]">16.04.2026</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="-translate-y-1/2 absolute h-[16px] left-[807px] overflow-clip top-1/2 w-[94px]" data-name="Container">
      <div className="absolute bottom-0 flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[#292524] text-[12px] top-0 w-[69.416px]">
        <p className="leading-[16px]">17.04.2026</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="absolute h-[40px] left-[16px] right-[14px] top-[137px]" data-name="Link">
      <Container7 />
      <Container9 />
      <Container10 />
      <Container11 />
    </div>
  );
}

function Container13() {
  return (
    <div className="-translate-y-1/2 absolute h-[20px] left-0 overflow-clip right-[24px] top-1/2" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Geist:Medium',sans-serif] font-medium h-[18px] justify-center leading-[0] left-0 text-[#292524] text-[14px] top-[10px] w-[102.768px]">
        <p className="leading-[20px]">Welcome Email</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="-translate-y-1/2 absolute h-[40px] left-0 overflow-clip top-1/2 w-[452px]" data-name="Container">
      <Container13 />
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents inset-[8.33%]" data-name="Group">
      <div className="absolute inset-[8.33%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1px_-1px] mask-size-[12px_12px]" style={{ maskImage: `url('${imgVector}')` }} data-name="Vector">
        <div className="absolute inset-[-7.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5 11.5">
            <path d={svgPaths.p1ba1bc00} fill="var(--fill-0, #FF637E)" id="Vector" stroke="var(--stroke-0, #EC003F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ClipPathGroup2() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group6 />
    </div>
  );
}

function Svg8() {
  return (
    <div className="-translate-y-1/2 absolute h-[12px] left-0 overflow-clip right-[128px] top-1/2" data-name="SVG">
      <ClipPathGroup2 />
    </div>
  );
}

function Group5() {
  return (
    <div className="-translate-y-1/2 absolute contents left-0 right-[27.49px] top-1/2">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Geist_Mono:SemiBold',sans-serif] font-semibold h-[16px] justify-center leading-[0] left-[20px] right-[27.49px] text-[#292524] text-[12px] top-1/2 tracking-[0.48px] uppercase">
        <p className="leading-[16px]">отклонено</p>
      </div>
      <Svg8 />
    </div>
  );
}

function Container14() {
  return (
    <div className="-translate-y-1/2 absolute h-[16px] left-[402px] overflow-clip top-1/2 w-[140px]" data-name="Container">
      <Group5 />
    </div>
  );
}

function Container15() {
  return (
    <div className="-translate-y-1/2 absolute h-[16px] left-[637px] overflow-clip top-1/2 w-[140px]" data-name="Container">
      <div className="absolute bottom-0 flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[#292524] text-[12px] top-0 w-[69.416px]">
        <p className="leading-[16px]">17.04.2026</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="-translate-y-1/2 absolute h-[16px] left-[807px] overflow-clip top-1/2 w-[150px]" data-name="Container">
      <div className="absolute bottom-0 flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[#292524] text-[12px] top-0 w-[69.416px]">
        <p className="leading-[16px]">18.04.2026</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="absolute h-[40px] left-[16px] right-[66px] top-[209px]" data-name="Link">
      <Container12 />
      <Container14 />
      <Container15 />
      <Container16 />
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="absolute bg-white border border-[#e7e5e4] border-solid h-[267px] left-0 overflow-clip right-0 rounded-[16px] top-[210px]" data-name="Background+Border">
      <div className="absolute h-[266px] inset-[0_0_-1px_0] pointer-events-none">
        <ParagraphBackgroundHorizontalBorder />
      </div>
      <Link1 />
      <Link2 />
      <Link3 />
    </div>
  );
}

function Group7() {
  return (
    <div className="-translate-y-1/2 absolute contents left-[12px] right-[60px] top-[calc(50%-11.5px)]">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Geist_Mono:SemiBold',sans-serif] font-semibold h-[16px] justify-center leading-[0] left-[12px] right-[61px] text-[#292524] text-[12px] top-[calc(50%-11.5px)] tracking-[0.48px] uppercase">
        <p className="leading-[16px]">все заявки</p>
      </div>
    </div>
  );
}

function BackgroundVerticalBorder() {
  return (
    <div className="absolute bg-[#f5f5f4] border-[#e7e5e4] border-r border-solid inset-[-1px_480px_0_-1px]" data-name="Background+VerticalBorder">
      <Group7 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold h-[20px] justify-center leading-[0] left-[12px] right-[135.68px] text-[#292524] text-[16px] top-[calc(50%+11.5px)]">
        <p className="leading-[20px]">3</p>
      </div>
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents inset-[8.33%]" data-name="Group">
      <div className="absolute inset-[8.33%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1px_-1px] mask-size-[12px_12px]" style={{ maskImage: `url('${imgVector}')` }} data-name="Vector">
        <div className="absolute inset-[-7.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5 11.5">
            <path d={svgPaths.p1ba1bc00} fill="var(--fill-0, #9AE600)" id="Vector" stroke="var(--stroke-0, #5EA500)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ClipPathGroup3() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group9 />
    </div>
  );
}

function Svg9() {
  return (
    <div className="-translate-y-1/2 absolute h-[12px] left-[12px] overflow-clip right-[136px] top-[calc(50%-11.5px)]" data-name="SVG">
      <ClipPathGroup3 />
    </div>
  );
}

function Group8() {
  return (
    <div className="-translate-y-1/2 absolute contents left-[12px] right-[40px] top-[calc(50%-11.5px)]">
      <Svg9 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Geist_Mono:SemiBold',sans-serif] font-semibold h-[16px] justify-center leading-[0] left-[32px] right-[41px] text-[#292524] text-[12px] top-[calc(50%-11.5px)] tracking-[0.48px] uppercase">
        <p className="leading-[16px]">Согласовано</p>
      </div>
    </div>
  );
}

function BackgroundVerticalBorder1() {
  return (
    <div className="absolute bg-white border-[#e7e5e4] border-r border-solid inset-[0_159px_-1px_320px]" data-name="Background+VerticalBorder">
      <Group8 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold h-[20px] justify-center leading-[0] left-[12px] right-[135.68px] text-[#292524] text-[16px] top-[calc(50%+11.5px)]">
        <p className="leading-[20px]">1</p>
      </div>
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute contents inset-[8.33%]" data-name="Group">
      <div className="absolute inset-[8.33%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1px_-1px] mask-size-[12px_12px]" style={{ maskImage: `url('${imgVector}')` }} data-name="Vector">
        <div className="absolute inset-[-7.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5 11.5">
            <path d={svgPaths.p1ba1bc00} fill="var(--fill-0, #FF637E)" id="Vector" stroke="var(--stroke-0, #EC003F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ClipPathGroup4() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group11 />
    </div>
  );
}

function Svg10() {
  return (
    <div className="-translate-y-1/2 absolute h-[12px] left-[12px] overflow-clip right-[136px] top-[calc(50%-11.5px)]" data-name="SVG">
      <ClipPathGroup4 />
    </div>
  );
}

function Group10() {
  return (
    <div className="-translate-y-1/2 absolute contents left-[12px] right-[35.49px] top-[calc(50%-11.5px)]">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Geist_Mono:SemiBold',sans-serif] font-semibold h-[16px] justify-center leading-[0] left-[32px] right-[35.49px] text-[#292524] text-[12px] top-[calc(50%-11.5px)] tracking-[0.48px] uppercase">
        <p className="leading-[16px]">отклонено</p>
      </div>
      <Svg10 />
    </div>
  );
}

function Background() {
  return (
    <div className="absolute bg-white inset-[0_-1px_-1px_480px]" data-name="Background">
      <Group10 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold h-[20px] justify-center leading-[0] left-[12px] right-[136.68px] text-[#292524] text-[16px] top-[calc(50%+11.5px)]">
        <p className="leading-[20px]">1</p>
      </div>
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute contents inset-[8.33%]" data-name="Group">
      <div className="absolute inset-[8.33%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1px_-1px] mask-size-[12px_12px]" style={{ maskImage: `url('${imgVector}')` }} data-name="Vector">
        <div className="absolute inset-[-7.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5 11.5">
            <path d={svgPaths.p1ba1bc00} fill="var(--fill-0, #7C86FF)" id="Vector" stroke="var(--stroke-0, #4F39F6)" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ClipPathGroup5() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group13 />
    </div>
  );
}

function Svg11() {
  return (
    <div className="-translate-y-1/2 absolute h-[12px] left-[12px] overflow-clip right-[136px] top-[calc(50%-11.5px)]" data-name="SVG">
      <ClipPathGroup5 />
    </div>
  );
}

function Group12() {
  return (
    <div className="-translate-y-1/2 absolute contents left-[12px] right-[8px] top-[calc(50%-11.5px)]">
      <Svg11 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Geist_Mono:SemiBold',sans-serif] font-semibold h-[16px] justify-center leading-[0] left-[32px] right-[9px] text-[#292524] text-[12px] top-[calc(50%-11.5px)] tracking-[0.48px] uppercase">
        <p className="leading-[16px]">На рассмотрении</p>
      </div>
    </div>
  );
}

function BackgroundVerticalBorder2() {
  return (
    <div className="absolute bg-white border-[#e7e5e4] border-r border-solid inset-[0_320px_-1px_159px]" data-name="Background+VerticalBorder">
      <Group12 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold h-[20px] justify-center leading-[0] left-[12px] right-[135.68px] text-[#292524] text-[16px] top-[calc(50%+11.5px)]">
        <p className="leading-[20px]">1</p>
      </div>
    </div>
  );
}

function Statuses() {
  return (
    <div className="absolute bg-white border border-[#e7e5e4] border-solid bottom-[856px] left-0 overflow-clip rounded-[10px] top-[138px] w-[641px]" data-name="Statuses">
      <BackgroundVerticalBorder />
      <BackgroundVerticalBorder1 />
      <Background />
      <BackgroundVerticalBorder2 />
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
      <Form />
      <BackgroundBorder />
      <Statuses />
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

export default function Component1920WDefault() {
  return (
    <div className="relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(250, 250, 249) 0%, rgb(250, 250, 249) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="1920w default">
      <Content />
    </div>
  );
}