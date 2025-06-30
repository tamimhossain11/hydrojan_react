import React from "react";
import { motion } from "framer-motion";

const Section1 = () => {
  return (
    <div className="relative w-full  text-white py-16 md:py-24">
      <div className="relative z-10 container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Left: Group Image */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center items-center"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img
            src="/Image/GroupPic1.jpg"
            alt="DoB HydroJan Team"
            className="rounded-[5px] shadow-xl object-cover w-[90%] max-h-[500px]"
          />
        </motion.div>

        {/* Right: Text Content */}
        <motion.div
          className="w-full md:w-1/2 text-left"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-cyan-400 drop-shadow-md mb-4">
            Our Story: <span className="text-white">DoB HydroJan</span>
          </h2>
          <p className="text-white/90 text-md md:text-lg leading-relaxed max-w-2xl">
            DoB HydroJan is the underwater robotics division of <strong className="text-cyan-300">Dreams of Bangladesh</strong>, launched in 2025 as our first venture into Autonomous Underwater Vehicles (AUVs). Our journey begins on the global stage through the prestigious <strong>RoboSub</strong> competition.
            
            With team members ranging from middle school to university, we combine diverse expertise in engineering, programming, and design. While Dreams of Bangladesh has a legacy in robotics, <strong className="text-cyan-300">HydroJan</strong> marks our leap into advanced innovation, tackling real underwater challenges with autonomy and purpose.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Section1;
