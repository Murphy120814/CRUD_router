import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import lightMode from "../assets/sunny.png";
import darkMode from "../assets/moon.png";
import Image from "../common/Image";
import { useSelector, useDispatch } from "react-redux";
import { selectTheme, toggleTheme } from "../slices/themeSlice";

function Navbar() {
  const dispatch = useDispatch();
  const darkTheme = useSelector(selectTheme);
  useEffect(() => {
    if (darkTheme == true) {
      document.body.classList.add("dark");
    }
    if (darkTheme == false) {
      document.body.classList.remove("dark");
    }
  }, [darkTheme]);
  return (
    <div className="flex min-h-[100px] w-full items-center justify-between  px-8">
      <NavLink to="/">
        {" "}
        <span className="cursor-pointer text-3xl font-extrabold text-primaryButton dark:text-white">
          UserHub.
        </span>
      </NavLink>

      <div className="flex items-center gap-6">
        <NavLink to="/">
          {({ isActive }) => {
            return (
              <button
                className={`font-bold text-black dark:text-white ${
                  isActive
                    ? "border-b-2 border-primaryButton dark:border-white"
                    : ""
                }`}>
                Dashboard
              </button>
            );
          }}
        </NavLink>
        <NavLink to="/add">
          {({ isActive }) => {
            return (
              <button
                className={`font-bold text-black dark:text-white ${
                  isActive
                    ? "border-b-2 border-primaryButton dark:border-white"
                    : ""
                }`}>
                Add user
              </button>
            );
          }}
        </NavLink>
        <button
          className="flex items-center gap-2 rounded-3xl border border-primaryButton p-2 px-3"
          onClick={() => dispatch(toggleTheme())}>
          <Image>{!darkTheme ? darkMode : lightMode}</Image>
          <span className="text-black dark:text-white">
            {!darkTheme ? "Dark" : "Light"}
          </span>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
