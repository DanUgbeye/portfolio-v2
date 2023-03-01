import React from "react";
import { motion } from "framer-motion";
import { SlideFromRight } from "./about.variants";

export default function AboutMe() {
  return (
    <motion.div
      variants={SlideFromRight}
      whileInView="inView"
      initial="hidden"
      id="about"
      className=" text-sm font-bold  "
    >
      <h4 className=" mb-3 ">ABOUT ME</h4>
      <p className=" mb-2 ">I am Daniel Ugbeye</p>
      <div className=" font-normal max-w-2xl flex flex-col gap-y-2 mb-9 ">
        <p className="  ">
          Daniel is a talented full stack web developer with a passion for
          computers and codes and has been coding for about 4 years now. He is
          known for his ability to learn quickly and his strong work ethic.
          Throughout his career, Daniel has consistently demonstrated a
          commitment to excellence, both in his technical skills and his
          approach to teamwork.
        </p>
        <p className="  ">
          Daniel's passion for computer and codes is evident in his work. He
          approaches every project with a sense of excitement and a willingness
          to tackle new challenges. His ability to learn quickly has allowed him
          to stay up-to-date with the latest web development trends and
          techniques, ensuring that his work is always innovative and
          cutting-edge.
        </p>
      </div>

      <button className=" grid rounded-lg bg-violet-light hover:bg-violet-dark place-items-center w-[10rem] text-sm tracking-wide hover:tracking-wider font-normal h-12 transition-all duration-300 outline outline-1 outline-transparent hover:outline-violet-dark border-2 border-deep-blue-900 ">
        Download Resume
      </button>
    </motion.div>
  );
}
