// Contact.jsx
import { useState, useRef, Suspense } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import { MapPin, Phone, Mail, Globe, Send } from 'lucide-react';
import { FaXTwitter, FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa6';
import * as THREE from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';

const Contact = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="relative bg-gradient-to-tr from-[#0a0f1c] to-[#0e1528] text-white min-h-screen overflow-hidden font-sans">
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Suspense fallback={null}>
            <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
              <Hydrojan3DText />
            </Float>
          </Suspense>
        </Canvas>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 animate-gradient">
            Connect With HydroJan
          </h1>
          <p className="mt-4 text-lg text-blue-200 max-w-2xl mx-auto">
            Dive into innovation with the team shaping the future of marine robotics.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="bg-blue-900/20 p-8 rounded-2xl shadow-xl backdrop-blur-xl border border-blue-700/30"
          >
            <h2 className="text-2xl font-bold text-cyan-300 mb-8 flex items-center gap-2">
              <Send size={24} /> Drop Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {[{ name: 'name', label: 'Your Name' }, { name: 'email', label: 'Your Email' }, { name: 'message', label: 'Your Message', textarea: true }].map((field, i) => (
                <motion.div
                  key={field.name}
                  className="group"
                  onMouseEnter={() => setHoveredItem(field.name)}
                  onMouseLeave={() => setHoveredItem(null)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 * i }}
                >
                  <label htmlFor={field.name} className="block text-blue-100 mb-2">
                    {field.label}
                  </label>
                  {field.textarea ? (
                    <textarea
                      id={field.name}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      className="w-full p-4 rounded-lg bg-blue-950/40 border border-blue-700 text-blue-100 placeholder-blue-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
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
                      className="w-full p-4 rounded-lg bg-blue-950/40 border border-blue-700 text-blue-100 placeholder-blue-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      required
                    />
                  )}
                </motion.div>
              ))}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white py-3 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Info + Social */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="space-y-8 text-blue-100"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="text-cyan-400" />
                <span>Block C, 9/25 Humayun Rd, Dhaka 1207</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-blue-400" />
                <a href="tel:01746342152">+880 1746-342152</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-blue-400" />
                <a href="mailto:dobhydrojan2@gmail.com">dobhydrojan2@gmail.com</a>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="text-teal-400" />
                <a href="https://www.hydrojan.tech" target="_blank" rel="noopener noreferrer">
                  www.hydrojan.tech
                </a>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-xl font-semibold text-cyan-300 mb-4">Follow Us</h3>
              <div className="grid grid-cols-2 gap-4">
                <a href="https://x.com/dobhydrojan?s=21" className="flex items-center gap-2 hover:text-cyan-400 transition">
                  <FaXTwitter size={18} /> @dobhydrojan
                </a>
                <a href="https://www.instagram.com/dob_hydrojan" className="flex items-center gap-2 hover:text-pink-400 transition">
                  <FaInstagram size={18} /> @dob_hydrojan
                </a>
                <a href="https://www.facebook.com/share/1AdQanx7Xf" className="flex items-center gap-2 hover:text-blue-400 transition">
                  <FaFacebook size={18} /> @dobhydrojan
                </a>
                <a href="https://youtube.com/@dobhydrojan" className="flex items-center gap-2 hover:text-red-400 transition">
                  <FaYoutube size={18} /> @dobhydrojan
                </a>
              </div>
            </div>

            <div className="mt-10 overflow-hidden rounded-2xl border border-blue-800/30 shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.4561951130095!2d90.3633357!3d23.7667641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c1004cb313c9%3A0x6ca7a5d7fc7b9f3b!2sDREAMS%20OF%20BANGLADESH!5e0!3m2!1sen!2sbd!4v1751302689874!5m2!1sen!2sbd"
                width="100%"
                height="300"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-72 rounded-xl border-none"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const Hydrojan3DText = () => {
  const font = useLoader(FontLoader, '/fonts/helvetiker_regular.typeface.json');
  return (
    <group position={[-4.5, 0, 0]} scale={[0.7, 0.7, 0.7]}>
      <Text3D
        font={font}
        size={1.5}
        height={0.3}
        curveSegments={12}
        bevelEnabled
        bevelSize={0.04}
        bevelSegments={5}
        bevelThickness={0.03}
      >
        HYDROJAN
        <meshStandardMaterial
          color="#22d3ee"
          metalness={0.3}
          roughness={0.1}
          emissive="#0ea5e9"
          emissiveIntensity={0.5}
        />
      </Text3D>
    </group>
  );
};

export default Contact;
