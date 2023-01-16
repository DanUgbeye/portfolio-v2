import React from "react";
import Skill from "./Skill.component";

// data import
import otherSkills from "../../../../data/skills/otherSkills.data";

export default function OtherSkills() {
  return (
    <div className=" min-w-fit w-full ">
      <h4 className=" mb-4 ">OTHERS</h4>

      <div className="flex flex-wrap justify-between gap-x-4 gap-y-4  ">
        {otherSkills.map((skill, index) => (
          <Skill key={index} {...skill} />
        ))}
      </div>
    </div>
  );
}
