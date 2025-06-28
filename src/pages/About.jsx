import React from 'react';
import { useEffect } from 'react';
import AboutHero from '../components/About/AboutHero';

const About = () => {
  // Reset scroll position on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div >
     
     <AboutHero/>
      
      
    </div>
  );
};

export default About;