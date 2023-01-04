export interface ReactElementProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {}

export type stack = "frontend" | "backend" | "fullstack" | "iot";
