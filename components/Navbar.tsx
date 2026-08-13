"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileText, Sparkles, Terminal } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-lg"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center space-x-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
            <Terminal className="w-5 h-5" />
          </div>
          <div>
            <span className="text-lg font-bold text-white tracking-tight group-hover:text-cyan-400 transition-colors">
              SATHWIKA<span className="text-cyan-400">.DEV</span>
            </span>
            <span className="block text-[10px] text-slate-400 tracking-wider font-mono uppercase">
              Software & Data
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 glass-card px-4 py-1.5 rounded-full border border-slate-800">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3 py-1.5 text-xs lg:text-sm font-medium text-slate-300 hover:text-cyan-400 rounded-full hover:bg-slate-800/60 transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center space-x-3">
          <button
            onClick={onOpenResume}
            className="flex items-center space-x-2 px-4 py-2 text-xs lg:text-sm font-medium bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-cyan-500/30 rounded-xl transition-all hover:scale-105 shadow-md shadow-cyan-500/10"
          >
            <FileText className="w-4 h-4" />
            <span>Resume</span>
          </button>
          <a
            href="#contact"
            className="flex items-center space-x-1.5 px-4 py-2 text-xs lg:text-sm font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white rounded-xl transition-all shadow-md shadow-cyan-500/25 hover:scale-105"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Hire Me</span>
          </a>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="md:hidden flex items-center space-x-2">
          <button
            onClick={onOpenResume}
            className="p-2 text-xs font-medium text-cyan-400 bg-slate-900 border border-slate-800 rounded-lg"
          >
            Resume
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white bg-slate-900 border border-slate-800 rounded-lg focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 text-sm font-medium text-slate-200 hover:text-cyan-400 hover:bg-slate-900 rounded-lg transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2 flex flex-col space-y-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 text-sm font-medium bg-slate-800 text-cyan-300 border border-slate-700 rounded-xl"
                >
                  <FileText className="w-4 h-4" />
                  <span>View Full Resume</span>
                </button>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center px-4 py-2.5 text-sm font-semibold bg-cyan-600 text-white rounded-xl"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
