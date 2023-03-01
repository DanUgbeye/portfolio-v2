import React from "react";
import StyledSection from "../../../../components/StyledSection.component";
import AboutMe from "./AboutMe.component";
import SkillList from "./SkillList.component";

export default function AboutSection() {
  return (
    <StyledSection className=" bg-deep-blue-900 ">
      <div className=" flex flex-col gap-y-16 sm:gap-y-28 overflow-hidden pt-[9rem] pb-[25rem]  ">
        <AboutMe />
        <SkillList />
      </div>
    </StyledSection>
  );
}
