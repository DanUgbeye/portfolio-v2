import React from "react";
import { Project } from "../../../../../app.interface";
import ProjectCard from "./Project.component";

export interface ProjectGridProps {
  order: number;
  projects: Project[];
}

export default function ProjectGrid(props: ProjectGridProps) {
  return (
    <div
      className={` grid ${
        props.order % 2 === 0
          ? "lg:grid-cols-[auto,_55%]"
          : "lg:grid-cols-[55%,_auto]"
      } grid-cols-1 gap-x-5 gap-y-12 place-items-center `}
    >
      {props.projects[0] && (
        <ProjectCard
          className=" grid grid-cols-1 md:grid-cols-[45%_auto] lg:grid-cols-1 lg:grid-rows-2 md:max-h-[20rem] lg:max-h-[35rem] xl:aspect-[4/6] max-w-md md:max-w-none h-full w-full "
          {...props.projects[0]}
        />
      )}

      {props.projects[1] && (
        <ProjectCard
          className=" grid grid-cols-1 md:grid-cols-[45%_auto] lg:grid-cols-1 lg:grid-rows-2 md:max-h-[20rem] lg:max-h-[35rem] xl:aspect-[4/6] max-w-md md:max-w-none h-full w-full "
          {...props.projects[1]}
        />
      )}

      {props.projects[2] && (
        <ProjectCard
          className=" col-span-full grid grid-cols-1 md:grid-cols-[45%_auto] lg:grid-cols-2 lg:h-[20rem] max-w-md md:max-w-none h-full w-full "
          {...props.projects[2]}
        />
      )}
    </div>
  );
}
