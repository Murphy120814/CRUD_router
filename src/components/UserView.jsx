import React from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAllUser } from "../slices/userSlice";
import UserCard from "../features/UserCard";
function UserView() {
  const users = useSelector(selectAllUser);
  const { id } = useParams();
  const user = users.find((user) => user.id === id) || {};
  return (
    <div className="mx-auto flex min-h-[60vh] w-10/12 items-start justify-center ">
      <div className="w-6/12 rounded-xl bg-fieldColor p-8 text-center  shadow-xl dark:shadow-md dark:shadow-slate-600">
        <span className=" text-2xl font-extrabold">User&apos;s Info</span>
        {Object.entries(user).map(([field, value], index) => (
          <UserCard field={field} value={value} key={index} />
        ))}
        <Link to={`/edit/${id}`}>
          <button className="mt-4 rounded-2xl bg-blue-700 px-4 py-2 font-semibold text-white">
            Update
          </button>
        </Link>
      </div>
    </div>
  );
}

export default UserView;
