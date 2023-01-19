import React from "react";
import { ReactComponent as TextQuoteIcon } from "../../../../assets/svg/text-quotes.svg";

export interface TestimonialProps {
  author: string;
  title: string;
  testimony: string;
}

export default function Testimonial(props: TestimonialProps) {
  return (
    <div className=" bg-violet-light rounded-2xl max-w-md min-w-fulll md:min-w-[25rem] px-6 md:px-12 py-4 md:py-8 flex flex-col gap-y-8 h-fit my-12 mx-8 sm:mx-auto ">
      <TextQuoteIcon
        width={"7rem"}
        title="text-quotes"
        className=" max-w-10 md:max-w-20 self-center "
      />

      <p className=" text-sm text-center ">{props.testimony}</p>

      <div className=" text-center ">
        <h4 className=" font-bold mb-1 ">{props.author}</h4>
        <p className=" text-sm ">{props.title}</p>
      </div>
    </div>
  );
}
