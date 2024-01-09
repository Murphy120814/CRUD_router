import React from "react";
import { Link } from "react-router-dom";
function Image(props) {
  const { children, toGo = "", className, ...restProps } = props;
  return (
    <Link to={toGo}>
      <>
        <img
          src={children}
          alt={children}
          className={"h-[20px] w-[20px] cursor-pointer" + " " + className}
          {...restProps}></img>
      </>
    </Link>
  );
}

export default Image;
