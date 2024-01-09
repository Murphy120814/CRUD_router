import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControlComponent from "./FormikControlComponent";
import { sexOptions } from "../../constant";
import { useDispatch, useSelector } from "react-redux";
import {
  addNewPost,
  updateUser,
  updateNotificationMessage,
  updateNotificationStatus,
} from "../slices/userSlice";
import { useNavigate } from "react-router-dom";

const handleNumericInputChange = (e, formikChange) => {
  const value = e.target.value;
  // Allow only numeric input
  if (value === "" || /^[0-9\b]+$/.test(value)) {
    formikChange(e);
  }
};
function FormikRootComponent({ savedUserInfo }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialValues = savedUserInfo || {
    username: "",
    phoneNumber: "",
    position: "",
    sex: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("User Name is required!"),
    sex: Yup.string(),
    position: Yup.string().required("Role is required!"),
    phoneNumber: Yup.string()
      .required("Phone number is required!")
      .min(10, "Must have 10 digits")
      .max(10, "Must have 10 digits")
      .matches(/^\d{10}$/, "Phone Number is Invalid"),
  });

  const onSubmit = (values, onSubmitProps) => {
    console.log("formData", values);
    const { username, phoneNumber, sex, position } = values;

    if (savedUserInfo !== undefined) {
      dispatch(updateUser({ ...savedUserInfo, ...values }));
      dispatch(updateNotificationStatus(true));
      dispatch(updateNotificationMessage("updated"));
    } else {
      dispatch(addNewPost({ username, phoneNumber, sex, position }));
      dispatch(updateNotificationStatus(true));
      dispatch(updateNotificationMessage("added"));
    }
    setTimeout(() => {
      navigate("/");
    }, 1000);
    onSubmitProps.resetForm();
  };

  return (
    <>
      <Formik
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        initialValues={initialValues}>
        {(formik) => {
          return (
            <Form className=" mt-4 flex min-h-full w-9/12 flex-col gap-2 lg:w-6/12 ">
              <div className="mb-2">
                <FormikControlComponent
                  control="input"
                  label="User Name*"
                  type="text"
                  name="username"
                  placeholder="Prathm1208"
                />
              </div>

              <div className="flex flex-col items-center justify-between  gap-2 lg:flex-row ">
                <div className=" w-full lg:w-6/12">
                  <FormikControlComponent
                    control="input"
                    label="Contact Number*"
                    type="text"
                    name="phoneNumber"
                    onChange={(e) =>
                      handleNumericInputChange(e, formik.handleChange)
                    }
                    placeholder="9191919123"
                  />
                </div>
                <div className="w-full lg:w-6/12">
                  <FormikControlComponent
                    control="select"
                    label="Gender"
                    options={sexOptions}
                    name="sex"
                  />
                </div>
              </div>

              <div className="mb-2">
                <FormikControlComponent
                  control="input"
                  label="Position*"
                  type="text"
                  name="position"
                  placeholder="React Developer"
                />
              </div>

              <button
                disabled={!(formik.isValid && formik.dirty)}
                type="submit"
                className="mt-2 w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white  focus:outline-none focus:ring-4 disabled:bg-black disabled:opacity-20  disabled:dark:bg-slate-700 sm:w-auto">
                {!savedUserInfo ? "Submit" : "Update"}
              </button>
            </Form>
          );
        }}
      </Formik>
    </>
  );
}

export default FormikRootComponent;
