import React from "react";
import IntroText from "./IntroText.component";
import HeroSvg from "../../../../assets/svg/hero.svg";
import StyledSection from "../../../../components/StyledSection.component";
import { motion, Variants } from "framer-motion";

const HeroSectionVariants: Variants = {
  inView: {
    opacity: 1,
  },

  hidden: {
    opacity: 0,
  },
};

const HeroImageVariants: Variants = {
  inView: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.2,
    },
  },

  hidden: {
    opacity: 0,
    x: 1000,
  },
};

export default function HeroSection() {
  return (
    <StyledSection className="  ">
      <motion.div
        variants={HeroSectionVariants}
        initial="hidden"
        whileInView="inView"
        className=" flex flex-col md:flex-row gap-x-2 gap-y-4 items-center mt-10 overflow-hidden "
      >
        <IntroText />
        <motion.div variants={HeroImageVariants} className=" w-full ">
          <img
            loading="eager"
            src={HeroSvg}
            className={
              " mx-auto max-w-[25rem] md:max-w-none w-full -translate-y-6 "
            }
            alt="hero"
          />
        </motion.div>
      </motion.div>
    </StyledSection>
  );
}
