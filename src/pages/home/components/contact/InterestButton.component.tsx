import React, { PropsWithChildren } from "react";
import { ReactElementProps } from "../../../../../app.interface";

export interface InterestButtonProps extends ReactElementProps {
  active: boolean;
}
export default function InterestButton(props: InterestButtonProps) {
  return (
    <button
      className={` ${
        props.active
          ? " text-white before:outline-violet-light before:bg-violet-light sm:text-white sm:bg-violet-light  sm:border-violet-light "
          : " before:outline-white hover:text-white text-border-gray sm:text-border-gray sm:border-border-gray sm:hover:text-violet-light sm:hover:border-violet-light  "
      } text-left rounded-lg w-full h-8 sm:h-10 sm:px-4 sm:border text-xs before:max-h-2.5 before:rounded-sm before:outline-1 before:px-1.5 before:aspect-square before:mr-2 before:outline before:border-4 before:border-deep-blue-700 sm:before:hidden transition-colors duration-200 sm:flex sm:justify-center sm:items-center  `}
      type="button"
      onClick={(e) => props.onClick && props.onClick(e)}
    >
      {props.children}
    </button>
  );
}
