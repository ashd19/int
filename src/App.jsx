import React from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
function App() {
  return (
    <div>
      <div className="flex flex-col  gap-5 px-20 py-4 ">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
}

export default App;
