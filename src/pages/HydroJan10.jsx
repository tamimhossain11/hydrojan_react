import React, { useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars, Plane } from "@react-three/drei";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

// 🌊 Reusable Ocean Wave Background
const OceanWave = () => {
  return (
    <Plane
      args={[100, 100, 64, 64]}
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, -1, 0]}
    >
      <meshStandardMaterial color="#1e3a8a" wireframe={true} />
    </Plane>
  );
};

const HydroJan10 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden text-white bg-[#050b1e]">

      {/* 🌌 3D Canvas Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 5, 10], fov: 70 }}>
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} />
          <Suspense fallback={null}>
            <Stars
              radius={50}
              depth={50}
              count={1000}
              factor={4}
              saturation={0}
              fade
              speed={2}
            />
            <OceanWave />
          </Suspense>
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.4} />
        </Canvas>
      </div>

      {/* 🧾 Foreground Content */}
      <div className="relative z-10 min-h-[60vh] flex flex-col items-center justify-center px-4 py-20">
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
    </div>
  );
};

export default HydroJan10;
