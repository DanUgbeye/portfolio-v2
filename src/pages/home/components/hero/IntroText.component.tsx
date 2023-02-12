import React from "react";
import useAnchorNavigate from "../../../../hooks/useAnchorNavigate.hook";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function IntroText() {
  const anchorNavigate = useAnchorNavigate();

  return (
    <div className=" max-w-3xl text-sm flex flex-col relative mb-12 w-full ">
      <div className=" flex flex-col gap-y-8 ">
        <h1 className=" text-3xl md:text-4xl font-bold text-white ">
          Hello, I'm Daniel Ugbeye
        </h1>

        <p className=" text-white font-normal">
          I am a full stack web developer from Nigeria. I work to design, test,
          and implement various software applications. I write codes not only
          for the user's front end web applications or mobile applications but
          also write API codes that sits in the middle, the server code that
          sits in the back to connect and communicate with databases.
        </p>

        <button
          onClick={() => {
            anchorNavigate("/#contact");
          }}
          className=" bg-violet-light hover:bg-violet-dark h-12 w-[6rem] rounded-lg transition-all duration-500 tracking-wide hover:tracking-wider outline outline-1 outline-transparent hover:outline-violet-dark border-2 border-deep-blue-700 "
        >
          Let's Talk
        </button>
      </div>

      <div className=" hidden md:flex flex-col md:flex-row gap-x-6 gap-y-6 md:items-center mt-16  ">
        <div className=" font-bold my-auto md:self-start ">Check out my</div>
        <div className=" flex gap-x-5 items-center md:self-start ">
          <a
            href={"https://linkedin.com/in/danielugbeye"}
            target={"_blank"}
            className=" rounded-full h-12 bg-off-white aspect-square grid place-items-center overflow-hidden hover:bg-gray-300/50 hover:shadow-gray-200/50 hover:shadow-round-lg focus:shadow-gray-200/50 focus:shadow-round-lg group transition-colors duration-300 "
          >
            <FaLinkedinIn
              size={20}
              className=" text-deep-blue-900 group-hover:text-deep-blue-900/80 transition-all duration-300 "
            />
          </a>
          <a
            href={"https://github.com/danugbeye"}
            target={"_blank"}
            className=" rounded-full h-12 bg-off-white aspect-square grid place-items-center overflow-hidden hover:bg-gray-300/50 hover:shadow-gray-200/50 hover:shadow-round-lg focus:shadow-gray-200/50 focus:shadow-round-lg group transition-all duration-300 "
          >
            <FaGithub
              size={24}
              className=" text-deep-blue-900 group-hover:text-deep-blue-900/80 transition-all duration-300 "
            />
          </a>
          <a
            href={"https://twitter.com/Ugbeye_Daniel"}
            target={"_blank"}
            className=" rounded-full h-12 bg-off-white aspect-square grid place-items-center overflow-hidden hover:bg-gray-300/50 hover:shadow-gray-200/50 hover:shadow-round-lg focus:shadow-gray-200/50 focus:shadow-round-lg group transition-all duration-300 "
          >
            <FaTwitter
              size={20}
              className=" text-deep-blue-900 group-hover:text-deep-blue-900/80 transition-all duration-300 "
            />
          </a>
        </div>
      </div>
    </div>
  );
}
