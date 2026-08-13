"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2, Building2, Code2 } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/50 text-xs font-semibold text-cyan-300">
            <Briefcase className="w-3.5 h-3.5" />
            <span>WORK HISTORY & ROLES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional <span className="text-gradient-cyan">Experience</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            Practical software engineering experience developing spatial web applications, REST APIs, and observability dashboards.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="max-w-4xl mx-auto relative pl-6 sm:pl-8 border-l-2 border-slate-800 space-y-12">
          
          {PORTFOLIO_DATA.experience.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative group"
            >
              {/* Timeline Indicator Badge */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-cyan-500 border-4 border-slate-950 flex items-center justify-center shadow-lg shadow-cyan-500/50 group-hover:scale-125 transition-transform" />

              {/* Experience Card */}
              <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-6 hover:border-cyan-500/30 transition-all">
                
                {/* Header Meta */}
                <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3 border-b border-slate-800 pb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800/50">
                        {exp.type}
                      </span>
                    </div>
                    <p className="text-cyan-400 font-semibold text-sm flex items-center gap-1.5 mt-1">
                      <Building2 className="w-4 h-4" />
                      <span>{exp.company}</span>
                      <span className="text-slate-600">•</span>
                      <span className="text-slate-400 font-normal text-xs flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-mono text-cyan-300 bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-800 w-fit">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Role Description */}
                <p className="text-slate-300 text-sm leading-relaxed">
                  {exp.description}
                </p>

                {/* Key Accomplishments Bullet Points */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400" /> Key Impact & Technical Deliverables
                  </h4>
                  <ul className="grid grid-cols-1 gap-2.5">
                    {exp.bulletPoints.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 bg-slate-900/40 p-3 rounded-xl border border-slate-800/60">
                        <span className="w-2 h-2 rounded-full bg-cyan-400 shrink-0 mt-1.5" />
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Badges */}
                <div className="pt-2 border-t border-slate-800 flex flex-wrap gap-2 items-center">
                  <span className="text-xs text-slate-400 font-semibold flex items-center gap-1 mr-2">
                    <Code2 className="w-3.5 h-3.5 text-cyan-400" /> Technologies Applied:
                  </span>
                  {exp.skillsUsed.map((skill, sIdx) => (
                    <span key={sIdx} className="text-xs px-2.5 py-1 bg-slate-900 text-cyan-300 rounded-lg border border-slate-800 font-medium">
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};
