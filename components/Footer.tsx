"use client";

import React from "react";
import { ArrowUp, Github, Linkedin, Mail, Terminal } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12 relative text-slate-400 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Brand */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-cyan-500 flex items-center justify-center text-white font-bold">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <span className="text-white font-bold text-base tracking-tight">DASARI SATHWIKA</span>
              <span className="block text-xs text-slate-400">Software Engineer & Data Scientist</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap justify-center gap-6 text-slate-400 font-medium">
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>

          {/* Socials & Top Scroll */}
          <div className="flex items-center space-x-3">
            <a
              href={PORTFOLIO_DATA.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white rounded-lg border border-slate-800 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PORTFOLIO_DATA.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white rounded-lg border border-slate-800 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 bg-cyan-950 hover:bg-cyan-900 text-cyan-300 rounded-lg border border-cyan-800/50 transition-colors"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-slate-900 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-center sm:text-left text-slate-400 text-xs">
          <p>© {new Date().getFullYear()} Dasari Sathwika. All rights reserved.</p>
          <p className="font-mono text-slate-400">Built with Next.js (App Router), Tailwind CSS & Framer Motion • Ready for Vercel</p>
        </div>

      </div>
    </footer>
  );
};
