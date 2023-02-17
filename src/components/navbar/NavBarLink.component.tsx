import React from "react";
import useAnchorNavigate from "../../hooks/useAnchorNavigate.hook";
import useNav from "../../hooks/useNav.hook";

export interface NavBarLinkProps extends React.PropsWithChildren {
  to: string;
  className?: string;
}

export default function NavBarLink(props: NavBarLinkProps) {
  const { closeNav } = useNav();
  const anchorNavigate = useAnchorNavigate();
  return (
    <a
      href={props.to}
      onClick={(e) => {
        e.preventDefault();
        closeNav();
        return anchorNavigate(props.to);
      }}
      className={` ${props.className} flex items-center px-3 rounded-lg h-12 transition-all duration-300 `}
    >
      {props.children}
    </a>
  );
}
