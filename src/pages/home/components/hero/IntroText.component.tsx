import React from "react";
import useAnchorNavigate from "../../../../hooks/useAnchorNavigate.hook";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { motion, Variants } from "framer-motion";

const HeroTextVariants: Variants = {
  inView: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      when: "beforeChildren",
    },
  },

  hidden: {
    opacity: 0,
  },
};

const TextVariants: Variants = {
  inView: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      ease: "easeOut",
      duration: 0.5,
    },
  },

  hidden: {
    opacity: 0,
    y: 20,
  },
};

const linkVariants: Variants = {
  visible: {
    y: [-2.5, 2.5],
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 1,
    },
  },
};

const slideInVariants: Variants = {
  inView: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 1,
      type: "spring",
      when: "beforeChildren",
    },
  },
  hidden: {
    x: -100,
    opacity: 0,
    transition: {},
  },
};

export default function IntroText() {
  const anchorNavigate = useAnchorNavigate();

  return (
    <motion.div
      variants={HeroTextVariants}
      className=" max-w-3xl text-sm flex flex-col relative mb-12 w-full "
    >
      <motion.div className=" flex flex-col gap-y-8 ">
        <motion.h1
          variants={TextVariants}
          className=" text-3xl md:text-4xl font-bold text-white "
        >
          Hello, I'm Daniel Ugbeye
        </motion.h1>

        <motion.p variants={TextVariants} className=" text-white font-normal">
          I am a full stack web developer from Nigeria. I work to design, test,
          and implement various software applications. I write codes not only
          for the user's front end web applications or mobile applications but
          also write API codes that sits in the middle, the server code that
          sits in the back to connect and communicate with databases.
        </motion.p>

        <motion.div variants={TextVariants}>
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
        variants={slideInVariants}
        className=" hidden md:flex flex-col md:flex-row gap-x-6 gap-y-6 md:items-center mt-16 "
      >
        <div className=" font-bold my-auto md:self-start ">Check out my</div>
        <motion.div
          className=" flex gap-x-5 items-center md:self-start "
        >
          <motion.a
            variants={linkVariants}
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
            variants={linkVariants}
            animate="visible"
            transition={{ delay: 0.4 }}
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
            variants={linkVariants}
            animate="visible"
            transition={{ delay: 0.8 }}
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
