import { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X, Search, FlaskConical, Microscope, Atom, BrainCircuit } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { scrollY } = useScroll();

  // Optimized scroll handler with throttling
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 10);
  });

  // Memoized nav items to prevent unnecessary re-renders
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

  const handleSearch = useCallback((e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    setSearchQuery('');
    setSearchOpen(false);
  }, [searchQuery]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (activeDropdown !== null) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [activeDropdown]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ 
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1]
      }}
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        isScrolled 
          ? 'bg-blue-900/90 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        {/* Logo - Optimized with preloading */}
        <Link 
          to="/" 
          className="relative group"
          prefetch="intent" // If using Remix or similar
        >
          <motion.span 
            className="text-2xl font-bold bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            Hydrojan
          </motion.span>
        </Link>

        {/* Desktop Navigation - Optimized with will-change */}
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
                    isScrolled 
                      ? 'text-white hover:bg-blue-800/50' 
                      : 'text-white hover:bg-white/10'
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

                {/* Dropdown Menu - Optimized with transform-gpu */}
                {item.children && (
                  <AnimatePresence>
                    {activeDropdown === index && (
                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
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

        {/* Mobile Menu Button - Optimized with transform-gpu */}
        <div className="flex items-center gap-3">
          <motion.button
            onClick={() => setSearchOpen(!searchOpen)}
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
            {menuOpen ? (
              <X size={20} className="text-white" />
            ) : (
              <Menu size={20} className="text-white" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu - Optimized with will-change */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden will-change-transform"
          >
            <div className="bg-blue-900/95 backdrop-blur-sm px-6 py-3 space-y-1 border-t border-white/10">
              {navItems.map((item, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex items-center justify-between py-2 px-3 rounded-lg">
                    <Link
                      to={item.href}
                      onClick={() => {
                        setMenuOpen(false);
                        setActiveDropdown(null);
                      }}
                      className={`flex items-center gap-2 w-full ${
                        isScrolled ? 'text-white' : 'text-white'
                      }`}
                    >
                      {item.icon && <span className="opacity-70">{item.icon}</span>}
                      <span>{item.name}</span>
                    </Link>
                    {item.children && (
                      <button 
                        onClick={() => toggleDropdown(index)}
                        className="p-1 rounded-full hover:bg-white/10"
                      >
                        <motion.span
                          animate={{ rotate: activeDropdown === index ? 180 : 0 }}
                          transition={{ duration: 0.15 }}
                          className="text-xs"
                        >
                          ▼
                        </motion.span>
                      </button>
                    )}
                  </div>

                  {item.children && (
                    <AnimatePresence>
                      {activeDropdown === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.15 }}
                          className="pl-6 overflow-hidden"
                        >
                          {item.children.map((child, childIndex) => (
                            <Link
                              key={childIndex}
                              to={child.href}
                              onClick={() => {
                                setMenuOpen(false);
                                setActiveDropdown(null);
                              }}
                              className="block py-2 px-3 rounded-lg text-sm text-white/80 hover:bg-white/10 transition-colors"
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
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search Overlay - Optimized with transform-gpu */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 bg-black/70 z-50 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSearchOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="w-full max-w-md transform-gpu"
              onClick={(e) => e.stopPropagation()}
            >
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  autoFocus
                  className="w-full px-5 py-3 rounded-full bg-white/90 backdrop-blur-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 pr-12"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full hover:bg-gray-200/50 transition-colors"
                >
                  <Search size={20} className="text-gray-600" />
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;