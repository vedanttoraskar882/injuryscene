import React, { useState } from 'react';
import {
  ArrowRight,
  Shield,
  FileCheck,
  TrendingUp,
  Tag,
  Clock,
  Layers,
  Sparkles,
  ChevronRight,
  Database,
  Lock,
} from 'lucide-react';

interface HeroSectionProps {
  onRequestPilot: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onRequestPilot }) => {
  const [activeNode, setActiveNode] = useState<number>(0);

  const previewNodes = [
    {
      label: 'Initial Observation',
      badge: 'Observed',
      badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
      nodeColor: 'border-amber-400 bg-amber-500/10 text-amber-400',
      icon: Clock,
      detail: 'Change of direction and fall',
      source: 'Pitch-side Staff',
      timestamp: 'T+00:00:00',
      note: 'Immediate video time-stamped and field coordinates indexed.',
    },
    {
      label: 'Athlete Report',
      badge: 'Reported',
      badgeColor: 'bg-blue-500/20 text-blue-300 border-blue-500/40',
      nodeColor: 'border-blue-400 bg-blue-500/10 text-blue-400',
      icon: Tag,
      detail: 'Posterior thigh discomfort',
      source: 'Player Assessment',
      timestamp: 'T+00:05:00',
      note: 'Subjective pain score and symptom onset recorded by medical team.',
    },
    {
      label: 'Clinical Interpretation',
      badge: 'Hypothesis',
      badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-500/40',
      nodeColor: 'border-purple-400 bg-purple-500/10 text-purple-400',
      icon: Layers,
      detail: 'Provisional hypothesis',
      source: 'Lead Clinician',
      timestamp: 'T+00:15:00',
      note: 'Differential diagnosis documented without overwriting baseline symptoms.',
    },
    {
      label: 'Later Evidence',
      badge: 'Confirmed',
      badgeColor: 'bg-teal-500/20 text-teal-300 border-teal-500/40',
      nodeColor: 'border-teal-400 bg-teal-500/10 text-teal-400',
      icon: FileCheck,
      detail: 'Diagnostic report added',
      source: 'Investigation Report',
      timestamp: 'Day 2',
      note: 'Radiological findings appended with immutable origin provenance.',
    },
    {
      label: 'Outcome',
      badge: 'Outcome',
      badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
      nodeColor: 'border-emerald-400 bg-emerald-500/10 text-emerald-400',
      icon: TrendingUp,
      detail: 'Rehabilitation milestone recorded',
      source: 'Rehab Protocol',
      timestamp: 'Week 3',
      note: 'Criteria-based return-to-play progression linked to original event.',
    },
  ];

  return (
    <section
      id="home"
      className="relative pt-12 pb-24 md:py-32 overflow-hidden bg-[#070B14] border-b border-slate-800/80 scroll-mt-20"
    >
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.18]"
        aria-hidden="true"
      >
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
        >
          <defs>
            <pattern
              id="hero-grid-pattern"
              width="54"
              height="54"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 54 0 L 0 0 0 54"
                fill="none"
                stroke="#38BDF8"
                strokeWidth="0.6"
                strokeOpacity="0.3"
              />
              <circle cx="0" cy="0" r="1.5" fill="#14B8A6" fillOpacity="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid-pattern)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline and Positioning */}
          <div className="lg:col-span-7 space-y-7 text-left">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-teal-500/30 text-teal-300 text-xs sm:text-sm font-semibold tracking-wide shadow-inner">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
              <span>Sports injury evidence, connected</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.12]">
              One injury event.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-teal-300 to-cyan-400">
                A complete evidence history.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-slate-300 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl font-normal">
              InjuryScene Nexus is being developed to help sports medical teams
              connect injury observations, video, clinical evidence and recovery
              milestones in one traceable event history—preserving what was known
              at each stage.
            </p>

            {/* Primary & Secondary Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onRequestPilot}
                className="group inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl font-bold text-sm text-[#070B14] bg-gradient-to-r from-teal-400 via-teal-300 to-cyan-400 hover:from-teal-300 hover:to-cyan-300 transition-all shadow-xl shadow-teal-500/25 hover:shadow-teal-500/40 hover:scale-[1.02] active:scale-[0.98] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
              >
                <span>Request a Pilot</span>
                <ArrowRight className="w-4 h-4 text-[#070B14] group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#platform"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 transition-all shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
              >
                <span>Explore the Platform</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
            </div>

            {/* Three Concise Supporting Points */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div className="flex items-start gap-3.5 p-3 rounded-xl bg-slate-900/40 border border-slate-800/60">
                <div className="p-2.5 rounded-lg bg-teal-500/10 border border-teal-500/20 text-teal-400 shrink-0">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-slate-100 uppercase tracking-wider">
                    Capture the event.
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Contemporaneous pitch-side context.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3 rounded-xl bg-slate-900/40 border border-slate-800/60">
                <div className="p-2.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 shrink-0">
                  <FileCheck className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-slate-100 uppercase tracking-wider">
                    Preserve the evidence.
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Traceable provenance &amp; states.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3 rounded-xl bg-slate-900/40 border border-slate-800/60">
                <div className="p-2.5 rounded-lg bg-teal-500/10 border border-teal-500/20 text-teal-400 shrink-0">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-slate-100 uppercase tracking-wider">
                    Follow the outcome.
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Milestones and return-to-play.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Illustrative Evidence Timeline Preview */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-gradient-to-b from-[#111C33] to-[#0D1526] border border-slate-700/80 shadow-2xl p-6 sm:p-7 text-left transition-all">
              {/* Card Header & Fictional Data Notice */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-800 gap-2">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-teal-400 tracking-wider bg-teal-950/80 border border-teal-800/90 px-2.5 py-0.5 rounded-md">
                      Scene ID: ISN-DEMO-001
                    </span>
                    <span className="text-xs text-slate-300 font-medium">
                      Football training
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-slate-200 mt-1.5 flex items-center gap-1.5">
                    <Database className="w-3.5 h-3.5 text-teal-400" />
                    <span>Evidence Graph Progression</span>
                  </p>
                </div>
                {/* Mandatory Disclaimer Label */}
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[11px] font-semibold self-start sm:self-auto">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Illustrative workflow — fictional data</span>
                </div>
              </div>

              {/* Five Distinct Evidence State Badges */}
              <div className="py-3.5 border-b border-slate-800/80 flex flex-wrap items-center gap-1.5 text-[10px] font-bold">
                <span className="text-slate-400 mr-1 uppercase tracking-wider">
                  States:
                </span>
                <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40">
                  Observed
                </span>
                <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/40">
                  Reported
                </span>
                <span className="px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/40">
                  Hypothesis
                </span>
                <span className="px-2 py-0.5 rounded bg-teal-500/20 text-teal-300 border border-teal-500/40">
                  Confirmed
                </span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                  Outcome
                </span>
              </div>

              {/* Interactive Timeline Nodes List */}
              <div className="mt-4 space-y-3 relative before:absolute before:top-2 before:bottom-2 before:left-[17px] before:w-0.5 before:bg-slate-800">
                {previewNodes.map((node, index) => {
                  const NodeIcon = node.icon;
                  const isActive = activeNode === index;
                  return (
                    <div
                      key={node.label}
                      onClick={() => setActiveNode(index)}
                      className={`relative flex items-start gap-3 pl-1 cursor-pointer group transition-all`}
                    >
                      <div
                        className={`relative z-10 w-8 h-8 rounded-full border-2 flex items-center justify-center shrink-0 transition-transform ${
                          isActive
                            ? `${node.nodeColor} scale-110 shadow-lg`
                            : 'border-slate-700 bg-slate-900 text-slate-400 group-hover:border-slate-500'
                        }`}
                      >
                        <NodeIcon className="w-4 h-4" />
                      </div>
                      <div
                        className={`flex-1 border p-3 rounded-xl transition-all ${
                          isActive
                            ? 'bg-slate-900/90 border-teal-500/40 shadow-md shadow-teal-950/20'
                            : 'bg-slate-900/50 border-slate-800/80 hover:border-slate-700'
                        }`}
                      >
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-bold text-slate-100">
                            {node.label}
                          </span>
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] font-semibold border ${node.badgeColor}`}
                          >
                            {node.badge}
                          </span>
                        </div>
                        <p className="text-xs text-slate-300 mt-1 font-medium">
                          {node.detail}
                        </p>
                        {isActive && (
                          <p className="text-[11px] text-teal-300/90 mt-1.5 pt-1.5 border-t border-slate-800/80 leading-normal">
                            {node.note}
                          </p>
                        )}
                        <div className="mt-2 flex items-center gap-2 text-[10px] text-slate-400 font-mono">
                          <span>Source: {node.source}</span>
                          <span>•</span>
                          <span>{node.timestamp}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Informative footer */}
              <div className="mt-5 pt-3.5 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-teal-400" />
                  <span>Provenance preserved at each node</span>
                </span>
                <span className="font-mono text-teal-400 font-semibold bg-teal-950/60 px-2 py-0.5 rounded border border-teal-800/70">
                  Append-Only
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
