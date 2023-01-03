import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormikErrors } from "formik/dist/types";

// Render Prop
interface FormValues {
  email: string;
  name: string;
}

export default function ContactForm() {
  const initialValues: FormValues = { email: "", name: "" };
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
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting, touched }) => (
          <Form className=" flex flex-col gap-y-5 text-sm ">
            <fieldset className=" flex flex-col gap-y-1 ">
              <label htmlFor="name" className=" block ">
                Name
              </label>
              <Field
                id="name"
                className={
                  " bg-transparent h-12 rounded-lg px-4 border border-border-gray w-full max-w-sm "
                }
                type="text"
                name="name"
                placeholder="Enter your Name"
              />
              {touched.name && (
                <ErrorMessage className=" text-red-400 text-sm " name="name" component="div" />
              )}
            </fieldset>

            <fieldset className=" flex flex-col gap-y-1 ">
              <label htmlFor="email" className=" block ">
                Email
              </label>
              <Field
                id="email"
                className={
                  " bg-transparent h-12 rounded-lg px-4 border border-border-gray w-full max-w-sm "
                }
                type="email"
                name="email"
                placeholder="Enter your Email"
              />
              {touched.email && (
                <ErrorMessage className=" text-red-400 text-sm " name="email" component="div" />
              )}
            </fieldset>

            <button className=" h-12 bg-violet-light px-4 rounded-lg w-fit text-lg " type="submit" disabled={isSubmitting}>
              Send
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
