import React, { PropsWithChildren } from "react";
import { ToastContainer } from "react-toastify";
import { useScrollLock } from "../hooks/useScrollLock.hook";
import "react-toastify/dist/ReactToastify.min.css";

export interface AppContextProps {
  navExpanded: boolean;
  openNav: () => void;
  closeNav: () => void;
}
export const AppContext = React.createContext<AppContextProps>({
  navExpanded: false,
  openNav: () => {},
  closeNav: () => {},
});

export interface AppContextProviderProps extends PropsWithChildren {}

export default function AppContextProvider(props: AppContextProviderProps) {
  // sidenav state and methods
  const [navExpanded, setNavExpanded] = React.useState(false);
  const { lockScroll, unlockScroll } = useScrollLock();

  const openNav = React.useCallback(() => {
    if (navExpanded) return;
    setNavExpanded(true);
  }, [navExpanded]);

  const closeNav = React.useCallback(() => {
    if (!navExpanded) return;
    setNavExpanded(false);
  }, [navExpanded]);

  // closes the nav if screensize is large
  const syncScrollLock = () => {
    if (window.visualViewport?.width && window.visualViewport?.width > 769) {
      setNavExpanded(false);
    }
  };

  // responsible for locking scroll on nav open in small screens
  React.useEffect(() => {
    navExpanded ? lockScroll() : unlockScroll();
  }, [navExpanded]);

  // add listener for closing nav on large screen size
  React.useEffect(() => {
    window.addEventListener("resize", syncScrollLock);
    return () => {
      window.removeEventListener("resize", syncScrollLock);
    };
  }, []);

  return (
    <AppContext.Provider
      value={{
        navExpanded,
        openNav,
        closeNav,
      }}
    >
      <ToastContainer
        position="top-right"
        autoClose={2000}
        newestOnTop={false}
        theme="colored"
      />
      {props.children}
    </AppContext.Provider>
  );
}
