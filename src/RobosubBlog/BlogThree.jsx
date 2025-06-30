// components/BlogTwo.jsx
import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const BlogThree = () => {
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
          src="/public/Image/blog3hero.jpg"
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
           HydroJan 0.3: Into the Depths of Possibility

          </motion.h1>
          <motion.p
            className="text-lg md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            20th March, 2025
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
       With every iteration, we’ve grown bolder, smarter, stronger. HydroJan 0.3 was the next prototype in our journey. It was the product of months of planning, feedback, trial and error, and relentless ambition. This time we were no longer experimenting to learn what we were building to conquer. As the RoboSub competition loomed closer, we sat down to create a proper roadmap and a structured plan for everything . 


        </p>
        <p className="mt-3">
          we needed hardware, software, mechanical design, control systems, and even documentation strategy. Every subsystem had a goal. Every member had a mission. With a dedicated team, supportive mentors, and an unshakable will to bring innovation with purpose, we finally had the foundation to pursue our long-term goal: building a fully functional, competition-ready Autonomous Underwater Vehicle (AUV) capable of executing complex tasks. All while promoting a mission for the betterment of mankind. Learning from the limitations of previous builds, 
        </p>
        <p className="mt-4">
          our engineering team decided it was time for a major structural overhaul. The rectangular hull of HydroJan 0.1 and the cylindrical body of 0.2 had served their purposes, but for stability and smooth hydrodynamics during deep navigation tasks, we opted for a capsule-shaped hull, providing the balance between aerodynamics and space optimization. To match this improved design, we also upgraded our thrusters. 

        </p>
        <p className="mt-4">
          Instead of relying on locally sourced components, we sourced high-performance thrusters from ROVmaker, known for their reliability and precision. These thrusters offered significantly better maneuverability, acceleration, and depth control and most importantly, they matched the complexity of the tasks we were about to face. 

        </p>
        <p className="mt-4">
           HydroJan 0.3 was constructed with a mild steel internal workframe to provide structural integrity under pressure, encased in an aluminum profile for lightweight durability and corrosion resistance. It was our most robust build, yet a true underwater machine. After weeks of assembly, wiring, and software integration, it was time to test our most advanced version yet. 


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
          src="/public/Image/blog3one.jpg"
          alt="HydroJan 0.3 Hero"
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
            On the evening of 20th March,
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
         On the evening of 20th March, on a mission runtime of 4 hours, our team gathered at the Mirpur D-Box Sports Complex for the final trial.The pool was deep, the pressure was real but so was our confidence.The challenge we had set out to conquer this time was task 2 ( Navigate the Channel ). Known for being one of the most technically demanding tasks in the RoboSub competition. With enhanced stability from the capsule design and the precision of our imported thrusters, HydroJan 0.3 exceeded expectations. Its movement was smooth, controlled, and consistent. 

        </p>
        
      </motion.div>
      {/* 3nd  */}
      <motion.div
        className="relative w-full h-[60vh] rounded-xl overflow-hidden shadow-lg"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <img
          src="/public/Image/blog2two.png"
          alt="HydroJan 0.3 "
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
         Navigation was sharper, turns were cleaner, and propulsion was ten times more efficient than anything we had achieved before.With full confidence in our system, we uploaded a new command routine. Moving forward 500 meters,executing a U-turn, and returning to the starting point.HydroJan 0.3 accomplished it like clockwork. 

        </p>
        <p className="mt-4">
         Big shoutout to our team leader, and the entire mechanical, software, and electrical teams. This version was a group effort all the way. HydroJan 0.2 may not have been flawless, but it was smarter, stronger, and a lot closer to what we imagined.

        </p>
        
      </motion.div>
      {/* 4th  */}
      <motion.div
        className="relative w-full h-[60vh] rounded-xl overflow-hidden shadow-lg"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <img
          src="/public/Image/blog3three.jpg"
          alt="HydroJan 0.3 "
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
        Behind this success was a brilliant synergy of minds:our mentors, our team leader, the mechanical and electrical teams, the software division, and our documentation lead, all working tirelessly to ensure every bolt, byte, and blueprint was on point. Each HydroJan version has brought us closer to mastering the art of building underwater vehicles but more importantly, it’s brought us closer as a team.  

        </p>
       
        
      </motion.div>

     

    </div>
  );
};

export default BlogThree;
