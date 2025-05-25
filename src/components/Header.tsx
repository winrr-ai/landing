import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, Zap, Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`w-full py-3 sm:py-4 px-4 sm:px-6 lg:px-8 fixed top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "glass-hero backdrop-blur-2xl border-b border-white/20"
          : "bg-transparent"
      }`}
    >
      {/* Animated Background Particles - Hidden on mobile for performance */}
      <div className="hidden md:block absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-24 h-24 sm:w-32 sm:h-32 bg-white/[0.02] rounded-full blur-2xl animate-float" />
        <div className="absolute top-0 right-1/3 w-16 h-16 sm:w-24 sm:h-24 bg-white/[0.03] rounded-full blur-xl animate-float-delayed" />
      </div>

      <div className="container mx-auto relative z-10 max-w-7xl">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center group">
            <div className="relative">
              {/* Logo Background Glow - Hidden on mobile for cleaner look */}
              <div className="hidden sm:block absolute -inset-2 bg-gradient-to-r from-white/10 to-white/5 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Logo Container */}
              <div className="relative flex items-center gap-2 sm:gap-3 p-1.5 sm:p-2 rounded-lg sm:rounded-xl glass-card group-hover:bg-white/10 transition-all duration-300">
                <div className="p-1.5 sm:p-2 rounded-md sm:rounded-lg bg-white/10 backdrop-blur-xl border border-white/20 group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-white animate-pulse" />
                </div>
                <h1 className="font-bold text-lg sm:text-xl lg:text-2xl text-white group-hover:text-white transition-colors duration-300">
                  EZREZ AI
                </h1>
              </div>
            </div>
          </div>

          {/* Navigation Links - Desktop */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {["Features", "Pricing", "About"].map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative text-white/70 hover:text-white transition-colors duration-300 group px-3 py-2 rounded-lg hover:bg-white/5"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="relative z-10 text-sm font-medium">
                  {item}
                </span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* CTA Section */}
          <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
            {/* Status Indicator - Hidden on mobile */}
            <div className="hidden xl:flex items-center gap-2 px-3 py-1 glass-card rounded-full animate-pulse-glow">
              <div className="relative">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-pulse" />
                <div className="absolute inset-0 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-ping" />
              </div>
              <span className="text-xs text-white/80">Live</span>
            </div>

            {/* Main CTA Button */}
            <Button className="glow-button bg-white text-black hover:bg-white/90 font-semibold px-3 sm:px-4 lg:px-6 py-2 text-xs sm:text-sm group relative overflow-hidden">
              <span className="relative z-10 flex items-center gap-1 sm:gap-2">
                <span className="hidden sm:inline">Get Early Access</span>
                <span className="sm:hidden">Join</span>
                <Zap
                  size={14}
                  className="group-hover:scale-110 transition-transform duration-300 sm:w-4 sm:h-4"
                />
              </span>

              {/* Button Background Animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden glass-card text-white hover:bg-white/10 p-2 sm:p-2.5"
              onClick={(e) => {
                e.stopPropagation();
                setIsMobileMenuOpen(!isMobileMenuOpen);
              }}
            >
              {isMobileMenuOpen ? (
                <X size={18} className="sm:w-5 sm:h-5" />
              ) : (
                <Menu size={18} className="sm:w-5 sm:h-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? "max-h-96 opacity-100 mt-4 sm:mt-6"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="glass-hero rounded-xl sm:rounded-2xl p-4 sm:p-6">
            <nav className="flex flex-col gap-3 sm:gap-4">
              {["Features", "Pricing", "About"].map((item, index) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-white/70 hover:text-white transition-colors duration-300 py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg hover:bg-white/10 text-sm sm:text-base font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item}
                </a>
              ))}

              <div className="border-t border-white/10 pt-3 sm:pt-4 mt-2 sm:mt-3">
                <Button
                  className="w-full glow-button bg-white text-black hover:bg-white/90 font-semibold py-2.5 sm:py-3 text-sm sm:text-base"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Early Access
                </Button>
              </div>

              {/* Mobile Status */}
              <div className="flex items-center justify-center gap-2 px-3 py-2 glass-card rounded-full mt-2">
                <div className="relative">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                  <div className="absolute inset-0 w-1.5 h-1.5 bg-green-400 rounded-full animate-ping" />
                </div>
                <span className="text-xs text-white/80">
                  All systems operational
                </span>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
