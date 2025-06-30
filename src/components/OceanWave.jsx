// components/OceanWave.jsx
import React from "react";

const OceanWave = () => {
  return (
    <mesh rotation-x={-Math.PI / 2} position={[0, -1, 0]}>
      <planeGeometry args={[100, 100, 128, 128]} />
      <meshStandardMaterial
        color="#1e3a5f"
        transparent
        opacity={0.7}
        metalness={0.3}
        roughness={0.2}
      />
    </mesh>
  );
};

export default OceanWave;
