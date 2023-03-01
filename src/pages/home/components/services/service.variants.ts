import { Variants } from "framer-motion";

export const servicePopIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.7,
    transition: {
      duration: 0.1,
    },
  },

  inView: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.3,
      delay: 0.2
    },
  },

  hover: {
    scale: 1.05,
    transition: {
      type: "keyframes",
      ease: "easeInOut",
    },
  },
};

export const serviceHeadingSlideFromTop: Variants = {
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "tween", ease: "easeInOut", delay: 0.3 },
  },

  hidden: {
    y: -50,
    opacity: 0,
  },
};