// components/BlogTwo.jsx
import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const BlogTwo = () => {
  return (
    <div className="space-y-16">
      {/* Hero Cover Image */}
      <motion.div
        className="relative w-full h-[60vh] rounded-xl overflow-hidden shadow-lg"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <img
          src="/Image/blog2hero.png"
          alt="HydroJan 0.2 Hero"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white px-4 text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            HydroJan 0.2
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            22nd January, 2025
          </motion.p>
        </div>
      </motion.div>

      {/* Blog Introduction */}
      <motion.div
        className="text-gray-300 text-lg leading-relaxed"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <p>
         One dream. Countless challenges. But above all progress. Just ten days after the unveiling of HydroJan 0.1, our team found itself back in the lab, armed with fresh data, feedback from testing, and a wild hunger to do better. 

        </p>
        <p className="mt-4">
          The final tests of HydroJan 0.1 had taught us where we fell short. The rectangular hull, although easy to build and test, proved to be less effective in navigating real underwater environments. Its corners created drag, and its flat surfaces were more susceptible to water resistance and impact damage in dense or dynamic aquatic conditions.
        </p>
        <p className="mt-4">
          Our mentors, recognizing this issue, advised us to consider a cylindrical hull design. A shift that would improve hydrodynamics and structural integrity. Inspired by professional AUV designs and driven by our desire to improve, we made the bold decision to redesign HydroJan’s body from the ground up.

        </p>
        <p className="mt-4">
          HydroJan 0.2 was going to be stronger, smarter, and sleeker.As we prepared for specific RoboSub tasks like <strong>Task 3 (Drop-a-Bruv)</strong> and <strong>Task 5 (Ocean Cleanup)</strong>, functionality became key. We installed a custom robotic arm to manipulate objects — from plastic cups to metallic spoons — taking our design into the world of motion control and interaction.
        </p>
        <p className="mt-4">
           To meet the requirements of object manipulation, we designed and installed a custom robotic arm capable of grabbing items of various shapes and sizes from a plastic cup to a metallic spoon. This was our first step into integrating motion control and object interaction, and it brought a whole new layer of complexity to our build.While our vehicle was still wired, this version represented a leap in capability, and we took great care to ensure the wiring and control system could handle the added load and functionality of the robotic arm.

        </p>
      </motion.div>
      {/* 2nd  */}
      <motion.div
        className="relative w-full h-[60vh] rounded-xl overflow-hidden shadow-lg"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <img
          src="/Image/blog2One.png"
          alt="HydroJan 0.2 Hero"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white px-4 text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
           
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            25 January, 2025
          </motion.p>
        </div>
      </motion.div>

      {/* Blog Introduction */}
      <motion.div
        className="text-gray-300 text-lg leading-relaxed"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <p>
         Once the modifications were complete, we returned to our now-familiar testing ground: the Mirpur Cantonment Swimming Pool. The excitement was once again palpable, but this time, so was the nervousness. We were piloting a machine that had taken hours of design, fabrication, and integration.
        </p>
        <p className="mt-4">
         The initial submersion went smoothly. The cylindrical body cut through the water with more grace than its predecessor, and the robotic arm moved as intended during surface-level trials. However, during movement trials, a new problem surfaced: insufficient thruster power. While we had upgraded several systems, the thrusters were still the same as in 0.1 and they were no longer enough.

        </p>
        
      </motion.div>
      {/* 2nd  */}
      <motion.div
        className="relative w-full h-[60vh] rounded-xl overflow-hidden shadow-lg"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <img
<<<<<<< HEAD
          src="/Image/blog2two.png"
=======
          src="/Image/blog2two.png"
>>>>>>> cf7d726d9cc640a9e5fd3077dd6ab3b5eeb88d8c
          alt="HydroJan 0.2 Hero"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white px-4 text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
           
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            26 January, 2025
          </motion.p>
        </div>
      </motion.div>

      {/* Blog Introduction */}
      <motion.div
        className="text-gray-300 text-lg leading-relaxed"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <p>
         For this version, we had aimed for 500 meters forward movement and a 10-foot dive, with 50 minutes of mission runtime. In reality, HydroJan 0.2 managed about 200 meters, and a 5-foot dive. Not perfect, but definitely an upgrade from the last one.
        </p>
        <p className="mt-4">
         Big shoutout to our team leader, and the entire mechanical, software, and electrical teams. This version was a group effort all the way. HydroJan 0.2 may not have been flawless, but it was smarter, stronger, and a lot closer to what we imagined.

        </p>
        
      </motion.div>

     

    </div>
  );
};

export default BlogTwo;
