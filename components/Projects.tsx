"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FolderGit2, ExternalLink, Github, ArrowUpRight, Sparkles, BarChart, Layers } from "lucide-react";
import { PORTFOLIO_DATA, Project } from "@/data/portfolioData";

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", "Full Stack & GIS", "Machine Learning & IoT", "Computer Vision & AI", "Backend & REST API"];

  const filteredProjects = filter === "All"
    ? PORTFOLIO_DATA.projects
    : PORTFOLIO_DATA.projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 relative bg-slate-950/80 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/50 text-xs font-semibold text-emerald-300">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured <span className="text-gradient-gold">Projects</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            Practical software engineering and data science projects built with Python, Machine Learning, GIS APIs, and REST standards.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                filter === cat
                  ? "bg-gradient-to-r from-emerald-500 to-cyan-600 text-white shadow-lg shadow-emerald-500/20 scale-105"
                  : "bg-slate-900/80 hover:bg-slate-800 text-slate-400 border border-slate-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="glass-card rounded-2xl border border-slate-800/80 overflow-hidden flex flex-col justify-between hover:border-cyan-500/40 transition-all hover:-translate-y-1.5 shadow-xl group"
            >
              <div className="p-6 sm:p-8 space-y-4">
                
                {/* Header Row */}
                <div className="flex items-start justify-between gap-3">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-cyan-950/80 text-cyan-300 border border-cyan-800/50">
                    {project.category}
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-950/80 text-emerald-300 border border-emerald-800/50 flex items-center gap-1">
                    <BarChart className="w-3 h-3" />
                    {project.metrics}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Bullet Highlights */}
                <div className="space-y-1.5 pt-1">
                  {project.highlights.slice(0, 2).map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-1.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] px-2.5 py-0.5 rounded-md bg-slate-900 text-slate-300 border border-slate-800 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>

              {/* Card Footer CTAs */}
              <div className="px-6 py-4 bg-slate-950/90 border-t border-slate-800/80 flex items-center justify-between">
                <button
                  onClick={() => onSelectProject(project)}
                  className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors"
                >
                  <span>View Details</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <div className="flex items-center space-x-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-slate-400 hover:text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors border border-slate-800"
                    title="View Source Code"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-cyan-400 hover:text-white bg-slate-900 hover:bg-cyan-600 rounded-lg transition-colors border border-slate-800"
                    title="View Live Demo"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
