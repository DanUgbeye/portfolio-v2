import React from "react";
import StyledSection from "../../../../components/StyledSection.component";
import HelloImage from "../../../../assets/svg/hello-image.svg";
import InterestButton from "./InterestButton.component";
import { stack } from "../../../../../app.interface";
import ContactForm from "./ContactForm.component";

export default function ContactSection() {
  const [interest, setInterest] = React.useState<stack | undefined>();

  return (
    <StyledSection className="  ">
      <div
        id="contact"
        className=" pt-12 sm:pt-[10rem] pb-12 sm:pb-[10rem] flex flex-col xl:flex-row gap-x-5 gap-y-5 "
      >
        <div className=" w-full ">
          <h4 className=" font-bold mb-3 ">LET'S DISCUSS YOUR PROJECT</h4>

          <p className=" text-sm font-normal max-w-lg mb-5 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet nam
            nam imperdiet maecenas vivamus.
          </p>

          <p className=" text-lg font-medium max-w-lg mb-3 ">
            I am interested in
          </p>

          <div className=" flex flex-col gap-x-5 gap-y-5 mb-12 ">
            <div className=" flex flex-col sm:flex-row sm:flex-wrap gap-y-5 gap-x-5 ">
              <InterestButton
                active={interest === "frontend"}
                onClick={() => setInterest("frontend")}
              >
                Frontend Web Development
              </InterestButton>

              <InterestButton
                active={interest === "backend"}
                onClick={() => setInterest("backend")}
              >
                Backend Web Development
              </InterestButton>
            </div>

            <div className=" flex flex-col sm:flex-row sm:flex-wrap gap-y-5 gap-x-5 ">
              <InterestButton
                active={interest === "fullstack"}
                onClick={() => setInterest("fullstack")}
              >
                Full Stack Web Development
              </InterestButton>

              <InterestButton
                active={interest === "iot"}
                onClick={() => setInterest("iot")}
              >
                IOT & Embedded Systems Prog.
              </InterestButton>
            </div>
          </div>

          <ContactForm />
        </div>

        <div className=" w-full hidden md:flex ">
          <img src={HelloImage} alt={"contact me"} className="  " />
        </div>
      </div>
    </StyledSection>
  );
}
