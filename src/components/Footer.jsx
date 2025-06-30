import React, { useState, useCallback } from 'react';
import { MapPin, Phone, Mail, Copyright, Globe, Instagram, Youtube, Droplet, 
         BrainCircuit, FlaskConical, Microscope } from 'lucide-react';

// Responsive, robust wave styles
const waveStyles = `
@keyframes waveMove1 { 100% { transform: translateX(-50%); } }
@keyframes waveMove2 { 100% { transform: translateX(-60%); } }
@keyframes waveMove3 { 100% { transform: translateX(-40%); } }
@keyframes waveMove4 { 100% { transform: translateX(-55%); } }
@keyframes waveMove5 { 100% { transform: translateX(-45%); } }

.footer-waves {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100vw;
  min-height: 110px;
  height: 110px;
  pointer-events: none;
  overflow: hidden;
  z-index: 1;
}

.wave {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 200vw;
  min-width: 200%;
  height: 100%;
  transform: translateX(0);
  will-change: transform;
}
.wave1 {
  z-index: 6;
  opacity: 0.8;
  animation: waveMove1 18s linear infinite;
}
.wave2 {
  z-index: 5;
  opacity: 0.6;
  animation: waveMove2 30s linear infinite reverse;
  bottom: 10px;
}
.wave3 {
  z-index: 4;
  opacity: 0.5;
  animation: waveMove3 40s linear infinite;
  bottom: 20px;
}
.wave4 {
  z-index: 3;
  opacity: 0.38;
  animation: waveMove4 55s linear infinite reverse;
  bottom: 30px;
}
.wave5 {
  z-index: 2;
  opacity: 0.25;
  animation: waveMove5 80s linear infinite;
  bottom: 35px;
  filter: blur(2px);
}
`;

const waveDefs = (
  <defs>
    <linearGradient id="waveblue1" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stopColor="#38bdf8" />
      <stop offset="80%" stopColor="#0ea5e9" />
    </linearGradient>
    <linearGradient id="waveblue2" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stopColor="#22d3ee" />
      <stop offset="100%" stopColor="#3b82f6" />
    </linearGradient>
    <linearGradient id="waveblue3" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stopColor="#60a5fa" />
      <stop offset="100%" stopColor="#0ea5e9" />
    </linearGradient>
    <linearGradient id="waveblue4" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stopColor="#0ea5e9" />
      <stop offset="100%" stopColor="#818cf8" />
    </linearGradient>
    <linearGradient id="waveblue5" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stopColor="#1e3a8a" />
      <stop offset="100%" stopColor="#0ea5e9" />
    </linearGradient>
  </defs>
);

const Footer = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navLinks = [
    { name: 'Home', href: '/', icon: null },
    { name: 'About', href: '/about', icon: null },
    {
      name: 'Team',
      href: '/team',
      icon: <BrainCircuit size={16} />,
      children: [
        { name: 'Lead', href: '/team/leadership' },
        { name: 'Departments', href: '/team/departments' },
        { name: 'Advisors', href: '/team/advisors' }
      ]
    },
    {
      name: 'RoboSuf',
      href: '/robosuf',
      icon: <FlaskConical size={16} />,
      children: [
        { name: 'Blog', href: '/robosuf/blog' },
        { name: 'Gallery', href: '/robosuf/gallery' },
        { name: 'Media', href: '/robosuf/media' }
      ]
    },
    {
      name: 'AUV',
      href: '/auv',
      icon: <Microscope size={16} />,
      children: [
        { name: 'HydroJan 0.1', href: '/auv/hydrojan-01' },
        { name: 'HydroJan 0.2', href: '/auv/hydrojan-02' },
        { name: 'HydroJan 0.3', href: '/auv/hydrojan-03' },
        { name: 'HydroJan 1.0', href: '/auv/hydrojan-10' }
      ]
    },
    { name: 'Sponsor', href: '/sponsor', icon: null },
    { name: 'Contact', href: '/contact', icon: null }
  ];

  const toggleDropdown = useCallback((index) => {
    setActiveDropdown(prev => prev === index ? null : index);
  }, []);

  return (
    <footer className="relative bg-[#0a1128] text-white pt-16 pb-8 px-4 sm:px-6 lg:px-8 border-t border-blue-900/50 overflow-hidden">
      <style>{waveStyles}</style>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Branding Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-300 flex items-center gap-2">
              <Droplet className="text-cyan-400" size={20} />
              DREAMS OF BANGLADESH
            </h3>
            <p className="text-blue-100 mb-4">
              Pioneering marine technology solutions for a sustainable future.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/dreams_of_bangladesh" target="_blank" rel="noopener noreferrer" className="text-blue-100 hover:text-pink-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://youtube.com/DREAMSofBangladesh" target="_blank" rel="noopener noreferrer" className="text-blue-100 hover:text-red-400 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Navigation Links with Dropdowns */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-300">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link, index) => (
                <li key={index} className="relative">
                  <div className="flex flex-col">
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
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </a>
                    
                    {link.children && activeDropdown === index && (
                      <ul className="ml-6 mt-1 space-y-1 pl-2 border-l border-blue-700">
                        {link.children.map((child, childIndex) => (
                          <li key={childIndex}>
                            <a 
                              href={child.href} 
                              className="text-blue-200 hover:text-blue-400 transition-colors flex items-center gap-2 text-sm"
                            >
                              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                              {child.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-300">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="text-blue-400 mt-1 flex-shrink-0" size={18} />
                <span className="text-blue-100">
                  Block C, 9/25 Humayun Rd,<br />
                  Dhaka 1207, Bangladesh
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="text-blue-400 mt-1 flex-shrink-0" size={18} />
                <a href="tel:8801746342152" className="text-blue-100 hover:text-blue-400 transition-colors">
                  +880 1746-342152
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="text-blue-400 mt-1 flex-shrink-0" size={18} />
                <a href="mailto:dreamsofbangladesh@gmail.com" className="text-blue-100 hover:text-blue-400 transition-colors">
                  dreamsofbangladesh@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Globe className="text-blue-400 mt-1 flex-shrink-0" size={18} />
                <a href="http://www.dreamsofbangladesh.com/" target="_blank" rel="noopener noreferrer" className="text-blue-100 hover:text-blue-400 transition-colors">
                  www.dreamsofbangladesh.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="border-t border-blue-900/50 pt-6 flex flex-col sm:flex-row justify-between items-center relative z-20">
          <div className="flex items-center gap-2 text-blue-300 mb-4 sm:mb-0">
            <Copyright size={16} />
            <span>Copyright 2021-2025 DREAMS OF BANGLADESH | HydroJan. All Rights Reserved.</span>
          </div>
          <div className="flex gap-4">
            <a href="#" className="text-blue-300 hover:text-blue-400 transition-colors text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-blue-300 hover:text-blue-400 transition-colors text-sm">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>

      {/* Water Waves (Parallax, 5 layers) */}
      <div className="footer-waves">
        {/* Layer 1 */}
        <svg className="wave wave1" viewBox="0 0 1440 110" fill="none">
          {waveDefs}
          <path
            fill="url(#waveblue1)"
            d="M0 80C120 120 400 40 720 80C1040 120 1320 40 1440 80V110H0V80Z"
          />
          <path
            fill="url(#waveblue1)"
            d="M1440 80C120 120 400 40 720 80C1040 120 1320 40 0 80V110H1440V80Z"
            style={{ transform: 'translateX(1440px)', pointerEvents: 'none' }}
          />
        </svg>
        {/* Layer 2 */}
        <svg className="wave wave2" viewBox="0 0 1440 110" fill="none">
          {waveDefs}
          <path
            fill="url(#waveblue2)"
            d="M0 70C200 110 500 30 900 70C1300 110 1500 30 1440 70V110H0V70Z"
          />
          <path
            fill="url(#waveblue2)"
            d="M1440 70C200 110 500 30 900 70C1300 110 1500 30 0 70V110H1440V70Z"
            style={{ transform: 'translateX(1440px)', pointerEvents: 'none' }}
          />
        </svg>
        {/* Layer 3 */}
        <svg className="wave wave3" viewBox="0 0 1440 110" fill="none">
          {waveDefs}
          <path
            fill="url(#waveblue3)"
            d="M0 90C300 120 600 60 1100 90C1600 120 1800 60 1440 90V110H0V90Z"
          />
          <path
            fill="url(#waveblue3)"
            d="M1440 90C300 120 600 60 1100 90C1600 120 1800 60 0 90V110H1440V90Z"
            style={{ transform: 'translateX(1440px)', pointerEvents: 'none' }}
          />
        </svg>
        {/* Layer 4 */}
        <svg className="wave wave4" viewBox="0 0 1440 110" fill="none">
          {waveDefs}
          <path
            fill="url(#waveblue4)"
            d="M0 95C350 110 600 75 1050 95C1500 115 1700 75 1440 95V110H0V95Z"
          />
          <path
            fill="url(#waveblue4)"
            d="M1440 95C350 110 600 75 1050 95C1500 115 1700 75 0 95V110H1440V95Z"
            style={{ transform: 'translateX(1440px)', pointerEvents: 'none' }}
          />
        </svg>
        {/* Layer 5 */}
        <svg className="wave wave5" viewBox="0 0 1440 110" fill="none">
          {waveDefs}
          <path
            fill="url(#waveblue5)"
            d="M0 108C400 110 700 80 1200 108C1700 136 1800 80 1440 108V110H0V108Z"
          />
          <path
            fill="url(#waveblue5)"
            d="M1440 108C400 110 700 80 1200 108C1700 136 1800 80 0 108V110H1440V108Z"
            style={{ transform: 'translateX(1440px)', pointerEvents: 'none' }}
          />
        </svg>
      </div>
    </footer>
  );
};

export default Footer;
