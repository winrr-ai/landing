import React from "react";
import {
  Sparkles,
  Zap,
  Github,
  Twitter,
  Linkedin,
  Mail,
  ArrowUp,
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-background overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 w-72 h-72 sm:w-96 sm:h-96 bg-white/[0.02] rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/3 right-1/6 w-60 h-60 sm:w-80 sm:h-80 bg-white/[0.03] rounded-full blur-3xl animate-float-delayed" />

        {/* Animated Grid Lines */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-8 sm:grid-cols-12 h-full">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="border-r border-white/10" />
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-12 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-5">
              <div className="glass-hero rounded-xl sm:rounded-2xl p-6 sm:p-8 h-full">
                {/* Logo */}
                <div className="flex items-center gap-3 mb-4 sm:mb-6 group">
                  <div className="p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 group-hover:scale-110 transition-transform duration-300">
                    <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-white group-hover:text-white animate-pulse" />
                  </div>
                  <h2 className="font-bold text-2xl sm:text-3xl text-white">
                    EZREZ AI
                  </h2>
                </div>

                <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                  Turn Everyday Victories Into Job-Winning Resumes. Transform
                  your career with AI-powered resume creation that showcases
                  your true potential.
                </p>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-3 sm:gap-4">
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl font-bold text-white">
                      1000+
                    </div>
                    <div className="text-xs text-white/60">Users</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl font-bold text-white">
                      50k+
                    </div>
                    <div className="text-xs text-white/60">Resumes</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl font-bold text-white">
                      98%
                    </div>
                    <div className="text-xs text-white/60">Success</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Links Section */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 h-full">
                {/* Product Links */}
                <div className="glass-card p-4 sm:p-6 rounded-lg sm:rounded-xl group hover:bg-white/10 transition-all duration-300">
                  <h3 className="font-semibold text-white mb-3 sm:mb-4 flex items-center gap-2 text-sm sm:text-base">
                    <Zap size={14} className="text-white sm:w-4 sm:h-4" />
                    Product
                  </h3>
                  <ul className="space-y-2 sm:space-y-3">
                    {[
                      { name: "Features", href: "#features" },
                      { name: "Pricing", href: "#pricing" },
                      { name: "Templates", href: "#templates" },
                      { name: "API", href: "#api" },
                    ].map((link, index) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="text-white/70 hover:text-white transition-colors duration-300 flex items-center gap-2 group/link text-sm"
                          style={{ animationDelay: `${index * 100}ms` }}
                        >
                          <div className="w-1 h-1 bg-white/30 rounded-full group-hover/link:bg-white transition-colors duration-300" />
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Company Links */}
                <div className="glass-card p-4 sm:p-6 rounded-lg sm:rounded-xl group hover:bg-white/10 transition-all duration-300">
                  <h3 className="font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base">
                    Company
                  </h3>
                  <ul className="space-y-2 sm:space-y-3">
                    {[
                      { name: "About", href: "#about" },
                      { name: "Blog", href: "#blog" },
                      { name: "Careers", href: "#careers" },
                      { name: "Contact", href: "#contact" },
                    ].map((link, index) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="text-white/70 hover:text-white transition-colors duration-300 flex items-center gap-2 group/link text-sm"
                          style={{ animationDelay: `${index * 100}ms` }}
                        >
                          <div className="w-1 h-1 bg-white/30 rounded-full group-hover/link:bg-white transition-colors duration-300" />
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Resources */}
                <div className="glass-card p-4 sm:p-6 rounded-lg sm:rounded-xl group hover:bg-white/10 transition-all duration-300">
                  <h3 className="font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base">
                    Resources
                  </h3>
                  <ul className="space-y-2 sm:space-y-3">
                    {[
                      { name: "Documentation", href: "#docs" },
                      { name: "Support", href: "#support" },
                      { name: "Privacy", href: "#privacy" },
                      { name: "Terms", href: "#terms" },
                    ].map((link, index) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="text-white/70 hover:text-white transition-colors duration-300 flex items-center gap-2 group/link text-sm"
                          style={{ animationDelay: `${index * 100}ms` }}
                        >
                          <div className="w-1 h-1 bg-white/30 rounded-full group-hover/link:bg-white transition-colors duration-300" />
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 py-6 sm:py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
            {/* Copyright */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
              <p className="text-white/60 text-xs sm:text-sm text-center sm:text-left">
                &copy; {currentYear} EZREZ AI. All rights reserved.
              </p>
              <div className="flex items-center justify-center gap-2 px-3 py-1 glass-card rounded-full">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-xs text-white/80">
                  All systems operational
                </span>
              </div>
            </div>

            {/* Social Links & Scroll to Top */}
            <div className="flex items-center gap-3 sm:gap-4">
              {/* Social Icons */}
              <div className="flex items-center gap-2 sm:gap-3">
                {[
                  {
                    icon: Twitter,
                    href: "#twitter",
                    color: "hover:text-blue-400",
                  },
                  {
                    icon: Github,
                    href: "#github",
                    color: "hover:text-gray-300",
                  },
                  {
                    icon: Linkedin,
                    href: "#linkedin",
                    color: "hover:text-blue-500",
                  },
                  { icon: Mail, href: "#email", color: "hover:text-green-400" },
                ].map(({ icon: Icon, href, color }, index) => (
                  <a
                    key={href}
                    href={href}
                    className={`p-2 glass-card rounded-lg text-white/70 ${color} transition-all duration-300 hover:scale-110`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <Icon size={16} className="sm:w-4 sm:h-4" />
                  </a>
                ))}
              </div>

              {/* Scroll to Top Button */}
              <button
                onClick={scrollToTop}
                className="glow-button bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-lg sm:rounded-xl p-2.5 sm:p-3 group transition-all duration-300 hover:scale-110"
              >
                <ArrowUp
                  size={16}
                  className="group-hover:-translate-y-1 transition-transform duration-300 sm:w-5 sm:h-5"
                />
              </button>
            </div>
          </div>
        </div>

        {/* Version Info */}
        <div className="pb-4 sm:pb-6">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 glass-card rounded-full text-xs text-white/60">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
              <span>Version 2.1.0 • Built with Next.js</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements - Hidden on mobile for cleaner look */}
      <div className="hidden md:block absolute bottom-10 left-10 w-3 h-3 sm:w-4 sm:h-4 bg-white/10 rotate-45 animate-spin-slow" />
      <div className="hidden md:block absolute top-20 right-20 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-white/20 rounded-full animate-pulse-glow" />
    </footer>
  );
};

export default Footer;
