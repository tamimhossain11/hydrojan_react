import React from "react";
import { motion } from "framer-motion";
import AUVImage from "/Image/auv-bg.png";

const keywords = [
  "Modular Frame & Structural System",
  "Buoyancy and Depth Control",
  "Omnidirectional Propulsion",
  "3-DOF Manipulator Arm",
  "Acoustic Navigation",
  "DVL Integration",
  "Advanced Vision System"
];

const HeroThree = () => {
  return (
    <section className="w-full bg-black text-white px-6 py-20">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-16">
        {/* Right Side Keywords */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="lg:w-1/2 w-full space-y-6"
        >
          <h2 className="text-4xl font-bold text-blue-400 mb-4">
            DoB HydroJan 0.3 – Evolved Intelligence
          </h2>

          <div className="flex flex-wrap gap-3">
            {keywords.map((word, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-sm md:text-base hover:bg-white/20 transition-all"
              >
                {word}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Left Side Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="lg:w-1/2 w-full"
        >
          <img
            src={AUVImage}
            alt="HydroJan 0.3"
            className="rounded-2xl shadow-lg w-full h-auto object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroThree;
