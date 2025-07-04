// pages/Home.jsx
import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Anchor, Droplets, Waves } from "lucide-react";

import Timeline from "../components/Home/Timeline";
import Goals from "../components/Home/Goals";
import TeamIntro from "../components/Home/TeamIntro";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default function Home() {
  const [firstEnded, setFirstEnded] = useState(false);
  const [loopStarted, setLoopStarted] = useState(false);
  const videoRef = useRef(null);

  const texts = ["Hydrojan", "AUV System", "Underwater Explorer"];
  const typingSpeed = 150;
  const erasingSpeed = 100;
  const pauseBeforeErase = 1500;
  const pauseBeforeType = 200;

  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
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
  }, [displayedText, isDeleting, textIndex]);

  const handleVideoEnded = () => {
    setFirstEnded(true);
    setTimeout(() => {
      setLoopStarted(true);
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play();
      }
    }, 250);
  };

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
    <div className="relative bg-[#0a0b0f]">
      {firstEnded && (
        <header className="fixed top-0 left-0 w-full z-50">
          <Navbar />

        </header>
      )}

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="/video/background-video.mp4"
          poster="/video/bg-poster.jpg"
          autoPlay
          muted
          playsInline
          loop={loopStarted}
          onEnded={handleVideoEnded}
          style={{ pointerEvents: "none" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0b0f]/80 to-[#0e1120]/85 z-10" />

        <AnimatePresence>
          {firstEnded && (
            <motion.div
              className="relative z-20 flex flex-col items-center justify-center text-center px-4 lg:px-0 space-y-4"
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <motion.h1
                className="text-4xl md:text-7xl font-extrabold text-blue-100 drop-shadow-md"
                variants={cardVariants}
              >
                <span className="block">Welcome to</span>
                <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-200 text-transparent bg-clip-text">
                  {displayedText}
                  <span className="inline-block animate-blink">|</span>
                </span>
              </motion.h1>

              <motion.p
                className="text-lg md:text-2xl text-blue-100 max-w-2xl"
                variants={cardVariants}
              >
                Pioneering the future of underwater technology.
              </motion.p>

              <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 w-full max-w-5xl mt-12"
                variants={contentVariants}
              >
                {features.map((f, i) => (
                  <motion.div
                    key={i}
                    variants={cardVariants}
                    className="h-full bg-white/10 backdrop-blur-[7px] border border-blue-100/20 rounded-2xl shadow-xl flex flex-col items-center p-8 hover:scale-105 hover:shadow-cyan-300/20 transition-all duration-300"
                  >
                    <div className="mb-4">{f.icon}</div>
                    <h3 className="text-xl font-semibold text-cyan-100 mb-2">
                      {f.title}
                    </h3>
                    <p className="text-blue-200/90 text-center">
                      {f.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* TIMELINE & GOALS */}
      {firstEnded && (
        <>
          <section className="pt-24 pb-16 px-4 lg:px-0 bg-gradient-to-b from-[#0a0b0f] via-[#0e1120] to-[#10172e]">
            <TeamIntro />
          </section>

          <section className="pt-24 pb-16 px-4 lg:px-0 bg-gradient-to-b from-[#10172e] via-[#131a36] to-[#162040]">
            <Timeline />
          </section>

          <section className="pt-24 pb-16 px-4 lg:px-0 bg-gradient-to-b from-[#162040] via-[#182448] to-[#1a2750]">
            <Goals />
          </section>

          <footer className="bg-gradient-to-b from-[#1a2750] via-[#141a34] to-[#0e1120] py-8">
            <Footer />
          </footer>

        </>
      )}

      <style jsx>{`
        .animate-blink {
          animation: blink 1s step-start infinite;
        }
        @keyframes blink {
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
