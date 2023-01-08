import React from "react";

export interface FooterLinkProps extends React.PropsWithChildren {}

export default function FooterLink(props: FooterLinkProps) {
  return (
    <button className=" h-6 md:h-12 aspect-square rounded-lg bg-deep-blue-700 grid place-items-center ">
      {props.children}
    </button>
  );
}
