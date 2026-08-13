"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2, Github, Linkedin, Sparkles } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate network submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 relative bg-slate-950/90 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/50 text-xs font-semibold text-cyan-300">
            <Mail className="w-3.5 h-3.5" />
            <span>LET&apos;S CONNECT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Get In <span className="text-gradient-cyan">Touch</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            Whether you have a job opportunity, a project proposal, or a technical inquiry, feel free to send a message!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-6">
              <h3 className="text-xl font-bold text-white">Contact Information</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                I am actively seeking software engineering, backend development, and data science roles. Reach out via form or direct email.
              </p>

              <div className="space-y-4 pt-2">
                
                {/* Email */}
                <a
                  href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                  className="flex items-center space-x-4 p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-colors group"
                >
                  <div className="p-3 rounded-xl bg-cyan-950 text-cyan-400 border border-cyan-800/60 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-medium block uppercase">Email Address</span>
                    <span className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                      {PORTFOLIO_DATA.personal.email}
                    </span>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href={`tel:${PORTFOLIO_DATA.personal.phone}`}
                  className="flex items-center space-x-4 p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-colors group"
                >
                  <div className="p-3 rounded-xl bg-indigo-950 text-indigo-400 border border-indigo-800/60 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-medium block uppercase">Phone Number</span>
                    <span className="text-sm font-semibold text-white group-hover:text-indigo-300 transition-colors">
                      {PORTFOLIO_DATA.personal.phone}
                    </span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center space-x-4 p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="p-3 rounded-xl bg-emerald-950 text-emerald-400 border border-emerald-800/60">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-medium block uppercase">Location</span>
                    <span className="text-sm font-semibold text-white">{PORTFOLIO_DATA.personal.location}</span>
                  </div>
                </div>

              </div>

              {/* Social Links Bar */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-semibold uppercase">Follow & Connect</span>
                <div className="flex space-x-2">
                  <a
                    href={PORTFOLIO_DATA.personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-cyan-400 rounded-xl border border-slate-800 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={PORTFOLIO_DATA.personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-cyan-400 rounded-xl border border-slate-800 transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-6">
              
              <div>
                <h3 className="text-xl font-bold text-white">Send Me a Message</h3>
                <p className="text-xs text-slate-400 mt-1">Fill out the form below and I will respond promptly.</p>
              </div>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-emerald-950/80 border border-emerald-700/60 rounded-xl text-emerald-300 text-sm flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span>Thank you! Your message has been sent successfully. I will get back to you soon.</span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Name Input */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sathwika"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors placeholder:text-slate-600"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">Your Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors placeholder:text-slate-600"
                    />
                  </div>

                </div>

                {/* Subject Input */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">Subject</label>
                  <input
                    type="text"
                    placeholder="e.g. Software Engineer Opportunity"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors placeholder:text-slate-600"
                  />
                </div>

                {/* Message Input */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">Your Message *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Type your message here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors placeholder:text-slate-600 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center space-x-2 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-sm rounded-xl transition-all shadow-lg shadow-cyan-500/20 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">Sending message...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
