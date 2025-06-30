// Section1.jsx
import React from "react";
import { motion } from "framer-motion";

const Section1 = () => {
  return (
    <div className="relative h-[600px] w-full text-white">
      {/* Content Layer */}
      <div className="relative z-10 h-full container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Left: Group Image */}
        <motion.div
          className="w-full md:w-1/2 h-auto flex justify-center items-center"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img
            src="/public/Image/GroupPic1.jpg"
            alt="DoB HydroJan Team"
            className="rounded-[5px] shadow-xl object-cover w-[80%] max-h-[400px]"
          />
        </motion.div>

        {/* Right: Heading and Description */}
        <motion.div
          className="w-full md:w-1/2 text-left mt-10 md:mt-0"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white drop-shadow">
            Our Story: DoB HydroJan
          </h2>
          <p className="mt-4 text-md md:text-lg text-white/90 leading-relaxed max-w-2xl">
            Founded in 2021, Dreams of Bangladesh – HydroJan was born from a dream to see Bangladesh making waves beneath the surface. This initiative was launched by passionate students and youth innovators who envisioned a future where our nation plays a key role in marine technology.
            <br /><br />
            As the country’s first dedicated underwater robotics team, our journey started in high school workshops and grew into an internationally competitive unit. We’re now on a bold mission: RoboSub 2025. This is more than a challenge—it’s our opportunity to showcase Bangladesh's innovation on a global stage.
            <br /><br />
            Our 2025 roadmap is filled with ambitious milestones: developing a next-generation Autonomous Underwater Vehicle (AUV), refining real-time navigation and AI systems, and collaborating globally to exchange knowledge and push boundaries.
            <br /><br />
            We are proud to represent the voice of Bangladeshi youth in underwater robotics. Our goal? Inspire a generation, innovate with impact, and make history—beneath the waves.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Section1;
