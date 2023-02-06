import NodeJsIcon from "../../assets/svg/skills/backend/nodejs.svg";
import ExpressJsIcon from "../../assets/svg/skills/backend/expressjs.svg";
import PhpIcon from "../../assets/svg/skills/backend/php.svg";
import MySqlIcon from "../../assets/svg/skills/backend/mysql.svg";
import PostgreSqlIcon from "../../assets/svg/skills/backend/postgresql.svg";
import MongoDbIcon from "../../assets/svg/skills/backend/mongodb.svg";
import PostmanIcon from "../../assets/svg/skills/backend/postman.svg";
import SwaggerIcon from "../../assets/svg/skills/backend/swagger.svg";
import StoplightIcon from "../../assets/svg/skills/backend/stoplight.svg";

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

const backendSkills = [
  NodeJS,
  ExpressJS,
  PHP,
  MySQL,
  PostgreSQL,
  MongoDB,
  Postman,
  SwaggerDocs,
  StoplightStudio,
];

export default backendSkills;

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
};
