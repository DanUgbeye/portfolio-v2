import React from "react";
import StyledSection from "../../../../components/StyledSection.component";
import testimonials from "../../../../data/testimonials/testimonials.data";
import Testimonial from "./Testimonial.component";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function calculateSlidePercentage() {
  if (window.visualViewport?.width) {
    if (window.visualViewport?.width < 640) {
      return window.visualViewport?.width / 4;
    }
    return window.visualViewport?.width / 17;
  }
  return 50;
}

export default function TestimonialSection() {
  return (
    <StyledSection className=" bg-deep-blue-900 ">
      <div className=" pt-[18rem] sm:pt-[20rem] pb-[4rem] sm:pb-[8.5rem] relative ">
        <h4 className=" font-bold mb-3 ">TESTIMONIALS</h4>

        <p className=" text-sm font-normal max-w-lg mb-12 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet nam
          nam imperdiet maecenas vivamus.
        </p>

        {/* <div className=" flex gap-x-4 overflow-x-auto py-4 "> */}
        <Carousel
          centerMode
          centerSlidePercentage={calculateSlidePercentage()}
          showStatus={false}
          showThumbs={false}
          autoPlay
          swipeable={false}
          useKeyboardArrows
          interval={3000}
          className=" w-full rounded-lg "
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                className=" rounded-full h-12 aspect-square bg-deep-blue-700 absolute top-[50%] z-20 left-0 grid place-items-center "
              >
                <FaArrowLeft size={16} className="  " />
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                className=" rounded-full h-12 aspect-square bg-deep-blue-700 absolute top-[50%] z-20 right-0 grid place-items-center "
              >
                <FaArrowRight size={16} className="  " />
              </button>
            )
          }
        >
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </Carousel>
        {/* </div> */}
      </div>
    </StyledSection>
  );
}
