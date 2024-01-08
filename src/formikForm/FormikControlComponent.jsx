import React from "react";
import FormikSelectInput from "./FormikSelectInput";
import FormikInput from "./FormikInput";

function FormikControlComponent(props) {
  const { control, ...restProps } = props;
  switch (control) {
    case "input":
      return <FormikInput {...restProps} />;
    case "select":
      return <FormikSelectInput {...restProps} />;
    default:
      return null;
  }
}

export default FormikControlComponent;
