// App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroIntro from "./components/HeroIntro";
import Navbar from "./components/Navbar";
import SubmarineScene from "./scenes/Submarine";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

export default function App() {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <Router>
      {!introComplete && <HeroIntro onComplete={() => setIntroComplete(true)} />}
      {introComplete && (
        <div className="relative z-10">
          <Navbar />
          <div className="water-bg"></div>
          <SubmarineScene />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      )}
    </Router>
  );
}
