
import React from 'react';
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full py-4 px-4 md:px-8 glass fixed top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="font-bold text-2xl bg-gradient-to-r from-winrr-primary to-winrr-secondary bg-clip-text text-transparent">
            Winrr.ai
          </h1>
        </div>
        <Button variant="outline" className="glass-card border border-winrr-accent/30 text-winrr-dark">
          Coming Soon
        </Button>
      </div>
    </header>
  );
};

export default Header;
