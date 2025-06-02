// src/App.jsx
import React, { useState } from "react";
import HeroIntro from "./components/HeroIntro";
import Home from "./pages/Home"; // Your real homepage
import Navbar from "./components/Navbar";
import SubmarineScene from "./scenes/Submarine";

export default function App() {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <>
      {!introComplete && <HeroIntro onComplete={() => setIntroComplete(true)} />}
      {introComplete && (
        <div className="relative z-10">
          <Navbar />
          <div className="water-bg"></div> {/* Before SubmarineScene */}
          <SubmarineScene/>
          <Home />
        </div>
      )}
    </>
  );
}
