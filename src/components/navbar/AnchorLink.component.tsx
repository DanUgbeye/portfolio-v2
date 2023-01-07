import React from "react";

export interface AnchorLinkProps extends React.PropsWithChildren {
  to: string;
}

function scrollIntoView(hash: string) {
  const element = document.getElementById(hash.replace("/#", ""));

  setTimeout(() => {
    window.scrollTo({
      behavior: element ? "smooth" : "auto",
      top: element ? element.offsetTop - 200 : 0,
    });
  }, 100);
}

export default function AnchorLink(props: AnchorLinkProps) {
  return (
    <button
      onClick={() => scrollIntoView(props.to)}
      className={` flex items-center px-3 rounded-lg hover:bg-white/5 focus:bg-white/5 h-12 `}
    >
      {props.children}
    </button>
  );
}
