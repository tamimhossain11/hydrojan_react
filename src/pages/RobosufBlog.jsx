import React, { useEffect, useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars, Plane } from "@react-three/drei";
import BlogHero from "../RobosubBlog/BlogHreo";
import BlogContent from "../RobosubBlog/BlogContent";

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

const RobosufBlog = () => {
  const [selectedBlog, setSelectedBlog] = useState("DOB HydroJan 0.1");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden text-white bg-[#050b1e]">
      
      {/* 🌌 3D Starry Ocean Canvas Background */}
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

      {/* 🧾 Foreground Blog Content */}
      <div className="relative z-10 px-6 py-10 space-y-10 ">
        <BlogHero selected={selectedBlog} setSelected={setSelectedBlog} />
        <BlogContent blog={selectedBlog} />
      </div>
    </div>
  );
};

export default RobosufBlog;
