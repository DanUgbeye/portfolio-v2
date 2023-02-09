import React from "react";
import StyledSection from "../../../../components/StyledSection.component";
import HelloImage from "../../../../assets/svg/hello-image.svg";
import ContactForm from "./ContactForm.component";

export default function ContactSection() {

  return (
    <StyledSection className="  ">
      <div
        id="contact"
        className=" pt-12 sm:pt-[10rem] pb-12 sm:pb-[10rem] flex  gap-x-10 gap-y-5 "
      >
        <div className=" w-full ">
          <h4 className=" font-bold mb-3 ">LET'S DISCUSS YOUR PROJECT</h4>

          <p className=" text-sm font-normal max-w-lg mb-5 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet nam
            nam imperdiet maecenas vivamus.
          </p>

          <ContactForm />
        </div>

        <div className=" w-full hidden lg:flex ">
          <img src={HelloImage} alt={"contact me"} className=" self-start " />
        </div>
      </div>
    </StyledSection>
  );
}
