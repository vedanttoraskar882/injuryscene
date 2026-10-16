import React from 'react';
import {
  Building2,
  Compass,
  ArrowRight,
  ShieldAlert,
  Sparkles,
  Layers,
  FileCheck2,
} from 'lucide-react';

interface MarketPricingProps {
  onRequestPilotWithNote: (
    e: React.MouseEvent<HTMLButtonElement>,
    note: string
  ) => void;
}

export const MarketPricingSection: React.FC<MarketPricingProps> = ({
  onRequestPilotWithNote,
}) => {
  return (
    <section
      id="market-pricing"
      className="relative py-24 md:py-32 bg-[#070B14] text-slate-100 border-b border-slate-800/80 scroll-mt-20 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 right-10 w-[450px] h-[450px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/25 text-teal-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-teal-400" />
            <span>Market Focus &amp; Commercial Framework</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.15]">
            Start with your club’s workflow.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300">
              Scale with your evidence needs.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Designed for professional sporting organisations requiring rigorous
            evidence capture without administrative fragmentation.
          </p>
        </div>

        {/* Customer Focus Breakdown (Initial vs Later) */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {/* Initial Focus */}
          <div className="relative bg-[#0D1526] border border-teal-500/30 rounded-2xl p-7 sm:p-9 overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-48 h-48 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold uppercase tracking-wider mb-4">
              <Building2 className="w-3.5 h-3.5" />
              <span>Initial Focus (UK Workflows)</span>
            </div>
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Elite Football Clubs &amp; Academies
            </h3>
            <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
              Targeted directly at high-intensity football environments where
              pitch-side notes, multi-angle video and return-to-play decisions
              require unified provenance.
            </p>
            <ul className="mt-6 space-y-2.5 text-xs sm:text-sm text-slate-300">
              <li className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-teal-400" />
                <span>Professional football first teams</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-teal-400" />
                <span>Category 1–3 football academies</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-teal-400" />
                <span>Multi-disciplinary medical &amp; performance departments</span>
              </li>
            </ul>
          </div>

          {/* Later Expansion */}
          <div className="relative bg-[#0D1526] border border-slate-800 rounded-2xl p-7 sm:p-9 shadow-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-bold uppercase tracking-wider mb-4">
              <Compass className="w-3.5 h-3.5 text-cyan-400" />
              <span>Later Expansion</span>
            </div>
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Broader Sports &amp; Research Ecosystems
            </h3>
            <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
              Subsequent rollouts designed to support broader sports medicine
              institutions, multi-sport governing bodies and academic research.
            </p>
            <ul className="mt-6 space-y-2.5 text-xs sm:text-sm text-slate-300">
              <li className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                <span>Sports medicine &amp; orthopaedic clinics</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                <span>National governing bodies &amp; federations</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                <span>Universities &amp; sports-science research organisations</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                <span>Other sports: rugby, cricket, athletics</span>
              </li>
              <li className="flex items-center gap-2.5 text-slate-400 text-xs pt-1">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                <span>Approved aggregate analytics for insurers / equipment bodies (later stage)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Prominent Pricing Banner */}
        <div className="mt-14 p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-[#0F172A] via-[#111C33] to-[#0A101D] border border-teal-500/30 text-left shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-400">
              Transparent Commercial Principles
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1.5">
              Pricing tailored to your club
            </h3>
            <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              Annual licensing is intended to reflect teams or sites,
              functionality and event volume. Pilot pricing and implementation
              requirements are discussed directly with participating
              organisations.
            </p>
          </div>
        </div>

        {/* Three Commercial Option Cards */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {/* 1. Paid Pilot */}
          <div className="bg-[#0D1526] border border-slate-800 rounded-2xl p-7 flex flex-col justify-between hover:border-teal-400/50 transition-all shadow-xl group">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/10 text-teal-300 text-xs font-semibold mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Initial Validation</span>
              </div>
              <h4 className="text-2xl font-bold text-white tracking-tight">
                Paid Pilot
              </h4>
              <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                Discuss a focused pilot to validate event capture, evidence
                completeness and reconstruction workflows.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800">
              <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                Commercial Terms
              </div>
              <div className="text-sm font-bold text-teal-300 mt-1">
                Pricing agreed through pilot discussions
              </div>
              <button
                type="button"
                onClick={(e) => onRequestPilotWithNote(e, 'Paid Pilot Enquiry')}
                className="mt-5 w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm text-[#070B14] bg-gradient-to-r from-teal-400 to-teal-300 hover:from-teal-300 hover:to-cyan-300 transition-all shadow-lg shadow-teal-500/20 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
              >
                <span>Discuss a Paid Pilot</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 2. Club Licence */}
          <div className="bg-[#0D1526] border border-slate-800 rounded-2xl p-7 flex flex-col justify-between hover:border-cyan-400/50 transition-all shadow-xl group">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 text-xs font-semibold mb-4">
                <Layers className="w-3.5 h-3.5" />
                <span>Squad &amp; Site Scale</span>
              </div>
              <h4 className="text-2xl font-bold text-white tracking-tight">
                Club Licence
              </h4>
              <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                Annual SaaS licensing based on teams or sites and required
                functionality, with event-volume pricing linked to InjuryScenes or
                monitored squads.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800">
              <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                Commercial Terms
              </div>
              <div className="text-sm font-bold text-cyan-300 mt-1">
                Request a tailored quote
              </div>
              <button
                type="button"
                onClick={(e) => onRequestPilotWithNote(e, 'Club Licence Quote')}
                className="mt-5 w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm text-[#070B14] bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-teal-300 transition-all shadow-lg shadow-cyan-500/20 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 3. Implementation & Integration */}
          <div className="bg-[#0D1526] border border-slate-800 rounded-2xl p-7 flex flex-col justify-between hover:border-slate-600 transition-all shadow-xl group">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-semibold mb-4">
                <FileCheck2 className="w-3.5 h-3.5 text-teal-400" />
                <span>Custom Architecture</span>
              </div>
              <h4 className="text-2xl font-bold text-white tracking-tight">
                Implementation &amp; Integration
              </h4>
              <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                Onboarding, data mapping and connector configuration according to
                your organisation’s systems and agreed scope.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800">
              <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                Commercial Terms
              </div>
              <div className="text-sm font-bold text-slate-200 mt-1">
                Scope-based quotation
              </div>
              <button
                type="button"
                onClick={(e) =>
                  onRequestPilotWithNote(e, 'Implementation & Integration Discussion')
                }
                className="mt-5 w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors shadow cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
              >
                <span>Discuss Your Requirements</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Planned Later Revenue Services */}
        <div className="mt-14 bg-gradient-to-br from-[#0F172A] to-[#0A101D] border border-slate-800/90 rounded-2xl p-7 sm:p-9 text-left shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-slate-800 gap-2">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                Future Offerings
              </span>
              <h4 className="text-lg font-bold text-white mt-0.5">
                Planned Later Revenue Services
              </h4>
            </div>
            <div className="inline-flex items-center gap-2 text-xs text-amber-300 bg-amber-500/10 border border-amber-500/25 px-3.5 py-1.5 rounded-full font-medium">
              <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />
              <span>Not available now — staged for subsequent phases</span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <div className="p-5 rounded-xl bg-[#141E33]/60 border border-slate-800">
              <div className="text-[10px] font-bold uppercase tracking-wider text-teal-400">
                Phase 2
              </div>
              <div className="font-bold text-slate-100 text-sm mt-1">
                Premium Audit Reports
              </div>
              <p className="text-slate-300 mt-1.5 leading-relaxed">
                Structured clinical reconstruction summaries for squad governance.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#141E33]/60 border border-slate-800">
              <div className="text-[10px] font-bold uppercase tracking-wider text-cyan-400">
                Phase 3+
              </div>
              <div className="font-bold text-slate-100 text-sm mt-1">
                Governed Research Partnerships
              </div>
              <p className="text-slate-300 mt-1.5 leading-relaxed">
                Anonymised cohort evidence outputs for approved research bodies.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#141E33]/60 border border-slate-800">
              <div className="text-[10px] font-bold uppercase tracking-wider text-cyan-400">
                Phase 3+
              </div>
              <div className="font-bold text-slate-100 text-sm mt-1">
                Enterprise API Access
              </div>
              <p className="text-slate-300 mt-1.5 leading-relaxed">
                Direct programmatic ingestion and retrieval with club medical systems.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#141E33]/60 border border-slate-800">
              <div className="text-[10px] font-bold uppercase tracking-wider text-cyan-400">
                Phase 3+
              </div>
              <div className="font-bold text-slate-100 text-sm mt-1">
                Sport-Specific Module Licences
              </div>
              <p className="text-slate-300 mt-1.5 leading-relaxed">
                Specialised workflows tailored to rugby, cricket and athletics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
