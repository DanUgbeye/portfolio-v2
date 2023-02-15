import React, { useState } from "react";
import { filter } from "../../../../../app.interface";
import StackFilterButton from "./StackFilterButton.component";

export interface ProjectFilterProps {
  filter: filter;
  setFilter: (value: filter) => void;
}

export default function ProjectFilter({
  filter,
  setFilter,
}: ProjectFilterProps) {
  return (
    <div className=" flex flex-wrap gap-x-3 gap-y-3 md:gap-x-6  py-2 ">
      <StackFilterButton
        filterActive={filter === "all"}
        onClick={() => setFilter("all")}
      >
        All&nbsp;Projects
      </StackFilterButton>
      <StackFilterButton
        filterActive={filter === "frontend"}
        onClick={() => setFilter("frontend")}
      >
        Frontend
      </StackFilterButton>
      <StackFilterButton
        filterActive={filter === "backend"}
        onClick={() => setFilter("backend")}
      >
        Backend
      </StackFilterButton>
      <StackFilterButton
        filterActive={filter === "fullstack"}
        onClick={() => setFilter("fullstack")}
      >
        Full Stack
      </StackFilterButton>
    </div>
  );
}
