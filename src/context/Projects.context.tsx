import React, { PropsWithChildren } from "react";

type filter = "all" | "frontend" | "backend" | "fullstack";

export interface ProjectContext {
  filter: filter,
  setFilterValue: (value: filter) => void
}

export const ProjectContext = React.createContext<ProjectContext>({
  filter: "all",
  setFilterValue: (value: filter) => {},
});

export interface ProjectContextProviderProps extends PropsWithChildren {}

export default function ProjectContextProvider(
  props: ProjectContextProviderProps
) {
  const [filter, setFilter] = React.useState<filter>("all");

  const setFilterValue = React.useCallback((value: filter) => {
    setFilter(value);
  }, []);

  return (
    <ProjectContext.Provider
      value={{
        filter,
        setFilterValue,
      }}
    >
      {props.children}
    </ProjectContext.Provider>
  );
}
