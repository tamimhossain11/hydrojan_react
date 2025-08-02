import React from "react";
import { motion } from "framer-motion";
import { Droplet } from "lucide-react";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
};

const Sponsor = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#050b1e] to-[#0a1128] text-white px-6 py-20">
      <div className="max-w-6xl mx-auto text-center space-y-24">

        {/* Gold Sponsor */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 flex items-center justify-center gap-3">
            <Droplet className="text-yellow-300" size={32} />
            Gold Sponsor
          </h1>

          <motion.img
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            src="/Image/Dreams of Bangladesh.png"
            alt="Dreams of Bangladesh"
            className="mx-auto w-72 md:w-96 rounded-2xl shadow-[0_10px_30px_rgba(255,255,0,0.3)] hover:scale-105 transition-transform"
          />

          <p className="text-blue-200 max-w-2xl mx-auto text-lg">
            All innovations and global outreach of the HydroJan AUV project are proudly supported and funded by
            <span className="text-yellow-300 font-semibold"> Dreams of Bangladesh</span>, the most promising robotics and research organization in Bangladesh.
          </p>

          <a
            href="https://dreamsofbangladesh.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-xl font-semibold shadow-lg"
          >
            Visit Dreams of Bangladesh
          </a>
        </motion.div>

        {/* Hosting Partner */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="space-y-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-cyan-400">
            Official Hosting Partner
          </h2>

          <motion.img
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            src="/Image/hostingsponsor1.png"
            alt="FabTech.IT"
            className="mx-auto w-60 md:w-80 rounded-2xl shadow-[0_10px_30px_rgba(0,255,255,0.25)] hover:scale-105 transition-transform"
          />

          <p className="text-blue-200 max-w-2xl mx-auto text-lg">
            Our hosting partner,
            <span className="text-cyan-300 font-semibold"> FabTech.IT</span>, ensures secure and high-performance digital infrastructure for HydroJan’s mission-critical systems.
          </p>

          <a
            href="https://fabtechit.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg"
          >
            Visit FabTech.IT
          </a>
        </motion.div>

        {/* Robotics Component Partners */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-cyan-400">
            Robotics Component Partners
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">

            {/* HobbyRC BD */}
            <motion.div
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-[#0f172a] p-6 rounded-2xl shadow-lg hover:shadow-purple-500/30 transition-all space-y-4 text-center"
            >
              <img
                src="/Image/hobbyRc.jpg"
                alt="HobbyRC BD"
                className="mx-auto w-52 rounded-xl shadow-md hover:scale-105 transition-transform"
              />
              <h3 className="text-2xl font-semibold text-cyan-400">HobbyRC BD</h3>
              <p className="text-blue-200">
                Trusted provider of robotics parts and high-performance components for HydroJan.
              </p>
              <div className="flex justify-center gap-4">
                <a
                  href="http://hobbyrcbd.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 underline"
                >
                  Website
                </a>
                <a
                  href="http://www.facebook.com/hobbyrcbd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  Facebook
                </a>
              </div>
            </motion.div>

            {/* RadioGear BD */}
            <motion.div
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-[#0f172a] p-6 rounded-2xl shadow-lg hover:shadow-purple-500/30 transition-all space-y-4 text-center"
            >
              <img
                src="/Image/RediogearBd.jpg"
                alt="RadioGear BD"
                className="mx-auto w-52 rounded-xl shadow-md hover:scale-105 transition-transform"
              />
              <h3 className="text-2xl font-semibold text-cyan-400">RadioGear BD</h3>
              <p className="text-blue-200">
                Supplier of high-tech robotics modules, electronics, and drone-grade components.
              </p>
              <div className="flex justify-center gap-4">
                <a
                  href="https://radiogearbd.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 underline"
                >
                  Website
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100085499793755"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  Facebook
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Sponsor;
