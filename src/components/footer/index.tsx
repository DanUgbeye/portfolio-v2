import React from "react";
import StyledSection from "../StyledSection.component";
import FooterLink from "./FooterLink.component";

// icon imports
import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <StyledSection className=" bg-footer ">
        <div className=" py-[1.5rem] sm:py-[4rem] gap-y-6 flex flex-col">
          <h4 className=" text-sm font-bold text-center ">Follow me:</h4>

          <div className=" max-w-md w-full mx-auto flex flex-wrap justify-evenly gap-x-4 md:gap-x-8 gap-y-4 ">
            <FooterLink link="mailto:ugbeyellionz@gmail.com">
              <FaEnvelope size={20} className=" text-white " />
            </FooterLink>

            <FooterLink link="https://github.com/danugbeye">
              <FaGithub size={20} className=" text-white " />
            </FooterLink>

            <FooterLink link="https://linkedin.com/in/danielugbeye">
              <FaLinkedinIn size={20} className=" text-white " />
            </FooterLink>

            <FooterLink link="https://twitter.com/Ugbeye_Daniel">
              <FaTwitter size={20} className=" text-white " />
            </FooterLink>

            <FooterLink phone="09095369485">
              <FaPhoneAlt size={20} className=" text-white " />
            </FooterLink>
          </div>
        </div>
      </StyledSection>
      <StyledSection className=" bg-deep-blue-700  ">
        <div className=" flex w-full justify-center tracking-wider text-sm text-gray-300 py-2 ">
          <span className="  ">Made with 💜 by</span>
          <a
            target={"_blank"}
            href={"https://linkedin.com/in/danielugbeye"}
            className=" ml-1 border-b border-gray-300 hover:border-violet-400 hover:text-violet-400 transition-all duration-300 "
          >
            Daniel Ugbeye
          </a>
        </div>
      </StyledSection>
    </>
  );
}
