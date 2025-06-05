import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X, Sun, Moon, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom'; // ✅ Import Link

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const { scrollY } = useScroll();

  

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '#' },
  { name: 'Services', href: '#' },
  { name: 'Portfolio', href: '#' },
  { name: 'Contact', href: '/contact' }
];

// Then use <Link to={item.href}> instead of <a href={item.href}>


  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 10);
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    if (darkMode) {
      document.documentElement.style.setProperty('--primary', '255 255 255');
      document.documentElement.style.setProperty('--secondary', '147 197 253');
    } else {
      document.documentElement.style.setProperty('--primary', '15 23 42');
      document.documentElement.style.setProperty('--secondary', '59 130 246');
    }
  }, [darkMode]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-lg shadow-lg border-b border-slate-200/30 dark:border-slate-800/30' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, type: 'spring' }}
          className="relative group"
        >
          <motion.span 
            className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-blue-300 dark:from-blue-400 dark:to-blue-200 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            Hydrojan
          </motion.span>
          <motion.span 
            className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-300 dark:from-blue-400 dark:to-blue-200 rounded-full blur-md opacity-0 group-hover:opacity-70 -z-10"
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {/* Desktop Nav */}
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="hidden md:block"
        >
          <ul className="flex gap-1">
            {navItems.map((item, index) => (
              <li key={index}>
                {item.href.startsWith('/') ? (
                  <Link
                    to={item.href}
                    className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      hoveredItem === index 
                        ? 'text-white dark:text-slate-900' 
                        : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                    }`}
                    onMouseEnter={() => setHoveredItem(index)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    {hoveredItem === index && (
                      <motion.span 
                        layoutId="navItem"
                        className="absolute inset-0 bg-blue-500 dark:bg-blue-300 rounded-full -z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    {item.name}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    className="px-4 py-2 text-sm"
                  >
                    {item.name}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </motion.nav>

        {/* Right Side Buttons */}
        <div className="flex items-center gap-4">
          <motion.button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </motion.button>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block relative group"
          >
            <motion.div
              className="absolute inset-0 bg-blue-500 dark:bg-blue-400 rounded-full blur-md opacity-0 group-hover:opacity-70 -z-10"
              transition={{ duration: 0.3 }}
            />
            <button className="flex items-center gap-1 bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-400 text-white px-5 py-2.5 rounded-full shadow-lg transition-all duration-300 group-hover:shadow-blue-500/30">
              <span>Get Started</span>
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              >
                <ArrowRight size={16} />
              </motion.span>
            </button>
          </motion.div>

          <motion.button 
            onClick={() => setMenuOpen(!menuOpen)} 
            className="md:hidden p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden"
          >
            <motion.div 
              className="bg-white/90 dark:bg-slate-950/90 backdrop-blur-lg px-6 py-4 space-y-3 border-t border-slate-200/30 dark:border-slate-800/30"
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              exit={{ y: -20 }}
              transition={{ delay: 0.1 }}
            >
              {navItems.map((item, index) => (
                item.href.startsWith('/') ? (
                  <Link
                    key={index}
                    to={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-3 px-4 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    key={index}
                    href={item.href}
                    className="block py-3 px-4"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                )
              ))}
              <motion.button
                className="w-full flex items-center justify-center gap-2 bg-blue-600 dark:bg-blue-500 text-white py-3 px-4 rounded-lg mt-2"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1 + navItems.length * 0.05 }}
              >
                Get Started <ArrowRight size={16} />
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
