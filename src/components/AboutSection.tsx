import React from 'react';
import {
  FileText,
  GitCommit,
  History,
  GraduationCap,
  Briefcase,
  CheckCircle,
  HelpCircle,
  AlertTriangle,
  Award,
  Stethoscope,
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="relative py-24 md:py-32 bg-[#0B1220] text-slate-100 border-b border-slate-800/80 scroll-mt-20 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/25 text-teal-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <span>About InjuryScene Nexus</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.15]">
            Keep the original event connected to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300">
              everything learned later.
            </span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Injury evidence often sits across multiple systems. InjuryScene Nexus
            proposes organising it around one persistent event identity so teams
            can review what happened, what was initially uncertain and how later
            evidence changed the interpretation.
          </p>
        </div>

        {/* 3 Concise Cards: Problem & Solution in Modern Bento Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {/* Card 1: Fragmented evidence */}
          <div className="group relative bg-[#0F172A]/90 hover:bg-[#131D33] border border-slate-800/80 hover:border-teal-500/40 rounded-2xl p-7 transition-all duration-300 shadow-xl hover:shadow-teal-950/20 flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-24 h-24 bg-teal-500/5 rounded-full blur-xl pointer-events-none group-hover:bg-teal-500/10 transition-colors" />
            <div>
              <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-teal-400 mb-6 group-hover:scale-105 group-hover:border-teal-400/50 transition-all">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                1. Fragmented evidence
              </h3>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                Notes, footage, performance context and diagnostic information can
                sit in separate workflows across multiple standalone tools.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800/80 text-xs font-mono text-teal-400/80 flex items-center gap-1.5">
              <span>Isolated data silos</span>
            </div>
          </div>

          {/* Card 2: Changing knowledge */}
          <div className="group relative bg-[#0F172A]/90 hover:bg-[#131D33] border border-slate-800/80 hover:border-cyan-500/40 rounded-2xl p-7 transition-all duration-300 shadow-xl hover:shadow-cyan-950/20 flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-full blur-xl pointer-events-none group-hover:bg-cyan-500/10 transition-colors" />
            <div>
              <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-105 group-hover:border-cyan-400/50 transition-all">
                <GitCommit className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                2. Changing knowledge
              </h3>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                Initial observations and later confirmation need to remain
                distinguishable without silently overwriting earlier pitch-side findings.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800/80 text-xs font-mono text-cyan-400/80 flex items-center gap-1.5">
              <span>Non-destructive history</span>
            </div>
          </div>

          {/* Card 3: Traceable review */}
          <div className="group relative bg-[#0F172A]/90 hover:bg-[#131D33] border border-slate-800/80 hover:border-teal-500/40 rounded-2xl p-7 transition-all duration-300 shadow-xl hover:shadow-teal-950/20 flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-24 h-24 bg-teal-500/5 rounded-full blur-xl pointer-events-none group-hover:bg-teal-500/10 transition-colors" />
            <div>
              <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-teal-400 mb-6 group-hover:scale-105 group-hover:border-teal-400/50 transition-all">
                <History className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                3. Traceable review
              </h3>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                A structured event history can support more consistent
                reconstruction, clinical audits, and internal squad health governance.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800/80 text-xs font-mono text-teal-400/80 flex items-center gap-1.5">
              <span>Audit-ready timeline</span>
            </div>
          </div>
        </div>

        {/* Technical Terms Explained */}
        <div className="mt-14 bg-gradient-to-br from-[#0F172A] to-[#0A101D] rounded-2xl p-7 sm:p-9 border border-slate-800/90 text-left shadow-2xl">
          <div className="flex items-center gap-2.5 mb-6 pb-4 border-b border-slate-800">
            <HelpCircle className="w-5 h-5 text-teal-400" />
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-200">
              Technical Terms in Clear Language
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#141E33]/60 p-5 rounded-xl border border-slate-800 hover:border-teal-500/30 transition-colors">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-400">
                InjuryScene
              </span>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                The unique record connecting an event and its evidence across all stages.
              </p>
            </div>

            <div className="bg-[#141E33]/60 p-5 rounded-xl border border-slate-800 hover:border-teal-500/30 transition-colors">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-400">
                Provenance
              </span>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                Where evidence came from, who recorded it and the exact timestamp of capture.
              </p>
            </div>

            <div className="bg-[#141E33]/60 p-5 rounded-xl border border-slate-800 hover:border-teal-500/30 transition-colors">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-400">
                Evidence Graph
              </span>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                The relationships between the event, evidence, interpretations and outcomes.
              </p>
            </div>

            <div className="bg-[#141E33]/60 p-5 rounded-xl border border-slate-800 hover:border-teal-500/30 transition-colors flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-teal-400">
                  Digital Injury Twin
                </span>
                <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                  The evolving digital representation of an event and its evidence history.
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-slate-800 text-[11px] font-medium text-amber-300/90 flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Not a simulated body or 3D model</span>
              </div>
            </div>
          </div>
        </div>

        {/* Founder Card - Completely removed the founder photo/avatar box as instructed */}
        <div className="mt-14 relative overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#111C33] to-[#0A101D] rounded-2xl border border-slate-700/80 shadow-2xl p-8 sm:p-10 text-left">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative space-y-6">
            {/* Header with Title and Role */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-800 gap-3">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/15 border border-teal-500/30 text-teal-300 text-xs font-semibold mb-2">
                  <Stethoscope className="w-3.5 h-3.5 text-teal-400" />
                  <span>Clinical Founder</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Nabi Jalil
                </h3>
                <p className="text-sm sm:text-base font-semibold text-teal-400 mt-0.5">
                  Founder | Sports Physiotherapist
                </p>
              </div>

              {/* Verified Clinical Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900/80 border border-slate-700/70 text-slate-300 text-xs font-medium self-start sm:self-auto">
                <Award className="w-4 h-4 text-teal-400" />
                <span>Sports Medicine &amp; Physiotherapy</span>
              </div>
            </div>

            {/* Founder Bio Copy */}
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
              Nabi Jalil brings a sports-medicine and physiotherapy background to the
              development of InjuryScene Nexus. His supplied professional profile includes a
              Master’s in Sports Medicine from the University of Chester, a physiotherapy
              qualification from Khyber Medical University, more than two years of clinical
              experience and first-team physiotherapy experience at Nelson Football Club.
            </p>

            {/* Clinical & Pitch-Side Competencies Grid */}
            <div className="pt-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Clinical &amp; Pitch-Side Competencies
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs sm:text-sm text-slate-300">
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                  <CheckCircle className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Immediate injury assessment</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                  <CheckCircle className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Pitch-side emergency &amp; trauma care</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                  <CheckCircle className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Rehabilitation planning</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                  <CheckCircle className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Return-to-play review</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 sm:col-span-2">
                  <CheckCircle className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Advanced &amp; intermediate trauma medical management in football</span>
                </div>
              </div>
            </div>

            {/* Academic & Professional Credentials Footer */}
            <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center gap-6 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-teal-400" />
                <span>MSc Sports Medicine, University of Chester</span>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-cyan-400" />
                <span>First-Team Physio, Nelson Football Club</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
