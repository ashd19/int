import React from "react";

function Hero() {
  return (
    <div>
      <div className="mt-10">
        <h1 className="font-bold font-mono text-7xl leading-none tracking-tighter">
          Your AI Copilot for a{" "}
        </h1>{" "}
        <br />
        <h1 className="font-bold font-mono text-7xl leading-none tracking-tighter">
          Fast,Audit-Ready Close
        </h1>
      </div>

      <div className="mt-5 text-light font-mono">
        <h1>Maxima automates flux, JEs and checklists - helping finance</h1>{" "}
        <h1>teams close faster with full accuracy and compliance.</h1>
      </div>

      <div className="mt-7 flex gap-4">
        <button className="bg-black rounded-3xl py-3 px-7  text-white font-md">
          Book a demo
        </button>
        <button className="bg-white rounded-3xl py-3 px-7 border-white border-2 shadow-2xl  text-black font-md">
          Send us an Email
        </button>
      </div>
    </div>
  );
}

export default Hero;
