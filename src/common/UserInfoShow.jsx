import React from "react";

function UserInfoShow({ field, heading }) {
  return (
    <div className="flex w-6/12 justify-start">
      {" "}
      <span className="font-bold">{`${heading} :`}</span> {field}
    </div>
  );
}

export default UserInfoShow;
