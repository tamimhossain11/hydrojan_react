import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import Submarine from './Submarine';

export default function OceanScene() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Submarine />
      <OrbitControls />
      <Environment preset="sunset" />
    </Canvas>
  );
}
