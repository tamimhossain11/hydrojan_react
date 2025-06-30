import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaTwitter, FaLinkedin, FaFacebook, FaLink, FaCheck } from 'react-icons/fa';

const SocialShare = ({ name }) => {
  const [copied, setCopied] = useState(false);
  const shareUrl = window.location.href;
  const title = `Check out ${name}'s profile`;

  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const iconVariants = {
    hover: {
      y: -5,
      scale: 1.1,
      transition: { type: 'spring', stiffness: 400, damping: 10 }
    },
    tap: { scale: 0.9 }
  };

  const socialLinks = [
    {
      icon: <FaTwitter />,
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(title)}`,
      label: 'Twitter'
    },
    {
      icon: <FaLinkedin />,
      url: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(title)}`,
      label: 'LinkedIn'
    },
    {
      icon: <FaFacebook />,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      label: 'Facebook'
    }
  ];

  return (
    <motion.div 
      className="flex justify-center space-x-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
    >
      {socialLinks.map((social, index) => (
        <motion.a
          key={social.label}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Share on ${social.label}`}
          variants={iconVariants}
          whileHover="hover"
          whileTap="tap"
          className="text-blue-400 hover:text-blue-300 text-lg bg-white/10 p-2 rounded-full backdrop-blur-sm"
          transition={{ delay: index * 0.1 }}
        >
          {social.icon}
        </motion.a>
      ))}
      
      <motion.button
        onClick={handleCopy}
        aria-label="Copy link"
        variants={iconVariants}
        whileHover="hover"
        whileTap="tap"
        className="text-blue-400 hover:text-blue-300 text-lg bg-white/10 p-2 rounded-full backdrop-blur-sm"
      >
        {copied ? <FaCheck className="text-green-400" /> : <FaLink />}
      </motion.button>
    </motion.div>
  );
};

export default SocialShare;