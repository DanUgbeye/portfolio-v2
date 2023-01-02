import React from "react";
import emailIcon from "../../../../assets/svg/email.svg";
import githubIcon from "../../../../assets/svg/github.svg";
import linkedinIcon from "../../../../assets/svg/linkedin.svg";

export default function IntroText() {
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

        <button className=" bg-violet-dark h-12 rounded-lg px-3 w-fit ">
          Let's Talk
        </button>
      </div>

      <div className="hidden md:flex flex-col md:flex-row gap-x-6 gap-y-6 md:items-center mt-16  ">
        <div className=" font-bold my-auto md:self-start ">Check out my</div>
        <div className=" flex gap-x-5 items-center md:self-start ">
          <button className=" rounded-full h-12 bg-off-white aspect-square grid place-items-center overflow-hidden  ">
            <img src={emailIcon} className="  " />
          </button>
          <button className=" rounded-full h-12 bg-off-white aspect-square grid place-items-center overflow-hidden  ">
            <img src={githubIcon} className="  " />
          </button>
          <button className=" rounded-full h-12 bg-off-white aspect-square grid place-items-center overflow-hidden  ">
            <img src={linkedinIcon} className="  " />
          </button>
        </div>
      </div>
    </div>
  );
}
