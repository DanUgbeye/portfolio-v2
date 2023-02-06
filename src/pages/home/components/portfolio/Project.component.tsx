import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Project as ProjectData, Skill } from "../../../../../app.interface";

interface ProjectComponent extends ProjectData {
  className: string;
}

export default function Project(props: ProjectComponent) {
  return (
    <div className=" mb-6 border border-gray-700 bg-deep-blue-700 shadow-round-lg shadow-black/50 rounded-2xl flex flex-col overflow-hidden hover:bg-violet-light hover:scale-[1.01] transition-all duration-300 sm:flex-row ">
      <div className={` order-1 object-fill min-h-full w-full overflow-hidden max-h-[15rem] sm:max-h-[unset] `}>
        <img
          src={props.image}
          alt={props.name + " image"}
          className={` ${
            props.className && props.className
          }  sm:object-cover w-full min-h-full `}
        />
      </div>
      <div className={` order-2 min-h-full w-full p-4 sm:p-6 text-xs sm:text-sm flex flex-col justify-evenly gap-y-4  `}>
        <h4 className=" font-bold text-lg sm:text-xl ">{props.name}</h4>

        <p className=" text-ellipsis break-words overflow-hidden max-h-[5rem] ">{props.description}</p>

        <div className=" flex gap-x-3 gap-y-3 items-center sm:items-start sm:flex-col flex-wrap ">
          <div className=" font-bold min-w-fit ">Languages Used </div>

          <div className=" flex gap-4 flex-wrap items-center ">
            {props.stack.map((stack: Skill, index) => (
              <img
                key={index}
                src={stack.svg}
                alt={stack.name}
                className={` ${
                  stack.whiteBg && "bg-white p-[1px] rounded-full "
                } w-5 sm:w-6 `}
              />
            ))}
          </div>
        </div>

        <div className=" mb-6 sm:mb-0 justify-self-end flex gap-4 justify-between  ">
          <button className=" flex gap-x-2 px-1 text-sm items-center rounded-lg h-10 font-bold transition-all duration-300 group ">
            <span className=" min-w-fit ">GitHub Repo</span>
            <FaArrowRight
              size={16}
              className=" group-hover:translate-x-[2px] transition-all duration-300 "
            />
          </button>

          <button className=" flex gap-x-1 w-[7rem] justify-center text-sm items-center rounded-lg h-10 bg-white text-black hover:tracking-wide transition-all duration-300 ">
            <span className="  ">View Live Site</span>
          </button>
        </div>
      </div>
    </div>
  );
}
