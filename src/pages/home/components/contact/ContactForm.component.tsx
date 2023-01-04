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

  React.useEffect(() => {
    console.log(interest);
  }, [interest]);

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
            errors.name = "required";
          }

          if (values.message.length > 1024) {
            errors.message = "message should be 1024 characters max";
          }
          if (!values.message) {
            errors.message = "required";
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
          <Form className=" flex flex-col gap-y-5 text-sm ">
            <fieldset className=" flex flex-wrap gap-x-5 gap-y-5 ">
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
                Frontend
                <span className=" hidden ">Web Development</span>
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
                Backend
                <span className=" hidden ">Web Development</span>
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
                Full Stack
                <span className=" hidden ">Web Development</span>
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
                IOT
                <span className=" hidden "> & Embedded Systems Prog.</span>
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
                Other
              </InterestButton>
            </fieldset>

            <fieldset className=" flex flex-col gap-y-1 ">
              <label htmlFor="name" className=" block ">
                Name
              </label>
              <Field
                id="name"
                className={
                  " bg-transparent h-12 rounded-lg px-4 border border-border-gray w-full max-w-lg outline-0 focus:border-violet-dark focus:border-2 "
                }
                type="text"
                name="name"
                placeholder="Enter your Name"
              />
              <ErrorMessage
                className={` ${
                  touched.name && errors.name ? "visible" : "invisible"
                } text-red-500 text-xsm ml-2 `}
                name="name"
                component="div"
              />
            </fieldset>

            <fieldset className=" flex flex-col gap-y-1 ">
              <label htmlFor="email" className=" block ">
                Email
              </label>
              <Field
                id="email"
                className={
                  " bg-transparent h-12 rounded-lg px-4 border border-border-gray w-full max-w-lg outline-0 focus:border-violet-dark focus:border-2 "
                }
                type="email"
                name="email"
                placeholder="Enter your Email"
              />
              <ErrorMessage
                className={` ${
                  touched.email && errors.email ? "visible" : "invisible"
                } text-red-500 text-xsm ml-2 `}
                name="email"
                component="div"
              />
            </fieldset>

            <CustomTextArea
              rows={8}
              name="message"
              placeholder="Enter your Message"
              label="Message"
            />

            <button
              className=" h-10 bg-violet-light disabled:bg-violet-dark/50 disabled:text-violet-light px-4 rounded-lg w-fit text-lg "
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
