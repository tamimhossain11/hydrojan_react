import React from "react";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

const HydroJan10 = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center bg-black text-white px-4 py-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-6"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          className="inline-block"
        >
          <Loader2 size={60} className="text-blue-500" />
        </motion.div>

        <h1 className="text-4xl md:text-5xl font-bold text-blue-400">
          HydroJan 1.0
        </h1>
        <p className="text-white/70 text-lg md:text-xl">
          The next evolution is on its way. Stay tuned for the most advanced version of HydroJan yet!
        </p>
      </motion.div>
    </div>
  );
};

export default HydroJan10;
