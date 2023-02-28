import { ReactComponent as FrontendIcon } from "../../assets/svg/front-end-icon.svg";
import { ReactComponent as BackendIcon } from "../../assets/svg/back-end-icon.svg";
import { ReactComponent as FullStackIcon } from "../../assets/svg/full-stack-icon.svg";
import { ReactComponent as IoTIcon } from "../../assets/svg/internet-of-things.svg";

const services = [
  {
    name: "Frontend Web Development",
    description: `Using the latest front-end technologies, I create beautiful, intuitive, dynamic and responsive websites that engage users and enhance their experience`,
    svg: FrontendIcon,
  },
  {
    name: "Backend Web Development",
    description: `I have expertise in building robust and scalable back-end systems for web applications that can handle complex data processing, security, and application logic`,
    svg: BackendIcon,
  },
  {
    name: "Full Stack Web Development",
    description: `With skills in both front-end and back-end development, I provide end-to-end web application development for businesses of all sizes that meet business needs`,
    svg: FullStackIcon,
  },
  {
    name: "IOT & Embedded Systems Prog.",
    description: `I specialize in creating software for IoT and embedded systems which connects devices and sensors, collects and processes data, and enables real-time decision making`,
    svg: IoTIcon,
  },
];

export default services;
