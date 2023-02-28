import React from "react";
import useAnchorNavigate from "../../../../hooks/useAnchorNavigate.hook";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  heroTextStagger,
  linkAnimation0,
  linkAnimation1,
  linkAnimation2,
  slideFromRight,
  textSlideInFromBotton,
} from "./hero.variants";

export default function IntroText() {
  const anchorNavigate = useAnchorNavigate();

  return (
    <motion.div
      variants={heroTextStagger}
      initial="hidden"
      whileInView="inView"
      className=" max-w-3xl text-sm flex flex-col relative mb-12 w-full "
    >
      <motion.div className=" flex flex-col gap-y-8 ">
        <motion.h1
          variants={textSlideInFromBotton}
          className=" text-3xl md:text-4xl font-bold text-white "
        >
          Hello, I'm Daniel Ugbeye
        </motion.h1>

        <motion.p
          variants={textSlideInFromBotton}
          className=" text-white font-normal"
        >
          A full-stack web developer with experience in both frontend and
          backend technologies. I specialize in creating high-quality,
          responsive, and user-friendly web applications. Take a look at my
          portfolio to learn more about my skills and expertise.
        </motion.p>

        <motion.div variants={textSlideInFromBotton}>
          <button
            onClick={() => {
              anchorNavigate("/#contact");
            }}
            className=" bg-violet-light hover:bg-violet-dark h-12 w-[6rem] ml-[1px] rounded-lg transition-all duration-500 hover:tracking-wider outline outline-1 outline-transparent hover:outline-violet-dark border-2 border-deep-blue-700 "
          >
            Let's Talk
          </button>
        </motion.div>
      </motion.div>

      <motion.div
        variants={slideFromRight}
        className=" hidden md:flex flex-col md:flex-row gap-x-6 gap-y-6 md:items-center mt-16 "
      >
        <div className=" font-bold my-auto md:self-start ">Check out my</div>
        <motion.div className=" flex gap-x-5 items-center md:self-start ">
          <motion.a
            variants={linkAnimation0}
            animate="visible"
            href={"https://linkedin.com/in/danielugbeye"}
            target={"_blank"}
            title="linkedin"
            className=" rounded-full h-12 bg-off-white aspect-square grid place-items-center overflow-hidden hover:bg-gray-300/50 hover:shadow-gray-200/50 hover:shadow-round-lg focus:shadow-gray-200/50 focus:shadow-round-lg group transition-colors duration-300 "
          >
            <FaLinkedinIn
              size={20}
              className=" text-deep-blue-900 group-hover:text-deep-blue-900/80 transition-all duration-300 "
            />
          </motion.a>

          <motion.a
            variants={linkAnimation1}
            animate="visible"
            href={"https://github.com/danugbeye"}
            target={"_blank"}
            title="github"
            className=" rounded-full h-12 bg-off-white aspect-square grid place-items-center overflow-hidden hover:bg-gray-300/50 hover:shadow-gray-200/50 hover:shadow-round-lg focus:shadow-gray-200/50 focus:shadow-round-lg group transition-colors duration-300 "
          >
            <FaGithub
              size={24}
              className=" text-deep-blue-900 group-hover:text-deep-blue-900/80 transition-all duration-300 "
            />
          </motion.a>

          <motion.a
            variants={linkAnimation2}
            animate="visible"
            href={"https://twitter.com/Ugbeye_Daniel"}
            target={"_blank"}
            title="twitter"
            className=" rounded-full h-12 bg-off-white aspect-square grid place-items-center overflow-hidden hover:bg-gray-300/50 hover:shadow-gray-200/50 hover:shadow-round-lg focus:shadow-gray-200/50 focus:shadow-round-lg group transition-colors duration-300 "
          >
            <FaTwitter
              size={20}
              className=" text-deep-blue-900 group-hover:text-deep-blue-900/80 transition-all duration-300 "
            />
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
