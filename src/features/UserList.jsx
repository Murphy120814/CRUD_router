import React, { useEffect } from "react";
import IndividualUser from "./IndividualUser";
import { fetchUserList, selectAllUser, getStatus } from "../slices/userSlice";
import { useDispatch, useSelector } from "react-redux";

function UserList() {
  const dispatch = useDispatch();
  const userList = useSelector(selectAllUser);
  const status = useSelector(getStatus);
  let renderedUserList;

  useEffect(() => {
    if (status == "idle") {
      dispatch(fetchUserList());
    }
  }, [status, dispatch]);

  if (status === "loading") {
    renderedUserList = <p>Loading ....</p>;
  }
  if (status === "success") {
    renderedUserList = userList?.map((user) => (
      <IndividualUser key={user.id} userInfo={user} />
    ));
  }
  if (status === "failed") {
    renderedUserList = <p>ErrorMessage</p>;
  }

  return <section className="flex flex-col gap-3">{renderedUserList}</section>;
}

export default UserList;
