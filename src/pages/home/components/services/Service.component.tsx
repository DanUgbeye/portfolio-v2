import React from "react";
import { motion } from "framer-motion";
import { servicePopIn } from "./service.variants";

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
      variants={servicePopIn}
      initial="hidden"
      whileInView="inView"
      whileHover="hover"
      className=" bg-deep-blue-700 hover:bg-violet-light px-6 md:px-6 pt-8 pb-12 rounded-lg md:rounded-none shadow-round-lg shadow-black/20 flex flex-col gap-y-6 transition-colors duration-300 w-full max-w-sm mx-auto group "
    >
      <props.svg
        height={64}
        width={64}
        className=" text-violet-light group-hover:text-white aspect-square transition-colors duration-300 "
      />
      <h4 className=" font-bold  ">{props.name}</h4>
      <p className=" text-xsm ">{props.description}</p>
    </motion.div>
  );
}
