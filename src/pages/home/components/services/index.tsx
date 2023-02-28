import React from "react";
import { motion } from "framer-motion";
import StyledSection from "../../../../components/StyledSection.component";
import services from "../../../../data/services/services.data";
import { randomKey } from "../../../../utils/randomKey.util";
import Service from "./Service.component";
import { serviceHeadingSlideFromTop } from "./service.variants";

export default function ServicesSection() {
  return (
    <StyledSection className=" -mt-[14rem] ">
      <div className=" w-full ">
        <motion.h4
          variants={serviceHeadingSlideFromTop}
          animate="visible"
          initial="hidden"
          className=" font-bold text-center mb-10 "
        >
          MY SERVICES
        </motion.h4>

        <div
          id="services"
          className=" grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,_minmax(15rem,_1fr))] gap-x-4 gap-y-10 "
        >
          {services.map((service) => (
            <Service key={randomKey()} {...service} />
          ))}
        </div>
      </div>
    </StyledSection>
  );
}
