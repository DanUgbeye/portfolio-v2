import React from "react";
import { toast } from "react-toastify";

export interface FooterLinkProps extends React.PropsWithChildren {
  link?: string;
  phone?: string;
}

export default function FooterLink(props: FooterLinkProps) {
  return (
    <a
      href={props.link}
      target={"_blank"}
      onClick={(e) => {
        if (props.phone && !props.link) {
          e.preventDefault();
          // copy to clipboard
          navigator.clipboard
            .writeText(props.phone)
            .then(() => toast.success("copied"));
        }
      }}
      className=" h-12 aspect-square rounded-lg bg-deep-blue-700 hover:bg-gray-600/50 hover:shadow-round-lg hover:shadow-gray-600/30 grid place-items-center transition-colors duration-200 "
    >
      {props.children}
    </a>
  );
}
