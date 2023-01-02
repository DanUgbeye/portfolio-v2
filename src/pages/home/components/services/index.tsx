import React from "react";
import StyledSection from "../../../../components/StyledSection.component";
import services from "../../../../data/services/services.data";
import Service from "./Service.component";

export default function ServicesSection() {
  return (
    <StyledSection className=" -mt-[14rem] ">
      <div id="services" className=" grid grid-cols-[repeat(auto-fit,_minmax(15rem,_1fr))] gap-x-5 gap-y-5 ">
        {services.map((service, index) => (
          <Service
            key={index}
            {...service}
          />
        ))}
      </div>
    </StyledSection>
  );
}
