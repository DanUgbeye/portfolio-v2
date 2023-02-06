import React from "react";
import { Project } from "../../../../../app.interface";
import { default as ProjectComponent } from "./Project.component";

export default function ProjectGrid(props: { projects: Project[] }) {
  return (
    <div className="  ">
      {props.projects[0] && (
        <ProjectComponent className="  " {...props.projects[0]} />
      )}

      {props.projects[1] && (
        <ProjectComponent className="  " {...props.projects[1]} />
      )}

      {props.projects[2] && (
        <ProjectComponent className="  " {...props.projects[2]} />
      )}
    </div>
  );
}
