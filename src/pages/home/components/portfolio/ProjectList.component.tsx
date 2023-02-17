import React from "react";
import projects from "../../../../data/projects/projects.data";
import splitProjects from "../../../../utils/splitArray.util";
import ProjectGrid from "./ProjectGrid.component";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { filter } from "../../../../../app.interface";

const NoProjectVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.7,
    transition: {
      duration: 0.1,
    },
  },

  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.3,
      type: "keyframes",
      ease: "linear",
    },
  },
};

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
    <div
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
          <motion.div
            variants={NoProjectVariants}
            animate="visible"
            initial="hidden"
            className=" rounded-lg max-w-2xl mx-auto w-full border border-gray-500 h-[10rem] mb-28 grid place-items-center text-gray-400 "
          >
            Nothing to display
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
