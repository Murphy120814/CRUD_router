import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getNotification, updateNotificationStatus } from "../slices/userSlice";

function Notification() {
  const { status, msg } = useSelector(getNotification);

  return (
    status && (
      <div className="fixed left-1/2 top-6 -translate-x-1/2 translate-y-1/2 rounded-xl border-2 border-lime-700 bg-lime-200 px-6 py-3 text-center opacity-80 transition-all ease-in-out">
        <span className="font-semibold text-primaryButton">
          {" "}
          User has been {msg} successfully!!!
        </span>
      </div>
    )
  );
}

export default Notification;
