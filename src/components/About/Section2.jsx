// Section2.jsx
import React, { Suspense } from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars, Sphere } from "@react-three/drei";

const AnimatedTorpedo = () => {
  return (
    <Sphere args={[0.2, 32, 32]} position={[0, 0.2, 0]}>
      <meshStandardMaterial color="red" />
    </Sphere>
  );
};

const Section2 = () => {
  return (
    <div className="relative h-[600px] w-full  text-white overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 1.5, 4], fov: 75 }}>
          <ambientLight intensity={0.4} />
          <pointLight position={[5, 5, 5]} />
          <Suspense fallback={null}>
            <Stars radius={30} depth={40} count={400} factor={2} fade speed={1} />
            <AnimatedTorpedo />
          </Suspense>
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.7} />
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto h-full px-6 flex flex-col justify-center items-center text-center">
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-4 text-white"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          What is RoboSub?
        </motion.h2>
        <motion.p
          className="max-w-3xl text-lg md:text-xl text-white/90 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          RoboSub is an international underwater robotics competition where teams design, build, and test Autonomous Underwater Vehicles (AUVs) to complete a series of real-world inspired tasks.
          These include navigating a gate, weaving through a slalom course, firing a torpedo, and locating marker buoys — all while submerged and untethered.
          <br /><br />
          These challenges mimic tasks carried out by naval and marine research AUVs, such as search & rescue, pipeline inspection, and oceanographic data collection. 
          RoboSub gives us the opportunity to apply our innovations in real-world simulations, helping us build smarter, safer underwater systems.
        </motion.p>
      </div>
    </div>
  );
};

export default Section2;
