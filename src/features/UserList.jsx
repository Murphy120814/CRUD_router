import React, { useEffect } from "react";
import IndividualUser from "./IndividualUser";
import {
  fetchUserList,
  selectAllUser,
  getStatus,
  getNotification,
  updateNotificationStatus,
} from "../slices/userSlice";

import { useDispatch, useSelector } from "react-redux";
import ShimmerUi from "./ShimmerUi";
function UserList() {
  const dispatch = useDispatch();
  const userList = useSelector(selectAllUser);
  const status = useSelector(getStatus);
  const { status: notificationStatus } = useSelector(getNotification);
  let renderedUserList;

  useEffect(() => {
    let timer;
    if (notificationStatus === true) {
      timer = setTimeout(() => {
        dispatch(updateNotificationStatus(false));
      }, 1000);
    }
    return () => clearTimeout(timer);
  });
  console.log("rendered");
  useEffect(() => {
    if (status == "idle") {
      dispatch(fetchUserList());
    }
  }, [status, dispatch]);

  if (status === "loading") {
    renderedUserList = <ShimmerUi />;
  }
  if (status === "success") {
    const orderedList = userList
      ?.slice()
      .sort((a, b) => b.timeOfCreation.localeCompare(a.timeOfCreation));
    renderedUserList = orderedList?.map((user) => (
      <IndividualUser key={user.id} userInfo={user} />
    ));
  }
  if (status === "failed") {
    renderedUserList = <p>ErrorMessage</p>;
  }

  return <section className="flex flex-col gap-3">{renderedUserList}</section>;
}

export default UserList;
