import React from "react";

export interface SkillProps {
  name: string;
  svg: string;
  whiteBg?: boolean
}

export default function Skill(props: SkillProps) {
  return (
    <div className=" flex gap-x-2 items-center py-3 ">
      <img
        src={props.svg}
        alt={props.name}
        className={` ${props.whiteBg && "bg-white p-[1px] rounded-full "} aspect-square h-[2rem] grid place-items-center `}
      />
      <span className={" tracking-wider text-xs "}>{props.name}</span>
    </div>
  );
}
