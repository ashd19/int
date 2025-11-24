import React from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
function App() {
  return (
    <div>
      <div className="flex flex-col  gap-5 px-20 py-4 ">
        <Navbar />
        <Hero />
        <Marquee />
      </div>
    </div>
  );
}

export default App;
