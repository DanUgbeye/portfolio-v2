// BACKEND SKILLS
import NodeJsIcon from "../../assets/svg/skills/backend/nodejs.svg";
import ExpressJsIcon from "../../assets/svg/skills/backend/expressjs.svg";
import PhpIcon from "../../assets/svg/skills/backend/php.svg";
import MySqlIcon from "../../assets/svg/skills/backend/mysql.svg";
import PostgreSqlIcon from "../../assets/svg/skills/backend/postgresql.svg";
import MongoDbIcon from "../../assets/svg/skills/backend/mongodb.svg";
import PostmanIcon from "../../assets/svg/skills/backend/postman.svg";
import SwaggerIcon from "../../assets/svg/skills/backend/swagger.svg";
import StoplightIcon from "../../assets/svg/skills/backend/stoplight.svg";

// FRONTEND SKILLS
import HtmlIcon from "../../assets/svg/skills/frontend/html.svg";
import CssIcon from "../../assets/svg/skills/frontend/css.svg";
import JavascriptIcon from "../../assets/svg/skills/frontend/javascript.svg";
import ReactIcon from "../../assets/svg/skills/frontend/react.svg";
import NextjsIcon from "../../assets/svg/skills/frontend/nextjs.svg";
import TailwindcssIcon from "../../assets/svg/skills/frontend/tailwindcss.svg";
import TypescriptIcon from "../../assets/svg/skills/frontend/typescript.svg";
import FirebaseIcon from "../../assets/svg/skills/frontend/firebase.svg";
import ReduxIcon from "../../assets/svg/skills/frontend/redux.svg";

// OTHER SKILLS
import CppIcon from "../../assets/svg/skills/other/c++.svg";
import ArduinoIcon from "../../assets/svg/skills/other/arduino.svg";
import GitIcon from "../../assets/svg/skills/other/git.svg";
import GithubIcon from "../../assets/svg/skills/other/github.svg";
import VsCodeIcon from "../../assets/svg/skills/other/vscode.svg";

// BACKEND SKILLS

const NodeJS = {
  name: "Node JS",
  svg: NodeJsIcon,
};

const ExpressJS = {
  name: "Express JS",
  svg: ExpressJsIcon,
  whiteBg: true,
};

const PHP = {
  name: "PHP",
  svg: PhpIcon,
};

const MySQL = {
  name: "MySQL",
  svg: MySqlIcon,
};

const PostgreSQL = {
  name: "PostgreSQL",
  svg: PostgreSqlIcon,
};

const MongoDB = {
  name: "Mongo DB",
  svg: MongoDbIcon,
};

const Postman = {
  name: "Postman",
  svg: PostmanIcon,
};

const SwaggerDocs = {
  name: "Swagger Docs",
  svg: SwaggerIcon,
};

const StoplightStudio = {
  name: "Stoplight Studio",
  svg: StoplightIcon,
  whiteBg: true,
};

// FRONTEND SKILLS
const HTML = {
  name: "HTML",
  svg: HtmlIcon,
};

const CSS = {
  name: "CSS",
  svg: CssIcon,
};

const Javascript = {
  name: "JavaScript",
  svg: JavascriptIcon,
};

const Typescript = {
  name: "TypeScript",
  svg: TypescriptIcon,
};

const React = {
  name: "React",
  svg: ReactIcon,
};

const NextJS = {
  name: "Next JS",
  svg: NextjsIcon,
  whiteBg: true,
};

const TailwindCSS = {
  name: "Tailwind CSS",
  svg: TailwindcssIcon,
};

const Firebase = {
  name: "Firebase",
  svg: FirebaseIcon,
};

const Redux = {
  name: "Redux Toolkit",
  svg: ReduxIcon,
};

// OTHER SKILLS
const Cpp = {
  name: "C++",
  svg: CppIcon,
};

const Arduino = {
  name: "Arduino",
  svg: ArduinoIcon,
};

const Git = {
  name: "Git",
  svg: GitIcon,
};

const GitHub = {
  name: "GitHub",
  svg: GithubIcon,
  whiteBg: true,
};

const VSCode = {
  name: "VS Code",
  svg: VsCodeIcon,
};

const Skills = {
  backendSkills: [
    NodeJS,
    ExpressJS,
    PHP,
    MySQL,
    PostgreSQL,
    MongoDB,
    Postman,
    SwaggerDocs,
    StoplightStudio,
  ],

  frontendSkills: [
    HTML,
    CSS,
    Javascript,
    Typescript,
    React,
    NextJS,
    TailwindCSS,
    Firebase,
    Redux,
  ],

  otherSkills: [Cpp, Arduino, Git, GitHub, VSCode],
};

export default Skills;

export {
  NodeJS,
  ExpressJS,
  PHP,
  MySQL,
  PostgreSQL,
  MongoDB,
  Postman,
  SwaggerDocs,
  StoplightStudio,
  HTML,
  CSS,
  Javascript,
  Typescript,
  React,
  NextJS,
  TailwindCSS,
  Firebase,
  Redux,
  Cpp,
  Arduino,
  Git,
  GitHub,
  VSCode,
};
