"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, CheckCircle2, Cpu, BarChart3, Layers } from "lucide-react";
import { Project } from "@/data/portfolioData";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl z-10 overflow-hidden text-slate-200"
        >
          {/* Header gradient banner */}
          <div className="h-32 bg-gradient-to-r from-cyan-900/60 via-indigo-900/40 to-slate-900 p-6 flex flex-col justify-end relative border-b border-slate-800">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 bg-slate-950/60 hover:bg-slate-800 text-slate-400 hover:text-white rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-semibold px-2.5 py-0.5 bg-cyan-950/80 text-cyan-300 rounded-full border border-cyan-700/50 w-fit mb-2">
              {project.category}
            </span>
            <h2 className="text-2xl font-bold text-white drop-shadow-sm">{project.title}</h2>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 space-y-6">
            {/* Metric Banner */}
            <div className="flex items-center gap-3 p-3.5 bg-slate-950/80 border border-cyan-900/40 rounded-xl">
              <BarChart3 className="w-5 h-5 text-cyan-400 shrink-0" />
              <div>
                <span className="text-xs text-slate-400 font-medium block">Key Impact & Metric</span>
                <span className="text-sm font-bold text-cyan-300">{project.metrics}</span>
              </div>
            </div>

            {/* Overview */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                <Layers className="w-4 h-4 text-cyan-400" /> Project Architecture & Overview
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">{project.fullDescription}</p>
            </div>

            {/* Key Accomplishments */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Technical Deliverables
              </h3>
              <ul className="space-y-2">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 bg-slate-950/50 p-2.5 rounded-lg border border-slate-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-1.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                <Cpu className="w-4 h-4 text-purple-400" /> Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-xs px-3 py-1 bg-slate-800 text-cyan-300 rounded-lg border border-slate-700/80 font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Links CTA */}
            <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-end gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-slate-800 hover:bg-slate-700 text-white rounded-xl transition-colors border border-slate-700"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Repository</span>
              </a>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-cyan-600 hover:bg-cyan-500 text-white rounded-xl transition-colors shadow-lg shadow-cyan-600/20"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
