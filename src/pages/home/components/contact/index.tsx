import React from "react";
import StyledSection from "../../../../components/StyledSection.component";
import HelloImage from "../../../../assets/svg/hello-image.svg";
import ContactForm from "./ContactForm.component";
import { Variants, motion } from "framer-motion";

const SlideInLeftVariants: Variants = {
  inView: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.1,
    },
  },

  hidden: {
    opacity: 0,
    x: -100,
  },
};

const SlideInRightVariants: Variants = {
  inView: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.1,
    },
  },

  hidden: {
    opacity: 0,
    x: 100,
  },
};

export default function ContactSection() {
  return (
    <StyledSection className="  ">
      <div
        id="contact"
        className=" overflow-hidden pt-12 sm:pt-[10rem] pb-12 sm:pb-[10rem] flex gap-x-10 gap-y-5 "
      >
        <motion.div
          variants={SlideInLeftVariants}
          initial="hidden"
          whileInView="inView"
          className=" w-full "
        >
          <h4 className=" font-bold mb-3 ">LET'S DISCUSS YOUR PROJECT</h4>

          <p className=" text-sm font-normal max-w-lg mb-5 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet nam
            nam imperdiet maecenas vivamus.
          </p>

          <ContactForm />
        </motion.div>

        <motion.div
          variants={SlideInRightVariants}
          initial="hidden"
          whileInView="inView"
          className=" w-full hidden lg:flex "
        >
          <img
            loading="lazy"
            src={HelloImage}
            alt={"contact me"}
            className=" self-start object-cover min-h-full rounded-xl "
          />
        </motion.div>
      </div>
    </StyledSection>
  );
}
