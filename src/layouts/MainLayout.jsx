import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Fixed Navbar */}
      <header className="fixed top-0 left-0 w-full h-[5vh] z-50">
        <Navbar />
      </header>

      {/* Main Content Area */}
      <main className="flex-grow pt-[10vh]">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className=" text-white mt-auto">
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
