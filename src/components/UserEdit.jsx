import React from "react";
import FormikRootComponent from "../formikForm/FormikRootContainer";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAllUser } from "../slices/userSlice";
function UserEdit() {
  const users = useSelector(selectAllUser);
  const { id } = useParams();
  const user = users.find((user) => user.id === id);
  return (
    <div className="mx-auto flex min-h-[60vh] w-10/12  justify-center ">
      <FormikRootComponent savedUserInfo={user} />
    </div>
  );
}

export default UserEdit;
