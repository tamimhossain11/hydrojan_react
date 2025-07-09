// src/components/AboutHero.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AboutHero = () => {
  return (
    <div className="relative h-[500px] w-full text-white fish-cursor overflow-hidden">
      {/* 🌊 Background Layer */}
      <div className="absolute inset-0 z-0 bg-[url('/image/auv-bg.png')] bg-cover bg-center opacity-10 blur-sm"></div>

      {/* 🧾 Foreground Content */}
      <div className="relative z-10 container mx-auto h-full px-4 flex flex-col justify-center items-start text-left">
        {/* 🧠 Heading */}
        <motion.h1
          className="text-3xl md:text-5xl font-extrabold drop-shadow-xl leading-tight font-sans"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
        >
          We are <span className="text-blue-400">DoB HydroJan</span> —<br />
          Bangladesh’s Pioneers in Underwater Robotics
        </motion.h1>

        {/* 📜 Subtext */}
        <motion.p
          className="mt-4 max-w-2xl text-lg md:text-xl text-white/90 drop-shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          Empowering innovation below the surface. Competing globally. Engineering the future.
        </motion.p>

        {/* 🔗 Call to Action Buttons */}
        <motion.div
          className="mt-6 flex gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          <Link
            to="/team/departments"
            aria-label="Meet the team section"
            className="px-6 py-2 rounded-full bg-blue-500 hover:bg-blue-600 text-white font-semibold shadow-md transition"
          >
            Meet the Team
          </Link>
          <Link
            to="/robosub/blog"
            aria-label="Explore our RoboSub journey"
            className="px-6 py-2 rounded-full border border-blue-400 text-blue-300 hover:bg-blue-500 hover:text-white transition font-medium"
          >
            Explore Our Journey
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutHero;
