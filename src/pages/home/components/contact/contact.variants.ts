import { Variants } from "framer-motion";

export const SlideFromLeft: Variants = {
  inView: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.3,
    },
  },

  hidden: {
    x: -100,
    opacity: 0,
  },
};

export const SlideFromRight: Variants = {
  inView: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.3,
    },
  },

  hidden: {
    x: 100,
    opacity: 0,
  },
};