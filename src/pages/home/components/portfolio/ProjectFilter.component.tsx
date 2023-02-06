import React, { useState } from "react";
import useProjectFilter from "../../../../hooks/useProjects.hook";
import StackFilterButton from "./StackFilterButton.component";

export default function ProjectFilter() {
  const { filter, setFilterValue } = useProjectFilter();

  return (
    <div className=" flex flex-wrap gap-x-3 gap-y-3 md:gap-x-6  py-2 ">
      <StackFilterButton
        filterActive={filter === "all"}
        onClick={() => setFilterValue("all")}
      >
        All&nbsp;Projects
      </StackFilterButton>
      <StackFilterButton
        filterActive={filter === "frontend"}
        onClick={() => setFilterValue("frontend")}
      >
        Frontend
      </StackFilterButton>
      <StackFilterButton
        filterActive={filter === "backend"}
        onClick={() => setFilterValue("backend")}
      >
        Backend
      </StackFilterButton>
      <StackFilterButton
        filterActive={filter === "fullstack"}
        onClick={() => setFilterValue("fullstack")}
      >
        Full Stack
      </StackFilterButton>
    </div>
  );
}
