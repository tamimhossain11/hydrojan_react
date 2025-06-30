import React from 'react';
import { Link } from 'react-router-dom';
import SocialShare from './SocialShare';
import { motion, useMotionValue, animate, useTransform } from 'framer-motion';
import { Fish, Droplet } from 'lucide-react';

const SingleLeader = ({ speaker }) => {
  const { id, thumb, name, designation, company } = speaker;
  
  // Advanced 3D tilt effecto is the  sasdfooi  jfdidoinknvcifd  dn
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-100, 100], [10, -10]);
  const rotateY = useTransform(mouseX, [-100, 100], [-10, 10]);
  
  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left - width / 2);
    mouseY.set(e.clientY - top - height / 2);
  };

  const handleMouseLeave = () => {
    animate(mouseX, 0, { duration: 0.5 });
    animate(mouseY, 0, { duration: 0.5 });
  };

  // Floating bubbles data
  const bubbles = [
    { size: 20, x: '10%', y: '20%', delay: 0 },
    { size: 16, x: '80%', y: '30%', delay: 0.3 },
    { size: 24, x: '30%', y: '70%', delay: 0.6 }
  ];

  return (
    <motion.div
      className="w-full max-w-[340px] mx-auto relative"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: { opacity: 0, y: 40, scale: 0.95 },
        visible: { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          transition: { 
            type: "spring", 
            bounce: 0.4,
            duration: 0.8 
          } 
        }
      }}
    >
      {/* Floating bubbles */}
      {bubbles.map((bubble, i) => (
        <motion.div
          key={i}
          className="absolute text-blue-300/30"
          style={{
            left: bubble.x,
            top: bubble.y,
            width: bubble.size,
            height: bubble.size
          }}
          animate={{
            y: [0, -40, 0],
            opacity: [0.4, 0.8, 0.4],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            delay: bubble.delay,
            ease: "easeInOut"
          }}
        >
          <Droplet size={bubble.size} />
        </motion.div>
      ))}

      {/* Main card with advanced 3D effect */}
      <motion.div
        className="group bg-gradient-to-br from-white/90 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-2xl overflow-hidden h-full flex flex-col border border-white/20 dark:border-gray-700/50 backdrop-blur-sm"
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Top Section - Photo with liquid effect */}
        <motion.div 
          className="relative h-80 w-full overflow-hidden"
          initial={{ scale: 1.05 }}
          whileHover={{ scale: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 z-10" />
          
          {/* Liquid reflection effect */}
          <motion.div 
            className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-blue-400/10 to-transparent opacity-30"
            animate={{
              backgroundPositionX: ['0%', '100%'],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          <img
            src={`/leaders/${thumb}`}
            alt={`Portrait of ${name}`}
            className="w-full h-full object-cover transform transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = '/images/default-profile.jpg';
            }}
          />
        </motion.div>

        {/* Bottom Section - Description */}
        <motion.div 
          className="p-6 flex-grow flex flex-col relative z-10 -mt-12"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }} 
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {/* Profile Image with floating effect */}
          <motion.div 
            className="inline-block rounded-full p-1 shadow-2xl mx-auto border-4 border-white dark:border-gray-800 bg-gradient-to-br from-blue-400 to-indigo-500"
            whileHover={{ 
              y: -5,
              rotate: 2,
              transition: { type: 'spring', stiffness: 300 } 
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to={`/team/${id}`}>
              <motion.div
                whileHover={{ rotate: 5 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <img
                  src={`/leaders/${thumb}`}
                  alt={name}
                  className="w-24 h-24 rounded-full object-cover border-2 border-white/90 dark:border-gray-900/80"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/images/default-profile.jpg';
                  }}
                />
              </motion.div>
            </Link>
          </motion.div>
          
          {/* Text Content */}
          <div className="text-center mt-6 flex-grow">
            <motion.h3 
              className="text-2xl font-bold text-gray-900 dark:text-white mb-2"
              whileHover={{ 
                color: "#3b82f6",
                x: 2,
                transition: { duration: 0.3 } 
              }}
            >
              <Link to={`/team/${id}`} className="hover:underline">
                {name}
              </Link>
            </motion.h3>
            
            <motion.p 
              className="text-blue-600 dark:text-blue-400 text-sm font-medium mb-2 bg-white/80 dark:bg-gray-800/80 px-4 py-2 rounded-full inline-block shadow-md"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(59, 130, 246, 0.1)",
                transition: { duration: 0.2 } 
              }}
            >
              {designation}
            </motion.p>
            
            {company && (
              <motion.p 
                className="text-gray-600 dark:text-gray-300 text-xs mt-2"
                whileHover={{ 
                  x: 3,
                  transition: { type: 'spring', stiffness: 300 } 
                }}
              >
                {company}
              </motion.p>
            )}
          </div>
          
          {/* Social Links */}
          <div className="mt-6">
            <SocialShare name={name} />
          </div>

          {/* Floating fish decoration */}
          <motion.div 
            className="absolute bottom-2 right-2 text-blue-400/40 dark:text-blue-500/40"
            animate={{
              x: [0, -15, 0],
              y: [0, -5, 0],
              rotate: [0, -8, 0]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut"
            }}
          >
            <Fish size={32} />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default SingleLeader;