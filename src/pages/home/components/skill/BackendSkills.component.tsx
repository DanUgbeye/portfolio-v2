import React from "react";
import Skill from "./Skill.component";

// data import
import backendSkills from "../../../../data/skills/backendSkills.data";

export default function BackendSkills() {
  return (
    <div className=" min-w-fit w-full " >
      <h4 className=" mb-4 ">BACK END SKILLS</h4>

      <div className=" flex flex-wrap md:flex-col gap-x-2 gap-y-2 ">
        {backendSkills.map((skill, index) => (
          <Skill key={index} {...skill} />
        ))}
      </div>
    </div>
  );
}
