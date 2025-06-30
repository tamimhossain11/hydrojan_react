import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import BlogOne from "./BlogOne";
import BlogTwo from "./BlogTwo";
import BlogThree from "./BlogThree";
import BlogFour from "./BlogFour";

const componentMap = {
  "DOB HydroJan 0.1": <BlogOne />,
  "DOB HydroJan 0.2": <BlogTwo />,
  "DOB HydroJan 0.3": <BlogThree />,
  "DOB HydroJan 1": <BlogFour />,
};

const BlogContent = ({ blog }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={blog}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto bg-gray-900 rounded-xl p-6 shadow-lg mt-16"
      >
        <h2 className="text-2xl font-bold text-blue-400 mb-4">{blog}</h2>
        <div className="text-gray-300 leading-relaxed mt-5">
          {componentMap[blog]}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default BlogContent;
