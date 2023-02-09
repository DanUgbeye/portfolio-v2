import React from "react";

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
    <div className=" bg-deep-blue-700 hover:bg-violet-light px-6 md:px-6 pt-8 md:pt-12 pb-12 md:pb-16 rounded-lg md:rounded-none shadow-round-lg shadow-black/20 flex flex-col gap-y-6 transition-all duration-300 w-full max-w-sm mx-auto group hover:scale-[1.01] ">
      <props.svg
        height={64}
        width={64}
        className=" text-violet-light group-hover:text-white aspect-square "
      />
      <h4 className=" font-bold text-lg ">{props.name}</h4>
      <p className=" text-sm ">{props.description}</p>
    </div>
  );
}
