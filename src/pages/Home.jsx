import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Anchor, Droplets, Waves } from "lucide-react";
import Timeline from "../components/Home/Timeline";
import Goals from "../components/Home/Goals";
import TeamIntro from "../components/Home/TeamIntro";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  const [showContent, setShowContent] = useState(false);
  const videoRef = useRef(null);

  // Typing animation states
  const texts = ["Hydrojan", "AUV System", "Underwater Explorer"];
  const typingSpeed = 150;
  const erasingSpeed = 100;
  const pauseBeforeErase = 1500;
  const pauseBeforeType = 200;
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayedText, setDisplayedText] = useState("");

  // Show content after 3 seconds on every page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 4000);
    
    return () => clearTimeout(timer);
  }, []);

  // Typing effect (only starts after initial animation)
  useEffect(() => {
    if (!showContent) return;
    
    let timer;
    const handleType = () => {
      const fullText = texts[textIndex];
      const updated = isDeleting
        ? fullText.substring(0, displayedText.length - 1)
        : fullText.substring(0, displayedText.length + 1);

      setDisplayedText(updated);

      if (!isDeleting && updated === fullText) {
        timer = setTimeout(() => setIsDeleting(true), pauseBeforeErase);
      } else if (isDeleting && updated === "") {
        setIsDeleting(false);
        setTextIndex((idx) => (idx + 1) % texts.length);
        timer = setTimeout(handleType, pauseBeforeType);
        return;
      } else {
        timer = setTimeout(
          handleType,
          isDeleting ? erasingSpeed : typingSpeed
        );
      }
    };

    timer = setTimeout(handleType, pauseBeforeType);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, textIndex, showContent]);

  // Feature cards
  const features = [
    {
      title: "Deep Sea Exploration",
      description: "Cutting-edge technology for uncharted depths",
      icon: <Anchor className="text-blue-400" size={32} />,
    },
    {
      title: "Marine Conservation",
      description: "Sustainable solutions for ocean preservation",
      icon: <Droplets className="text-teal-400" size={32} />,
    },
    {
      title: "Underwater Innovation",
      description: "Revolutionary approaches to aquatic challenges",
      icon: <Waves className="text-cyan-400" size={32} />,
    },
  ];

  // Animation variants
  const contentVariants = {
    hidden: { opacity: 0, y: 60, filter: "blur(16px)" },
    visible: {
      opacity: 1,
      y: 0,
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
    hidden: { opacity: 0, y: 48, filter: "blur(12px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 1, type: "spring", stiffness: 80, damping: 14 },
    },
  };

  return (
    <div className="relative bg-gradient-to-b from-[#0a0b0f] to-[#051736]">
      {/* Header - Only shown after 3 seconds */}
      <AnimatePresence>
        {showContent && (
          <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 w-full z-50 bg-[#0a0b0f]/90 backdrop-blur-sm"
          >
            <Navbar />
          </motion.header>
        )}
      </AnimatePresence>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <iframe
          ref={videoRef}
          className="absolute inset-0 w-full h-full z-0"
          src="https://www.youtube.com/embed/fVlYFV3TVe8?autoplay=1&mute=1&loop=1&playlist=fVlYFV3TVe8&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1"
          title="Background Video"
          allow="autoplay; encrypted-media"
          style={{ 
            pointerEvents: "none",
            width: "100vw",
            height: "56.25vw", // 16:9 aspect ratio
            minHeight: "100vh",
            minWidth: "177.77vh", // 16:9 aspect ratio
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0b0f]/80 to-[#0e1120]/85 z-10" />

        <AnimatePresence>
          {showContent && (
            <motion.div
              className="relative z-20 flex flex-col items-center justify-center text-center px-4 lg:px-0 space-y-4 w-full mt-16"
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <motion.h1
                className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-blue-100 drop-shadow-md px-4 w-full"
                variants={cardVariants}
              >
                <span className="block mb-2 md:mb-4">Welcome to</span>
                <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-200 text-transparent bg-clip-text">
                  {displayedText}
                  <span className="inline-block animate-blink">|</span>
                </span>
              </motion.h1>

              <motion.p
                className="text-lg md:text-xl lg:text-2xl text-blue-100 max-w-2xl px-4"
                variants={cardVariants}
              >
                Pioneering the future of underwater technology.
              </motion.p>

              <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 w-full max-w-6xl mt-8 md:mt-12 px-4"
                variants={contentVariants}
              >
                {features.map((f, i) => (
                  <motion.div
                    key={i}
                    variants={cardVariants}
                    className="h-full bg-white/10 backdrop-blur-[7px] border border-blue-100/20 rounded-2xl shadow-xl flex flex-col items-center p-4 md:p-6 hover:scale-105 hover:shadow-cyan-300/20 transition-all duration-300"
                  >
                    <div className="mb-2 md:mb-4">{f.icon}</div>
                    <h3 className="text-lg md:text-xl font-semibold text-cyan-100 mb-1 md:mb-2">
                      {f.title}
                    </h3>
                    <p className="text-blue-200/90 text-center text-sm md:text-base">
                      {f.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* REST OF PAGE CONTENT - Only shown after 3 seconds */}
      {showContent && (
        <>
          {/* Full-width sections with ocean gradients */}
          <div className="w-full bg-gradient-to-b from-[#0e1120] to-[#10172e] py-16 md:py-24">
            <section className="w-full px-4">
              <TeamIntro />
            </section>
          </div>
          
          <div className="w-full bg-gradient-to-b from-[#10172e] to-[#0d1d46] py-16 md:py-24">
            <section className="w-full px-4">
              <Timeline />
            </section>
          </div>
          
          <div className="w-full bg-gradient-to-b from-[#0d1d46] to-[#09235e] py-16 md:py-24">
            <section className="w-full px-4">
              <Goals />
            </section>
          </div>
          
          <div className="w-full bg-gradient-to-b from-[#09235e] to-[#051736]">
            <footer className="w-full py-12 px-4">
              <Footer />
            </footer>
          </div>
        </>
      )}

      <style jsx>{`
        .animate-blink {
          animation: blink 1s step-start infinite;
        }
        @keyframes blink {
          50% { opacity: 0; }
        }
        body {
          background: linear-gradient(to bottom, #0a0b0f, #051736);
          overflow-x: hidden;
        }
      `}</style>
    </div>
  );
}