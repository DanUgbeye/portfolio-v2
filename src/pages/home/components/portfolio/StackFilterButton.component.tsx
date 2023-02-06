import React, { DetailedHTMLProps } from "react";
import { ReactElementProps } from "../../../../../app.interface";

export interface StackButtonProps
  extends ReactElementProps,
    React.PropsWithChildren {
      filterActive?: boolean
    }

export default function StackFilterButton(props: StackButtonProps) {
  return (
    <button
      className={` ${
        props.filterActive
          ? " text-white bg-violet-light border-violet-light "
          : " border-border-gray text-border-gray hover:text-white hover:bg-violet-light hover:border-violet-light focus:text-white focus:bg-violet-light focus:border-violet-light "
      } rounded-lg max-w-[6rem] sm:rounded-full text-sm border h-10 px-3 grid place-items-center transition-hover duration-200 `}
      onClick={(e) => props.onClick && props.onClick(e)}
    >
      {props.children}
    </button>
  );
}
