import { Variants } from "framer-motion";

export const textSlideIn: Variants = {
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      ease: "easeOut",
      duration: 0.5,
      delay: 0.3
    },
  },

  hidden: {
    opacity: 0,
    y: 20,
  },
};