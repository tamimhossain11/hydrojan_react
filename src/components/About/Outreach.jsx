import React from "react";
import { motion } from "framer-motion";
import { Image } from "lucide-react";

const Outreach = () => {
  const images = Array.from({ length: 36 }, (_, i) => `/outreach/event${i + 1}.jpg`);

  return (
    <section className="min-h-screen  text-white px-4 py-20">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 flex justify-center items-center gap-3">
            <Image className="text-blue-400" size={32} />
            Outreach Event at St. Joseph Higher Secondary School

          </h1>
          <div className="text-blue-300 space-y-2 max-w-3xl mx-auto">
            <p className="font-semibold">📍 Venue: Venus Room, St. Joseph Higher Secondary School
</p>
            <p>🗓️ 28 June, 2025</p>
            <p>
              Inspiring Curiosity and Innovation: A memorable day where Team DoB HydroJan engaged with nearly a hundred students during an in-depth STEM session
              exploring RoboSub 2025. The event aimed to spark ideas, provide insights, and open doors to future possibilities for our young innovators.
            </p>
          </div>
        </motion.div>

        {/* Image Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
        >
          {images.map((src, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden rounded-xl border border-blue-800 shadow-md"
            >
              <img
                src={src}
                alt={`Outreach Event ${idx + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Outreach;
