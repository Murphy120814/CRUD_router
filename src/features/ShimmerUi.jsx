import React from "react";

function ShimmerUi() {
  const divArray = new Array(10).fill("").map((_, index) => {
    return (
      <div
        key={index}
        className="flex w-full justify-between rounded-xl bg-fieldColor p-6 opacity-50"></div>
    );
  });
    return divArray
}

export default ShimmerUi;
