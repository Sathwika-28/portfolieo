"use client";

import React from "react";
import { motion } from "framer-motion";
import { User, GraduationCap, Award, CheckCircle2, Sparkles, Compass } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative bg-slate-950/60 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/50 text-xs font-semibold text-cyan-300">
            <User className="w-3.5 h-3.5" />
            <span>GET TO KNOW ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About <span className="text-gradient-cyan">Dasari Sathwika</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            Combining analytical rigor with robust backend development to solve real-world problems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Philosophy & Highlights */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Core Philosophy Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-4"
            >
              <div className="flex items-center space-x-3">
                <div className="p-2.5 rounded-xl bg-cyan-950 border border-cyan-800 text-cyan-400">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">Core Engineering Philosophy</h3>
              </div>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed italic border-l-2 border-cyan-500 pl-4 py-1">
                &quot;{PORTFOLIO_DATA.personal.corePhilosophy}&quot;
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                As a Master of Computer Applications postgraduate with a strong background in Data Science, I bridge the gap between raw data insights and high-performance software applications. During my internship at EXIENT, I engineered spatial routing algorithms, integrated cloud observability stacks, and built REST APIs designed for real-time validation.
              </p>
            </motion.div>

            {/* Highlights Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass-card p-6 rounded-2xl border border-slate-800 space-y-4"
            >
              <h4 className="text-sm font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-2">
                <Sparkles className="w-4 h-4" /> Key Professional Highlights
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PORTFOLIO_DATA.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start space-x-2.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-300 leading-snug">{highlight}</span>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>

          {/* Right Column: Education & Certifications */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Education Stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-6"
            >
              <div className="flex items-center space-x-3 border-b border-slate-800 pb-4">
                <div className="p-2.5 rounded-xl bg-indigo-950 border border-indigo-800 text-indigo-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Education History</h3>
                  <span className="text-xs text-slate-400">Academic Background</span>
                </div>
              </div>

              <div className="space-y-6">
                {PORTFOLIO_DATA.education.map((edu, idx) => (
                  <div key={idx} className="relative pl-6 border-l-2 border-slate-800 space-y-1.5">
                    <span className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-cyan-400 border-2 border-slate-950" />
                    <div className="flex justify-between items-start">
                      <h4 className="text-sm font-bold text-white">{edu.degree}</h4>
                      <span className="text-xs text-cyan-400 font-mono font-medium">{edu.period}</span>
                    </div>
                    <p className="text-xs text-slate-300 font-medium">
                      {edu.institution} {edu.location ? `(${edu.location})` : ""}
                    </p>
                    {edu.grade && (
                      <span className="inline-block text-[11px] px-2 py-0.5 bg-emerald-950 text-emerald-300 font-semibold rounded border border-emerald-800/50">
                        {edu.grade}
                      </span>
                    )}
                    <ul className="text-xs text-slate-400 space-y-1 pt-1">
                      {edu.details.map((d, dIdx) => (
                        <li key={dIdx}>• {d}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Certifications Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="glass-card p-5 rounded-2xl border border-slate-800 flex items-center justify-between"
            >
              <div className="flex items-center space-x-3">
                <div className="p-2.5 rounded-xl bg-amber-950 border border-amber-800 text-amber-400">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Data Science Certification</h4>
                  <p className="text-xs text-slate-400">SETWIN (2022 - 2023)</p>
                </div>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 bg-amber-950/60 text-amber-300 border border-amber-800/50 rounded-full">
                Certified
              </span>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};
