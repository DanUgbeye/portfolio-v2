import React from "react";
import useProjectFilter from "../../../../hooks/useProjects.hook";
import projects from "../../../../data/projects/projects.data";
import splitProjects from "../../../../utils/splitArray.util";
import ProjectGrid from "./ProjectGrid.component";

export default function ProjectList() {
  const { filter } = useProjectFilter();

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
      } rounded-xl `}
    >
      {filteredProjects.length > 0 ? (
        arrangedProjects.map((project, index) => (
          <ProjectGrid key={index} projects={project} />
        ))
      ) : (
        <div className=" rounded-lg border border-gray-500 h-[10rem] mb-6 grid place-items-center text-gray-400 ">
          Nothing to display
        </div>
      )}
    </div>
  );
}
