import React from 'react'
import textQuoteIcon from "../../../../assets/svg/text-quotes.svg";

export interface TestimonialProps {
  author: string,
  title: string,
  testimony: string
}

export default function Testimonial(props: TestimonialProps) {
  return (
    <div className=" bg-violet-light rounded-2xl max-w-screen min-w-[18rem] md:min-w-[25rem] w-full px-3 md:px-12 py-4 md:py-8 flex flex-col gap-y-8 ">
      <img src={textQuoteIcon} alt="text-quotes" className=" w-10 md:w-20 self-center " />

      <p className=" text-sm text-center ">{props.testimony}</p>

      <div className=" text-center ">
        <h4 className=" font-bold mb-3 ">{props.author}</h4>
        <p className=" text-sm ">{props.title}</p>
      </div>

    </div>
  )
}
