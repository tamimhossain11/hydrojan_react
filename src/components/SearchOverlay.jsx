import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const components = [
  { name: 'Team', path: '/team' },
  { name: 'About', path: '/about' },
  { name: 'RoboSub', path: '/robosub' },
  { name: 'HydroJan 0.3', path: '/auv/hydrojan-03' },
  { name: 'Contact', path: '/contact' },
  { name: 'Sponsor', path: '/sponsor' },
];

const SearchOverlay = ({ setSearchOpen }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const suggestions = components.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  const handleSearch = (e) => {
    e.preventDefault();
    const result = components.find((item) =>
      item.name.toLowerCase() === query.toLowerCase()
    );
    if (result) {
      navigate(result.path);
    }
    setQuery('');
    setSearchOpen(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 bg-black/70 z-50 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={() => setSearchOpen(false)}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="w-full max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        <form onSubmit={handleSearch} className="relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
            className="w-full px-5 py-3 rounded-full bg-white/90 text-gray-900 focus:outline-none pr-12"
            autoFocus
          />
          <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2">
            <Search size={20} className="text-gray-600" />
          </button>
        </form>
        {query && (
          <div className="mt-3 bg-white/90 rounded-lg shadow-lg">
            {suggestions.map((item, index) => (
              <div
                key={index}
                className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                onClick={() => {
                  navigate(item.path);
                  setSearchOpen(false);
                }}
              >
                {item.name}
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default SearchOverlay;
