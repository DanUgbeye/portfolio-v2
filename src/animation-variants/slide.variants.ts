import { Variants } from "framer-motion";

export const SlideFromLeftVariants: Variants = {
  inView: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.3,
    },
  },

  hidden: {
    opacity: 0,
    x: -100,
  },
};

export const SlideFromRightVariants: Variants = {
  inView: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.3,
    },
  },

  hidden: {
    opacity: 0,
    x: 100,
  },
};

export const SlideFromTopVariants: Variants = {
  inView: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3,
    },
  },

  hidden: {
    opacity: 0,
    y: -100,
  },
};

export const SlideFromBottomVariants: Variants = {
  inView: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3,
    },
  },

  hidden: {
    opacity: 0,
    y: 30,
  },
};


