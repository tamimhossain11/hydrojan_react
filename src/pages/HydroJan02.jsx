// HydroJan02.jsx
import React, { useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars, Plane } from "@react-three/drei";
import HeroTwo from "../components/AUV2/HeroTwo";
import AUVTwo from "../components/AUV2/AUVTwo";

// 🌊 Ocean Wave Component
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

const HydroJan02 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden text-white bg-[#050b1e]">
      
      {/* 🌌 3D Background Canvas */}
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
      <div className="relative z-10 p-10">
        <HeroTwo />
        <AUVTwo />
      </div>
    </div>
  );
};

export default HydroJan02;
