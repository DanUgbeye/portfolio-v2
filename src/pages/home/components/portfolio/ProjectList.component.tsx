import React from "react";
import useProjectFilter from "../../../../hooks/useProjects.hook";

export default function ProjectList() {
  const { filter } = useProjectFilter();
  return (
    <div className=" h-[90vh] bg-violet-light rounded-xl ">
      ProjectList - {filter}
    </div>
  );
}
