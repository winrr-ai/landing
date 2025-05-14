
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-gradient-to-br from-winrr-primary to-winrr-secondary text-white">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="font-bold text-2xl mb-2">Winrr.ai</h2>
          <p className="mb-6 opacity-80">Turn Everyday Victories Into Job-Winning Resumes</p>
          
          <div className="flex justify-center gap-6 mb-8">
            <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">About</a>
            <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Features</a>
            <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Pricing</a>
            <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Contact</a>
          </div>
          
          <div className="border-t border-white/20 pt-6">
            <p className="opacity-60 text-sm">
              &copy; {new Date().getFullYear()} Winrr.ai. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
