import React, { PropsWithChildren } from "react";
import { ReactElementProps } from "../../app.interface";

export interface StyledSectionProps
  extends ReactElementProps,
    PropsWithChildren {}

export default function StyledSection(props: StyledSectionProps) {
  return (
    <section className={` px-4 sm:px-[5%] xl:px-[8rem] ${props.className}`}>
      {props.children}
    </section>
  );
}
