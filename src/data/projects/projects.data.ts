import {
  React,
  TailwindCSS,
  Javascript,
  Firebase,
  Typescript,
  ExpressJS,
  MongoDB,
  NodeJS,
  PostgreSQL,
  Postman,
  SwaggerDocs,
} from "../skills/skills.data";

import ProjectImagePhone from "../../assets/svg/projects/project-image-iphone.svg";
import ProjectImageLaptop from "../../assets/svg/projects/project-image-laptop.svg";
import ProjectImageHeadphones from "../../assets/svg/projects/project-image-headphones.svg";
import ProjectImageCodeblack from "../../assets/svg/projects/project-image-codeblack.svg";
import ProjectImageCodegreen from "../../assets/svg/projects/project-image-codegreen.svg";

const projects = [
  {
    type: ["frontend", "fullstack"],
    name: "Auto Mart client",
    description: "A little description about my very interesting project",
    image: ProjectImageLaptop,
    liveSite: "https://auto-mart-client.netlify.app",
    isPublic: true,
    github: "https://github.com/danugbeye",
    stack: [Javascript, React, TailwindCSS],
  },
  {
    type: ["backend", "fullstack"],
    name: "Auto Mart API",
    description: "A little description about my very interesting project A little description about my very interesting project A little description about my very interesting project A little description about my very interesting project A little description about my very interesting project A little description about my very interesting project A little description about my very interesting project A little description about my very interesting project A little description about my very interesting project A little description about my very interesting project A little description about my very interesting project",
    image: ProjectImageCodeblack,
    liveSite: "https://auto-mart-client.netlify.app",
    isPublic: true,
    github: "https://github.com/danugbeye",
    stack: [Javascript, NodeJS, ExpressJS, MongoDB, Postman],
  },
  {
    type: ["backend"],
    name: "Author hive",
    description: "A little description about my very interesting project",
    image: ProjectImagePhone,
    liveSite: "https://auto-mart-client.netlify.app",
    isPublic: true,
    github: "https://github.com/danugbeye",
    stack: [Javascript, NodeJS, ExpressJS, PostgreSQL, Postman, SwaggerDocs],
  },
  {
    type: ["frontend", "fullstack"],
    name: "Kode class",
    description: "A little description about my very interesting project",
    image: ProjectImageCodegreen,
    liveSite: "https://auto-mart-client.netlify.app",
    isPublic: true,
    github: "https://github.com/danugbeye",
    stack: [Javascript, React, TailwindCSS, Firebase],
  },
  {
    type: ["frontend"],
    name: "My Portfolio",
    description: "A little description about my very interesting project",
    image: ProjectImageHeadphones,
    liveSite: "https://auto-mart-client.netlify.app",
    isPublic: true,
    github: "https://github.com/danugbeye",
    stack: [Typescript, React, TailwindCSS],
  },
  {
    type: ["backend"],
    name: "Synque API",
    description: "A little description about my very interesting project",
    image: ProjectImagePhone,
    liveSite: "https://auto-mart-client.netlify.app",
    isPublic: true,
    github: "https://github.com/danugbeye",
    stack: [Javascript, NodeJS, ExpressJS, MongoDB],
  },
];

export default projects;
