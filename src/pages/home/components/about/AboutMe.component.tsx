import React from "react";
import { motion } from "framer-motion";
import { SlideFromRight } from "../../../../assets/animation.variants";


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
      <p className=" font-normal max-w-2xl mb-9 ">
        I am a full-stack web developer based in Nigeria. I have X years
        experience in web development. I started my journey as a Computer
        Science student from the University of Calabar in NIgeria. I have taken
        a lot of courses and bootcamps to further improve my skills. Recently, I
        got certified as a Backend Developer Graduate at Top Universe.
      </p>

      <button className=" grid rounded-lg bg-violet-light hover:bg-violet-dark place-items-center w-[10rem] text-sm tracking-wide hover:tracking-wider font-normal h-12 transition-all duration-300 outline outline-1 outline-transparent hover:outline-violet-dark border-2 border-deep-blue-900 ">
        Download Resume
      </button>
    </motion.div>
  );
}
