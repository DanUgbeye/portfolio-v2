import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormikErrors } from "formik/dist/types";
import InterestButton from "./InterestButton.component";
import { stack } from "../../../../../app.interface";
import CustomTextArea from "./CustomTextArea.component";

interface FormValues {
  email: string;
  name: string;
  message: string;
}

export default function ContactForm() {
  const [interest, setInterest] = React.useState<stack | "other" | "">("");
  const initialValues: FormValues = { email: "", name: "", message: "" };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validate={(values) => {
          const errors: FormikErrors<FormValues> = {};
          if (!values.email) {
            errors.email = "email is required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "invalid email address";
          }

          if (!values.name) {
            errors.name = "name is required";
          }

          if (values.message.length > 1024) {
            errors.message = "message should be 1024 characters max";
          }
          if (!values.message) {
            errors.message = "message is required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          const formValues = { ...values, interest };
          setTimeout(() => {
            alert(JSON.stringify(formValues, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting, touched, errors }) => (
          <Form className=" flex flex-col gap-y-8 text-sm w-full lg:max-w-lg ">
            <fieldset className=" my-4 flex flex-col  ">
              <p className=" text-sm font-bold mb-3 ">I am interested in</p>

              <div className=" px-1 grid grid-cols-[repeat(auto-fit,_minmax(11.5rem,_1fr))] gap-x-4 gap-y-5 ">
                <InterestButton
                  active={interest === "frontend"}
                  onClick={() => {
                    if (interest === "frontend") {
                      setInterest("");
                      return;
                    }
                    setInterest("frontend");
                  }}
                >
                  <span className="  ">Frontend</span>
                  <span className=" ml-1 ">Web&nbsp;Development</span>
                </InterestButton>

                <InterestButton
                  active={interest === "backend"}
                  onClick={() => {
                    if (interest === "backend") {
                      setInterest("");
                      return;
                    }
                    setInterest("backend");
                  }}
                >
                  <span className="  ">Backend</span>
                  <span className=" ml-1 ">Web&nbsp;Development</span>
                </InterestButton>

                <InterestButton
                  active={interest === "fullstack"}
                  onClick={() => {
                    if (interest === "fullstack") {
                      setInterest("");
                      return;
                    }
                    setInterest("fullstack");
                  }}
                >
                  <span className="  ">Full&nbsp;Stack</span>
                  <span className=" ml-1 ">Web&nbsp;Development</span>
                </InterestButton>

                <InterestButton
                  active={interest === "iot"}
                  onClick={() => {
                    if (interest === "iot") {
                      setInterest("");
                      return;
                    }
                    setInterest("iot");
                  }}
                >
                  <span className="  ">IOT</span>
                  <span className=" ml-1 ">Systems&nbsp;Development</span>
                </InterestButton>

                <InterestButton
                  active={interest === "other"}
                  onClick={() => {
                    if (interest === "other") {
                      setInterest("");
                      return;
                    }
                    setInterest("other");
                  }}
                >
                  Others
                </InterestButton>
              </div>
            </fieldset>

            <div className=" grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-4 lg:grid-cols-1 ">
              <fieldset className=" flex flex-col relative w-full ">
                <Field
                  id="name"
                  className={
                    " bg-transparent h-12 rounded-lg px-4 border border-border-gray w-full max-w-lg outline-0 focus:border-violet-dark focus:border-2 transition-all duration-300 placeholder-transparent peer hover:border-white "
                  }
                  type="text"
                  name="name"
                  placeholder="Name"
                />

                <label
                  htmlFor="name"
                  className=" absolute -top-2.5 text-border-gray bg-deep-blue-700 px-1 rounded-md ml-4 peer-placeholder-shown:top-3.5 peer-placeholder-shown:ml-4 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:bg-deep-blue-700 peer-focus:px-1 peer-focus:text-border-gray transition-all duration-300 pointer-events-none "
                >
                  Name
                </label>

                <ErrorMessage
                  className={` ${
                    touched.name && errors.name ? "visible" : "invisible"
                  } text-red-500 text-xsm ml-2 `}
                  name="name"
                  component="div"
                />
              </fieldset>

              <fieldset className=" flex flex-col relative w-full ">
                <Field
                  id="email"
                  className={
                    " bg-transparent h-12 rounded-lg px-4 border border-border-gray w-full max-w-lg outline-0 focus:border-violet-dark focus:border-2 transition-all duration-300 placeholder-transparent peer hover:border-white "
                  }
                  type="email"
                  name="email"
                  placeholder="Email"
                />

                <label
                  htmlFor="email"
                  className=" absolute -top-2.5 text-border-gray bg-deep-blue-700 px-1 rounded-md ml-4 peer-placeholder-shown:top-3.5 peer-placeholder-shown:ml-4 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:bg-deep-blue-700 peer-focus:px-1 peer-focus:text-border-gray transition-all duration-300 pointer-events-none "
                >
                  Email
                </label>
                <ErrorMessage
                  className={` ${
                    touched.email && errors.email ? "visible" : "invisible"
                  } text-red-500 text-xsm ml-2 `}
                  name="email"
                  component="div"
                />
              </fieldset>

              <CustomTextArea
                rows={5}
                name="message"
                placeholder="Message"
                label="Message"
              />
            </div>

            <button
              className=" h-12 bg-violet-light hover:bg-violet-dark/90 disabled:bg-violet-dark/50 disabled:text-violet-light px-4 rounded-lg w-full max-w-lg lg:max-w-xl text-lg transition-all duration-300 tracking-wide hover:tracking-wider outline outline-1 outline-transparent mx-auto lg:m-0 hover:outline-violet-dark focus:outline-violet-dark border-2 border-deep-blue-900 "
              type="submit"
              disabled={isSubmitting}
            >
              Send
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
