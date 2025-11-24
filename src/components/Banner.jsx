import React from "react";
import Marquee from "./Marquee";
function Banner() {
  return (
    <div>
      <div className="relative h-[150px] w-full z-40 bg-blue-600 rotate-165"></div>
      <Marquee className="absoulte z-0" />
    </div>
  );
}

export default Banner;
