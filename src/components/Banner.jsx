import React from "react";
import Marquee from "./Marquee";
import Square from "./Square";
import Icon from "./Icon";

function Banner() {
  return (
    <div>
        <div className="ml-4">
            
                  <Icon
            url={
              "https://mailmeteor.com/logos/assets/PNG/Google_Drive_Logo_256px.png"
            }
            
                  ></Icon>
        </div>
      <div className="relative h-[150px] w-[2100px] mr-[120px] z-40 mb-[50px] bg-blue-500 rotate-165">
        <Square classy={`left-1/2 top-1/2 h-10 w-10 roate-45`} />
      </div>
      <Marquee className="absoulte z-0 mb-[30px]" />
    </div>
  );
}

export default Banner;
