import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/10 dark:bg-black/10 backdrop-blur-md shadow-md border-b border-white/20' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="text-white dark:text-white font-bold text-xl"
        >
          Hydrojan
        </motion.div>

        {/* Desktop Menu */}
        <motion.ul
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="hidden md:flex gap-6 text-white dark:text-white font-medium"
        >
          <li className="hover:text-blue-300 transition">Home</li>
          <li className="hover:text-blue-300 transition">About</li>
          <li className="hover:text-blue-300 transition">Services</li>
          <li className="hover:text-blue-300 transition">Contact</li>
        </motion.ul>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {/* Dark/Light Toggle */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            onClick={() => setDarkMode(!darkMode)}
            className="text-white hover:text-yellow-300 transition"
          >
            {darkMode ? <Sun size={22} /> : <Moon size={22} />}
          </motion.button>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9 }}
            className="hidden md:block bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-full shadow-lg transition"
          >
            Get Started
          </motion.button>

          {/* Mobile Menu Toggle */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-black/80 dark:bg-black/90 text-white py-4 px-6 space-y-4"
          >
            <a href="#" className="block hover:text-blue-400 transition">Home</a>
            <a href="#" className="block hover:text-blue-400 transition">About</a>
            <a href="#" className="block hover:text-blue-400 transition">Services</a>
            <a href="#" className="block hover:text-blue-400 transition">Contact</a>
            <button className="w-full bg-blue-600 py-2 rounded-full">Get Started</button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
