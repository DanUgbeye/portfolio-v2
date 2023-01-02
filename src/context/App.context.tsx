import React, { PropsWithChildren } from "react";
import ProjectContextProvider from "./Projects.context";

export const AppContext = React.createContext({
  navExpanded: false,
  openNav: () => {},
  closeNav: () => {},

});

export interface AppContextProviderProps extends PropsWithChildren {}

export default function AppContextProvider(props: AppContextProviderProps) {
  // sidenav state and methods
  const [navExpanded, setNavExpanded] = React.useState(false);

  const openNav = React.useCallback(() => {
    if (navExpanded) return;
    setNavExpanded(true);
  }, [navExpanded]);

  const closeNav = React.useCallback(() => {
    if (!navExpanded) return;
    setNavExpanded(false);
  }, [navExpanded]);

  return (
    <AppContext.Provider
      value={{
        navExpanded,
        openNav,
        closeNav
      }}
    >
      <ProjectContextProvider>
        {props.children}
      </ProjectContextProvider>
    </AppContext.Provider>
  );
}
