import React from "react";

export default function AboutMe() {
  return (
    <div id="about" className=" text-sm font-bold  ">
      <h4 className=" mb-3 ">ABOUT ME</h4>
      <p className=" mb-2 ">I am Daniel Ugbeye</p>
      <p className=" font-normal max-w-[32rem] mb-9 ">
        I am a full-stack web developer based in Nigeria. I have X years
        experience in web development. I started my journey as a Computer
        Science student from the University of Calabar in NIgeria. I have taken
        a lot of courses and bootcamps to further improve my skills. Recently, I
        got certified as a Backend Developer Graduate at Top Universe.
      </p>

      <button className=" grid rounded-lg bg-violet-dark place-items-center px-3 text-sm tracking-wide font-normal h-12 ">
        Download Resume
      </button>
    </div>
  );
}
