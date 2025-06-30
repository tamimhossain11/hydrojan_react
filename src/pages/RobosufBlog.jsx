// pages/RobosubBlog.jsx
import React, { useState } from "react";
import BlogHero from "../RobosubBlog/BlogHreo";
import BlogContent from "../RobosubBlog/BlogContent";

const RobosufBlog = () => {
  const [selectedBlog, setSelectedBlog] = useState("DOB HydroJan 0.1");

  return (
    <div className="min-h-screen bg-gray-950 text-white px-6 py-10 space-y-10">
      <BlogHero selected={selectedBlog} setSelected={setSelectedBlog} />
      <BlogContent blog={selectedBlog} />
    </div>
  );
};

export default RobosufBlog;
