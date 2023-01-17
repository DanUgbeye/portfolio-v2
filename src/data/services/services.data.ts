import { ReactComponent as FrontendIcon } from "../../assets/svg/front-end-icon.svg";
import { ReactComponent as BackendIcon } from "../../assets/svg/back-end-icon.svg";
import { ReactComponent as FullStackIcon } from "../../assets/svg/full-stack-icon.svg";
import { ReactComponent as IoTIcon } from "../../assets/svg/internet-of-things.svg";

// TODO: work on the svg colors
const services = [
  {
    name: "Frontend Web Development",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Vitae neque, quisque ac dictum. Ultricies vel vulputate elementum ultrices.`,
    svg: FrontendIcon,
  },
  {
    name: "Backend Web Development",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Vitae neque, quisque ac dictum. Ultricies vel vulputate elementum ultrices.`,
    svg: BackendIcon,
  },
  {
    name: "Full Stack Web Development",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Vitae neque, quisque ac dictum. Ultricies vel vulputate elementum ultrices.`,
    svg: FullStackIcon,
  },
  {
    name: "IOT & Embedded Systems Prog.",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Vitae neque, quisque ac dictum. Ultricies vel vulputate elementum ultrices.`,
    svg: IoTIcon,
  },
];

export default services;
