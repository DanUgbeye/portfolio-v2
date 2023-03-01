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

export const SlideFromTop: Variants = {
  inView: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.3,
    },
  },

  hidden: {
    y: -100,
    opacity: 0,
  },
};

export const SlideFromBottom: Variants = {
  inView: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.3,
    },
  },

  hidden: {
    y: 50,
    opacity: 0,
  },
};
