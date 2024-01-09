import React from "react";
import deletePng from "../assets/delete.png";
import editPng from "../assets/edit.png";
import viewPng from "../assets/view.png";
import { capitalize } from "../../constant";
import { UserInfoShow, Image } from "../common";
import { useDispatch } from "react-redux";
import { removeUser } from "../slices/userSlice";
import { parseISO, formatDistanceToNow } from "date-fns";
function IndividualUser({ userInfo }) {
  const dispatch = useDispatch();
  return (
    <article className="flex w-full justify-between rounded-xl bg-fieldColor p-4 px-8">
      <div className="flex w-10/12 flex-col justify-between lg:flex-row">
        <UserInfoShow
          field={capitalize(userInfo.username)}
          heading={"Username"}
        />
        <UserInfoShow
          field={capitalize(userInfo.position)}
          heading={"Position"}
        />
        <UserInfoShow
          field={`${formatDistanceToNow(
            parseISO(userInfo.timeOfCreation)
          )} ago`}
          heading={"Created at"}
        />
      </div>
      <div className=" flex w-2/12 items-center justify-end gap-16 ">
        <Image toGo={`/view/${userInfo.id}`}>{viewPng}</Image>
        <Image toGo={`/edit/${userInfo.id}`}>{editPng}</Image>
        <Image
          onClick={() => {
            dispatch(removeUser(userInfo.id));
          }}>
          {deletePng}
        </Image>
      </div>
    </article>
  );
}

export default IndividualUser;
