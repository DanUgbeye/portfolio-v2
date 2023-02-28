import React from "react";
import StyledSection from "../../../../components/StyledSection.component";
import testimonials from "../../../../data/testimonials/testimonials.data";
import Testimonial from "./Testimonial.component";
import { Carousel } from "react-responsive-carousel";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { randomKey } from "../../../../utils/randomKey.util";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { motion } from "framer-motion";
import { textSlideIn } from "./testimonials.variants";

export default function TestimonialSection() {
  return (
    <StyledSection className=" bg-deep-blue-900 ">
      <div className=" pt-[18rem] pb-[8.5rem] relative ">
        <div className=" mb-2 ">
          <motion.h4
            variants={textSlideIn}
            initial="hidden"
            whileInView="visible"
            className=" font-bold mb-3 "
          >
            TESTIMONIALS
          </motion.h4>

          <motion.p
            variants={textSlideIn}
            initial="hidden"
            whileInView="visible"
            className=" text-sm font-normal max-w-lg "
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet nam
            nam imperdiet maecenas vivamus.
          </motion.p>
        </div>

        <Carousel
          centerMode={false}
          infiniteLoop
          autoPlay
          useKeyboardArrows
          preventMovementUntilSwipeScrollTolerance
          swipeable
          transitionTime={1000}
          showThumbs={false}
          showStatus={false}
          interval={3000}
          className=" w-full rounded-lg "
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
                type="button"
                onClick={onClickHandler}
                title={"previous"}
                className=" rounded-full h-12 aspect-square bg-deep-blue-700 hover:bg-gray-700 hover:shadow-round-sm hover:shadow-gray-700 absolute top-[50%] z-20 left-0 sm:left-4 grid place-items-center transition-all duration-300 "
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
                title={"next"}
                className=" rounded-full h-12 aspect-square bg-deep-blue-700 hover:bg-gray-700 hover:shadow-round-sm hover:shadow-gray-700 absolute top-[50%] z-20 right-0 sm:right-4 grid place-items-center transition-all duration-300 "
              >
                <FaArrowRight size={16} className="  " />
              </button>
            )
          }
        >
          {testimonials.map((testimonial) => (
            <Testimonial key={randomKey()} {...testimonial} />
          ))}
        </Carousel>
      </div>
    </StyledSection>
  );
}
