import { motion, Variants } from "framer-motion";
import React from "react";
import StyledSection from "../../../../components/StyledSection.component";
import services from "../../../../data/services/services.data";
import Service from "./Service.component";

const ServiceSectionVariants: Variants = {
  inView: {
    y: 0,
    opacity: 1,
    transition: { type: "tween", ease: "easeInOut" },
  },

  hidden: {
    y: 100,
    opacity: 0,
  },
};

export default function ServicesSection() {
  return (
    <StyledSection className=" -mt-[14rem] ">
      <div className=" w-full ">
        <motion.h4
          variants={ServiceSectionVariants}
          whileInView="inView"
          initial="hidden"
          className=" font-bold text-center mb-10 "
        >
          MY SERVICES
        </motion.h4>

        <div
          id="services"
          className=" grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,_minmax(15rem,_1fr))] gap-x-4 gap-y-10 "
        >
          {services.map((service, index) => (
            <Service key={index} {...service} />
          ))}
        </div>
      </div>
    </StyledSection>
  );
}
