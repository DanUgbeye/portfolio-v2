import React from "react";
import Skill from "./Skill.component";

// data import
import frontendSkills from "../../../../data/skills/frontendSkills.data";

export default function FrontendSkills() {
  return (
    <div className=" min-w-fit w-full ">
      <h4 className=" mb-4 ">FRONT END SKILLS</h4>

      <div className=" flex flex-wrap md:flex-col gap-x-2 gap-y-2  ">
        {frontendSkills.map((skill, index) => (
          <Skill key={index} {...skill} />
        ))}
      </div>
    </div>
  );
}
