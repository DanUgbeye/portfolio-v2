import { Transition, Variants } from "framer-motion";

export const heroImageSlideIn: Variants = {
  inView: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.2,
    },
  },

  hidden: {
    opacity: 0,
    x: 100,
  },
};

export const heroTextStagger: Variants = {
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

export const textSlideInFromBotton: Variants = {
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

export const linkAnimation0: Variants = {
  visible: {
    y: [-5, 5],
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 1,
    },
  },
};

export const linkAnimation1: Variants = {
  visible: {
    y: [-5, 5],
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 1,
      delay: 0.2
    },
  },
};

export const linkAnimation2: Variants = {
  visible: {
    y: [-5, 5],
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 1,
      delay: 0.5
    },
  },
};

export const slideFromRight: Variants = {
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