import React from "react";

function Footer() {
  return (
    <div className="w-full bg-primaryButton p-3 text-center">
      Developed by{" "}
      <span className="font-bold text-orange-500 ">
        <a href="https://frontendmeta.dev" target="_blank" rel="noreferrer">
          Prathmesh Vhatkar{" "}
        </a>
      </span>
      with ❤
    </div>
  );
}

export default Footer;
