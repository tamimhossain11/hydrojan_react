import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Float } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import * as THREE from 'three';

function Submarine() {
  const subRef = useRef();
  
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <group ref={subRef} position={[0, -1, 0]}>
        <mesh>
          <cylinderGeometry args={[1, 1, 3, 16]} />
          <meshStandardMaterial color="#3b82f6" metalness={0.8} roughness={0.2} />
        </mesh>
        <mesh position={[0, 0, -1.5]}>
          <sphereGeometry args={[1, 16, 16]} />
          <meshStandardMaterial color="#3b82f6" metalness={0.8} roughness={0.2} />
        </mesh>
      </group>
    </Float>
  );
}

function Fish({ position = [0, 0, 0] }) {
  const fishRef = useRef();
  
  return (
    <Float speed={1} rotationIntensity={0.5} floatIntensity={0.5}>
      <group ref={fishRef} position={position}>
        <mesh rotation={[0, Math.PI / 2, 0]}>
          <sphereGeometry args={[0.3, 16, 16]} />
          <meshStandardMaterial color="#f43f5e" />
        </mesh>
        <mesh position={[-0.4, 0, 0]}>
          <coneGeometry args={[0.2, 0.5, 16]} />
          <meshStandardMaterial color="#f43f5e" />
        </mesh>
      </group>
    </Float>
  );
}

function Seaweed({ position = [0, 0, 0] }) {
  return (
    <Float speed={0.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <group position={position}>
        <mesh position={[0, 1, 0]}>
          <cylinderGeometry args={[0.05, 0.2, 2, 8]} />
          <meshStandardMaterial color="#10b981" />
        </mesh>
      </group>
    </Float>
  );
}

function Bubbles() {
  const bubbleCount = 50;
  const bubbles = Array.from({ length: bubbleCount }).map((_, i) => ({
    position: [
      Math.random() * 10 - 5,
      Math.random() * -10,
      Math.random() * 10 - 5
    ],
    scale: Math.random() * 0.2 + 0.1
  }));

  return (
    <>
      {bubbles.map((bubble, i) => (
        <Float key={i} speed={0.5 + Math.random()} rotationIntensity={0} floatIntensity={2}>
          <mesh position={bubble.position}>
            <sphereGeometry args={[bubble.scale, 8, 8]} />
            <meshStandardMaterial 
              color="#ffffff" 
              transparent 
              opacity={0.7} 
              roughness={0.1}
              metalness={0.1}
            />
          </mesh>
        </Float>
      ))}
    </>
  );
}

export default function OceanScene() {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#3b82f6" />
      
      <Suspense fallback={null}>
        <Environment preset="night" />
        
        {/* Water effect */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -5, 0]}>
          <planeGeometry args={[20, 20, 32, 32]} />
          <meshStandardMaterial 
            color="#1d4ed8"
            transparent
            opacity={0.8}
            roughness={0.1}
            metalness={0.1}
          />
        </mesh>
        
        <Submarine />
        
        {/* Marine life */}
        {Array.from({ length: 10 }).map((_, i) => (
          <Fish key={i} position={[
            Math.random() * 10 - 5,
            Math.random() * -5 - 2,
            Math.random() * 10 - 5
          ]} />
        ))}
        
        {Array.from({ length: 15 }).map((_, i) => (
          <Seaweed key={i} position={[
            Math.random() * 20 - 10,
            0,
            Math.random() * 20 - 10
          ]} />
        ))}
        
        <Bubbles />
      </Suspense>
      
      <OrbitControls 
        enableZoom={false} 
        enablePan={false} 
        autoRotate 
        autoRotateSpeed={0.5}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 2.5}
      />
    </Canvas>
  );
}