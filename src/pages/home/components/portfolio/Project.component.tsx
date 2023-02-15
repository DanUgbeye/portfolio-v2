import React from "react";
import { motion, Variants } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { Project, Skill } from "../../../../../app.interface";

interface ProjectProps extends Project {
  className?: string;
}

const ProjectCardVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.7,
    transition: {
      duration: 0.1,
    },
  },

  inView: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.05,
      type: "keyframes",
      ease: "linear",
    },
  },
};

export default function ProjectCard(props: ProjectProps) {
  return (
    <motion.div
      variants={ProjectCardVariants}
      initial="hidden"
      whileInView="inView"
      className={` ${
        props.className || ""
      } border border-gray-700 bg-deep-blue-700 shadow-round-lg shadow-black/50 rounded-2xl overflow-hidden hover:bg-violet-light hover:scale-[1.01] transition-all duration-300  `}
    >
      <div
        className={` object-fill min-h-full min-w-full w-full overflow-hidden max-h-[15rem] sm:min-h-[full] `}
      >
        <img
          loading="lazy"
          src={props.image}
          alt={props.name + " image"}
          className={` ${
            props.className && props.className
          }  object-cover min-w-full min-h-full `}
        />
      </div>
      <div
        className={` min-h-full w-full h-[50%] p-4 sm:p-6 text-xs sm:text-sm flex flex-col justify-evenly gap-y-4  `}
      >
        <h4 className=" font-bold text-lg sm:text-xl ">{props.name}</h4>

        <p className=" text-ellipsis break-words overflow-hidden max-h-[5rem] ">
          {props.description}
        </p>

        <div className=" flex gap-x-3 gap-y-3 items-center sm:items-start sm:flex-col flex-wrap ">
          <div className=" font-bold min-w-fit ">Technologies </div>

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

        <div className=" mb-4 justify-self-end flex gap-4 justify-between  ">
          <a
            href={props.github}
            className=" flex gap-x-2 px-1 text-sm items-center rounded-lg h-10 font-bold transition-all duration-300 group "
          >
            <span className=" min-w-fit ">GitHub Repo</span>
            <FaArrowRight
              size={16}
              className=" group-hover:translate-x-1 transition-all duration-300 "
            />
          </a>

          <a
            href={props.liveSite}
            className=" flex gap-x-1 w-[7rem] justify-center text-sm items-center rounded-lg h-10 bg-white text-black hover:tracking-wider transition-all duration-300 "
          >
            <span className="  ">View Live Site</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
