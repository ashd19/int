import React from "react";
import Marquee from "./Marquee";
function Banner() {
  return (
    <>
      <div className=" h-[150px] w-[2000px] z-10 overflow-hidden bg-blue-600 rotate-165"></div>

      <Marquee className="z-0" />
    </>
  );
}

export default Banner;
