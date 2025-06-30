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
            DOB HydroJan is the underwater robotics division of Dreams of Bangladesh, established in 2025 as the organization’s first entry into the field of Autonomous Underwater Vehicles (AUVs). With this initiative, we step into the international arena through our participation in the RoboSub competition, one of the world’s leading platforms for underwater robotics.

            <br /><br />
            Our team brings together a group of dedicated students ranging from middle school to university level, combining diverse skill sets in engineering, programming, design, and innovation. While Dreams of Bangladesh has a strong track record in robotics and technology competitions, HydroJan represents a more focused and technically advanced direction, aimed at solving real-world underwater challenges through autonomous systems.

            <br /><br />
            We are committed to building reliable, mission-ready AUVs that reflect both technical rigor and creative problem-solving. Beyond the competition, our goal is to encourage STEM excellence among Bangladeshi youth, contribute to the country’s growing robotics landscape, and inspire future talent to pursue innovation in marine technology.

            <br /><br />
            DOB HydroJan is a step forward for student-led research, practical engineering, and global collaboration from Bangladesh.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Section1;
