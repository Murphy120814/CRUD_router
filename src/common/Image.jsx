import React from "react";

function Image(props) {
  const { children, className, ...restProps } = props;
  return (
    <img
      src={children}
      alt={children}
      className={"w-[20px] h-[20px] cursor-pointer" + " " + className}
      {...restProps}></img>
  );
}

export default Image;
