import { motion, Variants } from "framer-motion";
import React from "react";

const ServiceVariants: Variants = {
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

export interface ServiceProps {
  svg: React.FC<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
  name: string;
  description: string;
}

export default function Service(props: ServiceProps) {
  return (
    <motion.div
      variants={ServiceVariants}
      initial="hidden"
      whileInView="inView"
      whileHover="hover"
      className=" bg-deep-blue-700 hover:bg-violet-light px-6 md:px-6 pt-8 md:pt-12 pb-12 md:pb-16 rounded-lg md:rounded-none shadow-round-lg shadow-black/20 flex flex-col gap-y-6 transition-colors duration-300 w-full max-w-sm mx-auto group "
    >
      <props.svg
        height={64}
        width={64}
        className=" text-violet-light group-hover:text-white aspect-square transition-colors duration-300 "
      />
      <h4 className=" font-bold text-lg ">{props.name}</h4>
      <p className=" text-sm ">{props.description}</p>
    </motion.div>
  );
}
