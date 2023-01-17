import React from "react";
import Skill from "./Skill.component";

// data import
import backendSkills from "../../../../data/skills/backendSkills.data";

export default function BackendSkills() {
  return (
    <div className=" min-w-fit w-full " >
      <h4 className=" mb-4 ">BACK END SKILLS</h4>

      <div className=" flex flex-wrap justify-between md:justify-start gap-x-4 gap-y-4 ">
        {backendSkills.map((skill, index) => (
          <Skill key={index} {...skill} />
        ))}
      </div>
    </div>
  );
}
