import React from "react";
import { motion } from "framer-motion";

const RobosubGallery = () => {
  const outreachImages = Array.from({ length: 36 }, (_, i) => `/outreach/event${i + 1}.jpg`);
  const behindSceneImages = Array.from({ length: 16 }, (_, i) => `/Gallery/Gallery${i + 1}.jpg`);

  return (
    <div className="min-h-screen px-6 py-20 bg-gradient-to-br from-[#020617] via-[#0a1128] to-[#050b1e] text-white space-y-20">
      {/* Outreach Album */}
      <section>
        <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-8 text-center">
          Outreach Moments
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {outreachImages.map((src, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden rounded-xl border border-blue-800 shadow-md"
            >
              <img
                src={src}
                alt={`Outreach Event ${idx + 1}`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Behind the Scene Album */}
      <section>
        <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-8 text-center">
          Behind the Scene
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {behindSceneImages.map((src, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden rounded-xl border border-blue-800 shadow-md"
            >
              <img
                src={src}
                alt={`Behind the Scene ${idx + 1}`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default RobosubGallery;
