import React from "react";
import projects from "../../../../data/projects/projects.data";
import splitProjects from "../../../../utils/splitArray.util";
import ProjectGrid from "./ProjectGrid.component";
import { AnimatePresence, motion } from "framer-motion";
import { filter } from "../../../../../app.interface";

export interface ProjectFilterProps {
  filter: filter;
}

export default function ProjectList({ filter }: ProjectFilterProps) {
  const filteredProjects = React.useMemo(() => {
    return filter === "all"
      ? projects
      : projects.filter((project) => project.type.includes(filter));
  }, [filter]);

  const arrangedProjects = React.useMemo(
    () => splitProjects(filteredProjects),
    [filteredProjects]
  );

  return (
    <motion.div
      className={` ${
        filteredProjects.length > 0 && " -mb-[8rem] z-[20] "
      } rounded-xl flex flex-col gap-y-12 `}
    >
      <AnimatePresence mode="sync">
        {filteredProjects.length > 0 ? (
          arrangedProjects.map((project, index) => (
            <ProjectGrid
              key={Math.random()}
              order={index + 1}
              projects={project}
            />
          ))
        ) : (
          <div className=" rounded-lg border border-gray-500 h-[10rem] mb-6 grid place-items-center text-gray-400 ">
            Nothing to display
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
