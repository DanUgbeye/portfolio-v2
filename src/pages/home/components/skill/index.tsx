import React from "react";
import StyledSection from "../../../../components/StyledSection.component";
import AboutMe from "./AboutMe.component";
import BackendSkills from "./BackendSkills.component";
import FrontendSkills from "./FrontendSkills.component";
import OtherSkills from "./OtherSkills.component";

export default function SkillSection() {
  return (
    <StyledSection className=" bg-deep-blue-900 pt-[4rem] sm:pt-[9rem] pb-[18rem] sm:pb-[21rem] ">
      <div className=" flex flex-col gap-x-16 gap-y-16 xl:flex-row ">
        <AboutMe />
        <div id="skills" className=" flex flex-col md:flex-row gap-x-9 gap-y-9 font-bold text-sm text-white w-full ">
          <FrontendSkills />
          <BackendSkills />
          <OtherSkills />
        </div>
      </div>
    </StyledSection>
  );
}
