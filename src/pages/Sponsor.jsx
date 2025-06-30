import React from "react";
import { motion } from "framer-motion";
import { Droplet } from "lucide-react";

const Sponsor = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#050b1e] to-[#0a1128] text-white px-6 py-20">
      <div className="max-w-5xl mx-auto text-center space-y-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 flex items-center justify-center gap-3">
            <Droplet className="text-blue-400" size={32} />
            Proudly Sponsored By
          </h1>
          <p className="text-blue-200 max-w-xl mx-auto">
            All innovations, competitions, and global outreach of the HydroJan AUV project are proudly supported and funded by
            <span className="text-cyan-300 font-semibold"> Dreams of Bangladesh</span>, a visionary robotics and research organization dedicated to shaping the future of Bangladesh through technology.
          </p>
        </motion.div>

        {/* Visual or Tagline */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <h2 className="text-2xl font-semibold text-white">
            "Empowering the next generation of tech leaders"
          </h2>
          <p className="text-blue-300">
            From local labs to international stages — we grow, build, and innovate together.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <a
            href="/about"
            className="inline-block mt-6 bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-xl font-medium transition-all"
          >
            Learn More About Us
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Sponsor;
