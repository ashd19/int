import React from "react";

function Icon({ url }) {
  return (
    <div className="p-5 bg-white     w-16 h-16 flex items-center justify-center shadow-lg">
      <img src={url} alt="" />
    </div>
  );
}

export default Icon;
