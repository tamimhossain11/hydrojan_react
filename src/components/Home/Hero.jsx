import { useState, useEffect, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Text3D, Environment, Float } from '@react-three/drei';
import * as THREE from 'three';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const UnderwaterScene = ({ hovered, onPositionUpdate }) => {
  const submarineRef = useRef();
  const textRef = useRef();
  const { camera } = useThree();
  const [textVisible, setTextVisible] = useState(false);

  const waterUniforms = {
    time: { value: 30 },
    resolution: { value: new THREE.Vector2() },
    hoverIntensity: { value: 0 }
  };

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    waterUniforms.time.value = time;
    waterUniforms.hoverIntensity.value = THREE.MathUtils.lerp(
      waterUniforms.hoverIntensity.value,
      hovered ? 1 : 0,
      0.05
    );

    if (submarineRef.current) {
      submarineRef.current.rotation.y = time * 0.5;
      submarineRef.current.position.y = Math.sin(time * 0.5) * 0.1;
    }

    if (textRef.current) {
      textRef.current.position.y = Math.sin(time * 0.3) * 0.05;
      const position = textRef.current.position.clone().project(camera);
      onPositionUpdate(position);
    }
  });

  useEffect(() => {
    const timer = setTimeout(() => setTextVisible(true), 5000000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <ambientLight intensity={0.5} color="#00a8ff" />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#00ffff" />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#0066ff" />

      <Environment preset="night" />

      {/* Ocean floor */}
      <mesh rotation-x={-Math.PI / 2} position-y={-2}>
        <planeGeometry args={[50, 50]} />
        <meshStandardMaterial color="#001f3f" roughness={0.6} metalness={0.5} side={THREE.DoubleSide} />
      </mesh>

      {/* Water surface shader */}
      <mesh position={[0, 5, 0]}>
        <planeGeometry args={[20, 20]} />
        <shaderMaterial
          uniforms={waterUniforms}
          vertexShader={`
            varying vec2 vUv;
            uniform float time;
            uniform float hoverIntensity;
            void main() {
              vUv = uv;
              vec3 pos = position;
              pos.x += sin(pos.y * 10.0 + time * 2.0) * 0.1 * hoverIntensity;
              pos.y += sin(pos.x * 8.0 + time * 1.5) * 0.1 * hoverIntensity;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
            }
          `}
          fragmentShader={`
            varying vec2 vUv;
            uniform float time;
            uniform float hoverIntensity;
            void main() {
              vec2 uv = vUv;
              float c = sin(uv.x * 10.0 + time) * 0.5 + 0.5;
              c += sin(uv.y * 15.0 + time * 1.3) * 0.3;
              c = smoothstep(0.3, 0.7, c);
              vec3 color = mix(vec3(0.0, 0.3, 0.6), vec3(0.0, 0.5, 0.8), c * hoverIntensity);
              gl_FragColor = vec4(color, 0.8);
            }
          `}
          transparent
        />
      </mesh>

      {/* Floating Text */}
      <Float speed={0.1} rotationIntensity={0.1} floatIntensity={0.1}>
  <group ref={textRef} position={[-2, 0, 0]}>
    {['D', 'o', 'B', ' ', 'H', 'y', 'd', 'r', 'o', ' ', 'J', 'a', 'n'].map((char, i) => (
      <AnimatePresence key={i}>
        {textVisible && (
          <Text3D
            font="/fonts/helvetiker_regular.typeface.json"
            size={0.5}
            height={0.1}
            position={[i * 0.4, 0, 0]}
            curveSegments={12}
            bevelEnabled
            bevelThickness={0.02}
            bevelSize={0.01}
            bevelOffset={0}
            bevelSegments={1}
          >
            {char}
            <meshPhongMaterial
              color="#00ffff"
              emissive="#0066ff"
              emissiveIntensity={0.5}
              specular="#00ffff"
              shininess={100}
            />
          </Text3D>
        )}
      </AnimatePresence>
    ))}
  </group>
</Float>


      {/* Submarine */}
      <group ref={submarineRef} position={[3, 0, 0]} scale={[0.8, 0.8, 0.8]}>
        <mesh>
          <cylinderGeometry args={[1, 1, 3, 32]} />
          <meshStandardMaterial color="#ff5555" metalness={0.7} roughness={0.3} envMapIntensity={1} />
        </mesh>
        <mesh position={[0, 0, -1.5]}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial color="#ff5555" metalness={0.7} roughness={0.3} envMapIntensity={1} />
        </mesh>
        <mesh position={[0, 0, 1.5]} rotation={[0, Math.PI / 2, 0]}>
          <coneGeometry args={[0.5, 1, 32]} />
          <meshStandardMaterial color="#ff3333" metalness={0.8} roughness={0.2} envMapIntensity={1} />
        </mesh>

        {/* Propeller */}
        <group position={[0, 0, 1.8]}>
          {[0, Math.PI / 3, (2 * Math.PI) / 3].map((angle, i) => (
            <mesh key={i} rotation={[0, 0, Math.PI / 2 + angle]}>
              <boxGeometry args={[0.2, 1.5, 0.05]} />
              <meshStandardMaterial color="#888888" metalness={0.9} roughness={0.1} />
            </mesh>
          ))}
        </group>
      </group>

      {/* Algae */}
      {Array.from({ length: 20 }).map((_, i) => (
        <mesh
          key={i}
          position={[Math.sin(i) * 10 - 5, -2, Math.cos(i) * 10 - 5]}
          rotation={[0, Math.sin(i) * Math.PI, 0]}
        >
          <cylinderGeometry args={[0.1, 0.1, Math.random() * 2 + 1, 8]} />
          <meshStandardMaterial color="#00aa55" />
        </mesh>
      ))}

      {/* Bubbles */}
      {Array.from({ length: 30 }).map((_, i) => (
        <mesh
          key={`bubble-${i}`}
          position={[Math.sin(i * 8) * 8, Math.random() * 5 - 2.5, Math.cos(i * 10) * 8]}
          scale={Math.random() * 0.2 + 0.1}
        >
          <sphereGeometry args={[1, 16, 16]} />
          <meshStandardMaterial color="#ffffff" transparent opacity={0.7} roughness={0} metalness={0.1} />
        </mesh>
      ))}
    </>
  );
};

const Hero = () => {
  const [hovered, setHovered] = useState(false);
  const [nextPosition, setNextPosition] = useState(null);
  const [ref, inView] = useInView({ threshold: 0.5 });

  const handlePositionUpdate = (position) => {
    setNextPosition(position);
  };

  return (
    <div
      ref={ref}
      className="relative w-full h-screen overflow-hidden bg-blue-950"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Background Text */}
<div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none space-y-4">
  <div className="text-white opacity-30 text-6xl font-bold text-center">
    Hydroযান
  </div>
  <div className="text-white opacity-10 text-6xl font-bold text-center">
    Hydroযান
  </div>
</div>


      {/* Canvas */}
      <Canvas camera={{ position: [0, 0, 10], fov: 450 }}>
        <UnderwaterScene hovered={hovered} onPositionUpdate={handlePositionUpdate} />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1} />
      </Canvas>

      {/* Floating Marker */}
      {nextPosition && (
        <motion.div
          className="absolute w-4 h-4 bg-yellow-400 rounded-full pointer-events-none"
          style={{
            left: `${(nextPosition.x * 0.5 + 0.5) * 100}%`,
            top: `${(-nextPosition.y * 0.5 + 0.5) * 100}%`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 0.7 : 0 }}
          transition={{ duration: 0.3 }}
        />
      )}

      {/* Info Overlay */}
      <motion.div
        className="absolute bottom-10 left-10 max-w-md p-6 bg-blue-900 bg-opacity-50 backdrop-blur-sm rounded-lg border border-blue-700"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.5, duration: 2 }}
      >
        <h3 className="text-2xl font-bold text-cyan-300 mb-2">HydroJan Autonomous Underwater Robot</h3>
        <p className="text-blue-100">
          Designed for deep-sea exploration with advanced hydrodynamic systems and autonomous navigation
          capabilities. Operating at depths up to 6000m.
        </p>
      </motion.div>
    </div>
  );
};

export default Hero;
