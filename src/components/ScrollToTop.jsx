// src/components/ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to the top of the page whenever the pathname changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth' // Use 'auto' if you want instant scroll
    });
  }, [pathname]);

  return null; // This component renders nothing visually
};

export default ScrollToTop;
