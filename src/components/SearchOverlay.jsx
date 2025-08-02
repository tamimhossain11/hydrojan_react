import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowUp, ArrowDown, Command, Users, BookOpen, Microscope, Home, Info, Mail, Heart, Camera, FileText, Video, Globe } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const searchData = [
  // Main Pages
  { 
    name: 'Home', 
    path: '/', 
    category: 'Main',
    icon: <Home size={16} />,
    description: 'Main homepage'
  },
  { 
    name: 'About', 
    path: '/about', 
    category: 'Main',
    icon: <Info size={16} />,
    description: 'Learn about our team and mission'
  },
  { 
    name: 'Contact', 
    path: '/contact', 
    category: 'Main',
    icon: <Mail size={16} />,
    description: 'Get in touch with us'
  },
  { 
    name: 'Sponsor', 
    path: '/sponsor', 
    category: 'Main',
    icon: <Heart size={16} />,
    description: 'Our sponsors and partners'
  },
  
  // Team Pages
  { 
    name: 'Team', 
    path: '/team', 
    category: 'Team',
    icon: <Users size={16} />,
    description: 'Meet our team members'
  },
  { 
    name: 'Team Leadership', 
    path: '/team/leadership', 
    category: 'Team',
    icon: <Users size={16} />,
    description: 'Our leadership team'
  },
  { 
    name: 'Team Departments', 
    path: '/team/departments', 
    category: 'Team',
    icon: <Users size={16} />,
    description: 'Different departments'
  },
  { 
    name: 'Team Advisors', 
    path: '/team/advisors', 
    category: 'Team',
    icon: <Users size={16} />,
    description: 'Our advisors and mentors'
  },
  
  // RoboSub Pages
  { 
    name: 'RoboSub', 
    path: '/robosub', 
    category: 'RoboSub',
    icon: <Microscope size={16} />,
    description: 'RoboSub competition'
  },
  { 
    name: 'RoboSub Blog', 
    path: '/robosub/blog', 
    category: 'RoboSub',
    icon: <FileText size={16} />,
    description: 'Latest updates and articles'
  },
  { 
    name: 'RoboSub Gallery', 
    path: '/robosub/gallery', 
    category: 'RoboSub',
    icon: <Camera size={16} />,
    description: 'Photo gallery'
  },
  { 
    name: 'RoboSub Media', 
    path: '/robosub/media', 
    category: 'RoboSub',
    icon: <Video size={16} />,
    description: 'Videos and media content'
  },
  
  // AUV Pages
  { 
    name: 'AUV', 
    path: '/auv', 
    category: 'AUV',
    icon: <Microscope size={16} />,
    description: 'Autonomous Underwater Vehicle'
  },
  { 
    name: 'HydroJan 0.1', 
    path: '/auv/hydrojan-01', 
    category: 'AUV',
    icon: <Microscope size={16} />,
    description: 'First generation AUV'
  },
  { 
    name: 'HydroJan 0.2', 
    path: '/auv/hydrojan-02', 
    category: 'AUV',
    icon: <Microscope size={16} />,
    description: 'Second generation AUV'
  },
  { 
    name: 'HydroJan 0.3', 
    path: '/auv/hydrojan-03', 
    category: 'AUV',
    icon: <Microscope size={16} />,
    description: 'Third generation AUV'
  },
  { 
    name: 'HydroJan 1.0', 
    path: '/auv/hydrojan-10', 
    category: 'AUV',
    icon: <Microscope size={16} />,
    description: 'Latest generation AUV'
  }
];

const SearchOverlay = ({ setSearchOpen }) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isSearching, setIsSearching] = useState(false);
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const resultsRef = useRef(null);

  const filteredResults = searchData.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase()) ||
    item.description.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  const groupedResults = filteredResults.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSearchOpen(false);
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => 
          prev < filteredResults.length - 1 ? prev + 1 : 0
        );
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => 
          prev > 0 ? prev - 1 : filteredResults.length - 1
        );
      } else if (e.key === 'Enter' && filteredResults.length > 0) {
        e.preventDefault();
        const selectedItem = filteredResults[selectedIndex];
        if (selectedItem) {
          navigate(selectedItem.path);
          setSearchOpen(false);
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [filteredResults, selectedIndex, navigate, setSearchOpen]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (filteredResults.length > 0) {
      const selectedItem = filteredResults[selectedIndex];
      navigate(selectedItem.path);
      setSearchOpen(false);
    }
  };

  const handleItemClick = (item) => {
    navigate(item.path);
    setSearchOpen(false);
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Main': return <Home size={14} />;
      case 'Team': return <Users size={14} />;
      case 'RoboSub': return <Microscope size={14} />;
      case 'AUV': return <Microscope size={14} />;
      default: return <Globe size={14} />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 bg-black/80 z-50 backdrop-blur-md flex items-start justify-center p-4 pt-20"
      onClick={() => setSearchOpen(false)}
    >
      <motion.div
        initial={{ scale: 0.95, y: 20, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.95, y: 20, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="w-full max-w-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 text-white/90">
            <Search size={20} />
            <span className="text-lg font-medium">Search</span>
          </div>
          <button
            onClick={() => setSearchOpen(false)}
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
          >
            <X size={20} className="text-white/70" />
          </button>
        </div>

        {/* Search Input */}
        <form onSubmit={handleSearch} className="relative mb-6">
          <div className="relative">
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search pages, content, and more..."
              className="w-full px-6 py-4 rounded-xl bg-white/95 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/50 pr-12 text-lg"
              autoFocus
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
              <div className="flex items-center gap-1 px-2 py-1 bg-gray-100 rounded text-xs text-gray-600">
                <Command size={12} />
                <span>K</span>
              </div>
            </div>
          </div>
        </form>

        {/* Search Results */}
        <AnimatePresence>
          {query && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="bg-white/95 rounded-xl shadow-2xl max-h-96 overflow-y-auto"
              ref={resultsRef}
            >
              {filteredResults.length === 0 ? (
                <div className="p-6 text-center text-gray-500">
                  <Search size={24} className="mx-auto mb-2 opacity-50" />
                  <p>No results found for "{query}"</p>
                  <p className="text-sm mt-1">Try different keywords</p>
                </div>
              ) : (
                <div className="py-2">
                  {Object.entries(groupedResults).map(([category, items]) => (
                    <div key={category}>
                      <div className="px-4 py-2 bg-gray-50/50 border-b border-gray-200">
                        <div className="flex items-center gap-2 text-xs font-medium text-gray-600 uppercase tracking-wide">
                          {getCategoryIcon(category)}
                          {category}
                        </div>
                      </div>
                      {items.map((item, index) => {
                        const globalIndex = filteredResults.findIndex(result => 
                          result.name === item.name && result.path === item.path
                        );
                        const isSelected = globalIndex === selectedIndex;
                        
                        return (
                          <motion.div
                            key={`${item.name}-${item.path}`}
                            whileHover={{ backgroundColor: 'rgba(59, 130, 246, 0.05)' }}
                            className={`px-4 py-3 cursor-pointer border-l-2 transition-colors ${
                              isSelected 
                                ? 'border-blue-500 bg-blue-50/50' 
                                : 'border-transparent'
                            }`}
                            onClick={() => handleItemClick(item)}
                          >
                            <div className="flex items-center gap-3">
                              <div className="flex-shrink-0 text-blue-600">
                                {item.icon}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2">
                                  <span className="font-medium text-gray-900 truncate">
                                    {item.name}
                                  </span>
                                  {isSelected && (
                                    <motion.div
                                      initial={{ opacity: 0 }}
                                      animate={{ opacity: 1 }}
                                      className="flex items-center gap-1 text-xs text-blue-600"
                                    >
                                      <ArrowUp size={12} />
                                      <ArrowDown size={12} />
                                    </motion.div>
                                  )}
                                </div>
                                <p className="text-sm text-gray-600 truncate mt-0.5">
                                  {item.description}
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Search Tips */}
        {!query && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-center text-white/60 text-sm mt-8"
          >
            <p>Start typing to search pages and content</p>
            <p className="mt-1">Use ↑↓ arrows to navigate, Enter to select</p>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default SearchOverlay;
