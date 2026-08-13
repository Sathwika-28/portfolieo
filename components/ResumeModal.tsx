"use me";
"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, Mail, Phone, MapPin, ExternalLink, Briefcase, GraduationCap, Award, Code } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

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
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-slate-900 border border-slate-700/60 rounded-2xl shadow-2xl z-10 text-slate-200"
        >
          {/* Header Action Bar */}
          <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full bg-cyan-500 animate-pulse" />
              <h2 className="text-lg font-semibold text-white">Dasari Sathwika - Resume</h2>
            </div>
            <div className="flex items-center space-x-3">
              <button
                onClick={handlePrint}
                className="flex items-center space-x-2 px-3 py-1.5 text-xs sm:text-sm font-medium bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Print / Save PDF</span>
              </button>
              <button
                onClick={onClose}
                className="p-1.5 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Resume Body */}
          <div className="p-6 sm:p-10 space-y-8 bg-slate-950/60">
            {/* Header / Contact Info */}
            <div className="border-b border-slate-800 pb-6 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center sm:items-start gap-4">
              <div>
                <h1 className="text-3xl font-bold text-white tracking-wide">{PORTFOLIO_DATA.personal.name}</h1>
                <p className="text-cyan-400 font-medium text-lg mt-1">{PORTFOLIO_DATA.personal.title}</p>
                <p className="text-slate-400 text-sm max-w-lg mt-2">{PORTFOLIO_DATA.personal.bio}</p>
              </div>
              <div className="space-y-1.5 text-sm text-slate-300">
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <a href={`mailto:${PORTFOLIO_DATA.personal.email}`} className="hover:underline">
                    {PORTFOLIO_DATA.personal.email}
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <a href={`tel:${PORTFOLIO_DATA.personal.phone}`} className="hover:underline">
                    {PORTFOLIO_DATA.personal.phone}
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>{PORTFOLIO_DATA.personal.location}</span>
                </p>
              </div>
            </div>

            {/* Professional Summary */}
            <section className="space-y-2">
              <h3 className="text-xs font-bold text-cyan-400 uppercase tracking-widest flex items-center gap-2">
                <Briefcase className="w-4 h-4" /> Professional Summary
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                Motivated MCA postgraduate with a strong foundation in Data Science and hands-on internship experience. Skilled in
                Python, SQL, Machine Learning, Software Development Life Cycle (SDLC), and Data Visualization tools such as
                Power BI and Tableau. Seeking an entry-level position in a dynamic organization where I can apply my analytical and
                technical skills to contribute to innovative projects.
              </p>
            </section>

            {/* Experience */}
            <section className="space-y-4">
              <h3 className="text-xs font-bold text-cyan-400 uppercase tracking-widest flex items-center gap-2">
                <Briefcase className="w-4 h-4" /> Experience
              </h3>
              {PORTFOLIO_DATA.experience.map((exp, idx) => (
                <div key={idx} className="bg-slate-900/80 p-5 rounded-xl border border-slate-800 space-y-3">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center">
                    <div>
                      <h4 className="text-base font-bold text-white">{exp.role}</h4>
                      <p className="text-cyan-400 text-sm font-medium">{exp.company} • {exp.location}</p>
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 bg-cyan-950 text-cyan-300 rounded-full border border-cyan-800/50 w-fit mt-1 sm:mt-0">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="list-disc list-inside text-xs sm:text-sm text-slate-300 space-y-1.5 pl-1">
                    {exp.bulletPoints.map((point, pIdx) => (
                      <li key={pIdx} className="leading-relaxed">{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>

            {/* Projects */}
            <section className="space-y-4">
              <h3 className="text-xs font-bold text-cyan-400 uppercase tracking-widest flex items-center gap-2">
                <Code className="w-4 h-4" /> Featured Projects
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {PORTFOLIO_DATA.projects.map((proj) => (
                  <div key={proj.id} className="bg-slate-900/60 p-4 rounded-xl border border-slate-800 space-y-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-sm font-bold text-white flex items-center gap-2">
                          {proj.title}
                          <span className="text-xs font-normal text-slate-400 italic">({proj.category})</span>
                        </h4>
                        <p className="text-xs text-slate-300 mt-1">{proj.description}</p>
                      </div>
                      <span className="text-xs px-2 py-0.5 bg-emerald-950 text-emerald-300 rounded border border-emerald-800/50">
                        {proj.metrics}
                      </span>
                    </div>
                    <ul className="list-disc list-inside text-xs text-slate-400 space-y-1 pl-1">
                      {proj.highlights.map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Education & Certifications Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Education */}
              <section className="space-y-3">
                <h3 className="text-xs font-bold text-cyan-400 uppercase tracking-widest flex items-center gap-2">
                  <GraduationCap className="w-4 h-4" /> Education
                </h3>
                <div className="space-y-3">
                  {PORTFOLIO_DATA.education.map((edu, idx) => (
                    <div key={idx} className="bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                      <h4 className="text-sm font-bold text-white">{edu.degree}</h4>
                      <p className="text-xs text-cyan-400">{edu.institution} {edu.location ? `• ${edu.location}` : ""}</p>
                      <div className="flex justify-between items-center text-xs text-slate-400 mt-1">
                        <span>{edu.period}</span>
                        {edu.grade && <span className="font-semibold text-emerald-400">{edu.grade}</span>}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Technical Skills & Certifications */}
              <section className="space-y-3">
                <h3 className="text-xs font-bold text-cyan-400 uppercase tracking-widest flex items-center gap-2">
                  <Award className="w-4 h-4" /> Certifications & Skills
                </h3>
                <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800 space-y-3">
                  <div>
                    <span className="text-xs text-slate-400 font-semibold block uppercase">Certifications</span>
                    {PORTFOLIO_DATA.certifications.map((c, i) => (
                      <div key={i} className="text-xs font-medium text-white mt-1">
                        • {c.title} ({c.issuer}, {c.period})
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-slate-800 pt-3">
                    <span className="text-xs text-slate-400 font-semibold block uppercase mb-1.5">Core Technical Stack</span>
                    <div className="flex flex-wrap gap-1.5">
                      {["Python", "SQL", "Flask", "MySQL", "PostgreSQL", "Machine Learning", "OpenCV", "TensorFlow", "VictoriaMetrics", "Grafana", "Postman", "Power BI", "Git"].map((tech, i) => (
                        <span key={i} className="text-[11px] px-2 py-0.5 bg-slate-800 text-slate-300 rounded border border-slate-700">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
