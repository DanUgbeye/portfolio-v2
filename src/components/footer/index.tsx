import React from "react";
import StyledSection from "../StyledSection.component";
import FooterLink from "./FooterLink.component";

// icon imports
import { FaGithub, FaLinkedinIn, FaEnvelope, FaPhoneAlt, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <StyledSection className=" bg-footer ">
      <div className=" py-[1.5rem] sm:py-[4rem] gap-y-6 flex flex-col">
        <h4 className=" text-sm font-bold text-center ">Follow me:</h4>

        <div className=" max-w-fit w-fit px-8 mx-auto flex flex-wrap gap-x-4 md:gap-x-8 gap-y-4 ">
          <div className=" flex gap-x-4 md:gap-x-8 mx-auto ">
            <FooterLink
              link="mailto:ugbeyellionz@gmail.com"
            >
              <FaEnvelope size={20} className=" text-white " />
            </FooterLink>

            <FooterLink
              link="https://github.com/danugbeye"
            >
              <FaGithub size={20} className=" text-white " />
            </FooterLink>
          </div>

          <div className=" flex gap-x-4 md:gap-x-8 mx-auto ">
            <FooterLink
              link="https://linkedin.com/in/danielugbeye"
            >
              <FaLinkedinIn size={20} className=" text-white " />
            </FooterLink>

            <FooterLink
              link="https://twitter.com/Ugbeye_Daniel"
            >
              <FaTwitter size={20} className=" text-white " />
            </FooterLink>
          </div>

          <div className=" flex gap-x-4 md:gap-x-8 mx-auto ">
            <FooterLink
              phone="09095369485"
            >
              <FaPhoneAlt size={20} className=" text-white " />
            </FooterLink>
          </div>
        </div>
      </div>
    </StyledSection>
  );
}
