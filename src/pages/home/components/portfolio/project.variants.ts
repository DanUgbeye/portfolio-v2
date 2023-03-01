import { Variants } from "framer-motion";

export const projectCardPopIn: Variants = {
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
      type: "keyframes",
      ease: "linear",
    },
  },
};

export const projectGridExit: Variants = {
  exit: {
    opacity: 0,
    transition: {
      duration: 0.1,
    },
  },
};
