import React from "react";
import IntroText from "./IntroText.component";
import HeroSvg from "../../../../assets/svg/hero.svg";
import StyledSection from "../../../../components/StyledSection.component";

export default function HeroSection() {
  return (
    <StyledSection className="  ">
      <div className=" flex flex-col md:flex-row gap-x-2 gap-y-4 items-center mt-10 ">
        <IntroText />
        <div className=" w-full ">
          <img src={HeroSvg} className={" mx-auto max-w-[25rem] md:max-w-none w-full -translate-y-14 "} alt="hero" />
        </div>
      </div>
    </StyledSection>
  );
}
