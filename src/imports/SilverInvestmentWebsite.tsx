import svgPaths from "./svg-05pmrxr9mm";
import imgImageWithFallback from "figma:asset/ed2c2e369787a17f5a3928c340210723406448ea.png";
import imgImageWithFallback1 from "figma:asset/82e9f6aa5997c6a44b9f61b82594220a2e878b95.png";
import imgImageAtticaSilver from "figma:asset/c7de477d5ab92371dc03a4fb9b41f7c77638ce4b.png";

function Source() {
  return <div className="h-0 shrink-0 w-full" data-name="Source" />;
}

function Video() {
  return (
    <div className="absolute h-[808.5px] left-[-23.47px] opacity-50 top-[-19.25px] w-[985.95px]" data-name="Video">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pl-[23.475px] pr-[962.475px] pt-[8279.25px] relative size-full">
          <Source />
        </div>
      </div>
    </div>
  );
}

function Container() {
  return <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0.7)] h-[770px] left-0 to-[rgba(0,0,0,0.7)] top-0 via-1/2 via-[rgba(0,0,0,0.4)] w-[939px]" data-name="Container" />;
}

function Container1() {
  return (
    <div className="absolute h-[770px] left-0 top-0 w-[939px]" data-name="Container">
      {[...Array(3).keys()].map((_, i) => (
        <Video key={i} />
      ))}
      <Container />
    </div>
  );
}

function Text() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[51.969px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Light',sans-serif] font-light leading-[13.5px] left-0 not-italic text-[9px] text-[rgba(255,255,255,0.4)] top-[0.5px] tracking-[2.867px] uppercase">Scroll</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.666667" />
        </g>
      </svg>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[7.996px] h-[37.5px] items-center left-[443.52px] pb-[0.004px] top-[684.5px] w-[51.969px]" data-name="Container">
      <Text />
      <Icon />
    </div>
  );
}

function Container3() {
  return <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] h-[770px] left-[938px] to-[rgba(0,0,0,0)] top-0 via-1/2 via-[rgba(255,255,255,0.2)] w-px" data-name="Container" />;
}

function Container4() {
  return <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] h-[770px] left-0 to-[rgba(0,0,0,0)] top-0 via-1/2 via-[rgba(255,255,255,0.2)] w-px" data-name="Container" />;
}

function Paragraph() {
  return (
    <div className="absolute h-[15px] left-0 top-0 w-[84.633px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Light',sans-serif] font-light leading-[15px] left-[42px] not-italic text-[10px] text-[rgba(255,255,255,0.7)] text-center top-[0.5px] tracking-[4.1172px] translate-x-[-50%] uppercase">Est. 2024</p>
    </div>
  );
}

function Container5() {
  return <div className="absolute bg-gradient-to-r from-[rgba(0,0,0,0)] h-px left-[2.31px] to-[rgba(0,0,0,0)] top-[19px] via-1/2 via-[rgba(255,255,255,0.3)] w-[80px]" data-name="Container" />;
}

function Container6() {
  return (
    <div className="absolute h-[20px] left-[277.68px] top-[7px] w-[84.633px]" data-name="Container">
      <Paragraph />
      <Container5 />
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[91.195px] left-[32px] top-[67px] w-[576px]" data-name="Heading 1">
      <p className="absolute css-ew64yg font-['Inter:Extra_Light',sans-serif] font-extralight leading-[91.2px] left-[288.03px] not-italic text-[96px] text-center text-white top-[0.5px] tracking-[-1.92px] translate-x-[-50%]">PURE SILVER</p>
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute content-stretch flex h-[36px] items-start left-[32px] top-[182.2px] w-[576px]" data-name="Heading 2">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Extra_Light',sans-serif] font-extralight leading-[36px] min-h-px min-w-px not-italic relative text-[30px] text-[rgba(255,255,255,0.8)] text-center tracking-[4.8955px] uppercase">Investment Grade Bars</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="flex-[1_0_0] h-[16px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Light',sans-serif] font-light leading-[16px] left-[103px] not-italic text-[12px] text-center text-white top-px tracking-[3.6px] translate-x-[-50%] uppercase">Discover Collection</p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M4.5 9L7.5 6L4.5 3" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
        </g>
      </svg>
    </div>
  );
}

function Link() {
  return (
    <div className="h-[25px] relative shrink-0 w-[229.828px]" data-name="Link">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.3)] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center pb-px relative size-full">
        <Text1 />
        <Icon1 />
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[576px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-4hzbpn font-['Inter:Light',sans-serif] font-light leading-[19.5px] left-[288.1px] not-italic text-[12px] text-[rgba(255,255,255,0.5)] text-center top-[0.5px] tracking-[2.4px] translate-x-[-50%] uppercase w-[499px]">From ₹10 to 1kg — Accessible luxury for the discerning investor</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[88px] items-center left-[32px] top-[282.2px] w-[576px]" data-name="Container">
      <Link />
      <Paragraph1 />
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute h-[370.195px] left-[149.5px] top-[199.9px] w-[640px]" data-name="Container">
      <Container6 />
      <Heading />
      <Heading1 />
      <Container7 />
    </div>
  );
}

function Hero() {
  return (
    <div className="bg-black h-[770px] overflow-clip relative shrink-0 w-full" data-name="Hero">
      <Container1 />
      <Container2 />
      <Container3 />
      <Container4 />
      <Container8 />
    </div>
  );
}

function Container9() {
  return <div className="absolute h-[1519.945px] left-0 opacity-2 top-0 w-[939px]" data-name="Container" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 939 1519.9\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(0 -89.33 -89.33 0 469.5 759.97)\\\'><stop stop-color=\\\'rgba(0,0,0,1)\\\' offset=\\\'0.001065\\\'/><stop stop-color=\\\'rgba(0,0,0,0)\\\' offset=\\\'0\\\'/></radialGradient></defs></svg>')" }} />;
}

function Text2() {
  return (
    <div className="absolute content-stretch flex h-[11.5px] items-start left-[346.15px] top-[8.5px] w-[166.695px]" data-name="Text">
      <p className="css-ew64yg font-['Inter:Light',sans-serif] font-light leading-[15px] not-italic relative shrink-0 text-[#a1a1a1] text-[10px] text-center tracking-[4.1172px] uppercase">Attica Difference</p>
    </div>
  );
}

function Heading4() {
  return (
    <div className="absolute h-[79.195px] left-0 top-[48px] w-[859px]" data-name="Heading 2">
      <p className="absolute css-ew64yg font-['Inter:Extra_Light',sans-serif] font-extralight leading-[79.2px] left-[429.78px] not-italic text-[#171717] text-[72px] text-center top-px tracking-[-1.677px] translate-x-[-50%]">Exceptional by Design</p>
    </div>
  );
}

function Container10() {
  return <div className="absolute bg-gradient-to-r from-[rgba(0,0,0,0)] h-px left-[389.5px] to-[rgba(0,0,0,0)] top-[159.2px] via-1/2 via-[#d4d4d4] w-[80px]" data-name="Container" />;
}

function Paragraph2() {
  return (
    <div className="absolute h-[29.25px] left-[93.5px] top-[192.2px] w-[672px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Light',sans-serif] font-light leading-[29.25px] left-[336.13px] not-italic text-[#737373] text-[18px] text-center top-[0.5px] tracking-[0.0105px] translate-x-[-50%]">Where tradition meets innovation in precious metal investment</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[221.445px] relative shrink-0 w-full" data-name="Container">
      <Text2 />
      <Heading4 />
      <Container10 />
      <Paragraph2 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-[36px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%_41.67%_41.67%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-3.13%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.125 19.125">
            <path d={svgPaths.p1494eb00} id="Vector" stroke="var(--stroke-0, #171717)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[43.21%_8.36%_8.37%_43.08%]" data-name="Vector">
        <div className="absolute inset-[-3.23%_-3.22%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.6062 18.5582">
            <path d={svgPaths.p72aed80} id="Vector" stroke="var(--stroke-0, #171717)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[58.33%] left-[29.17%] right-[66.67%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-9.38%_-37.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.625 7.125">
            <path d="M0.5625 0.5625H2.0625V6.5625" id="Vector" stroke="var(--stroke-0, #171717)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[57.83%_27.46%_27.46%_60.79%]" data-name="Vector">
        <div className="absolute inset-[-10.62%_-13.3%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.355 6.42">
            <path d={svgPaths.p6ad59c0} id="Vector" stroke="var(--stroke-0, #171717)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[143.75px] pb-px pt-[33px] px-[33px] size-[102px] top-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none" />
      <Icon2 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="absolute h-[28px] left-0 top-[142px] w-[389.5px]" data-name="Heading 3">
      <p className="absolute css-ew64yg font-['Inter:Light',sans-serif] font-light leading-[28px] left-[194.83px] not-italic text-[#171717] text-[20px] text-center top-0 tracking-[0.5508px] translate-x-[-50%]">Micro-Investment</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute h-[45.5px] left-0 top-[190px] w-[389.5px]" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Inter:Light',sans-serif] font-light leading-[22.75px] left-[194.81px] not-italic text-[#737373] text-[14px] text-center top-px tracking-[0.1996px] translate-x-[-50%] w-[311px]">Begin your journey with as little as ₹10. Luxury investment, accessible to all.</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="col-[1] css-3foyfs relative row-[1] self-stretch shrink-0" data-name="Container">
      <Container12 />
      <Heading2 />
      <Paragraph3 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="h-[36px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[29.17%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-3.75%_-1.88%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31.125 16.125">
            <path d={svgPaths.p368f6780} id="Vector" stroke="var(--stroke-0, #171717)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[29.17%_8.33%_45.83%_66.67%]" data-name="Vector">
        <div className="absolute inset-[-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.125 10.125">
            <path d="M0.5625 0.5625H9.5625V9.5625" id="Vector" stroke="var(--stroke-0, #171717)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[143.75px] pb-px pt-[33px] px-[33px] size-[102px] top-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none" />
      <Icon3 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="absolute h-[28px] left-0 top-[142px] w-[389.5px]" data-name="Heading 3">
      <p className="absolute css-ew64yg font-['Inter:Light',sans-serif] font-light leading-[28px] left-[194.78px] not-italic text-[#171717] text-[20px] text-center top-0 tracking-[0.5508px] translate-x-[-50%]">Fractional Ownership</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute h-[45.5px] left-0 top-[190px] w-[389.5px]" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Inter:Light',sans-serif] font-light leading-[22.75px] left-[194.87px] not-italic text-[#737373] text-[14px] text-center top-px tracking-[0.1996px] translate-x-[-50%] w-[345px]">Accumulate pure silver digitally. Investment without boundaries.</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="col-[2] css-3foyfs relative row-[1] self-stretch shrink-0" data-name="Container">
      <Container14 />
      <Heading5 />
      <Paragraph4 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="h-[36px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.34%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-1.88%_-2.08%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.125 31.1188">
            <path d={svgPaths.p29807600} id="Vector" stroke="var(--stroke-0, #171717)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[8.33%] left-1/2 right-1/2 top-1/2" data-name="Vector">
        <div className="absolute inset-[-3.75%_-0.56px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.125 16.125">
            <path d="M0.5625 15.5625V0.5625" id="Vector" stroke="var(--stroke-0, #171717)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/2 left-[13.71%] right-[13.71%] top-[29.17%]" data-name="Vector">
        <div className="absolute inset-[-7.5%_-2.15%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.2552 8.6251">
            <path d={svgPaths.p28514b00} id="Vector" stroke="var(--stroke-0, #171717)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[17.79%_31.25%_60.75%_31.25%]" data-name="Vector">
        <div className="absolute inset-[-7.28%_-4.17%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6252 8.85019">
            <path d={svgPaths.p1f0aa100} id="Vector" stroke="var(--stroke-0, #171717)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[143.75px] pb-px pt-[33px] px-[33px] size-[102px] top-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none" />
      <Icon4 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="absolute h-[28px] left-0 top-[142px] w-[389.5px]" data-name="Heading 3">
      <p className="absolute css-ew64yg font-['Inter:Light',sans-serif] font-light leading-[28px] left-[194.97px] not-italic text-[#171717] text-[20px] text-center top-0 tracking-[0.5508px] translate-x-[-50%]">Certified Bars</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="absolute h-[45.5px] left-0 top-[190px] w-[389.5px]" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Inter:Light',sans-serif] font-light leading-[22.75px] left-[195.12px] not-italic text-[#737373] text-[14px] text-center top-px tracking-[0.1996px] translate-x-[-50%] w-[368px]">99.9% pure silver bars. Certified quality, delivered with precision.</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="col-[1] css-3foyfs relative row-[2] self-stretch shrink-0" data-name="Container">
      <Container16 />
      <Heading6 />
      <Paragraph5 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="h-[36px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/4 left-[8.33%] right-[41.67%] top-[16.67%]" data-name="Vector">
        <div className="absolute inset-[-2.68%_-3.13%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.125 22.125">
            <path d={svgPaths.p283e5300} id="Vector" stroke="var(--stroke-0, #171717)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-3/4" data-name="Vector">
        <div className="absolute inset-[-0.56px_-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.125 1.125">
            <path d="M9.5625 0.5625H0.5625" id="Vector" stroke="var(--stroke-0, #171717)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/4 left-[58.33%] right-[8.33%] top-[33.33%]" data-name="Vector">
        <div className="absolute inset-[-3.75%_-4.69%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.125 16.125">
            <path d={svgPaths.pe39b980} id="Vector" stroke="var(--stroke-0, #171717)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[66.67%_20.83%_16.67%_62.5%]" data-name="Vector">
        <div className="absolute inset-[-9.38%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.125 7.125">
            <path d={svgPaths.p3276c800} id="Vector" stroke="var(--stroke-0, #171717)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[66.67%_62.5%_16.67%_20.83%]" data-name="Vector">
        <div className="absolute inset-[-9.38%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.125 7.125">
            <path d={svgPaths.p3276c800} id="Vector" stroke="var(--stroke-0, #171717)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[143.75px] pb-px pt-[33px] px-[33px] size-[102px] top-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none" />
      <Icon5 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="absolute h-[28px] left-0 top-[142px] w-[389.5px]" data-name="Heading 3">
      <p className="absolute css-ew64yg font-['Inter:Light',sans-serif] font-light leading-[28px] left-[195.09px] not-italic text-[#171717] text-[20px] text-center top-0 tracking-[0.5508px] translate-x-[-50%]">White Glove Delivery</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="absolute h-[22.75px] left-0 top-[190px] w-[389.5px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Light',sans-serif] font-light leading-[22.75px] left-[194.84px] not-italic text-[#737373] text-[14px] text-center top-px tracking-[0.1996px] translate-x-[-50%]">Secure delivery to your doorstep. Every detail perfected.</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="col-[2] css-3foyfs relative row-[2] self-stretch shrink-0" data-name="Container">
      <Container18 />
      <Heading7 />
      <Paragraph6 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="h-[36px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[83.33%_62.5%_8.33%_29.17%]" data-name="Vector">
        <div className="absolute inset-[-18.75%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.125 4.125">
            <path d={svgPaths.p15d70ff0} id="Vector" stroke="var(--stroke-0, #171717)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[8.33%] left-3/4 right-[16.67%] top-[83.33%]" data-name="Vector">
        <div className="absolute inset-[-18.75%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.125 4.125">
            <path d={svgPaths.p15d70ff0} id="Vector" stroke="var(--stroke-0, #171717)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.54%_7.96%_33.12%_8.54%]" data-name="Vector">
        <div className="absolute inset-[-2.68%_-1.87%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31.185 22.1257">
            <path d={svgPaths.p29424900} id="Vector" stroke="var(--stroke-0, #171717)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[143.75px] pb-px pt-[33px] px-[33px] size-[102px] top-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none" />
      <Icon6 />
    </div>
  );
}

function Heading8() {
  return (
    <div className="absolute h-[28px] left-0 top-[142px] w-[389.5px]" data-name="Heading 3">
      <p className="absolute css-ew64yg font-['Inter:Light',sans-serif] font-light leading-[28px] left-[194.84px] not-italic text-[#171717] text-[20px] text-center top-0 tracking-[0.5508px] translate-x-[-50%]">Bespoke Solutions</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="absolute h-[45.5px] left-0 top-[190px] w-[389.5px]" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Inter:Light',sans-serif] font-light leading-[22.75px] left-[195.21px] not-italic text-[#737373] text-[14px] text-center top-px tracking-[0.1996px] translate-x-[-50%] w-[325px]">Tailored bulk orders for discerning investors and businesses.</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="col-[1] css-3foyfs relative row-[3] self-stretch shrink-0" data-name="Container">
      <Container20 />
      <Heading8 />
      <Paragraph7 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="h-[36px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%_20.83%]" data-name="Vector">
        <div className="absolute inset-[-1.88%_-2.68%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.125 31.125">
            <path d={svgPaths.p11ba7c00} id="Vector" stroke="var(--stroke-0, #171717)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/4 left-1/2 right-[49.96%] top-3/4" data-name="Vector">
        <div className="absolute inset-[-0.56px_-3749.91%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.14 1.125">
            <path d="M0.5625 0.5625H0.5775" id="Vector" stroke="var(--stroke-0, #171717)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[143.75px] pb-px pt-[33px] px-[33px] size-[102px] top-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none" />
      <Icon7 />
    </div>
  );
}

function Heading9() {
  return (
    <div className="absolute h-[28px] left-0 top-[142px] w-[389.5px]" data-name="Heading 3">
      <p className="absolute css-ew64yg font-['Inter:Light',sans-serif] font-light leading-[28px] left-[194.37px] not-italic text-[#171717] text-[20px] text-center top-0 tracking-[0.5508px] translate-x-[-50%]">Digital Experience</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="absolute h-[45.5px] left-0 top-[190px] w-[389.5px]" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Inter:Light',sans-serif] font-light leading-[22.75px] left-[195.16px] not-italic text-[#737373] text-[14px] text-center top-px tracking-[0.1996px] translate-x-[-50%] w-[356px]">Manage your portfolio seamlessly. Excellence at your fingertips.</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="col-[2] css-3foyfs relative row-[3] self-stretch shrink-0" data-name="Container">
      <Container22 />
      <Heading9 />
      <Paragraph8 />
    </div>
  );
}

function Container24() {
  return (
    <div className="gap-[80px] grid grid-cols-[repeat(2,_minmax(0,_1fr))] grid-rows-[repeat(3,_minmax(0,_1fr))] h-[866.5px] relative shrink-0 w-full" data-name="Container">
      <Container13 />
      <Container15 />
      <Container17 />
      <Container19 />
      <Container21 />
      <Container23 />
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[112px] h-[1199.945px] items-start left-0 px-[40px] top-[160px] w-[939px]" data-name="Container">
      <Container11 />
      <Container24 />
    </div>
  );
}

function Features() {
  return (
    <div className="bg-white h-[1519.945px] overflow-clip relative shrink-0 w-full" data-name="Features">
      <Container9 />
      <Container25 />
    </div>
  );
}

function Container26() {
  return <div className="absolute h-[1319.445px] left-0 opacity-2 top-0 w-[939px]" data-name="Container" style={{ backgroundImage: "linear-gradient(90deg, rgb(0, 0, 0) 0.1065%, rgba(0, 0, 0, 0) 0.1065%), linear-gradient(rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 0%)" }} />;
}

function Text3() {
  return (
    <div className="absolute content-stretch flex h-[11.5px] items-start left-[372.85px] top-[8.5px] w-[113.289px]" data-name="Text">
      <p className="css-ew64yg font-['Inter:Light',sans-serif] font-light leading-[15px] not-italic relative shrink-0 text-[#a1a1a1] text-[10px] text-center tracking-[4.1172px] uppercase">The Process</p>
    </div>
  );
}

function Heading10() {
  return (
    <div className="absolute h-[79.195px] left-0 top-[48px] w-[859px]" data-name="Heading 2">
      <p className="absolute css-ew64yg font-['Inter:Extra_Light',sans-serif] font-extralight leading-[79.2px] left-[430.48px] not-italic text-[#171717] text-[72px] text-center top-px tracking-[-1.677px] translate-x-[-50%]">Four Refined Steps</p>
    </div>
  );
}

function Container27() {
  return <div className="absolute bg-gradient-to-r from-[rgba(0,0,0,0)] h-px left-[389.5px] to-[rgba(0,0,0,0)] top-[159.2px] via-1/2 via-[#d4d4d4] w-[80px]" data-name="Container" />;
}

function Paragraph9() {
  return (
    <div className="absolute h-[29.25px] left-[93.5px] top-[192.2px] w-[672px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Light',sans-serif] font-light leading-[29.25px] left-[335.78px] not-italic text-[#737373] text-[18px] text-center top-[0.5px] tracking-[0.0105px] translate-x-[-50%]">From registration to physical acquisition in seamless elegance</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[221.445px] relative shrink-0 w-full" data-name="Container">
      <Text3 />
      <Heading10 />
      <Container27 />
      <Paragraph9 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="h-[44px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[62.5%_33.33%_12.5%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-6.25%_-2.68%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.0417 12.375">
            <path d={svgPaths.p2ecf6c00} id="Vector" stroke="var(--stroke-0, #171717)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.375" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%_45.83%_54.17%_20.83%]" data-name="Vector">
        <div className="absolute inset-[-4.69%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.0417 16.0417">
            <path d={svgPaths.pc520100} id="Vector" stroke="var(--stroke-0, #171717)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.375" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[33.33%_20.83%_41.67%_79.17%]" data-name="Vector">
        <div className="absolute inset-[-6.25%_-0.69px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.375 12.375">
            <path d="M0.6875 0.6875V11.6875" id="Vector" stroke="var(--stroke-0, #171717)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.375" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[45.83%_8.33%_54.17%_66.67%]" data-name="Vector">
        <div className="absolute inset-[-0.69px_-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.375 1.375">
            <path d="M11.6875 0.6875H0.6875" id="Vector" stroke="var(--stroke-0, #171717)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.375" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-[135.75px] pb-px pt-[41px] px-[41px] size-[126px] top-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none" />
      <Icon8 />
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute h-[13.5px] left-0 top-[166px] w-[397.5px]" data-name="Container">
      <p className="absolute css-ew64yg font-['Inter:Light',sans-serif] font-light leading-[13.5px] left-[199.15px] not-italic text-[#d4d4d4] text-[9px] text-center top-[0.5px] tracking-[3.767px] translate-x-[-50%]">01</p>
    </div>
  );
}

function Heading11() {
  return (
    <div className="absolute h-[32px] left-0 top-[203.5px] w-[397.5px]" data-name="Heading 3">
      <p className="absolute css-ew64yg font-['Inter:Extra_Light',sans-serif] font-extralight leading-[32px] left-[198.66px] not-italic text-[#171717] text-[24px] text-center top-0 tracking-[0.6703px] translate-x-[-50%]">Register</p>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="absolute h-[45.5px] left-0 top-[255.5px] w-[397.5px]" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Inter:Light',sans-serif] font-light leading-[22.75px] left-[199.13px] not-italic text-[#737373] text-[14px] text-center top-px tracking-[0.1996px] translate-x-[-50%] w-[387px]">A seamless onboarding experience. Complete verification in minutes.</p>
    </div>
  );
}

function Container31() {
  return (
    <div className="col-[1] css-3foyfs relative row-[1] self-stretch shrink-0" data-name="Container">
      <Container29 />
      <Container30 />
      <Heading11 />
      <Paragraph10 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="h-[44px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.5%_8.33%_33.33%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-2.88%_-1.97%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36.2083 25.2083">
            <path d={svgPaths.p4039f00} id="Vector" stroke="var(--stroke-0, #171717)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.375" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[20.83%_12.5%_12.5%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-2.34%_-2.08%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34.375 30.7083">
            <path d={svgPaths.pb211c5c} id="Vector" stroke="var(--stroke-0, #171717)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.375" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-[135.75px] pb-px pt-[41px] px-[41px] size-[126px] top-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none" />
      <Icon9 />
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute h-[13.5px] left-0 top-[166px] w-[397.5px]" data-name="Container">
      <p className="absolute css-ew64yg font-['Inter:Light',sans-serif] font-light leading-[13.5px] left-[198.98px] not-italic text-[#d4d4d4] text-[9px] text-center top-[0.5px] tracking-[3.767px] translate-x-[-50%]">02</p>
    </div>
  );
}

function Heading12() {
  return (
    <div className="absolute h-[32px] left-0 top-[203.5px] w-[397.5px]" data-name="Heading 3">
      <p className="absolute css-ew64yg font-['Inter:Extra_Light',sans-serif] font-extralight leading-[32px] left-[198.64px] not-italic text-[#171717] text-[24px] text-center top-0 tracking-[0.6703px] translate-x-[-50%]">Invest</p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="absolute h-[45.5px] left-0 top-[255.5px] w-[397.5px]" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Inter:Light',sans-serif] font-light leading-[22.75px] left-[198.81px] not-italic text-[#737373] text-[14px] text-center top-px tracking-[0.1996px] translate-x-[-50%] w-[334px]">Begin with ₹10. Your silver accumulates with each contribution.</p>
    </div>
  );
}

function Container34() {
  return (
    <div className="col-[2] css-3foyfs relative row-[1] self-stretch shrink-0" data-name="Container">
      <Container32 />
      <Container33 />
      <Heading12 />
      <Paragraph11 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="h-[44px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[29.17%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-3.75%_-1.87%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38.0417 19.7083">
            <path d={svgPaths.pc73e910} id="Vector" stroke="var(--stroke-0, #171717)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.375" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[29.17%_8.33%_45.83%_66.67%]" data-name="Vector">
        <div className="absolute inset-[-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.375 12.375">
            <path d={svgPaths.p235a3658} id="Vector" stroke="var(--stroke-0, #171717)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.375" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-[135.75px] pb-px pt-[41px] px-[41px] size-[126px] top-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none" />
      <Icon10 />
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute h-[13.5px] left-0 top-[166px] w-[397.5px]" data-name="Container">
      <p className="absolute css-ew64yg font-['Inter:Light',sans-serif] font-light leading-[13.5px] left-[198.88px] not-italic text-[#d4d4d4] text-[9px] text-center top-[0.5px] tracking-[3.767px] translate-x-[-50%]">03</p>
    </div>
  );
}

function Heading13() {
  return (
    <div className="absolute h-[32px] left-0 top-[203.5px] w-[397.5px]" data-name="Heading 3">
      <p className="absolute css-ew64yg font-['Inter:Extra_Light',sans-serif] font-extralight leading-[32px] left-[198.99px] not-italic text-[#171717] text-[24px] text-center top-0 tracking-[0.6703px] translate-x-[-50%]">Monitor</p>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="absolute h-[45.5px] left-0 top-[255.5px] w-[397.5px]" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Inter:Light',sans-serif] font-light leading-[22.75px] left-[199.19px] not-italic text-[#737373] text-[14px] text-center top-px tracking-[0.1996px] translate-x-[-50%] w-[342px]">Real-time portfolio tracking. Transparency at every moment.</p>
    </div>
  );
}

function Container37() {
  return (
    <div className="col-[1] css-3foyfs relative row-[2] self-stretch shrink-0" data-name="Container">
      <Container35 />
      <Container36 />
      <Heading13 />
      <Paragraph12 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="h-[44px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.34%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-1.88%_-2.08%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34.375 38.0341">
            <path d={svgPaths.p2149f0} id="Vector" stroke="var(--stroke-0, #171717)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.375" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[8.33%] left-1/2 right-1/2 top-1/2" data-name="Vector">
        <div className="absolute inset-[-3.75%_-0.69px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.375 19.7083">
            <path d="M0.6875 19.0208V0.6875" id="Vector" stroke="var(--stroke-0, #171717)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.375" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/2 left-[13.71%] right-[13.71%] top-[29.17%]" data-name="Vector">
        <div className="absolute inset-[-7.5%_-2.15%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.3119 10.5418">
            <path d={svgPaths.p1821a180} id="Vector" stroke="var(--stroke-0, #171717)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.375" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[17.79%_31.25%_60.75%_31.25%]" data-name="Vector">
        <div className="absolute inset-[-7.28%_-4.17%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.8752 10.8169">
            <path d={svgPaths.p3eba380} id="Vector" stroke="var(--stroke-0, #171717)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.375" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-[135.75px] pb-px pt-[41px] px-[41px] size-[126px] top-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none" />
      <Icon11 />
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute h-[13.5px] left-0 top-[166px] w-[397.5px]" data-name="Container">
      <p className="absolute css-ew64yg font-['Inter:Light',sans-serif] font-light leading-[13.5px] left-[198.77px] not-italic text-[#d4d4d4] text-[9px] text-center top-[0.5px] tracking-[3.767px] translate-x-[-50%]">04</p>
    </div>
  );
}

function Heading14() {
  return (
    <div className="absolute h-[32px] left-0 top-[203.5px] w-[397.5px]" data-name="Heading 3">
      <p className="absolute css-ew64yg font-['Inter:Extra_Light',sans-serif] font-extralight leading-[32px] left-[198.5px] not-italic text-[#171717] text-[24px] text-center top-0 tracking-[0.6703px] translate-x-[-50%]">Acquire</p>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="absolute h-[45.5px] left-0 top-[255.5px] w-[397.5px]" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Inter:Light',sans-serif] font-light leading-[22.75px] left-[199.07px] not-italic text-[#737373] text-[14px] text-center top-px tracking-[0.1996px] translate-x-[-50%] w-[314px]">Physical delivery when ready. Your investment, materialized.</p>
    </div>
  );
}

function Container40() {
  return (
    <div className="col-[2] css-3foyfs relative row-[2] self-stretch shrink-0" data-name="Container">
      <Container38 />
      <Container39 />
      <Heading14 />
      <Paragraph13 />
    </div>
  );
}

function Container41() {
  return (
    <div className="gap-[64px] grid grid-cols-[repeat(2,_minmax(0,_1fr))] grid-rows-[repeat(2,_minmax(0,_1fr))] h-[666px] relative shrink-0 w-full" data-name="Container">
      <Container31 />
      <Container34 />
      <Container37 />
      <Container40 />
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[112px] h-[999.445px] items-start left-0 px-[40px] top-[160px] w-[939px]" data-name="Container">
      <Container28 />
      <Container41 />
    </div>
  );
}

function HowItWorks() {
  return (
    <div className="bg-[#fafafa] h-[1319.445px] overflow-clip relative shrink-0 w-full" data-name="HowItWorks">
      <Container26 />
      <Container42 />
    </div>
  );
}

function Container43() {
  return <div className="absolute bg-gradient-to-b from-[rgba(23,23,23,0.5)] h-[2058.445px] left-0 to-[rgba(23,23,23,0.5)] top-0 via-1/2 via-[rgba(0,0,0,0)] w-[939px]" data-name="Container" />;
}

function Text4() {
  return (
    <div className="absolute content-stretch flex h-[11.5px] items-start left-[358.43px] top-[8.5px] w-[142.141px]" data-name="Text">
      <p className="css-ew64yg font-['Inter:Light',sans-serif] font-light leading-[15px] not-italic relative shrink-0 text-[10px] text-[rgba(255,255,255,0.4)] text-center tracking-[4.1172px] uppercase">The Collection</p>
    </div>
  );
}

function Heading15() {
  return (
    <div className="absolute h-[79.195px] left-0 top-[48px] w-[859px]" data-name="Heading 2">
      <p className="absolute css-ew64yg font-['Inter:Extra_Light',sans-serif] font-extralight leading-[79.2px] left-[429.58px] not-italic text-[72px] text-center text-white top-px tracking-[-1.677px] translate-x-[-50%]">Investment Grade Silver</p>
    </div>
  );
}

function Container44() {
  return <div className="absolute bg-gradient-to-r from-[rgba(0,0,0,0)] h-px left-[389.5px] to-[rgba(0,0,0,0)] top-[159.2px] via-1/2 via-[rgba(255,255,255,0.3)] w-[80px]" data-name="Container" />;
}

function Paragraph14() {
  return (
    <div className="absolute h-[29.25px] left-[93.5px] top-[192.2px] w-[672px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Light',sans-serif] font-light leading-[29.25px] left-[335.7px] not-italic text-[18px] text-[rgba(255,255,255,0.5)] text-center top-[0.5px] tracking-[0.0105px] translate-x-[-50%]">Precision-crafted silver bars. Each piece a testament to purity and excellence.</p>
    </div>
  );
}

function Container45() {
  return (
    <div className="h-[221.445px] relative shrink-0 w-full" data-name="Container">
      <Text4 />
      <Heading15 />
      <Container44 />
      <Paragraph14 />
    </div>
  );
}

function Container46() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute css-ew64yg font-['Inter:Extra_Light',sans-serif] font-extralight leading-[60px] left-[160.18px] not-italic text-[60px] text-center text-white top-[0.5px] tracking-[-1.2363px] translate-x-[-50%]">10g</p>
    </div>
  );
}

function Container47() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute css-ew64yg font-['Inter:Extra_Light',sans-serif] font-extralight leading-[32px] left-[160.53px] not-italic text-[24px] text-[rgba(255,255,255,0.4)] text-center top-0 tracking-[1.2703px] translate-x-[-50%]">₹6,500</p>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[157px] items-start pb-px relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.05)] border-b border-solid inset-0 pointer-events-none" />
      <Container46 />
      <Container47 />
    </div>
  );
}

function Icon12() {
  return (
    <div className="absolute left-0 size-[14px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p3de7e600} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.583333" />
        </g>
      </svg>
    </div>
  );
}

function Text5() {
  return (
    <div className="absolute h-[19.5px] left-[26px] top-0 w-[104.125px]" data-name="Text">
      <p className="absolute css-ew64yg font-['Inter:Light',sans-serif] font-light leading-[19.5px] left-0 not-italic text-[12px] text-[rgba(255,255,255,0.5)] top-[0.5px] tracking-[0.3px]">99.9% Pure Silver</p>
    </div>
  );
}

function Container49() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Container">
      <Icon12 />
      <Text5 />
    </div>
  );
}

function Icon13() {
  return (
    <div className="absolute left-0 size-[14px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p3de7e600} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.583333" />
        </g>
      </svg>
    </div>
  );
}

function Text6() {
  return (
    <div className="absolute h-[19.5px] left-[26px] top-0 w-[125.445px]" data-name="Text">
      <p className="absolute css-ew64yg font-['Inter:Light',sans-serif] font-light leading-[19.5px] left-0 not-italic text-[12px] text-[rgba(255,255,255,0.5)] top-[0.5px] tracking-[0.3px]">Certified Authenticity</p>
    </div>
  );
}

function Container50() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Container">
      <Icon13 />
      <Text6 />
    </div>
  );
}

function Icon14() {
  return (
    <div className="absolute left-0 size-[14px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p3de7e600} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.583333" />
        </g>
      </svg>
    </div>
  );
}

function Text7() {
  return (
    <div className="absolute h-[19.5px] left-[26px] top-0 w-[115.391px]" data-name="Text">
      <p className="absolute css-ew64yg font-['Inter:Light',sans-serif] font-light leading-[19.5px] left-0 not-italic text-[12px] text-[rgba(255,255,255,0.5)] top-[0.5px] tracking-[0.3px]">Premium Packaging</p>
    </div>
  );
}

function Container51() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Container">
      <Icon14 />
      <Text7 />
    </div>
  );
}

function Icon15() {
  return (
    <div className="absolute left-0 size-[14px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p3de7e600} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.583333" />
        </g>
      </svg>
    </div>
  );
}

function Text8() {
  return (
    <div className="absolute h-[19.5px] left-[26px] top-0 w-[140.016px]" data-name="Text">
      <p className="absolute css-ew64yg font-['Inter:Light',sans-serif] font-light leading-[19.5px] left-0 not-italic text-[12px] text-[rgba(255,255,255,0.5)] top-[0.5px] tracking-[0.3px]">Complimentary Delivery</p>
    </div>
  );
}

function Container52() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Container">
      <Icon15 />
      <Text8 />
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] h-[138px] items-start relative shrink-0 w-full" data-name="Container">
      <Container49 />
      <Container50 />
      <Container51 />
      <Container52 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white h-[48px] relative shrink-0 w-full" data-name="Button">
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[15px] left-[160.02px] not-italic text-[10px] text-black text-center top-[17px] tracking-[3.1172px] translate-x-[-50%] uppercase">Acquire</p>
    </div>
  );
}

function Container54() {
  return (
    <div className="h-[543px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[48px] items-start pt-[48px] px-[48px] relative size-full">
        <Container48 />
        <Container53 />
        <Button />
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="absolute bg-[#171717] content-stretch flex flex-col h-[545px] items-start left-0 p-px top-0 w-[417.5px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none" />
      <Container54 />
    </div>
  );
}

function Container56() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute css-ew64yg font-['Inter:Extra_Light',sans-serif] font-extralight leading-[60px] left-[160.08px] not-italic text-[60px] text-black text-center top-[0.5px] tracking-[-1.2363px] translate-x-[-50%]">50g</p>
    </div>
  );
}

function Container57() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute css-ew64yg font-['Inter:Extra_Light',sans-serif] font-extralight leading-[32px] left-[160.07px] not-italic text-[24px] text-[rgba(0,0,0,0.5)] text-center top-0 tracking-[1.2703px] translate-x-[-50%]">₹32,000</p>
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[157px] items-start pb-px relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.05)] border-b border-solid inset-0 pointer-events-none" />
      <Container56 />
      <Container57 />
    </div>
  );
}

function Icon16() {
  return (
    <div className="absolute left-0 size-[14px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p3de7e600} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.583333" />
        </g>
      </svg>
    </div>
  );
}

function Text9() {
  return (
    <div className="absolute h-[19.5px] left-[26px] top-0 w-[104.125px]" data-name="Text">
      <p className="absolute css-ew64yg font-['Inter:Light',sans-serif] font-light leading-[19.5px] left-0 not-italic text-[12px] text-[rgba(0,0,0,0.7)] top-[0.5px] tracking-[0.3px]">99.9% Pure Silver</p>
    </div>
  );
}

function Container59() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Container">
      <Icon16 />
      <Text9 />
    </div>
  );
}

function Icon17() {
  return (
    <div className="absolute left-0 size-[14px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p3de7e600} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.583333" />
        </g>
      </svg>
    </div>
  );
}

function Text10() {
  return (
    <div className="absolute h-[19.5px] left-[26px] top-0 w-[125.445px]" data-name="Text">
      <p className="absolute css-ew64yg font-['Inter:Light',sans-serif] font-light leading-[19.5px] left-0 not-italic text-[12px] text-[rgba(0,0,0,0.7)] top-[0.5px] tracking-[0.3px]">Certified Authenticity</p>
    </div>
  );
}

function Container60() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Container">
      <Icon17 />
      <Text10 />
    </div>
  );
}

function Icon18() {
  return (
    <div className="absolute left-0 size-[14px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p3de7e600} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.583333" />
        </g>
      </svg>
    </div>
  );
}

function Text11() {
  return (
    <div className="absolute h-[19.5px] left-[26px] top-0 w-[109.445px]" data-name="Text">
      <p className="absolute css-ew64yg font-['Inter:Light',sans-serif] font-light leading-[19.5px] left-0 not-italic text-[12px] text-[rgba(0,0,0,0.7)] top-[0.5px] tracking-[0.3px]">Tamper-proof Seal</p>
    </div>
  );
}

function Container61() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Container">
      <Icon18 />
      <Text11 />
    </div>
  );
}

function Icon19() {
  return (
    <div className="absolute left-0 size-[14px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p3de7e600} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.583333" />
        </g>
      </svg>
    </div>
  );
}

function Text12() {
  return (
    <div className="absolute h-[19.5px] left-[26px] top-0 w-[140.016px]" data-name="Text">
      <p className="absolute css-ew64yg font-['Inter:Light',sans-serif] font-light leading-[19.5px] left-0 not-italic text-[12px] text-[rgba(0,0,0,0.7)] top-[0.5px] tracking-[0.3px]">Complimentary Delivery</p>
    </div>
  );
}

function Container62() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Container">
      <Icon19 />
      <Text12 />
    </div>
  );
}

function Icon20() {
  return (
    <div className="absolute left-0 size-[14px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p3de7e600} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.583333" />
        </g>
      </svg>
    </div>
  );
}

function Text13() {
  return (
    <div className="absolute h-[19.5px] left-[26px] top-0 w-[89.672px]" data-name="Text">
      <p className="absolute css-ew64yg font-['Inter:Light',sans-serif] font-light leading-[19.5px] left-0 not-italic text-[12px] text-[rgba(0,0,0,0.7)] top-[0.5px] tracking-[0.3px]">Priority Service</p>
    </div>
  );
}

function Container63() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Container">
      <Icon20 />
      <Text13 />
    </div>
  );
}

function Container64() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] h-[177.5px] items-start relative shrink-0 w-full" data-name="Container">
      <Container59 />
      <Container60 />
      <Container61 />
      <Container62 />
      <Container63 />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-black h-[48px] relative shrink-0 w-full" data-name="Button">
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[15px] left-[160.02px] not-italic text-[10px] text-center text-white top-[17px] tracking-[3.1172px] translate-x-[-50%] uppercase">Acquire</p>
    </div>
  );
}

function Container65() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[48px] h-[582.5px] items-start left-0 pt-[48px] px-[48px] top-0 w-[415.5px]" data-name="Container">
      <Container58 />
      <Container64 />
      <Button1 />
    </div>
  );
}

function Container66() {
  return (
    <div className="absolute bg-black border border-[rgba(255,255,255,0.1)] border-solid h-[27.5px] left-[140.97px] top-[-16px] w-[133.555px]" data-name="Container">
      <p className="absolute css-ew64yg font-['Inter:Light',sans-serif] font-light leading-[13.5px] left-[24px] not-italic text-[9px] text-white top-[6.5px] tracking-[3.767px] uppercase">Signature</p>
    </div>
  );
}

function Container67() {
  return (
    <div className="absolute bg-white border border-solid border-white h-[584.5px] left-[441.5px] shadow-[0px_25px_50px_0px_rgba(255,255,255,0.1)] top-[-16px] w-[417.5px]" data-name="Container">
      <Container65 />
      <Container66 />
    </div>
  );
}

function Container68() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute css-ew64yg font-['Inter:Extra_Light',sans-serif] font-extralight leading-[60px] left-[159.59px] not-italic text-[60px] text-center text-white top-[0.5px] tracking-[-1.2363px] translate-x-[-50%]">100g</p>
    </div>
  );
}

function Container69() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute css-ew64yg font-['Inter:Extra_Light',sans-serif] font-extralight leading-[32px] left-[159.91px] not-italic text-[24px] text-[rgba(255,255,255,0.4)] text-center top-0 tracking-[1.2703px] translate-x-[-50%]">₹63,000</p>
    </div>
  );
}

function Container70() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[157px] items-start pb-px relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.05)] border-b border-solid inset-0 pointer-events-none" />
      <Container68 />
      <Container69 />
    </div>
  );
}

function Icon21() {
  return (
    <div className="absolute left-0 size-[14px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p3de7e600} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.583333" />
        </g>
      </svg>
    </div>
  );
}

function Text14() {
  return (
    <div className="absolute h-[19.5px] left-[26px] top-0 w-[104.125px]" data-name="Text">
      <p className="absolute css-ew64yg font-['Inter:Light',sans-serif] font-light leading-[19.5px] left-0 not-italic text-[12px] text-[rgba(255,255,255,0.5)] top-[0.5px] tracking-[0.3px]">99.9% Pure Silver</p>
    </div>
  );
}

function Container71() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Container">
      <Icon21 />
      <Text14 />
    </div>
  );
}

function Icon22() {
  return (
    <div className="absolute left-0 size-[14px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p3de7e600} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.583333" />
        </g>
      </svg>
    </div>
  );
}

function Text15() {
  return (
    <div className="absolute h-[19.5px] left-[26px] top-0 w-[125.445px]" data-name="Text">
      <p className="absolute css-ew64yg font-['Inter:Light',sans-serif] font-light leading-[19.5px] left-0 not-italic text-[12px] text-[rgba(255,255,255,0.5)] top-[0.5px] tracking-[0.3px]">Certified Authenticity</p>
    </div>
  );
}

function Container72() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Container">
      <Icon22 />
      <Text15 />
    </div>
  );
}

function Icon23() {
  return (
    <div className="absolute left-0 size-[14px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p3de7e600} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.583333" />
        </g>
      </svg>
    </div>
  );
}

function Text16() {
  return (
    <div className="absolute h-[19.5px] left-[26px] top-0 w-[109.445px]" data-name="Text">
      <p className="absolute css-ew64yg font-['Inter:Light',sans-serif] font-light leading-[19.5px] left-0 not-italic text-[12px] text-[rgba(255,255,255,0.5)] top-[0.5px] tracking-[0.3px]">Tamper-proof Seal</p>
    </div>
  );
}

function Container73() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Container">
      <Icon23 />
      <Text16 />
    </div>
  );
}

function Icon24() {
  return (
    <div className="absolute left-0 size-[14px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p3de7e600} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.583333" />
        </g>
      </svg>
    </div>
  );
}

function Text17() {
  return (
    <div className="absolute h-[19.5px] left-[26px] top-0 w-[140.016px]" data-name="Text">
      <p className="absolute css-ew64yg font-['Inter:Light',sans-serif] font-light leading-[19.5px] left-0 not-italic text-[12px] text-[rgba(255,255,255,0.5)] top-[0.5px] tracking-[0.3px]">Complimentary Delivery</p>
    </div>
  );
}

function Container74() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Container">
      <Icon24 />
      <Text17 />
    </div>
  );
}

function Icon25() {
  return (
    <div className="absolute left-0 size-[14px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p3de7e600} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.583333" />
        </g>
      </svg>
    </div>
  );
}

function Text18() {
  return (
    <div className="absolute h-[19.5px] left-[26px] top-0 w-[110.852px]" data-name="Text">
      <p className="absolute css-ew64yg font-['Inter:Light',sans-serif] font-light leading-[19.5px] left-0 not-italic text-[12px] text-[rgba(255,255,255,0.5)] top-[0.5px] tracking-[0.3px]">Dedicated Support</p>
    </div>
  );
}

function Container75() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Container">
      <Icon25 />
      <Text18 />
    </div>
  );
}

function Container76() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] h-[177.5px] items-start relative shrink-0 w-full" data-name="Container">
      <Container71 />
      <Container72 />
      <Container73 />
      <Container74 />
      <Container75 />
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-white h-[48px] relative shrink-0 w-full" data-name="Button">
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[15px] left-[160.02px] not-italic text-[10px] text-black text-center top-[17px] tracking-[3.1172px] translate-x-[-50%] uppercase">Acquire</p>
    </div>
  );
}

function Container77() {
  return (
    <div className="h-[582.5px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[48px] items-start pt-[48px] px-[48px] relative size-full">
        <Container70 />
        <Container76 />
        <Button2 />
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="absolute bg-[#171717] content-stretch flex flex-col h-[584.5px] items-start left-0 p-px top-[608.5px] w-[417.5px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none" />
      <Container77 />
    </div>
  );
}

function Container79() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute css-ew64yg font-['Inter:Extra_Light',sans-serif] font-extralight leading-[60px] left-[159.52px] not-italic text-[60px] text-center text-white top-[0.5px] tracking-[-1.2363px] translate-x-[-50%]">1kg</p>
    </div>
  );
}

function Container80() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute css-ew64yg font-['Inter:Extra_Light',sans-serif] font-extralight leading-[32px] left-[160.52px] not-italic text-[24px] text-[rgba(255,255,255,0.4)] text-center top-0 tracking-[1.2703px] translate-x-[-50%]">₹6,25,000</p>
    </div>
  );
}

function Container81() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[157px] items-start pb-px relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.05)] border-b border-solid inset-0 pointer-events-none" />
      <Container79 />
      <Container80 />
    </div>
  );
}

function Icon26() {
  return (
    <div className="absolute left-0 size-[14px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p3de7e600} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.583333" />
        </g>
      </svg>
    </div>
  );
}

function Text19() {
  return (
    <div className="absolute h-[19.5px] left-[26px] top-0 w-[104.125px]" data-name="Text">
      <p className="absolute css-ew64yg font-['Inter:Light',sans-serif] font-light leading-[19.5px] left-0 not-italic text-[12px] text-[rgba(255,255,255,0.5)] top-[0.5px] tracking-[0.3px]">99.9% Pure Silver</p>
    </div>
  );
}

function Container82() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Container">
      <Icon26 />
      <Text19 />
    </div>
  );
}

function Icon27() {
  return (
    <div className="absolute left-0 size-[14px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p3de7e600} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.583333" />
        </g>
      </svg>
    </div>
  );
}

function Text20() {
  return (
    <div className="absolute h-[19.5px] left-[26px] top-0 w-[125.445px]" data-name="Text">
      <p className="absolute css-ew64yg font-['Inter:Light',sans-serif] font-light leading-[19.5px] left-0 not-italic text-[12px] text-[rgba(255,255,255,0.5)] top-[0.5px] tracking-[0.3px]">Certified Authenticity</p>
    </div>
  );
}

function Container83() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Container">
      <Icon27 />
      <Text20 />
    </div>
  );
}

function Icon28() {
  return (
    <div className="absolute left-0 size-[14px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p3de7e600} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.583333" />
        </g>
      </svg>
    </div>
  );
}

function Text21() {
  return (
    <div className="absolute h-[19.5px] left-[26px] top-0 w-[93.633px]" data-name="Text">
      <p className="absolute css-ew64yg font-['Inter:Light',sans-serif] font-light leading-[19.5px] left-0 not-italic text-[12px] text-[rgba(255,255,255,0.5)] top-[0.5px] tracking-[0.3px]">Vault Packaging</p>
    </div>
  );
}

function Container84() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Container">
      <Icon28 />
      <Text21 />
    </div>
  );
}

function Icon29() {
  return (
    <div className="absolute left-0 size-[14px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p3de7e600} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.583333" />
        </g>
      </svg>
    </div>
  );
}

function Text22() {
  return (
    <div className="absolute h-[19.5px] left-[26px] top-0 w-[121.703px]" data-name="Text">
      <p className="absolute css-ew64yg font-['Inter:Light',sans-serif] font-light leading-[19.5px] left-0 not-italic text-[12px] text-[rgba(255,255,255,0.5)] top-[0.5px] tracking-[0.3px]">White Glove Delivery</p>
    </div>
  );
}

function Container85() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Container">
      <Icon29 />
      <Text22 />
    </div>
  );
}

function Icon30() {
  return (
    <div className="absolute left-0 size-[14px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p3de7e600} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.583333" />
        </g>
      </svg>
    </div>
  );
}

function Text23() {
  return (
    <div className="absolute h-[19.5px] left-[26px] top-0 w-[107.594px]" data-name="Text">
      <p className="absolute css-ew64yg font-['Inter:Light',sans-serif] font-light leading-[19.5px] left-0 not-italic text-[12px] text-[rgba(255,255,255,0.5)] top-[0.5px] tracking-[0.3px]">Concierge Service</p>
    </div>
  );
}

function Container86() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Container">
      <Icon30 />
      <Text23 />
    </div>
  );
}

function Container87() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] h-[177.5px] items-start relative shrink-0 w-full" data-name="Container">
      <Container82 />
      <Container83 />
      <Container84 />
      <Container85 />
      <Container86 />
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-white h-[48px] relative shrink-0 w-full" data-name="Button">
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[15px] left-[160.02px] not-italic text-[10px] text-black text-center top-[17px] tracking-[3.1172px] translate-x-[-50%] uppercase">Acquire</p>
    </div>
  );
}

function Container88() {
  return (
    <div className="h-[582.5px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[48px] items-start pt-[48px] px-[48px] relative size-full">
        <Container81 />
        <Container87 />
        <Button3 />
      </div>
    </div>
  );
}

function Container89() {
  return (
    <div className="absolute bg-[#171717] content-stretch flex flex-col h-[584.5px] items-start left-[441.5px] p-px top-[608.5px] w-[417.5px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none" />
      <Container88 />
    </div>
  );
}

function Container90() {
  return (
    <div className="h-[1193px] relative shrink-0 w-full" data-name="Container">
      <Container55 />
      <Container67 />
      <Container78 />
      <Container89 />
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[859px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Light',sans-serif] font-light leading-[20px] left-[429.02px] not-italic text-[14px] text-[rgba(255,255,255,0.4)] text-center top-[0.5px] tracking-[0.1996px] translate-x-[-50%]">Begin with fractional investment from ₹10</p>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute bg-[#ffff1f] border border-[rgba(255,255,255,0.2)] border-solid h-[48px] left-[303.63px] top-[52px] w-[251.734px]" data-name="Button">
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[15px] left-[125px] not-italic text-[10px] text-center text-white top-[16px] tracking-[3.1172px] translate-x-[-50%] uppercase">Start Your Journey</p>
    </div>
  );
}

function Container91() {
  return (
    <div className="h-[100px] relative shrink-0 w-full" data-name="Container">
      <Paragraph15 />
      <Button4 />
    </div>
  );
}

function Container92() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[112px] h-[1738.445px] items-start left-0 px-[40px] top-[160px] w-[939px]" data-name="Container">
      <Container45 />
      <Container90 />
      <Container91 />
    </div>
  );
}

function Products() {
  return (
    <div className="bg-[#0a0a0a] h-[2058.445px] overflow-clip relative shrink-0 w-full" data-name="Products">
      <Container43 />
      <Container92 />
    </div>
  );
}

function Text24() {
  return (
    <div className="absolute content-stretch flex h-[11.5px] items-start left-0 top-[8.5px] w-[172.039px]" data-name="Text">
      <p className="css-ew64yg font-['Inter:Light',sans-serif] font-light leading-[15px] not-italic relative shrink-0 text-[#a1a1a1] text-[10px] tracking-[4.1172px] uppercase">Mobile Excellence</p>
    </div>
  );
}

function Heading16() {
  return (
    <div className="absolute font-['Inter:Extra_Light',sans-serif] font-extralight h-[158.391px] leading-[79.2px] left-0 not-italic text-[#171717] text-[72px] top-[56px] tracking-[-1.677px] w-[859px]" data-name="Heading 2">
      <p className="absolute css-ew64yg left-0 top-px">Your Portfolio,</p>
      <p className="absolute css-ew64yg left-0 top-[80.2px]">Perfected</p>
    </div>
  );
}

function Container93() {
  return <div className="absolute bg-gradient-to-r from-[#d4d4d4] h-px left-0 to-[rgba(0,0,0,0)] top-[254.39px] w-[80px]" data-name="Container" />;
}

function Paragraph16() {
  return (
    <div className="absolute h-[87.75px] left-0 top-[295.39px] w-[576px]" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Inter:Light',sans-serif] font-light leading-[29.25px] left-0 not-italic text-[#737373] text-[18px] top-[0.5px] tracking-[0.0105px] w-[553px]">Experience seamless investment management. Real-time insights, instant transactions, and complete portfolio control—designed for those who demand excellence.</p>
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute css-ew64yg font-['Inter:Light',sans-serif] font-light leading-[28px] left-0 not-italic text-[#171717] text-[20px] top-0 tracking-[0.0508px]">Live Market Data</p>
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="h-[22.75px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Light',sans-serif] font-light leading-[22.75px] left-0 not-italic text-[#737373] text-[14px] top-px tracking-[0.1996px]">Precision pricing updated in real-time</p>
    </div>
  );
}

function Container94() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[62.75px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading3 />
      <Paragraph17 />
    </div>
  );
}

function Heading17() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute css-ew64yg font-['Inter:Light',sans-serif] font-light leading-[28px] left-0 not-italic text-[#171717] text-[20px] top-0 tracking-[0.0508px]">Instant Execution</p>
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="h-[22.75px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Light',sans-serif] font-light leading-[22.75px] left-0 not-italic text-[#737373] text-[14px] top-px tracking-[0.1996px]">Transactions completed in moments</p>
    </div>
  );
}

function Container95() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[62.75px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading17 />
      <Paragraph18 />
    </div>
  );
}

function Heading18() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute css-ew64yg font-['Inter:Light',sans-serif] font-light leading-[28px] left-0 not-italic text-[#171717] text-[20px] top-0 tracking-[0.0508px]">Vault-Grade Security</p>
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="h-[22.75px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Light',sans-serif] font-light leading-[22.75px] left-0 not-italic text-[#737373] text-[14px] top-px tracking-[0.1996px]">Bank-level protection for your assets</p>
    </div>
  );
}

function Container96() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[62.75px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading18 />
      <Paragraph19 />
    </div>
  );
}

function Container97() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[40px] h-[333.25px] items-start left-0 pb-px top-[447.14px] w-[859px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none" />
      <Container94 />
      <Container95 />
      <Container96 />
    </div>
  );
}

function Icon31() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_40_3348)" id="Icon">
          <path d={svgPaths.p1e9ff800} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p26069bc0} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_40_3348">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container98() {
  return (
    <div className="h-[12.852px] opacity-70 relative shrink-0 w-full" data-name="Container">
      <p className="absolute css-ew64yg font-['Inter:Light',sans-serif] font-light leading-[12.857px] left-0 not-italic text-[9px] text-white top-0 tracking-[2.867px] uppercase">Download</p>
    </div>
  );
}

function Container99() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute css-ew64yg font-['Inter:Light',sans-serif] font-light leading-[20px] left-0 not-italic text-[14px] text-white top-[0.5px] tracking-[0.1996px]">App Store</p>
    </div>
  );
}

function AppDownload() {
  return (
    <div className="h-[32.852px] relative shrink-0 w-[75.023px]" data-name="AppDownload">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container98 />
        <Container99 />
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-black h-[64px] relative shrink-0 w-[139.023px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-center justify-center relative size-full">
        <Icon31 />
        <AppDownload />
      </div>
    </div>
  );
}

function Icon32() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 2L13.3333 8L4 14V2Z" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Container100() {
  return (
    <div className="h-[12.852px] opacity-70 relative shrink-0 w-full" data-name="Container">
      <p className="absolute css-ew64yg font-['Inter:Light',sans-serif] font-light leading-[12.857px] left-0 not-italic text-[9px] text-white top-0 tracking-[2.867px] uppercase">Download</p>
    </div>
  );
}

function Container101() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute css-ew64yg font-['Inter:Light',sans-serif] font-light leading-[20px] left-0 not-italic text-[14px] text-white top-[0.5px] tracking-[0.1996px]">Google Play</p>
    </div>
  );
}

function AppDownload1() {
  return (
    <div className="h-[32.852px] relative shrink-0 w-[79.734px]" data-name="AppDownload">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container100 />
        <Container101 />
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-black h-[64px] relative shrink-0 w-[143.734px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-center justify-center relative size-full">
        <Icon32 />
        <AppDownload1 />
      </div>
    </div>
  );
}

function Container102() {
  return (
    <div className="absolute content-stretch flex gap-[20px] h-[64px] items-start left-0 top-[844.39px] w-[859px]" data-name="Container">
      <Button5 />
      <Button6 />
    </div>
  );
}

function Container103() {
  return (
    <div className="absolute h-[908.391px] left-[40px] top-[160px] w-[859px]" data-name="Container">
      <Text24 />
      <Heading16 />
      <Container93 />
      <Paragraph16 />
      <Container97 />
      <Container102 />
    </div>
  );
}

function ImageWithFallback() {
  return (
    <div className="h-[1143.328px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Container104() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] h-[1145.328px] left-[40px] top-[1180.39px] w-[859px]" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <ImageWithFallback />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f5f5f5] border-solid inset-0 pointer-events-none shadow-[0px_25px_50px_-12px_rgba(23,23,23,0.1)]" />
    </div>
  );
}

function AppDownload2() {
  return (
    <div className="bg-white h-[2485.719px] relative shrink-0 w-full" data-name="AppDownload">
      <Container103 />
      <Container104 />
    </div>
  );
}

function Container105() {
  return <div className="absolute h-[2415.641px] left-0 top-0 w-[939px]" data-name="Container" style={{ backgroundImage: "linear-gradient(111.242deg, rgba(23, 23, 23, 0.8) 0%, rgba(0, 0, 0, 0) 50%, rgba(23, 23, 23, 0.8) 100%)" }} />;
}

function ImageWithFallback1() {
  return (
    <div className="absolute h-[647.84px] left-[-2.39px] top-[-1.79px] w-[863.786px]" data-name="ImageWithFallback">
      <img alt="Silver bars in different sizes from production" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src="https://images.unsplash.com/photo-1621028025774-104e1816b176?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWx2ZXIlMjBiYXJzJTIwcHJvZHVjdGlvbiUyMG1hbnVmYWN0dXJpbmd8ZW58MXx8fHwxNzY5NDE4NTQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" />
    </div>
  );
}

function Container106() {
  return <div className="absolute border border-[rgba(255,255,255,0.1)] border-solid h-[644.25px] left-0 top-0 w-[859px]" data-name="Container" />;
}

function Container107() {
  return (
    <div className="col-[1] css-3foyfs overflow-clip relative row-[1] self-stretch shrink-0" data-name="Container">
      <ImageWithFallback1 />
      <Container106 />
    </div>
  );
}

function Text25() {
  return (
    <div className="absolute content-stretch flex h-[11.5px] items-start left-0 top-[8.5px] w-[200.703px]" data-name="Text">
      <p className="css-ew64yg font-['Inter:Light',sans-serif] font-light leading-[15px] not-italic relative shrink-0 text-[10px] text-[rgba(255,255,255,0.3)] tracking-[4.1172px] uppercase">Enterprise Solutions</p>
    </div>
  );
}

function Heading19() {
  return (
    <div className="absolute font-['Inter:Extra_Light',sans-serif] font-extralight h-[158.391px] leading-[79.2px] left-0 not-italic text-[72px] text-white top-[56px] tracking-[-1.677px] w-[859px]" data-name="Heading 2">
      <p className="absolute css-ew64yg left-0 top-px">For the</p>
      <p className="absolute css-ew64yg left-0 top-[80.2px]">Discerning Few</p>
    </div>
  );
}

function Container108() {
  return <div className="absolute bg-gradient-to-r from-[rgba(255,255,255,0.3)] h-px left-0 to-[rgba(0,0,0,0)] top-[254.39px] w-[80px]" data-name="Container" />;
}

function Paragraph20() {
  return (
    <div className="absolute h-[58.5px] left-0 top-[295.39px] w-[576px]" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Inter:Light',sans-serif] font-light leading-[29.25px] left-0 not-italic text-[18px] text-[rgba(255,255,255,0.5)] top-[0.5px] tracking-[0.0105px] w-[524px]">Exceptional service for jewelers, institutions, and sophisticated investors. Bespoke solutions crafted to your specifications.</p>
    </div>
  );
}

function Icon33() {
  return (
    <div className="h-[28px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[8.33%] left-1/4 right-1/4 top-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-1.88%_-3.12%_-1.88%_-3.13%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.875 24.2083">
            <path d={svgPaths.p23e43200} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[8.33%] left-[8.33%] right-3/4 top-1/2" data-name="Vector">
        <div className="absolute inset-[-3.75%_-9.37%_-3.75%_-9.38%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.54167 12.5417">
            <path d={svgPaths.pac8ac80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[8.33%] left-3/4 right-[8.33%] top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-2.88%_-9.37%_-2.88%_-9.38%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.54167 16.0417">
            <path d={svgPaths.p21e7a000} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3/4 left-[41.67%] right-[41.67%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-0.44px_-9.37%_-0.44px_-9.38%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.54167 0.875">
            <path d="M0.4375 0.4375H5.10417" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[41.67%_41.67%_58.33%_41.67%]" data-name="Vector">
        <div className="absolute inset-[-0.44px_-9.37%_-0.44px_-9.38%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.54167 0.875">
            <path d="M0.4375 0.4375H5.10417" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[58.33%_41.67%_41.67%_41.67%]" data-name="Vector">
        <div className="absolute inset-[-0.44px_-9.37%_-0.44px_-9.38%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.54167 0.875">
            <path d="M0.4375 0.4375H5.10417" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/4 left-[41.67%] right-[41.67%] top-3/4" data-name="Vector">
        <div className="absolute inset-[-0.44px_-9.37%_-0.44px_-9.38%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.54167 0.875">
            <path d="M0.4375 0.4375H5.10417" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container109() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-px pt-[17px] px-[17px] size-[62px] top-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none" />
      <Icon33 />
    </div>
  );
}

function Heading20() {
  return (
    <div className="absolute h-[28px] left-0 top-[86px] w-[405.5px]" data-name="Heading 4">
      <p className="absolute css-ew64yg font-['Inter:Light',sans-serif] font-light leading-[28px] left-0 not-italic text-[20px] text-white top-0 tracking-[0.0508px]">Bespoke Pricing</p>
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="absolute h-[22.75px] left-0 top-[126px] w-[405.5px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Light',sans-serif] font-light leading-[22.75px] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.4)] top-px tracking-[0.1996px]">Tailored rates for substantial acquisitions</p>
    </div>
  );
}

function Container110() {
  return (
    <div className="col-[1] css-3foyfs relative row-[1] self-stretch shrink-0" data-name="Container">
      <Container109 />
      <Heading20 />
      <Paragraph21 />
    </div>
  );
}

function Icon34() {
  return (
    <div className="h-[28px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/4 left-[8.33%] right-[41.67%] top-[16.67%]" data-name="Vector">
        <div className="absolute inset-[-2.68%_-3.12%_-2.68%_-3.13%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.875 17.2083">
            <path d={svgPaths.p1fa51200} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-3/4" data-name="Vector">
        <div className="absolute inset-[-0.44px_-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.875 0.875">
            <path d="M7.4375 0.4375H0.4375" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/4 left-[58.33%] right-[8.33%] top-[33.33%]" data-name="Vector">
        <div className="absolute inset-[-3.75%_-4.69%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.2083 12.5417">
            <path d={svgPaths.p1ff30dd0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[66.67%_20.83%_16.67%_62.5%]" data-name="Vector">
        <div className="absolute inset-[-9.38%_-9.37%_-9.37%_-9.38%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.54167 5.54167">
            <path d={svgPaths.p337ebc00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[66.67%_62.5%_16.67%_20.83%]" data-name="Vector">
        <div className="absolute inset-[-9.38%_-9.37%_-9.37%_-9.38%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.54167 5.54167">
            <path d={svgPaths.p337ebc00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container111() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-px pt-[17px] px-[17px] size-[62px] top-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none" />
      <Icon34 />
    </div>
  );
}

function Heading21() {
  return (
    <div className="absolute h-[28px] left-0 top-[86px] w-[405.5px]" data-name="Heading 4">
      <p className="absolute css-ew64yg font-['Inter:Light',sans-serif] font-light leading-[28px] left-0 not-italic text-[20px] text-white top-0 tracking-[0.0508px]">Priority Logistics</p>
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="absolute h-[22.75px] left-0 top-[126px] w-[405.5px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Light',sans-serif] font-light leading-[22.75px] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.4)] top-px tracking-[0.1996px]">Expedited delivery with precision tracking</p>
    </div>
  );
}

function Container112() {
  return (
    <div className="col-[2] css-3foyfs relative row-[1] self-stretch shrink-0" data-name="Container">
      <Container111 />
      <Heading21 />
      <Paragraph22 />
    </div>
  );
}

function Icon35() {
  return (
    <div className="h-[28px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%_16.67%_8.32%_16.67%]" data-name="Vector">
        <div className="absolute inset-[-1.87%_-2.34%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5417 24.2122">
            <path d={svgPaths.p9474800} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container113() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-px pt-[17px] px-[17px] size-[62px] top-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none" />
      <Icon35 />
    </div>
  );
}

function Heading22() {
  return (
    <div className="absolute h-[28px] left-0 top-[86px] w-[405.5px]" data-name="Heading 4">
      <p className="absolute css-ew64yg font-['Inter:Light',sans-serif] font-light leading-[28px] left-0 not-italic text-[20px] text-white top-0 tracking-[0.0508px]">Certified Quality</p>
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="absolute h-[22.75px] left-0 top-[126px] w-[405.5px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Light',sans-serif] font-light leading-[22.75px] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.4)] top-px tracking-[0.1996px]">Authenticated purity with documentation</p>
    </div>
  );
}

function Container114() {
  return (
    <div className="col-[1] css-3foyfs relative row-[2] self-stretch shrink-0" data-name="Container">
      <Container113 />
      <Heading22 />
      <Paragraph23 />
    </div>
  );
}

function Icon36() {
  return (
    <div className="h-[28px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-2.08%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.875 21.875">
            <path d={svgPaths.pd66100} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container115() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-px pt-[17px] px-[17px] size-[62px] top-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none" />
      <Icon36 />
    </div>
  );
}

function Heading23() {
  return (
    <div className="absolute h-[28px] left-0 top-[86px] w-[405.5px]" data-name="Heading 4">
      <p className="absolute css-ew64yg font-['Inter:Light',sans-serif] font-light leading-[28px] left-0 not-italic text-[20px] text-white top-0 tracking-[0.0508px]">Concierge Service</p>
    </div>
  );
}

function Paragraph24() {
  return (
    <div className="absolute h-[22.75px] left-0 top-[126px] w-[405.5px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Light',sans-serif] font-light leading-[22.75px] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.4)] top-px tracking-[0.1996px]">Dedicated relationship management</p>
    </div>
  );
}

function Container116() {
  return (
    <div className="col-[2] css-3foyfs relative row-[2] self-stretch shrink-0" data-name="Container">
      <Container115 />
      <Heading23 />
      <Paragraph24 />
    </div>
  );
}

function Container117() {
  return (
    <div className="absolute gap-[48px] grid grid-cols-[repeat(2,_minmax(0,_1fr))] grid-rows-[repeat(2,_minmax(0,_1fr))] h-[345.5px] left-0 top-[417.89px] w-[859px]" data-name="Container">
      <Container110 />
      <Container112 />
      <Container114 />
      <Container116 />
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-white h-[56px] relative shrink-0 w-[269.578px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[40px] py-[8px] relative size-full">
        <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[15px] not-italic relative shrink-0 text-[10px] text-black text-center tracking-[3.1172px] uppercase">Request Consultation</p>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="bg-[#ffff1f] h-[56px] relative shrink-0 w-[198.586px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[41px] py-[9px] relative size-full">
        <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[15px] not-italic relative shrink-0 text-[10px] text-center text-white tracking-[3.1172px] uppercase">Contact Team</p>
      </div>
    </div>
  );
}

function Container118() {
  return (
    <div className="absolute content-stretch flex gap-[20px] h-[56px] items-start left-0 top-[1283.39px] w-[859px]" data-name="Container">
      <Button7 />
      <Button8 />
    </div>
  );
}

function Heading24() {
  return (
    <div className="content-stretch flex h-[36px] items-start relative shrink-0 w-full" data-name="Heading 3">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Extra_Light',sans-serif] font-extralight leading-[36px] min-h-px min-w-px not-italic relative text-[30px] text-white tracking-[1.1455px]">Volume Tiers</p>
    </div>
  );
}

function Text26() {
  return (
    <div className="h-[24px] relative shrink-0 w-[83.57px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Light',sans-serif] font-light leading-[24px] left-0 not-italic text-[16px] text-[rgba(255,255,255,0.5)] top-[-0.5px] tracking-[0.0875px]">1kg — 10kg</p>
      </div>
    </div>
  );
}

function Text27() {
  return (
    <div className="h-[16px] relative shrink-0 w-[186.945px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Light',sans-serif] font-light leading-[16px] left-0 not-italic text-[12px] text-white top-px tracking-[2.4px] uppercase">5% Premium Discount</p>
      </div>
    </div>
  );
}

function Container119() {
  return (
    <div className="content-stretch flex h-[57px] items-center justify-between pb-px relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.05)] border-b border-solid inset-0 pointer-events-none" />
      <Text26 />
      <Text27 />
    </div>
  );
}

function Text28() {
  return (
    <div className="h-[24px] relative shrink-0 w-[96.297px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Light',sans-serif] font-light leading-[24px] left-0 not-italic text-[16px] text-[rgba(255,255,255,0.5)] top-[-0.5px] tracking-[0.0875px]">10kg — 50kg</p>
      </div>
    </div>
  );
}

function Text29() {
  return (
    <div className="h-[16px] relative shrink-0 w-[194.867px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Light',sans-serif] font-light leading-[16px] left-0 not-italic text-[12px] text-white top-px tracking-[2.4px] uppercase">10% Premium Discount</p>
      </div>
    </div>
  );
}

function Container120() {
  return (
    <div className="content-stretch flex h-[57px] items-center justify-between pb-px relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.05)] border-b border-solid inset-0 pointer-events-none" />
      <Text28 />
      <Text29 />
    </div>
  );
}

function Text30() {
  return (
    <div className="h-[24px] relative shrink-0 w-[48.164px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Light',sans-serif] font-light leading-[24px] left-0 not-italic text-[16px] text-[rgba(255,255,255,0.5)] top-[-0.5px] tracking-[0.0875px]">50kg+</p>
      </div>
    </div>
  );
}

function Text31() {
  return (
    <div className="h-[16px] relative shrink-0 w-[140.414px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Light',sans-serif] font-light leading-[16px] left-0 not-italic text-[12px] text-white top-px tracking-[2.4px] uppercase">Bespoke Pricing</p>
      </div>
    </div>
  );
}

function Container121() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text30 />
      <Text31 />
    </div>
  );
}

function Container122() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] h-[202px] items-start relative shrink-0 w-full" data-name="Container">
      <Container119 />
      <Container120 />
      <Container121 />
    </div>
  );
}

function Container123() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[40px] h-[376px] items-start left-0 pb-px pt-[49px] px-[49px] top-[843.39px] w-[859px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none" />
      <Heading24 />
      <Container122 />
    </div>
  );
}

function Container124() {
  return (
    <div className="col-[1] css-3foyfs h-[1339.391px] relative row-[2] shrink-0" data-name="Container">
      <Text25 />
      <Heading19 />
      <Container108 />
      <Paragraph20 />
      <Container117 />
      <Container118 />
      <Container123 />
    </div>
  );
}

function Container125() {
  return (
    <div className="absolute gap-[112px] grid grid-cols-[repeat(1,_minmax(0,_1fr))] grid-rows-[__minmax(0,_644.25fr)_minmax(0,_1fr)] h-[2095.641px] left-[40px] top-[160px] w-[859px]" data-name="Container">
      <Container107 />
      <Container124 />
    </div>
  );
}

function BulkOrders() {
  return (
    <div className="bg-[#0a0a0a] h-[2415.641px] overflow-clip relative shrink-0 w-full" data-name="BulkOrders">
      <Container105 />
      <Container125 />
    </div>
  );
}

function ImageAtticaSilver() {
  return (
    <div className="absolute h-[56px] left-0 opacity-90 top-0 w-[116.07px]" data-name="Image (Attica Silver)">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageAtticaSilver} />
    </div>
  );
}

function Paragraph25() {
  return (
    <div className="absolute h-[45.5px] left-0 top-[96px] w-[389.5px]" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Inter:Light',sans-serif] font-light leading-[22.75px] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.4)] top-px tracking-[0.1996px] w-[310px]">Redefining precious metal investment. Luxury, accessibility, and excellence in every detail.</p>
    </div>
  );
}

function Container126() {
  return (
    <div className="col-[1] css-3foyfs relative row-[1] self-stretch shrink-0" data-name="Container">
      <ImageAtticaSilver />
      <Paragraph25 />
    </div>
  );
}

function Heading25() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute css-ew64yg font-['Inter:Light',sans-serif] font-light leading-[15px] left-0 not-italic text-[10px] text-[rgba(255,255,255,0.3)] top-[0.5px] tracking-[4.1172px] uppercase">Navigate</p>
    </div>
  );
}

function Link1() {
  return (
    <div className="absolute content-stretch flex h-[16.5px] items-start left-0 top-[4.5px] w-[67.641px]" data-name="Link">
      <p className="css-ew64yg font-['Inter:Light',sans-serif] font-light leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.5)] tracking-[0.1996px]">Collection</p>
    </div>
  );
}

function ListItem() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link1 />
    </div>
  );
}

function Link2() {
  return (
    <div className="absolute content-stretch flex h-[16.5px] items-start left-0 top-[4.5px] w-[74.055px]" data-name="Link">
      <p className="css-ew64yg font-['Inter:Light',sans-serif] font-light leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.5)] tracking-[0.1996px]">Investment</p>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link2 />
    </div>
  );
}

function Link3() {
  return (
    <div className="absolute content-stretch flex h-[16.5px] items-start left-0 top-[4.5px] w-[40.289px]" data-name="Link">
      <p className="css-ew64yg font-['Inter:Light',sans-serif] font-light leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.5)] tracking-[0.1996px]">About</p>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link3 />
    </div>
  );
}

function Link4() {
  return (
    <div className="absolute content-stretch flex h-[16.5px] items-start left-0 top-[4.5px] w-[80.727px]" data-name="Link">
      <p className="css-ew64yg font-['Inter:Light',sans-serif] font-light leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.5)] tracking-[0.1996px]">Authenticity</p>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link4 />
    </div>
  );
}

function Link5() {
  return (
    <div className="absolute content-stretch flex h-[16.5px] items-start left-0 top-[4.5px] w-[50.094px]" data-name="Link">
      <p className="css-ew64yg font-['Inter:Light',sans-serif] font-light leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.5)] tracking-[0.1996px]">Service</p>
    </div>
  );
}

function ListItem4() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link5 />
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] h-[200px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem />
      <ListItem1 />
      <ListItem2 />
      <ListItem3 />
      <ListItem4 />
    </div>
  );
}

function Container127() {
  return (
    <div className="col-[2] content-stretch css-vsca90 flex flex-col gap-[40px] items-start relative row-[1] self-stretch shrink-0" data-name="Container">
      <Heading25 />
      <List />
    </div>
  );
}

function Heading26() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute css-ew64yg font-['Inter:Light',sans-serif] font-light leading-[15px] left-0 not-italic text-[10px] text-[rgba(255,255,255,0.3)] top-[0.5px] tracking-[4.1172px] uppercase">Legal</p>
    </div>
  );
}

function Link6() {
  return (
    <div className="absolute content-stretch flex h-[16.5px] items-start left-0 top-[4.5px] w-[112.789px]" data-name="Link">
      <p className="css-ew64yg font-['Inter:Light',sans-serif] font-light leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.5)] tracking-[0.1996px]">Terms of Service</p>
    </div>
  );
}

function ListItem5() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link6 />
    </div>
  );
}

function Link7() {
  return (
    <div className="absolute content-stretch flex h-[16.5px] items-start left-0 top-[4.5px] w-[92.664px]" data-name="Link">
      <p className="css-ew64yg font-['Inter:Light',sans-serif] font-light leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.5)] tracking-[0.1996px]">Privacy Policy</p>
    </div>
  );
}

function ListItem6() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link7 />
    </div>
  );
}

function Link8() {
  return (
    <div className="absolute content-stretch flex h-[16.5px] items-start left-0 top-[4.5px] w-[102.836px]" data-name="Link">
      <p className="css-ew64yg font-['Inter:Light',sans-serif] font-light leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.5)] tracking-[0.1996px]">Shipping Policy</p>
    </div>
  );
}

function ListItem7() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link8 />
    </div>
  );
}

function Link9() {
  return (
    <div className="absolute content-stretch flex h-[16.5px] items-start left-0 top-[4.5px] w-[52.047px]" data-name="Link">
      <p className="css-ew64yg font-['Inter:Light',sans-serif] font-light leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.5)] tracking-[0.1996px]">Returns</p>
    </div>
  );
}

function ListItem8() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link9 />
    </div>
  );
}

function Link10() {
  return (
    <div className="absolute content-stretch flex h-[16.5px] items-start left-0 top-[4.5px] w-[79.258px]" data-name="Link">
      <p className="css-ew64yg font-['Inter:Light',sans-serif] font-light leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.5)] tracking-[0.1996px]">Compliance</p>
    </div>
  );
}

function ListItem9() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link10 />
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] h-[200px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem5 />
      <ListItem6 />
      <ListItem7 />
      <ListItem8 />
      <ListItem9 />
    </div>
  );
}

function Container128() {
  return (
    <div className="col-[1] content-stretch css-vsca90 flex flex-col gap-[40px] items-start relative row-[2] self-stretch shrink-0" data-name="Container">
      <Heading26 />
      <List1 />
    </div>
  );
}

function Heading27() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute css-ew64yg font-['Inter:Light',sans-serif] font-light leading-[15px] left-0 not-italic text-[10px] text-[rgba(255,255,255,0.3)] top-[0.5px] tracking-[4.1172px] uppercase">Contact</p>
    </div>
  );
}

function Icon37() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p17070980} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3" strokeWidth="0.666667" />
          <path d={svgPaths.p120c8200} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3" strokeWidth="0.666667" />
        </g>
      </svg>
    </div>
  );
}

function Link11() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[184.938px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="css-ew64yg font-['Inter:Light',sans-serif] font-light leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.5)] tracking-[0.1996px]">concierge@atticasilver.com</p>
      </div>
    </div>
  );
}

function ListItem10() {
  return (
    <div className="content-stretch flex gap-[16px] h-[24px] items-start pt-[4px] relative shrink-0 w-full" data-name="List Item">
      <Icon37 />
      <Link11 />
    </div>
  );
}

function Icon38() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p21a2100} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3" strokeWidth="0.666667" />
        </g>
      </svg>
    </div>
  );
}

function Link12() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[118.18px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="css-ew64yg font-['Inter:Light',sans-serif] font-light leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.5)] tracking-[0.1996px]">+91 12345 67890</p>
      </div>
    </div>
  );
}

function ListItem11() {
  return (
    <div className="content-stretch flex gap-[16px] h-[24px] items-start pt-[4px] relative shrink-0 w-full" data-name="List Item">
      <Icon38 />
      <Link12 />
    </div>
  );
}

function Icon39() {
  return (
    <div className="absolute left-0 size-[16px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p14548f00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3" strokeWidth="0.666667" />
          <path d={svgPaths.p17781bc0} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3" strokeWidth="0.666667" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph26() {
  return (
    <div className="absolute font-['Inter:Light',sans-serif] font-light h-[45.5px] leading-[22.75px] left-[32px] not-italic text-[14px] text-[rgba(255,255,255,0.5)] top-0 tracking-[0.1996px] w-[200.961px]" data-name="Paragraph">
      <p className="absolute css-ew64yg left-0 top-px">123 Silver Street</p>
      <p className="absolute css-ew64yg left-0 top-[23.75px]">Mumbai, Maharashtra 400001</p>
    </div>
  );
}

function ListItem12() {
  return (
    <div className="h-[45.5px] relative shrink-0 w-full" data-name="List Item">
      <Icon39 />
      <Paragraph26 />
    </div>
  );
}

function List2() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] h-[157.5px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem10 />
      <ListItem11 />
      <ListItem12 />
    </div>
  );
}

function Container129() {
  return (
    <div className="col-[2] content-stretch css-vsca90 flex flex-col gap-[40px] items-start relative row-[2] self-stretch shrink-0" data-name="Container">
      <Heading27 />
      <List2 />
    </div>
  );
}

function Container130() {
  return (
    <div className="gap-[80px] grid grid-cols-[repeat(2,_minmax(0,_1fr))] grid-rows-[repeat(2,_minmax(0,_1fr))] h-[590px] relative shrink-0 w-full" data-name="Container">
      <Container126 />
      <Container127 />
      <Container128 />
      <Container129 />
    </div>
  );
}

function Paragraph27() {
  return (
    <div className="h-[15px] relative shrink-0 w-[357.438px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Light',sans-serif] font-light leading-[15px] left-0 not-italic text-[10px] text-[rgba(255,255,255,0.3)] top-[0.5px] tracking-[3.1172px] uppercase">© 2026 Attica Silver. All Rights Reserved.</p>
      </div>
    </div>
  );
}

function Link13() {
  return (
    <div className="flex-[1_0_0] h-[15px] min-h-px min-w-px relative" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Light',sans-serif] font-light leading-[15px] left-0 not-italic text-[10px] text-[rgba(255,255,255,0.3)] top-[0.5px] tracking-[3.1172px] uppercase">Instagram</p>
      </div>
    </div>
  );
}

function Link14() {
  return (
    <div className="h-[15px] relative shrink-0 w-[69.695px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Light',sans-serif] font-light leading-[15px] left-0 not-italic text-[10px] text-[rgba(255,255,255,0.3)] top-[0.5px] tracking-[3.1172px] uppercase">LinkedIn</p>
      </div>
    </div>
  );
}

function Link15() {
  return (
    <div className="h-[15px] relative shrink-0 w-[64.992px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Light',sans-serif] font-light leading-[15px] left-0 not-italic text-[10px] text-[rgba(255,255,255,0.3)] top-[0.5px] tracking-[3.1172px] uppercase">Twitter</p>
      </div>
    </div>
  );
}

function Container131() {
  return (
    <div className="h-[15px] relative shrink-0 w-[315.734px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[48px] items-start relative size-full">
        <Link13 />
        <Link14 />
        <Link15 />
      </div>
    </div>
  );
}

function Container132() {
  return (
    <div className="content-stretch flex h-[15px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Paragraph27 />
      <Container131 />
    </div>
  );
}

function Container133() {
  return (
    <div className="content-stretch flex flex-col h-[64px] items-start pt-[49px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.05)] border-solid border-t inset-0 pointer-events-none" />
      <Container132 />
    </div>
  );
}

function Container134() {
  return (
    <div className="h-[990px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[112px] items-start pt-[112px] px-[40px] relative size-full">
        <Container130 />
        <Container133 />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-black content-stretch flex flex-col h-[991px] items-start pt-px relative shrink-0 w-full" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.05)] border-solid border-t inset-0 pointer-events-none" />
      <Container134 />
    </div>
  );
}

function App() {
  return (
    <div className="content-stretch flex flex-col h-[770px] items-start relative shrink-0 w-full" data-name="App">
      <Hero />
      <Features />
      <HowItWorks />
      <Products />
      <AppDownload2 />
      <BulkOrders />
      <Footer />
    </div>
  );
}

function Icon40() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M2.66667 8H13.3333" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.666667" />
          <path d="M2.66667 4H13.3333" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.666667" />
          <path d="M2.66667 12H13.3333" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.666667" />
        </g>
      </svg>
    </div>
  );
}

function Text32() {
  return (
    <div className="flex-[1_0_0] h-[16px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Light',sans-serif] font-light leading-[16px] left-[22.5px] not-italic text-[12px] text-center text-white top-px tracking-[2.4px] translate-x-[-50%] uppercase">Menu</p>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="h-[16px] relative shrink-0 w-[72.5px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Icon40 />
        <Text32 />
      </div>
    </div>
  );
}

function Icon41() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p8cdb700} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.583333" />
          <path d="M12.25 12.25L9.74167 9.74167" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.583333" />
        </g>
      </svg>
    </div>
  );
}

function Text33() {
  return (
    <div className="flex-[1_0_0] h-[16px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Light',sans-serif] font-light leading-[16px] left-[31px] not-italic text-[12px] text-center text-white top-px tracking-[2.4px] translate-x-[-50%] uppercase">Search</p>
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div className="flex-[1_0_0] h-[16px] min-h-px min-w-px relative" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Icon41 />
        <Text33 />
      </div>
    </div>
  );
}

function Icon42() {
  return (
    <div className="flex-[1_0_0] h-[14px] min-h-px min-w-px relative" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-[8.33%_16.67%]" data-name="Vector">
          <div className="absolute inset-[-2.5%_-3.13%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.91667 12.2499">
              <path d={svgPaths.p3f621da0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.583333" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[29.17%_37.5%_45.83%_37.5%]" data-name="Vector">
          <div className="absolute inset-[-8.33%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.08333 4.08333">
              <path d={svgPaths.p97e0c00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.583333" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button11() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Icon42 />
      </div>
    </div>
  );
}

function Icon43() {
  return (
    <div className="flex-[1_0_0] h-[14px] min-h-px min-w-px relative" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-[12.5%_8.33%]" data-name="Vector">
          <div className="absolute inset-[-2.78%_-2.5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.25 11.0833">
              <path d={svgPaths.p12daa500} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.583333" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button12() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Icon43 />
      </div>
    </div>
  );
}

function Container135() {
  return (
    <div className="h-[16px] relative shrink-0 w-[175.984px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[32px] items-center relative size-full">
        <Button10 />
        <Button11 />
        <Button12 />
      </div>
    </div>
  );
}

function Container136() {
  return (
    <div className="absolute content-stretch flex h-[57px] items-center justify-between left-0 pb-px px-[40px] top-0 w-[939px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.05)] border-b border-solid inset-0 pointer-events-none" />
      <Button9 />
      <Container135 />
    </div>
  );
}

function ImageAtticaSilver1() {
  return (
    <div className="absolute h-[48px] left-[419.76px] opacity-95 top-[4.5px] w-[99.484px]" data-name="Image (Attica Silver)">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageAtticaSilver} />
    </div>
  );
}

function Hero1() {
  return (
    <div className="bg-[#006039] h-[57px] relative shrink-0 w-full" data-name="Hero">
      <Container136 />
      <ImageAtticaSilver1 />
    </div>
  );
}

export default function SilverInvestmentWebsite() {
  return (
    <div className="bg-[#ffff1f] content-stretch flex flex-col gap-[7490px] items-start relative size-full" data-name="Silver Investment Website">
      <App />
      <Hero1 />
    </div>
  );
}