import React, { PropsWithChildren } from "react";
import { NavLink } from "react-router-dom";
import useNav from "../../hooks/useNav.hook";

export interface SideNavLinkProps extends PropsWithChildren {
  className?: string
  disabled?: boolean;
  to: string;
}

export default function NavBarLink(props: SideNavLinkProps) {
  const { navExpanded, closeNav } = useNav();
  return (
    <NavLink
      to={props.to}
      className={` ${props.className} flex items-center px-3 rounded-lg text-white/50 sm:text-white hover:bg-white/5 hover:text-white md:hover:text-white focus:bg-white/5 h-12 transition-all duration-300`}
      onClick={() => {
        if (!navExpanded) return;
        closeNav();
      }}
    >
      {props.children}
    </NavLink>
  );
}
