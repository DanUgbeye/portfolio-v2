import React from "react";

export interface SkillProps {
  name: string;
  svg: string;
}

export default function Skill(props: SkillProps) {
  return (
    <div className=" flex gap-x-2 ">
      <img
        src={props.svg}
        alt={props.name}
        className={" aspect-square h-[1rem] "}
      />
      <span className={""}>{props.name}</span>
    </div>
  );
}
