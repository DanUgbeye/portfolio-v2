import React from "react";
import { FieldHookConfig, useField } from "formik";

export type CustomTextAreaProps =
  React.TextareaHTMLAttributes<HTMLTextAreaElement> &
    React.ClassAttributes<HTMLTextAreaElement> &
    FieldHookConfig<string> & { label: string };

export default function CustomTextArea({
  label,
  ...props
}: CustomTextAreaProps) {
  const [field, meta] = useField(props);
  return (
    <fieldset className=" flex flex-col gap-y-1 relative ">
      <textarea
        className=" bg-transparent rounded-lg px-4 py-2 border border-border-gray w-full max-w-lg outline-0 focus:border-violet-dark focus:border-2 resize-none transition-all duration-300 placeholder-transparent peer hover:border-white "
        {...field}
        {...props}
      />

      <label
        className=" absolute z-10 -top-2.5 text-border-gray bg-deep-blue-700 px-1 rounded-sm ml-4 peer-placeholder-shown:top-3.5 peer-placeholder-shown:ml-4 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:bg-deep-blue-700 peer-focus:px-1 peer-focus:text-border-gray transition-all duration-300 pointer-events-none  "
        htmlFor={props.id || props.name}
      >
        {label}
      </label>
      {meta.touched && meta.error ? (
        <div
          className={` ${
            meta.touched && meta.error ? "visible" : "invisible"
          } text-red-500 text-xsm ml-2 `}
        >
          {meta.error}
        </div>
      ) : null}
    </fieldset>
  );
}
