import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#050b1e] text-white">
      
      {/* Scroll to top on route change */}
      <ScrollToTop />

      {/* Fixed Navbar */}
      <header className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </header>

      {/* Main Page Content (with padding to prevent overlap with fixed navbar) */}
      <main className="flex-grow pt-20">
        <Outlet />
      </main>

      {/* Footer at bottom */}
      <footer className="mt-auto">
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
