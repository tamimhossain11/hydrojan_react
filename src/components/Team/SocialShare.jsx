import React from 'react';
import { FaTwitter, FaLinkedin, FaFacebook, FaLink } from 'react-icons/fa';

const SocialShare = ({ name }) => {
  const shareUrl = window.location.href;
  const title = `Check out ${name}'s profile`;

  return (
    <div className="social-share">
      <a 
        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(title)}`} 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Share on Twitter"
      >
        <FaTwitter />
      </a>
      <a 
        href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(title)}`} 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Share on LinkedIn"
      >
        <FaLinkedin />
      </a>
      <a 
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`} 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Share on Facebook"
      >
        <FaFacebook />
      </a>
      <button 
        onClick={() => {
          navigator.clipboard.writeText(shareUrl);
          alert('Link copied to clipboard!');
        }}
        aria-label="Copy link"
      >
        <FaLink />
      </button>
    </div>
  );
};

export default SocialShare;