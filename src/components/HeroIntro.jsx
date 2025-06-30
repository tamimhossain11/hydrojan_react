// src/components/HeroIntro.jsx
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const text = " DoB-HYDROJAN";

const letterVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12 },
  }),
};

export default function HeroIntro({ onComplete, triggerOut }) {
  // triggerOut: when true, begin exit animation early
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
      if (onComplete) onComplete();
    }, 3500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  useEffect(() => {
    if (triggerOut) {
      setShowIntro(false);
      if (onComplete) onComplete();
    }
  }, [triggerOut, onComplete]);

  return (
    <AnimatePresence>
      {showIntro && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full bg-black z-50 flex items-center justify-center"
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{
            opacity: 0,
            scale: 1.12,
            transition: { duration: 1.2, ease: [0.4, 0.15, 0.2, 1] }
          }}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            className="text-white text-6xl md:text-8xl font-extrabold tracking-widest"
            initial="hidden"
            animate="visible"
          >
            {text.split("").map((letter, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={letterVariants}
                className="inline-block"
              >
                {letter}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
