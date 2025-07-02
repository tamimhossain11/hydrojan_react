import { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScroll, useMotionValueEvent } from 'framer-motion';
import {
  Menu, X, Search, FlaskConical, Microscope, Atom, BrainCircuit
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SearchOverlay from './SearchOverlay';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 10);
  });

  const navItems = [
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
      name: 'RoboSub',
      href: '/robosub',
      icon: <FlaskConical size={16} />,
      children: [
        { name: 'Blog', href: '/robosub/blog' },
        { name: 'Gallery', href: '/robosub/gallery' },
        { name: 'Media', href: '/robosub/media' }
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
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-blue-900/40 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        {/* Logo and Brand */}
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src="/Image/dobhydrojanlogo.png"
            alt="DoB HydroJan Logo"
            loading="eager"
            width={40}
            height={40}
            className="w-10 h-10 object-contain rounded-full"
          />
          <motion.span
            className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            DoB HydroJan
          </motion.span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block relative will-change-transform">
          <ul className="flex gap-1">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(index)}
                onMouseLeave={() => item.children && setActiveDropdown(null)}
              >
                <Link
                  to={item.href}
                  onClick={(e) => {
                    if (item.children) {
                      e.preventDefault();
                      toggleDropdown(index);
                    }
                  }}
                  className={`flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    isScrolled ? 'text-white hover:bg-blue-800/50' : 'text-white hover:bg-white/10'
                  } hover:scale-105 will-change-transform`}
                >
                  {item.icon && <span className="opacity-70">{item.icon}</span>}
                  {item.name}
                  {item.children && (
                    <motion.span
                      animate={{ rotate: activeDropdown === index ? 180 : 0 }}
                      transition={{ duration: 0.15 }}
                      className="ml-1 text-xs"
                    >
                      ▼
                    </motion.span>
                  )}
                </Link>

                {/* Dropdown Menu */}
                {item.children && (
                  <AnimatePresence>
                    {activeDropdown === index && (
                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        transition={{ duration: 0.15, ease: 'easeOut' }}
                        className="absolute top-full left-0 mt-1 w-48 bg-blue-800/95 backdrop-blur-sm rounded-lg shadow-xl overflow-hidden z-50 transform-gpu"
                      >
                        {item.children.map((child, childIndex) => (
                          <Link
                            key={childIndex}
                            to={child.href}
                            className="block px-4 py-2 text-sm text-white/90 hover:bg-blue-700 transition-colors duration-150"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <div className="flex items-center gap-2">
                              <Atom size={14} className="opacity-60" />
                              {child.name}
                            </div>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Search & Mobile Menu Button */}
        <div className="flex items-center gap-3">
          <motion.button
            onClick={() => setSearchOpen(true)}
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Search size={18} className="text-white" />
          </motion.button>
          <motion.button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-full hover:bg-white/10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {menuOpen ? <X size={20} className="text-white" /> : <Menu size={20} className="text-white" />}
          </motion.button>
        </div>
      </div>

      {/* Search Overlay */}
      <AnimatePresence>
        {searchOpen && <SearchOverlay setSearchOpen={setSearchOpen} />}
      </AnimatePresence>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-blue-900/90 backdrop-blur-md px-6 pb-6 pt-2 space-y-2"
          >
            {navItems.map((item, index) => (
              <div key={index}>
                {item.children ? (
                  <button
                    onClick={() => toggleDropdown(index)}
                    className="w-full flex items-center justify-between text-white/90 font-medium text-sm py-2"
                  >
                    <div className="flex items-center gap-2">
                      {item.icon && <span className="opacity-70">{item.icon}</span>}
                      {item.name}
                    </div>
                    <motion.span
                      animate={{ rotate: activeDropdown === index ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-xs"
                    >
                      ▼
                    </motion.span>
                  </button>
                ) : (
                  <Link
                    to={item.href}
                    className="w-full block text-white/90 font-medium text-sm py-2"
                    onClick={() => setMenuOpen(false)}
                  >
                    <div className="flex items-center gap-2">
                      {item.icon && <span className="opacity-70">{item.icon}</span>}
                      {item.name}
                    </div>
                  </Link>
                )}

                {/* Mobile Dropdown Links */}
                <AnimatePresence>
                  {item.children && activeDropdown === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="ml-4 pl-2 border-l border-blue-600 space-y-1"
                    >
                      {item.children.map((child, childIdx) => (
                        <Link
                          key={childIdx}
                          to={child.href}
                          className="block text-sm text-white/70 py-1 hover:text-cyan-300 transition-all"
                          onClick={() => {
                            setActiveDropdown(null);
                            setMenuOpen(false);
                          }}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
