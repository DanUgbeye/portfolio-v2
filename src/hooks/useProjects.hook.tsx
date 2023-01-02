import React from "react";
import { ProjectContext } from "../context/Projects.context";

export default function useProjectFilter() {
  const { filter, setFilterValue } = React.useContext(ProjectContext);
  return { filter, setFilterValue };
}
