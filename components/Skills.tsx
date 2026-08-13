"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Code2, Server, BrainCircuit, Database, Cpu, Layers } from "lucide-react";
import { PORTFOLIO_DATA, SkillCategory } from "@/data/portfolioData";

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<number>(0);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Code2": return <Code2 className="w-5 h-5" />;
      case "Server": return <Server className="w-5 h-5" />;
      case "BrainCircuit": return <BrainCircuit className="w-5 h-5" />;
      case "Database": return <Database className="w-5 h-5" />;
      default: return <Cpu className="w-5 h-5" />;
    }
  };

  return (
    <section id="skills" className="py-20 relative bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-purple-950/60 border border-purple-800/50 text-xs font-semibold text-purple-300">
            <Layers className="w-3.5 h-3.5" />
            <span>TECHNICAL PROFICIENCY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & <span className="text-gradient-purple">Technologies</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            Categorized technical stack spanning programming languages, backend frameworks, data science models, and cloud observability tools.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
          {PORTFOLIO_DATA.skillCategories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(idx)}
              className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === idx
                  ? "bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/20 scale-105"
                  : "bg-slate-900/80 hover:bg-slate-800 text-slate-400 border border-slate-800"
              }`}
            >
              {getIcon(cat.iconName)}
              <span>{cat.title}</span>
            </button>
          ))}
        </div>

        {/* Selected Category Skill Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 max-w-4xl mx-auto"
        >
          {PORTFOLIO_DATA.skillCategories[activeCategory].skills.map((skill, idx) => (
            <div
              key={idx}
              className="glass-card p-5 rounded-2xl border border-slate-800 space-y-3 hover:border-cyan-500/30 transition-colors"
            >
              <div className="flex justify-between items-center">
                <span className="text-sm sm:text-base font-bold text-white">{skill.name}</span>
                {skill.highlight && (
                  <span className="text-[11px] px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-300 font-mono border border-cyan-800/50">
                    {skill.highlight}
                  </span>
                )}
              </div>

              {/* Progress bar */}
              <div className="space-y-1">
                <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.8, delay: idx * 0.1 }}
                    className="h-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 rounded-full"
                  />
                </div>
                <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                  <span>Proficiency</span>
                  <span>{skill.level}%</span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Software Engineering Competencies Footer */}
        <div className="mt-12 max-w-4xl mx-auto glass-card p-5 rounded-2xl border border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">Software Engineering Practices</h4>
            <p className="text-xs text-slate-400">Unit Testing, Debugging, Technical Documentation, Requirement Analysis, SDLC</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {["Unit Testing", "API Validation", "Git / GitHub", "Postman", "VS Code"].map((tool, i) => (
              <span key={i} className="text-xs px-2.5 py-1 bg-slate-900 text-slate-300 rounded-lg border border-slate-800 font-medium">
                {tool}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
