"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin, Sparkles, Code2, Database, Brain, Phone } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-grid-pattern">
      {/* Radiant Background Blur Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-hero-glow pointer-events-none rounded-full blur-3xl opacity-80" />
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Copy */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-xs font-semibold text-cyan-300 shadow-inner"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>{PORTFOLIO_DATA.personal.availability}</span>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-2"
            >
              <h2 className="text-slate-400 font-mono text-sm sm:text-base tracking-wide uppercase">
                Hello, I am
              </h2>
              <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
                {PORTFOLIO_DATA.personal.name}
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-gradient-cyan">
                {PORTFOLIO_DATA.personal.title}
              </p>
            </motion.div>

            {/* Bio Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              {PORTFOLIO_DATA.personal.bio}
            </motion.p>

            {/* Location & Contact Meta */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs sm:text-sm text-slate-400"
            >
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-cyan-400" />
                {PORTFOLIO_DATA.personal.location}
              </span>
              <span className="text-slate-700">•</span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-4 h-4 text-cyan-400" />
                {PORTFOLIO_DATA.personal.email}
              </span>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <a
                href="#projects"
                className="flex items-center space-x-2 px-6 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-sm rounded-xl transition-all shadow-lg shadow-cyan-500/25 hover:scale-105"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="flex items-center space-x-2 px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-slate-200 font-semibold text-sm rounded-xl border border-slate-700 hover:border-slate-600 transition-all hover:scale-105"
              >
                <span>Contact Me</span>
              </a>

              <button
                onClick={onOpenResume}
                className="flex items-center space-x-2 px-5 py-3.5 bg-slate-900/60 hover:bg-slate-800 text-cyan-300 font-semibold text-sm rounded-xl border border-cyan-500/30 hover:border-cyan-400 transition-all hover:scale-105"
              >
                <Download className="w-4 h-4" />
                <span>Resume</span>
              </button>
            </motion.div>

            {/* Social Icons Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center justify-center lg:justify-start space-x-4 pt-4"
            >
              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-cyan-400 border border-slate-800 rounded-xl transition-colors"
                title="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-cyan-400 border border-slate-800 rounded-xl transition-colors"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                className="p-3 bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-cyan-400 border border-slate-800 rounded-xl transition-colors"
                title="Email Sathwika"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href={`tel:${PORTFOLIO_DATA.personal.phone}`}
                className="p-3 bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-cyan-400 border border-slate-800 rounded-xl transition-colors"
                title="Call Sathwika"
              >
                <Phone className="w-5 h-5" />
              </a>
            </motion.div>
          </div>

          {/* Code Card / Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card rounded-2xl p-6 border border-slate-800 shadow-2xl relative space-y-4"
            >
              {/* Window Controls */}
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                <div className="flex space-x-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-xs font-mono text-slate-400">sathwika_profile.py</span>
              </div>

              {/* Code Snippet Display */}
              <div className="font-mono text-xs sm:text-sm space-y-2 text-slate-300 leading-relaxed overflow-x-auto">
                <p className="text-purple-400">
                  <span className="text-pink-400">class</span> DeveloperProfile:
                </p>
                <p className="pl-4">
                  def __init__(self):
                </p>
                <p className="pl-8 text-cyan-300">
                  self.name = <span className="text-amber-300">&quot;Dasari Sathwika&quot;</span>
                </p>
                <p className="pl-8 text-cyan-300">
                  self.role = <span className="text-amber-300">&quot;Software Engineer & Data Scientist&quot;</span>
                </p>
                <p className="pl-8 text-cyan-300">
                  self.internship = <span className="text-amber-300">&quot;EXIENT (Madhapur)&quot;</span>
                </p>
                <p className="pl-8 text-cyan-300">
                  self.education = <span className="text-amber-300">&quot;MCA (Sri Chaitanya Technical)&quot;</span>
                </p>
                <p className="pl-8 text-cyan-300">
                  self.stack = [<span className="text-emerald-300">&quot;Python&quot;</span>, <span className="text-emerald-300">&quot;Flask&quot;</span>, <span className="text-emerald-300">&quot;SQL&quot;</span>, <span className="text-emerald-300">&quot;ML&quot;</span>, <span className="text-emerald-300">&quot;Next.js&quot;</span>]
                </p>
                <p className="pl-4 text-purple-400 mt-2">
                  def get_impact(self):
                </p>
                <p className="pl-8 text-slate-400">
                  return <span className="text-emerald-400">&quot;87% Crop Accuracy | 94% Face ID | 1KM Buffer GIS&quot;</span>
                </p>
              </div>

              {/* Floating Pill Badges */}
              <div className="pt-2 border-t border-slate-800 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-cyan-950 text-cyan-300 text-[11px] font-mono border border-cyan-800/50">
                  <Code2 className="w-3.5 h-3.5" /> Python / Flask
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-purple-950 text-purple-300 text-[11px] font-mono border border-purple-800/50">
                  <Brain className="w-3.5 h-3.5" /> Scikit-learn / OpenCV
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-950 text-emerald-300 text-[11px] font-mono border border-emerald-800/50">
                  <Database className="w-3.5 h-3.5" /> MySQL / VictoriaMetrics
                </span>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Key Stats Counter Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {PORTFOLIO_DATA.stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-card p-5 rounded-2xl border border-slate-800/80 text-center hover:border-cyan-500/30 transition-all hover:-translate-y-1"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-white text-gradient-cyan">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-400 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
