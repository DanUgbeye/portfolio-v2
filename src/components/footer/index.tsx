import React from 'react'
import StyledSection from '../StyledSection.component'
import FooterLink from './FooterLink.component'
import EmailIcon from "../../assets/svg/email.svg";

export default function Footer() {
  return (
    <StyledSection  className=" bg-footer ">
      <div className=" py-[4rem] gap-y-6 flex flex-col">
        <h4 className=" text-sm font-bold text-center ">Follow me:</h4>
        <div className=" w-fit mx-auto flex gap-x-9 ">
          <FooterLink>
            <img src={EmailIcon} alt="" className="  " />
          </FooterLink>

          <FooterLink>
            <img src={EmailIcon} alt="" className="  " />
          </FooterLink>

          <FooterLink>
            <img src={EmailIcon} alt="" className="  " />
          </FooterLink>

          <FooterLink>
            <img src={EmailIcon} alt="" className="  " />
          </FooterLink>
        </div>
      </div>
    </StyledSection>
  )
}
