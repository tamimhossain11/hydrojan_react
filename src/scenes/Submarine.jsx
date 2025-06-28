// src/components/SubmarineScene.jsx
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment, Float } from "@react-three/drei";
import { Suspense } from "react";

function SubmarineModel(props) {
  const { scene } = useGLTF("/models/submarine.glb");
  return <primitive object={scene} scale={0.5} {...props} />;
}

export default function SubmarineScene() {
  return (
    <div className="w-full h-screen fixed top-0 left-0 z-0">
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <Environment preset="sunset" />
          <Float floatIntensity={1} speed={1}>
            <SubmarineModel position={[0, 0, 0]} />
          </Float>
          <OrbitControls enableZoom={false} autoRotate />
        </Suspense>
      </Canvas>
    </div>
  );
}
