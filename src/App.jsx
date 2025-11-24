import React from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Banner from "./components/Banner";
function App() {
  return (
    <div>
      <div className="flex flex-col  gap-5 px-20 py-4 ">
        <Navbar />
        <Hero />
      </div>
      <Banner />
    </div>
  );
}

export default App;
