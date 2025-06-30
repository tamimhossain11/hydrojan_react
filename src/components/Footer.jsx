// Footer.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaXTwitter, FaInstagram, FaFacebook, FaYoutube,
  FaGlobe, FaEnvelope
} from 'react-icons/fa6';
import {
  Droplet, BrainCircuit, FlaskConical, Microscope
} from 'lucide-react';

const navItems = [
    { name: 'Home', href: '/', icon: null },
    { name: 'About', href: '/about', icon: null },
    {
    name: 'Team', href: '/team', icon: <BrainCircuit size={16} />, children: [
        { name: 'Lead', href: '/team/leadership' },
        { name: 'Departments', href: '/team/departments' },
        { name: 'Advisors', href: '/team/advisors' }
      ]
    },
    {
    name: 'RoboSub', href: '/robosub', icon: <FlaskConical size={16} />, children: [
      { name: 'Blog', href: '/robosub/blog' },
      { name: 'Gallery', href: '/robosub/gallery' },
      { name: 'Media', href: '/robosub/media' }
      ]
    },
    {
    name: 'AUV', href: '/auv', icon: <Microscope size={16} />, children: [
        { name: 'HydroJan 0.1', href: '/auv/hydrojan-01' },
        { name: 'HydroJan 0.2', href: '/auv/hydrojan-02' },
        { name: 'HydroJan 0.3', href: '/auv/hydrojan-03' },
        { name: 'HydroJan 1.0', href: '/auv/hydrojan-10' }
      ]
    },
    { name: 'Sponsor', href: '/sponsor', icon: null },
    { name: 'Contact', href: '/contact', icon: null }
  ];

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <footer className="relative bg-gradient-to-b from-[#0a1128] to-[#050b1e] text-white pt-16 pb-8 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-16 relative z-10">

        {/* Left: Quick Access */}
        <div className="relative">
          <div className="text-xl font-semibold mb-4 text-cyan-300">Quick Access</div>
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="relative w-14 h-14 bg-blue-800/40 border border-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-all"
          >
            <Droplet className="text-cyan-300" size={24} />

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3 }}
                  className="absolute left-20 top-0 bg-blue-900 border border-blue-700 shadow-xl rounded-lg px-4 py-3 z-30"
                >
                  <ul className="flex  gap-6 text-sm">
                    {navItems.map((item, idx) => (
                      <li key={idx} className="relative group focus-within:z-40">
                    <a 
                      href={link.href} 
                      className="text-blue-100 hover:text-blue-400 transition-colors flex items-center gap-2"
                      onClick={(e) => {
                        if (link.children) {
                          e.preventDefault();
                          toggleDropdown(index);
                        }
                      }}
                    >
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      {link.icon && <span className="mr-1">{link.icon}</span>}
                      {link.name}
                      {link.children && (
                        <svg 
                          className={`w-4 h-4 ml-1 transition-transform ${activeDropdown === index ? 'rotate-180' : ''}`} 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          {item.icon && <span>{item.icon}</span>}
                          {item.name}
                        </a>
                        {item.children && (
                          <ul className="absolute left-0 top-full mt-2 bg-blue-800/90 border border-blue-700 rounded-md p-2 shadow-lg group-hover:block group-focus-within:block z-40 hidden">
                            {item.children.map((child, cidx) => (
                              <li key={cidx}>
                                <a
                                  href={child.href}
                                  className="block px-3 py-1 text-blue-100 hover:text-cyan-400 whitespace-nowrap"
                                >
                                  {child.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="border-t border-blue-900/50 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center gap-2 text-blue-300 mb-4 sm:mb-0">
            <Copyright size={16} />
            <span>Copyright 2021-2025 DREAMS OF BANGLADESH | HydroJan. All Rights Reserved.</span>
          </div>
          
          <div className="flex gap-4">
            <a href="#" className="text-blue-300 hover:text-blue-400 transition-colors text-sm">
              Terms of Service
            </a>
            <a href="https://youtube.com/@dobhydrojan" target="_blank" rel="noreferrer" className="hover:text-red-500 transition-all">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Right: Contact Info */}
        <div>
          <div className="text-xl font-semibold mb-4 text-cyan-300">Contact Us</div>
          <ul className="text-blue-200 space-y-3 text-sm">
            <li>Block C, 9/25 Humayun Rd, Dhaka 1207</li>
            <li><a href="tel:+8801746342152" className="hover:text-cyan-400">+880 1746-342152</a></li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-blue-400" />
              <a href="mailto:dobhydrojan2@gmail.com" className="hover:text-cyan-400">dobhydrojan2@gmail.com</a>
            </li>
            <li className="flex items-center gap-2">
              <FaGlobe className="text-blue-400" />
              <a href="https://www.hydrojan.tech" className="hover:text-cyan-400">www.hydrojan.tech</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 pt-6 border-t border-blue-800 text-center text-sm text-blue-500 relative z-10">
        © 2021–2025 DREAMS OF BANGLADESH | HydroJan. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
