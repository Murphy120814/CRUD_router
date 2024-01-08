import React from "react";
import { Field, ErrorMessage } from "formik";
import FormikTextError from "./FormikTextError";

function FormikInput(props) {
  const { label, name, ...restProps } = props;
  return (
    <>
      <label
        htmlFor={name}
        className="mb-1 block text-sm font-medium text-gray-900 dark:text-white">
        {label}
      </label>
      <Field
        name={name}
        id={name}
        {...restProps}
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"></Field>
      <ErrorMessage name={name} component={FormikTextError}></ErrorMessage>
    </>
  );
}

export default FormikInput;
