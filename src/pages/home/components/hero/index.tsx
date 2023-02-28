import React from "react";
import IntroText from "./IntroText.component";
import HeroSvg from "../../../../assets/svg/hero.svg";
import StyledSection from "../../../../components/StyledSection.component";
import { motion } from "framer-motion";
import { heroImageSlideIn } from "./hero.variants";

export default function HeroSection() {
  return (
    <StyledSection className="  ">
      <div className=" flex flex-col md:flex-row gap-x-2 gap-y-4 items-center mt-10 min-h-[calc(100vh-8rem)] overflow-hidden ">
        <IntroText />
        <motion.div
          variants={heroImageSlideIn}
          initial="hidden"
          whileInView="inView"
          className=" w-full "
        >
          <img
            loading="eager"
            src={HeroSvg}
            className={
              " mx-auto max-w-[25rem] md:max-w-none w-full -translate-y-6 "
            }
            alt="hero"
          />
        </motion.div>
      </div>
    </StyledSection>
  );
}
