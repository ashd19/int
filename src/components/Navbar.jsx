import React from "react";

function Navbar() {
  return (
    <div>
      <div className="flex justify-between items-center py-4 px-2">
        <div className="flex gap-4 ">
          <div className="font-bold text-3xl ">maxima</div>
          {["Home", "Our Team", "Contact"].map((item, index) => (
            <h1 key={index} className="mt-2">
              {item}
            </h1>
          ))}
        </div>
        <div className="flex gap-4">
          <button className="cursor-pointer">Send us an Email</button>
          <div className="bg-neutral-200 rounded-2xl py-1 px-3 cursor-pointer">
            {" "}
            Book a demo
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
