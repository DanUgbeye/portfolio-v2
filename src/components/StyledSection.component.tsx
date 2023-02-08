import React, { PropsWithChildren } from "react";
import { ReactElementProps } from "../../app.interface";

export interface StyledSectionProps
  extends ReactElementProps,
    PropsWithChildren {}

export default function StyledSection(props: StyledSectionProps) {
  return (
    <section className={` ${props.className}`}>
      <div className="  px-4 sm:px-[5%] xl:px-[8rem] max-w-[100rem] mx-auto ">
        {props.children}
      </div>
    </section>
  );
}
