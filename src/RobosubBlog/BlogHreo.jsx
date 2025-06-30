// components/BlogHero.jsx
import React from "react";
import { motion } from "framer-motion";

const blogs = [
  "DOB HydroJan 0.1",
  "DOB HydroJan 0.2",
  "DOB HydroJan 0.3",
  "DOB HydroJan 1",
];

const BlogHero = ({ selected, setSelected }) => {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {blogs.map((blog, idx) => (
        <motion.button
          key={idx}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`px-6 py-3 rounded-full border ${
            selected === blog
              ? "bg-blue-600 text-white"
              : "bg-gray-800 text-gray-200 hover:bg-blue-500"
          } transition-all duration-300`}
          onClick={() => setSelected(blog)}
        >
          {blog}
        </motion.button>
      ))}
    </div>
  );
};

export default BlogHero;
