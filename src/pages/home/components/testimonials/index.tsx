import React from "react";
import StyledSection from "../../../../components/StyledSection.component";
import testimonials from "../../../../data/testimonials/testimonials.data";
import Testimonial from "./Testimonial.component";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function calculateSlidePercentage() {
  if(window.visualViewport?.width) {
    if(window.visualViewport?.width < 640) {
      return window.visualViewport?.width / 10;
    }
    return window.visualViewport?.width / 16
  }
  return 50;
}

export default function TestimonialSection() {
  return (
    <StyledSection className=" bg-deep-blue-900 ">
      <div className=" pt-[18rem] sm:pt-[20rem] pb-[4rem] sm:pb-[8.5rem] ">
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
            stopOnHover
            autoPlay
            infiniteLoop
            useKeyboardArrows
            interval={3000}
            emulateTouch
            swipeable
            className=" w-full rounded-lg "
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
