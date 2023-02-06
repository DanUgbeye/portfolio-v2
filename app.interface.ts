export interface ReactElementProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {}

export type stack = "frontend" | "backend" | "fullstack" | "iot";

export interface Skill {
  name: string;
  svg: string;
  whiteBg?: boolean;
}

export interface Project {
  type: string[];
  name: string;
  description: string;
  liveSite: string;
  image: string;
  isPublic: boolean;
  github: string;
  stack: {
    name: string;
    svg: string;
  }[];
}
