import {
  ExpressJS,
  MongoDB,
  NodeJS,
  PostgreSQL,
  Postman,
  SwaggerDocs,
} from "../skills/backendSkills.data";

import {
  React,
  TailwindCSS,
  Javascript,
  Firebase,
  Typescript,
} from "../skills/frontendSkills.data";

import ProjectImage from "../../assets/svg/projects/project-image-iphone.svg"

const projects = [
  {
    type: ["frontend", "fullstack"],
    name: "Auto Mart client",
    description: "A little description about my very interesting project A little description about my very interesting project A little description about my very interesting project A little description about my very interesting project A little description about my very interesting project",
    image: ProjectImage,
    liveSite: "https://auto-mart-client.netlify.app",
    isPublic: true,
    github: "https://github.com/danugbeye",
    stack: [Javascript, React, TailwindCSS],
  },
  {
    type: ["backend", "fullstack"],
    name: "Auto Mart API",
    description: "A little description about my very interesting project",
    image: ProjectImage,
    liveSite: "https://auto-mart-client.netlify.app",
    isPublic: true,
    github: "https://github.com/danugbeye",
    stack: [Javascript, NodeJS, ExpressJS, MongoDB, Postman],
  },
  {
    type: ["backend"],
    name: "Author hive",
    description: "A little description about my very interesting project",
    image: ProjectImage,
    liveSite: "https://auto-mart-client.netlify.app",
    isPublic: true,
    github: "https://github.com/danugbeye",
    stack: [Javascript, NodeJS, ExpressJS, PostgreSQL, Postman, SwaggerDocs],
  },
  {
    type: ["frontend", "fullstack"],
    name: "Kode class",
    description: "A little description about my very interesting project",
    image: ProjectImage,
    liveSite: "https://auto-mart-client.netlify.app",
    isPublic: true,
    github: "https://github.com/danugbeye",
    stack: [Javascript, React, TailwindCSS, Firebase],
  },
  {
    type: ["frontend"],
    name: "My Portfolio",
    description: "A little description about my very interesting project",
    image: ProjectImage,
    liveSite: "https://auto-mart-client.netlify.app",
    isPublic: true,
    github: "https://github.com/danugbeye",
    stack: [Typescript, React, TailwindCSS],
  },
  {
    type: ["backend"],
    name: "Synque API",
    description: "A little description about my very interesting project",
    image: ProjectImage,
    liveSite: "https://auto-mart-client.netlify.app",
    isPublic: true,
    github: "https://github.com/danugbeye",
    stack: [Javascript, NodeJS, ExpressJS, MongoDB],
  },
];

export default projects;
