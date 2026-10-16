import React from 'react';
import {
  Clock,
  Layers,
  Search,
  CheckCircle,
  TrendingUp,
  Stethoscope,
  Video,
  UserCheck,
  HeartPulse,
  BookOpen,
  Info,
  Sparkles,
} from 'lucide-react';

const steps = [
  {
    num: '01',
    title: '1. Capture',
    desc: 'An authorised clinician creates the InjuryScene and records the essential event details and immediate observations.',
    icon: Stethoscope,
    tag: 'Contemporaneous Origin',
  },
  {
    num: '02',
    title: '2. Connect',
    desc: 'Relevant video, athlete reports, clinical notes and permitted contextual information are linked to the same scene.',
    icon: Video,
    tag: 'Multi-Modal Linkage',
  },
  {
    num: '03',
    title: '3. Align',
    desc: 'Evidence is organised around the event’s timestamp and context, with missing information recorded explicitly.',
    icon: Clock,
    tag: 'Temporal Baseline',
  },
  {
    num: '04',
    title: '4. Review',
    desc: 'Evidence states remain distinct. Discrepancies are flagged for authorised human review rather than automatically resolved as clinical truth.',
    icon: Search,
    tag: 'Clinical Oversight',
  },
  {
    num: '05',
    title: '5. Follow',
    desc: 'Later diagnostic evidence, rehabilitation milestones and return-to-play outcomes are appended without erasing the original record.',
    icon: TrendingUp,
    tag: 'Append-Only Timeline',
  },
  {
    num: '06',
    title: '6. Audit and Learn',
    desc: 'Completed scenes support structured review and approved anonymised or aggregate research.',
    icon: BookOpen,
    tag: 'Governed Analysis',
  },
];

const roles = [
  {
    role: 'Physiotherapist',
    action: 'Initiates the scene',
    icon: Stethoscope,
  },
  {
    role: 'Performance analyst',
    action: 'Contributes footage and context',
    icon: Video,
  },
  {
    role: 'Medical lead',
    action: 'Reviews clinical evidence',
    icon: UserCheck,
  },
  {
    role: 'Rehabilitation team',
    action: 'Adds recovery milestones',
    icon: HeartPulse,
  },
  {
    role: 'Research partner',
    action: 'Receives approved de-identified outputs',
    icon: Layers,
  },
];

export const HowItWorksSection: React.FC = () => {
  return (
    <section
      id="how-it-works"
      className="relative py-24 md:py-32 bg-[#0B1220] text-slate-100 border-b border-slate-800/80 scroll-mt-20 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-teal-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/25 text-teal-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-teal-400" />
            <span>Workflow &amp; Lifecycle</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.15]">
            From the first observation to the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300">
              final outcome.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            A continuous, non-destructive evidence lifecycle designed around pitch-side and clinical realities.
          </p>
        </div>

        {/* 6 Numbered Steps Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="group relative bg-[#0F172A]/90 hover:bg-[#121C30] border border-slate-800/90 hover:border-teal-500/40 rounded-2xl p-7 shadow-xl hover:shadow-teal-950/20 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-3xl font-black text-teal-400/40 group-hover:text-teal-400 transition-colors">
                      {step.num}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-teal-400 group-hover:scale-105 group-hover:border-teal-400/50 transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-300 leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="text-teal-400 font-mono font-medium">
                    {step.tag}
                  </span>
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <CheckCircle className="w-3.5 h-3.5 text-teal-400" />
                    <span>Traceable</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Collaborative Multi-Disciplinary Role Strip */}
        <div className="mt-14 bg-gradient-to-br from-[#0F172A] to-[#0A101D] rounded-2xl border border-slate-800/90 p-7 sm:p-9 text-left shadow-2xl">
          <div className="pb-5 border-b border-slate-800">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Multi-Disciplinary Team Contribution Strip
            </h3>
            <p className="text-base sm:text-lg font-bold text-white mt-1">
              Collaborative input across the performance and clinical spectrum
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {roles.map((item, idx) => {
              const RoleIcon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#141E33]/70 border border-slate-800/90 hover:border-teal-500/30 transition-colors flex flex-col justify-between"
                >
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <div className="w-8 h-8 rounded-lg bg-teal-500/10 border border-teal-500/20 text-teal-400 flex items-center justify-center shrink-0">
                      <RoleIcon className="w-4 h-4" />
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-white leading-tight">
                      {item.role}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    {item.action}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Open Scene Clarification Notice */}
          <div className="mt-7 pt-5 border-t border-slate-800 flex items-start sm:items-center gap-3.5 text-xs sm:text-sm text-slate-300 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
            <Info className="w-5 h-5 text-teal-400 shrink-0 mt-0.5 sm:mt-0" />
            <p className="leading-relaxed">
              <strong className="font-semibold text-teal-300">
                Persistent event window:
              </strong>{' '}
              InjuryScenes can remain open as later medical findings, radiology
              reports, surgical notes and progressive rehabilitation milestones
              arrive over days or weeks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
