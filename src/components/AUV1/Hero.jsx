import React from "react";
import { motion } from "framer-motion";

const keywords = [
  "Buoyancy Control System",
  "Jetson Orin Nano",
  "YOLO Object Detection",
  "Manipulator Arm",
  "Omnidirectional Propulsion"
];

const Hero = () => {
  return (
    <div className="w-full h-[500px] text-white flex flex-col justify-center items-center px-6 py-20">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-bold mb-6 text-center"
      >
        DoB HydroJan 0.1 — RoboSub AUV
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-lg md:text-xl text-center max-w-3xl mb-10"
      >
        AUV engineered for precision, autonomy, and underwater intelligence.
      </motion.p>

      <div className="flex flex-wrap justify-center gap-4 max-w-4xl">
        {keywords.map((word, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            className="px-5 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-sm md:text-base hover:bg-white/20 transition-all"
          >
            {word}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
