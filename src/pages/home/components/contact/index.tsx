import React from "react";
import StyledSection from "../../../../components/StyledSection.component";
import HelloImage from "../../../../assets/svg/hello-image.svg";
import ContactForm from "./ContactForm.component";
import { motion } from "framer-motion";
import { SlideFromLeft, SlideFromRight } from "./contact.variants";

export default function ContactSection() {
  return (
    <StyledSection className="  ">
      <div
        id="contact"
        className=" overflow-hidden pt-12 sm:pt-[10rem] pb-12 sm:pb-[10rem] flex gap-x-10 gap-y-5 "
      >
        <motion.div
          variants={SlideFromLeft}
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
          variants={SlideFromRight}
          initial="hidden"
          whileInView="inView"
          className=" w-full hidden lg:flex "
        >
          <img
            loading="lazy"
            src={HelloImage}
            alt={"hello"}
            className=" self-start object-cover min-h-full rounded-xl "
          />
        </motion.div>
      </div>
    </StyledSection>
  );
}
