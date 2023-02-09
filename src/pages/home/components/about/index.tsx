import React from "react";
import StyledSection from "../../../../components/StyledSection.component";
import AboutMe from "./AboutMe.component";
import SkillList from "./SkillList.component";

export default function AboutSection() {
  return (
    <StyledSection className=" bg-deep-blue-900 pt-[4rem] sm:pt-[9rem] pb-[18rem] sm:pb-[25rem] ">
      <div className=" flex flex-col gap-x-16 gap-y-16 sm:gap-y-24 ">
        <AboutMe />
        <SkillList />
      </div>
    </StyledSection>
  );
}
