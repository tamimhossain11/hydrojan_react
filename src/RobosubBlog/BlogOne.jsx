// components/BlogOne.jsx
import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const BlogOne = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section 1 */}
      <motion.div
        className="relative w-full h-[60vh] rounded-xl overflow-hidden shadow-lg"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <img
          src="/Image/blog1hreo.jpg"
          alt="HydroJan 0.1 Hero"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white px-4 text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            HydroJan 0.1 : The Beginning
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            12th January, 2025
          </motion.p>
        </div>
      </motion.div>

      <motion.div className="text-gray-300 text-lg leading-relaxed" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <p>
          3… 2… 1… Go! That was the countdown that sparked something unforgettable. On that day, inside our buzzing lab filled with anticipation and ideas, a name was unveiled that would go on to shape our journey — <strong>“HydroJan”</strong>.
        </p>
        <p className="mt-4">
          Surrounded by our team leaders, core members, and trusted advisors, we officially gave identity to our vision. After hours of intense discussion, analyzing RoboSub AUVs from around the world, we decided it was time to make our mark.
        </p>
      </motion.div>
      {/* Hero Section 1 */}
      <motion.div
        className="relative w-full h-[60vh] rounded-xl overflow-hidden shadow-lg"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <img
          src="/Image/blog1one.jpg"
          alt="HydroJan 0.1 "
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white px-4 text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            From Whiteboard to Prototype
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            20 January, 2025
          </motion.p>
        </div>
      </motion.div>

      <motion.div className="text-gray-300 text-lg leading-relaxed" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <p>
         It all began with a rough sketch on a whiteboard, but the passion was real. Based on our initial calculations and the materials we planned to use, we estimated a project budget ranging from 20,000 to 30,000 BDT. With limited resources and limitless determination, we moved forward to build our first prototype, a wired version of the vehicle we called HydroJan 0.1.
 <strong>“HydroJan”</strong>.
        </p>
        
      </motion.div>

     

      {/* Hero Section 3 */}
      <motion.div
        className="relative w-full h-[60vh] rounded-xl overflow-hidden shadow-lg"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        viewport={{ once: true }}
      >
        <img
          src="/image/blog1two.jpg"
          alt="HydroJan Building"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center px-6 text-white">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Building, Hustling, and First Test</h2>
            
          </div>
        </div>
      </motion.div>

      {/* Final Words */}
      <motion.div
        className="text-gray-300 text-lg leading-relaxed"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <p>
         The first real challenge we faced was gathering the materials. The skeleton of our AUV, its metal workframe, needed to be built from scratch. Once that was in place, we focused on constructing the rectangular hull and installing the thruster. All of this required locally sourced materials, so we scoured nearby stores, one by one, to collect everything we needed. It was a hustle, but it brought the team closer together. For the waterproofing test, we first tried using a large plastic tub, thinking it would be enough to simulate underwater conditions. But, as we quickly learned, the water wasn’t deep or spacious enough for the experiment to work as planned. This minor setback led us to a much better alternative; the DSCSC Sports Complex Swimming Pool. It was there, in that professional setup, that we finally saw HydroJan 0.1 floating in water, and the excitement was indescribable.
We had set our goals clearly: to have the wired version of HydroJan 0.1 move 100 meters forward and dive at least 7 feet underwater. While it didn’t completely hit the mark, it came impressively close. Our prototype managed to move 85 meters forward and dive to a depth of 5 feet. The battery endurance time was 30 minutes and our mission runtime was for just an hour. Despite these early limitations, we were proud of what we had built and the lessons we were already learning. 
None of this would have been possible without the minds behind the machine. Present at every step of testing were the core pillars of the project; the leader, the team manager, our mechanical lead, and our electrical lead. We’re learning from every success, every failure, every late-night lab session, and every test pool trial. And this is just the beginning.

        </p>
        <p className="mt-4 font-semibold text-blue-400">
          And this... is just the beginning.
        </p>
      </motion.div>
    </div>
  );
};

export default BlogOne;
