import React from "react";
import { motion } from "framer-motion";
import { UsersRound } from "lucide-react";

const TeamAdvisors = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#050b1e] via-[#0a1128] to-[#020817] text-white px-6 py-20 flex items-center justify-center">
      <div className="flex flex-col md:flex-row gap-10 max-w-7xl mx-auto w-full">
        {/* Advisor 1 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="bg-[#0f1a3b]/60 border border-blue-800 shadow-2xl rounded-3xl w-full p-10 backdrop-blur-xl"
        >
          <div className="grid items-center gap-8">
            {/* Image */}
            <motion.div
              initial={{ x: -60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="rounded-2xl overflow-hidden border-2 border-blue-700 shadow-lg"
            >
              <img
                src="/Image/AdvisonPic.jpg"
                alt="Advisor"
                className="w-full object-cover h-full grayscale hover:grayscale-0 transition-all duration-500"
              />
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ x: 60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="space-y-4"
            >
              <div className="text-cyan-400 text-lg font-semibold flex items-center gap-2">
                <UsersRound size={24} /> Advisor to Team DoB HydroJan
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">Ariful Hasan Opu</h2>
              <p className="text-blue-200 text-sm leading-relaxed">
                President, Space Innovation Camp <br />
                Adviser, NASA Space Apps Challenge Bangladesh <br />
                Adviser, Team DoB HydroJan
              </p>
              <p className="text-blue-300 text-sm md:text-base leading-loose">
                “It’s a proud moment for all of us as Team DoB HydroJan from Bangladesh makes its mark
                on the global stage at RoboSub — a prestigious platform for students worldwide to engage
                in hands-on engineering, fostering innovation and collaboration in the field of underwater robotics.
                Representing the spirit of innovation, resilience, and teamwork, these young minds are not just
                building robots — they’re building the future of underwater technology.”
                <br />
                <br />
                Keep dreaming big, Team HydroJan — the nation is proud of you.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Advisor 2 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="bg-[#0f1a3b]/60 border border-blue-800 shadow-2xl rounded-3xl w-full p-10 backdrop-blur-xl"
        >
          <div className="grid items-center gap-8">
            {/* Image */}
            <motion.div
              initial={{ x: -60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="rounded-2xl overflow-hidden border-2 border-blue-700 shadow-lg"
            >
              <img
                src="/leaders/AdvisorTwo.jpg"
                alt="Advisor"
                className="w-full object-cover h-full grayscale hover:grayscale-0 transition-all duration-500"
              />
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ x: 60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="space-y-4"
            >
              <div className="text-cyan-400 text-lg font-semibold flex items-center gap-2">
                <UsersRound size={24} /> Advisor to Team DoB HydroJan
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">Md. Moin Uddin</h2>
              <p className="text-blue-200 text-sm leading-relaxed">
                President, Dreams of Bangladesh <br />
                Senior Teacher, Ashuganj Tap Bidyut Kendra High School <br />
                Adviser, Team DoB HydroJan
              </p>
              <p className="text-blue-300 text-sm md:text-base leading-loose">
                "As an advisor, it fills me with immense pride to see Team DoB HydroJan from Bangladesh stepping
                onto the global stage at RoboSub — one of the world’s most esteemed underwater robotics competitions.
                These passionate young innovators are not only showcasing technical brilliance but also the spirit
                of our nation. They are proof that with vision, resilience, and teamwork, we can shape the future of
                underwater technology."
                <br />
                <br />
                Keep rising, Team HydroJan — you carry the dreams of a nation, and we stand proudly behind you.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TeamAdvisors;
