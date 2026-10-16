import React, { useState } from 'react';
import {
  FilePlus,
  Link2,
  CalendarClock,
  Layers,
  GitCompare,
  Network,
  HelpCircle,
  Search,
  BarChart3,
  Lock,
  Hash,
  Activity,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Sparkles,
} from 'lucide-react';

export const PlatformSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'pilot' | 'planned'>('pilot');

  return (
    <section
      id="platform"
      className="relative py-24 md:py-32 bg-[#070B14] text-slate-100 border-b border-slate-800/80 scroll-mt-20 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-800/80 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Architecture &amp; Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.15]">
            An evidence layer built around the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300">
              InjuryScene.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            One shared event identity connects the evidence, its history and the
            eventual outcome.
          </p>

          {/* Interactive Phase Filter Buttons */}
          <div className="mt-8 flex items-center gap-3">
            <button
              type="button"
              onClick={() => setActiveTab('pilot')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'pilot'
                  ? 'bg-teal-400 text-[#070B14] shadow-lg shadow-teal-500/20'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              Initial Pilot Scope (Phase 1)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('planned')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'planned'
                  ? 'bg-cyan-400 text-[#070B14] shadow-lg shadow-cyan-500/20'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              Planned Expansion (Phase 2+)
            </button>
          </div>
        </div>

        {/* Section A: INITIAL PILOT SCOPE */}
        {activeTab === 'pilot' && (
          <div className="mt-12 text-left animate-fadeIn">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-800 gap-2">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-teal-400">
                  Phase 1 Delivery
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-0.5">
                  Initial Pilot Scope
                </h3>
              </div>
              <span className="text-xs text-teal-300 bg-teal-950/60 border border-teal-800/80 px-3.5 py-1.5 rounded-full self-start sm:self-auto font-medium">
                Intended pilot capabilities for partner club validation
              </span>
            </div>

            {/* 4 Core Module Cards */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* 1. Event Capture */}
              <div className="bg-[#0D1526] border border-slate-700/80 rounded-2xl p-6 sm:p-7 shadow-xl hover:border-teal-500/50 transition-all flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/25 text-teal-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <FilePlus className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white tracking-tight">
                    1. Event Capture
                  </h4>
                  <p className="mt-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Creates a unique InjuryScene and records essential athlete,
                    event-time and match or training context.
                  </p>
                </div>
                <div className="mt-6 pt-3.5 border-t border-slate-800 text-[11px] font-mono text-teal-400 font-medium">
                  ID Generation &amp; Baseline Metadata
                </div>
              </div>

              {/* 2. Evidence Ingestion */}
              <div className="bg-[#0D1526] border border-slate-700/80 rounded-2xl p-6 sm:p-7 shadow-xl hover:border-teal-500/50 transition-all flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/25 text-teal-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <Link2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white tracking-tight">
                    2. Evidence Ingestion
                  </h4>
                  <p className="mt-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Links video clips, clinician observations, athlete reports and
                    permitted contextual information.
                  </p>
                </div>
                <div className="mt-6 pt-3.5 border-t border-slate-800 text-[11px] font-mono text-teal-400 font-medium">
                  Multi-Modal Source Ingestion
                </div>
              </div>

              {/* 3. Temporal Alignment */}
              <div className="bg-[#0D1526] border border-slate-700/80 rounded-2xl p-6 sm:p-7 shadow-xl hover:border-teal-500/50 transition-all flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/25 text-teal-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <CalendarClock className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white tracking-tight">
                    3. Temporal Alignment
                  </h4>
                  <p className="mt-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Organises available evidence around a common event timeline and
                    evidence window.
                  </p>
                </div>
                <div className="mt-6 pt-3.5 border-t border-slate-800 text-[11px] font-mono text-teal-400 font-medium">
                  Contemporaneous Chronology
                </div>
              </div>

              {/* 4. Evidence State Engine */}
              <div className="bg-[#0D1526] border border-slate-700/80 rounded-2xl p-6 sm:p-7 shadow-xl hover:border-teal-500/50 transition-all flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/25 text-teal-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <Layers className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white tracking-tight">
                    4. Evidence State Engine
                  </h4>
                  <p className="mt-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Keeps observed facts, reports, provisional interpretations,
                    investigations, confirmations and outcomes distinguishable.
                  </p>
                </div>
                <div className="mt-6 pt-3.5 border-t border-slate-800 text-[11px] font-mono text-teal-400 font-medium">
                  Non-Destructive State Categorisation
                </div>
              </div>
            </div>

            {/* Supporting Initial Capabilities Grid */}
            <div className="mt-10 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                Supporting Initial Pilot Capabilities (Intended)
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs sm:text-sm text-slate-300">
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#0B1220] border border-slate-800/80">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Manual clip attachment &amp; time-window indexing</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#0B1220] border border-slate-800/80">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Chronological evidence timeline</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#0B1220] border border-slate-800/80">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Manual discrepancy flagging</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#0B1220] border border-slate-800/80">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Diagnosis, time-loss &amp; return-to-play milestone linkage</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#0B1220] border border-slate-800/80">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Basic near-miss capture</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#0B1220] border border-slate-800/80">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Structured filters</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#0B1220] border border-slate-800/80">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Anonymised event export</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-teal-950/40 border border-teal-800/60 text-teal-300 font-medium">
                  <AlertCircle className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Pilot validation stage</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Section B: PLANNED PLATFORM EXPANSION */}
        {activeTab === 'planned' && (
          <div className="mt-12 text-left animate-fadeIn">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-800 gap-2">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                  Roadmap
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-0.5">
                  Planned Platform Expansion
                </h3>
              </div>
              <span className="text-xs text-cyan-300 bg-cyan-950/60 border border-cyan-800/80 px-3.5 py-1.5 rounded-full self-start sm:self-auto font-medium">
                Subsequent phases following pilot data accumulation
              </span>
            </div>

            {/* 5 Planned Cards */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* 5. Evidence Reconciliation */}
              <div className="bg-[#0D1526] border border-slate-800 rounded-2xl p-6 sm:p-7 relative hover:border-cyan-500/40 transition-colors group">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <GitCompare className="w-5 h-5" />
                  </div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-cyan-950 text-cyan-300 border border-cyan-800">
                    Planned
                  </span>
                </div>
                <h4 className="text-lg font-bold text-white tracking-tight">
                  5. Evidence Reconciliation
                </h4>
                <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Structured comparison of evidence sources to identify agreement,
                  conflict and unresolved discrepancies for human review.
                </p>
              </div>

              {/* 6. Digital Injury Twin */}
              <div className="bg-[#0D1526] border border-slate-800 rounded-2xl p-6 sm:p-7 relative hover:border-cyan-500/40 transition-colors group">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Network className="w-5 h-5" />
                  </div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-cyan-950 text-cyan-300 border border-cyan-800">
                    Planned
                  </span>
                </div>
                <h4 className="text-lg font-bold text-white tracking-tight">
                  6. Digital Injury Twin
                </h4>
                <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Interactive review of the event, evidence timeline and changing
                  clinical states over time.
                </p>
              </div>

              {/* 7. Near-Miss Engine */}
              <div className="bg-[#0D1526] border border-slate-800 rounded-2xl p-6 sm:p-7 relative hover:border-cyan-500/40 transition-colors group">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <HelpCircle className="w-5 h-5" />
                  </div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-cyan-950 text-cyan-300 border border-cyan-800">
                    Planned
                  </span>
                </div>
                <h4 className="text-lg font-bold text-white tracking-tight">
                  7. Near-Miss Engine
                </h4>
                <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Expanded capture and comparison of events without confirmed
                  injury to study high-strain exposure.
                </p>
              </div>

              {/* 8. Similarity Engine */}
              <div className="bg-[#0D1526] border border-slate-800 rounded-2xl p-6 sm:p-7 relative hover:border-cyan-500/40 transition-colors group">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Search className="w-5 h-5" />
                  </div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-cyan-950 text-cyan-300 border border-cyan-800">
                    Planned
                  </span>
                </div>
                <h4 className="text-lg font-bold text-white tracking-tight">
                  8. Similarity Engine
                </h4>
                <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Retrieval of structurally comparable historical scenes to
                  support medical and performance evidence review.
                </p>
              </div>

              {/* 9. Research & Analytics */}
              <div className="bg-[#0D1526] border border-slate-800 rounded-2xl p-6 sm:p-7 relative hover:border-cyan-500/40 transition-colors group sm:col-span-2 lg:col-span-1">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <BarChart3 className="w-5 h-5" />
                  </div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-cyan-950 text-cyan-300 border border-cyan-800">
                    Planned
                  </span>
                </div>
                <h4 className="text-lg font-bold text-white tracking-tight">
                  9. Research &amp; Analytics
                </h4>
                <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Governed aggregate datasets, outcome analysis and approved
                  research outputs across anonymised cohorts.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Section C: SUPPORTING EVIDENCE FEATURES */}
        <div className="mt-16 text-left">
          <div className="pb-4 border-b border-slate-800">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-400">
              Evidence Integrity
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-0.5">
              Supporting Evidence Features (Proposed Design)
            </h3>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Evidence Freeze */}
            <div className="bg-[#0F172A]/70 border border-slate-800 p-6 rounded-2xl hover:border-slate-700 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-slate-800/80 text-teal-400 flex items-center justify-center mb-4">
                <Lock className="w-5 h-5" />
              </div>
              <h5 className="text-base font-bold text-slate-100">Evidence Freeze</h5>
              <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                Preserves the contemporaneous event record while allowing later
                evidence to be added without overwriting.
              </p>
            </div>

            {/* Evidence Integrity Ledger */}
            <div className="bg-[#0F172A]/70 border border-slate-800 p-6 rounded-2xl hover:border-slate-700 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-slate-800/80 text-teal-400 flex items-center justify-center mb-4">
                <Hash className="w-5 h-5" />
              </div>
              <h5 className="text-base font-bold text-slate-100">
                Evidence Integrity Ledger
              </h5>
              <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                A proposed hash-chained, timestamped evidence trail designed to
                make retroactive modifications detectable.
              </p>
            </div>

            {/* Outcome Linkage */}
            <div className="bg-[#0F172A]/70 border border-slate-800 p-6 rounded-2xl hover:border-slate-700 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-slate-800/80 text-teal-400 flex items-center justify-center mb-4">
                <Activity className="w-5 h-5" />
              </div>
              <h5 className="text-base font-bold text-slate-100">Outcome Linkage</h5>
              <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                Connects the event to diagnostic findings, rehabilitation, and
                return-to-play recovery milestones.
              </p>
            </div>

            {/* Permission-Controlled Access */}
            <div className="bg-[#0F172A]/70 border border-slate-800 p-6 rounded-2xl hover:border-slate-700 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-slate-800/80 text-teal-400 flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h5 className="text-base font-bold text-slate-100">
                Permission-Controlled Access
              </h5>
              <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                Role-appropriate segregation of identifiable clinical and
                contextual performance information.
              </p>
            </div>
          </div>
        </div>

        {/* Clinical Boundary Statement Banner */}
        <div className="mt-14 bg-gradient-to-r from-slate-900 via-[#111C33] to-slate-900 border border-teal-500/30 rounded-2xl p-6 sm:p-7 text-left flex flex-col sm:flex-row items-center justify-between gap-5 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-teal-500/10 text-teal-400 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <p className="text-base font-bold text-white">
                Clinical Boundary &amp; Governance
              </p>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                The platform supports evidence organisation, review and
                traceability.
              </p>
            </div>
          </div>
          <div className="px-5 py-2.5 rounded-xl bg-slate-800/90 border border-teal-500/40 text-teal-300 text-xs sm:text-sm font-bold tracking-wide whitespace-nowrap shadow-inner">
            Clinical decisions remain with authorised clinicians.
          </div>
        </div>
      </div>
    </section>
  );
};
