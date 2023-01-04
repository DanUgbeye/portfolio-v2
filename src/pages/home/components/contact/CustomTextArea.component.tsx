import React from "react";
import { FieldHookConfig, FieldProps, useField } from "formik";

export type CustomTextAreaProps =
  React.TextareaHTMLAttributes<HTMLTextAreaElement> &
    React.ClassAttributes<HTMLTextAreaElement> &
    FieldHookConfig<string> & { label: string };

export default function CustomTextArea({
  label,
  ...props
}: CustomTextAreaProps) {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <fieldset className=" flex flex-col gap-y-1 ">
      <label className=" block " htmlFor={props.id || props.name}>{label}</label>
      <textarea
        className=" bg-transparent rounded-lg px-4 py-2 border border-border-gray w-full max-w-lg outline-0 focus:border-violet-dark focus:border-2 resize-none "
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="  ">{meta.error}</div>
      ) : null}
    </fieldset>
  );
}
