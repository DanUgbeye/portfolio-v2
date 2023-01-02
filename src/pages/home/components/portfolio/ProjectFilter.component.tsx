import React, { useState } from "react";
import useProjectFilter from "../../../../hooks/useProjects.hook";
import StackButton from "./StackButton.component";

export default function ProjectFilter() {
  const { filter, setFilterValue } = useProjectFilter();

  return (
    <div className=" flex flex-wrap gap-x-3 gap-y-3 md:gap-x-6 bg-deep-blue-700 py-2 rounded-b-md ">
      <StackButton
        filterActive={filter === "all"}
        onClick={() => setFilterValue("all")}
      >
        All&nbsp;Projects
      </StackButton>
      <StackButton
        filterActive={filter === "frontend"}
        onClick={() => setFilterValue("frontend")}
      >
        Frontend
      </StackButton>
      <StackButton
        filterActive={filter === "backend"}
        onClick={() => setFilterValue("backend")}
      >
        Backend
      </StackButton>
      <StackButton
        filterActive={filter === "fullstack"}
        onClick={() => setFilterValue("fullstack")}
      >
        Full Stack
      </StackButton>
    </div>
  );
}
