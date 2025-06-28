import { useState, useRef, Suspense } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text3D, Float } from '@react-three/drei';
import { MapPin, Phone, Mail, Globe, Instagram, Youtube, Send, Atom, Waves, Droplet } from 'lucide-react';
import * as THREE from 'three';

const Contact = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic
    console.log('Form submitted:', formData);
  };

  return (
    <div className="relative bg-gradient-to-b from-[#0a0b0f] to-[#0e1120] text-white min-h-screen overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <Canvas>
          <Particles />
        </Canvas>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-20"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 mb-4 sm:mb-6">
            Contact DREAMS OF BANGLADESH
          </h1>
          <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto">
            Reach out to our innovative team working on marine technology solutions
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Contact Form Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="bg-gradient-to-br from-blue-900/30 to-cyan-900/20 p-6 sm:p-8 rounded-2xl backdrop-blur-xl border border-blue-800/30 shadow-2xl shadow-blue-900/20"
          >
            <h2 className="text-2xl font-semibold text-blue-100 mb-6 flex items-center gap-2">
              <Send className="text-cyan-400" size={24} />
              Send Us a Message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {[
                { name: 'name', label: 'Your Name', icon: <Atom className="text-cyan-400" size={20} /> },
                { name: 'email', label: 'Email Address', icon: <Mail className="text-blue-400" size={20} /> },
                { name: 'message', label: 'Your Message', icon: <Waves className="text-teal-400" size={20} />, textarea: true }
              ].map((field, i) => (
                <motion.div 
                  key={field.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="relative"
                  onMouseEnter={() => setHoveredItem(field.name)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <div className="flex items-center gap-3 mb-2">
                    {field.icon}
                    <label htmlFor={field.name} className="text-blue-100 font-medium">
                      {field.label}
                    </label>
                  </div>
                  {field.textarea ? (
                    <textarea
                      id={field.name}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      className="w-full bg-blue-950/50 border border-blue-800/50 focus:border-cyan-500/70 rounded-lg px-4 py-3 text-blue-100 placeholder-blue-700 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 transition-all"
                      rows="5"
                      required
                    />
                  ) : (
                    <input
                      type={field.name === 'email' ? 'email' : 'text'}
                      id={field.name}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      className="w-full bg-blue-950/50 border border-blue-800/50 focus:border-cyan-500/70 rounded-lg px-4 py-3 text-blue-100 placeholder-blue-700 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 transition-all"
                      required
                    />
                  )}
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500"
                    initial={{ width: 0 }}
                    animate={{ 
                      width: hoveredItem === field.name ? '100%' : 0,
                      opacity: hoveredItem === field.name ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              ))}

              <motion.button
                type="submit"
                className="group flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-lg shadow-cyan-500/20 w-full mt-8"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "mirror"
                  }}
                >
                  <Send className="group-hover:rotate-12 transition-transform" size={20} />
                </motion.span>
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info Column */}
          <div className="space-y-6">
            {/* Google Maps */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="overflow-hidden rounded-xl shadow-2xl shadow-blue-900/20 border border-blue-800/30"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.4561951130095!2d90.3633357!3d23.7667641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c1004cb313c9%3A0x6ca7a5d7fc7b9f3b!2sDREAMS%20OF%20BANGLADESH!5e0!3m2!1sen!2sbd!4v1751041358535!5m2!1sen!2sbd" 
                width="100%" 
                height="300" 
                style={{ border: 0 }}
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl"
              />
            </motion.div>

            {/* Contact Information Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-gradient-to-br from-blue-900/30 to-cyan-900/20 p-6 rounded-2xl backdrop-blur-md border border-blue-800/30 shadow-xl shadow-blue-900/20"
            >
              <h3 className="text-2xl font-semibold text-blue-100 mb-6 flex items-center gap-2">
                <MapPin className="text-cyan-400" size={24} />
                Our Information
              </h3>

              <div className="space-y-5">
                {/* Address */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-blue-900/30 mt-0.5">
                    <MapPin className="text-cyan-400" size={18} />
                  </div>
                  <div>
                    <h4 className="text-blue-100 font-medium mb-1">Address</h4>
                    <p className="text-blue-200">Block C, 9/25 Humayun Rd, Dhaka 1207</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-blue-900/30 mt-0.5">
                    <Phone className="text-blue-400" size={18} />
                  </div>
                  <div>
                    <h4 className="text-blue-100 font-medium mb-1">Phone</h4>
                    <a href="tel:01746342152" className="text-blue-200 hover:text-cyan-400 transition-colors">
                      +880 1746-342152
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-blue-900/30 mt-0.5">
                    <Mail className="text-blue-400" size={18} />
                  </div>
                  <div>
                    <h4 className="text-blue-100 font-medium mb-1">Email</h4>
                    <a href="mailto:dreamsofbangladesh@gmail.com" className="text-blue-200 hover:text-cyan-400 transition-colors">
                      dreamsofbangladesh@gmail.com
                    </a>
                  </div>
                </div>

                {/* Website */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-blue-900/30 mt-0.5">
                    <Globe className="text-teal-400" size={18} />
                  </div>
                  <div>
                    <h4 className="text-blue-100 font-medium mb-1">Website</h4>
                    <a 
                      href="http://www.dreamsofbangladesh.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-200 hover:text-cyan-400 transition-colors"
                    >
                      www.dreamsofbangladesh.com
                    </a>
                  </div>
                </div>

                {/* Social Media */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-blue-900/30 mt-0.5">
                    <div className="flex gap-1">
                      <Instagram className="text-pink-400" size={18} />
                      <Youtube className="text-red-400" size={18} />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-blue-100 font-medium mb-1">Social Media</h4>
                    <div className="flex flex-wrap gap-3">
                      <a 
                        href="https://instagram.com/dreams_of_bangladesh" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-200 hover:text-pink-400 transition-colors flex items-center gap-1"
                      >
                        <Instagram size={16} /> @dreams_of_bangladesh
                      </a>
                      <a 
                        href="https://youtube.com/DREAMSofBangladesh" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-200 hover:text-red-400 transition-colors flex items-center gap-1"
                      >
                        <Youtube size={16} /> DREAMS of Bangladesh
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 3D Visualization */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="hidden lg:block h-[200px] rounded-xl overflow-hidden border border-blue-800/30"
            >
              <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <Suspense fallback={null}>
                  <FloatingScienceElements hoveredItem={hoveredItem} />
                </Suspense>
              </Canvas>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

// 3D Components
const FloatingScienceElements = ({ hoveredItem }) => {
  const moleculesRef = useRef();
  const dnaRef = useRef();
  const waterDropRef = useRef();

  useFrame((state) => {
    if (moleculesRef.current) {
      moleculesRef.current.rotation.y += 0.002;
    }
    if (dnaRef.current) {
      dnaRef.current.rotation.y += 0.005;
    }
    if (waterDropRef.current) {
      waterDropRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2;
    }
  });

  return (
    <>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <group ref={moleculesRef} position={[0, 0, 0]} scale={hoveredItem === 'name' ? 1.2 : 1}>
          <MoleculeModel atomColor="#60a5fa" bondColor="#22d3ee" />
        </group>
      </Float>

      <Float speed={1.5} rotationIntensity={1}>
        <group ref={dnaRef} position={[2, -1, -2]} scale={hoveredItem === 'email' ? 1.3 : 1}>
          <DnaModel />
        </group>
      </Float>

      <group ref={waterDropRef} position={[-2, 1, -1]} scale={hoveredItem === 'message' ? 1.5 : 1}>
        <WaterDropModel />
      </group>
    </>
  );
};

const MoleculeModel = ({ atomColor, bondColor }) => {
  return (
    <group>
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial color={atomColor} emissive={atomColor} emissiveIntensity={0.3} />
      </mesh>
      {[
        { position: [1, 0, 0], rotation: [0, 0, 0] },
        { position: [-0.5, 0.866, 0], rotation: [0, 0, 2.094] },
        { position: [-0.5, -0.866, 0], rotation: [0, 0, -2.094] }
      ].map((bond, i) => (
        <group key={i}>
          <mesh position={bond.position} rotation={bond.rotation}>
            <cylinderGeometry args={[0.05, 0.05, 1, 8]} />
            <meshStandardMaterial color={bondColor} />
          </mesh>
          <mesh position={[bond.position[0] * 2, bond.position[1] * 2, 0]}>
            <sphereGeometry args={[0.2, 32, 32]} />
            <meshStandardMaterial color={atomColor} />
          </mesh>
        </group>
      ))}
    </group>
  );
};

const DnaModel = () => {
  const curve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0, 1, 0),
    new THREE.Vector3(0.5, 0.5, 0.5),
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(-0.5, -0.5, 0.5),
    new THREE.Vector3(0, -1, 0)
  ]);

  return (
    <group>
      <mesh>
        <tubeGeometry args={[curve, 100, 0.1, 8, false]} />
        <meshStandardMaterial color="#a78bfa" emissive="#8b5cf6" emissiveIntensity={0.2} />
      </mesh>
      {Array.from({ length: 20 }).map((_, i) => {
        const t = i / 20;
        const position = curve.getPointAt(t);
        const tangent = curve.getTangentAt(t).normalize();
        return (
          <group key={i} position={position}>
            <mesh rotation={[Math.PI/2, 0, tangent.x]}>
              <cylinderGeometry args={[0.02, 0.02, 0.8, 8]} />
              <meshStandardMaterial color="#c4b5fd" />
            </mesh>
            <mesh position={[0, 0.4, 0]}>
              <sphereGeometry args={[0.08, 16, 16]} />
              <meshStandardMaterial color="#a78bfa" />
            </mesh>
            <mesh position={[0, -0.4, 0]}>
              <sphereGeometry args={[0.08, 16, 16]} />
              <meshStandardMaterial color="#a78bfa" />
            </mesh>
          </group>
        );
      })}
    </group>
  );
};

const WaterDropModel = () => {
  return (
    <mesh>
      <sphereGeometry args={[0.5, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2]} />
      <meshStandardMaterial 
        color="#22d3ee" 
        transparent 
        opacity={0.8} 
        roughness={0.1}
        metalness={0.3}
      />
    </mesh>
  );
};

const Particles = () => {
  const particles = useRef();
  const count = 500;
  
  useFrame(() => {
    if (particles.current) {
      particles.current.rotation.y += 0.0005;
    }
  });

  return (
    <points ref={particles}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={new Float32Array(
            Array.from({ length: count * 3 }, () => (Math.random() - 0.5) * 10)
          )}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial 
        color="#7dd3fc" 
        size={0.02} 
        sizeAttenuation 
        transparent 
        opacity={0.5} 
      />
    </points>
  );
};

export default Contact;