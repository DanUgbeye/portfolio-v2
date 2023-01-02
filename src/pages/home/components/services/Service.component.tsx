import React from "react";

export interface ServiceProps {
  svg: string;
  name: string;
  description: string;
}

export default function Service(props: ServiceProps) {
  return (
    <div className=" bg-deep-blue-700 hover:bg-violet-light px-6 md:px-9 py-8 md:py-20 rounded-lg md:rounded-none shadow-round-lg shadow-black/20 flex flex-col gap-y-6 transition-colors duration-200 ">
      {/* TODO: work on svg color */}
      <img src={props.svg} alt={props.name} className=" w-12 aspect-square " />
      <h4 className=" font-bold text-lg ">{props.name}</h4>
      <p className=" text-sm ">{props.description}</p>
    </div>
  );
}
