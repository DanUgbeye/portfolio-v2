import React from "react";

export interface FooterLinkProps extends React.PropsWithChildren {}

export default function FooterLink(props: FooterLinkProps) {
  return (
    <button className=" h-12 aspect-square rounded-lg bg-deep-blue-700 hover:bg-gray-600/50 hover:shadow-round-lg hover:shadow-gray-600/30 grid place-items-center transition-colors duration-200 ">
      {props.children}
    </button>
  );
}
