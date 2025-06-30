import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Waves, Droplets, Anchor } from "lucide-react";

export default function Home() {
  const [firstEnded, setFirstEnded] = useState(false);
  const [loopStarted, setLoopStarted] = useState(false);
  const videoRef = useRef(null);

  // When the first play ends, reveal hero content and start infinite loop
  const handleVideoEnded = () => {
    setFirstEnded(true);
    setTimeout(() => {
      setLoopStarted(true);
      // Restart video for looping
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play();
      }
    }, 250); // Optional: tiny buffer for clean transition
  };

  // Features
  const features = [
    {
      title: "Deep Sea Exploration",
      description: "Cutting-edge technology for uncharted depths",
      icon: <Anchor className="text-blue-400" size={28} />,
    },
    {
      title: "Marine Conservation",
      description: "Sustainable solutions for ocean preservation",
      icon: <Droplets className="text-teal-400" size={28} />,
    },
    {
      title: "Underwater Innovation",
      description: "Revolutionary approaches to aquatic challenges",
      icon: <Waves className="text-cyan-400" size={28} />,
    },
  ];

  // Hero content animation: slow, clean, "from below"
  const contentVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.95, filter: "blur(16px)" },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 1.25,
        type: "spring",
        damping: 18,
        delayChildren: 0.5,
        staggerChildren: 0.23,
      },
    },
  };
  const cardVariants = {
    hidden: { opacity: 0, y: 48, scale: 0.98, filter: "blur(12px)" },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 1, type: "spring", stiffness: 80, damping: 14 },
    },
  };

  return (
    <div className="relative min-h-screen bg-[#0a0b0f]">
      {/* HERO SECTION with Video BG */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video as hero bg */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="/video/bg-video.mp4"
          autoPlay
          muted
          playsInline
          loop={loopStarted}
          onEnded={handleVideoEnded}
          style={{ pointerEvents: "none" }}
        />
        {/* Soft dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0b0f]/80 to-[#0e1120]/85 z-10" />

        {/* AnimatePresence for HERO CONTENT */}
        <AnimatePresence>
          {firstEnded && (
            <motion.div
              className="relative z-20 w-full flex flex-col items-center justify-center min-h-screen"
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {/* Main hero text */}
              <motion.div variants={cardVariants} className="mb-8">
                <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-200 text-transparent bg-clip-text text-center drop-shadow-md">
                  Welcome to Hydrojan
                </h1>
                <p className="text-lg md:text-2xl text-blue-100 mt-6 text-center max-w-2xl mx-auto">
                  Pioneering the future of underwater technology.
                </p>
              </motion.div>

              {/* Features row */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 w-full max-w-5xl mt-4 mb-12"
                variants={contentVariants}
              >
                {features.map((feature, i) => (
                  <motion.div
                    key={i}
                    variants={cardVariants}
                    className="bg-white/10 backdrop-blur-[7px] border border-blue-100/20 rounded-2xl shadow-xl flex flex-col items-center p-8 transition-all hover:scale-105 hover:shadow-cyan-300/20 duration-300"
                  >
                    <div className="mb-3">{feature.icon}</div>
                    <h3 className="text-xl font-semibold text-cyan-100 mb-1 text-center">
                      {feature.title}
                    </h3>
                    <p className="text-blue-200/90 text-center">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Card */}
              <motion.div
                variants={cardVariants}
                className="w-full max-w-xl bg-white/10 backdrop-blur-[7px] border border-blue-100/20 rounded-2xl shadow-lg flex flex-col items-center p-8 mb-2"
              >
                <h2 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-cyan-200 mb-3 text-center">
                  Our Mission
                </h2>
                <p className="text-blue-100 text-center mb-6">
                  Innovating the underwater world with sustainable solutions that push the boundaries of
                  marine exploration while preserving our precious ocean ecosystems.
                </p>
                <motion.button
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-lg font-semibold shadow-lg shadow-cyan-500/20 transition-all duration-300"
                  whileHover={{ scale: 1.07 }}
                >
                  Explore Our Technology
                  <ArrowRight className="inline ml-2" size={22} />
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
}
