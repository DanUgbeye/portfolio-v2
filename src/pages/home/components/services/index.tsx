import React from "react";
import StyledSection from "../../../../components/StyledSection.component";
import services from "../../../../data/services/services.data";
import Service from "./Service.component";

export default function ServicesSection() {
  return (
    <StyledSection className=" -mt-[14rem] ">
      <div className=" w-full ">
        <h4 className=" font-bold mb-3 text-center ">MY SERVICES</h4>
      </div>

      <div
        id="services"
        className=" grid grid-cols-[repeat(auto-fit,_minmax(20rem,_1fr))] gap-x-5 gap-y-10 "
      >
        {services.map((service, index) => (
          <Service key={index} {...service} />
        ))}
      </div>
    </StyledSection>
  );
}
