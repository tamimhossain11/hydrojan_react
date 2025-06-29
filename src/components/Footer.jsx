import React, { useState, useCallback } from 'react';
import { MapPin, Phone, Mail, Copyright, Globe, Instagram, Youtube, Droplet, 
         BrainCircuit, FlaskConical, Microscope } from 'lucide-react';

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
    <footer className="bg-[#0a1128] text-white pt-16 pb-8 px-4 sm:px-6 lg:px-8 border-t border-blue-900/50">
      <div className="max-w-7xl mx-auto">
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
        <div className="border-t border-blue-900/50 pt-6 flex flex-col sm:flex-row justify-between items-center">
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
    </footer>
  );
};

export default Footer;