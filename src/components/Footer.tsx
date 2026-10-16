import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import type { NavItem } from '../types';

interface FooterProps {
  onRequestPilot: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const navLinks: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Platform', href: '#platform' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Market & Pricing', href: '#market-pricing' },
  { label: 'FAQ', href: '#faq' },
];

export const Footer: React.FC<FooterProps> = ({ onRequestPilot }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#05080F] text-slate-400 border-t border-slate-800/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 items-start text-left">
          {/* Brand & Short Description - Pure wordmark with NO icon container */}
          <div className="md:col-span-5 space-y-4">
            <a
              href="#home"
              className="inline-flex flex-col group focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 rounded-lg p-1"
            >
              <div className="flex items-baseline gap-1.5">
                <span className="text-2xl font-black tracking-tight text-white group-hover:text-slate-100 transition-colors">
                  InjuryScene
                </span>
                <span className="text-2xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                  Nexus
                </span>
              </div>
              <span className="text-[10px] tracking-widest uppercase font-semibold text-slate-400 group-hover:text-teal-400 transition-colors -mt-0.5">
                Evidence Infrastructure
              </span>
            </a>
            <p className="text-sm text-slate-300 max-w-sm leading-relaxed font-normal">
              A traceable evidence history for sports injury events.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-teal-400 font-medium">
              <ShieldCheck className="w-4 h-4 text-teal-400" />
              <span>Founded by Nabi Jalil.</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-200 mb-4">
              Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-3 text-sm">
              {navLinks.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-slate-400 hover:text-teal-300 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-teal-400 rounded"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Pilot Engagement CTA */}
          <div className="md:col-span-3 flex flex-col items-start md:items-end justify-between space-y-4">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-200 mb-2 md:text-right">
                Pilot Engagement
              </h4>
              <p className="text-xs text-slate-400 max-w-xs md:text-right">
                Partner with us to test structured evidence workflows.
              </p>
            </div>
            <button
              type="button"
              onClick={onRequestPilot}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-[#070B14] bg-gradient-to-r from-teal-400 to-cyan-400 hover:from-teal-300 hover:to-cyan-300 transition-all shadow-md cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
            >
              <span>Request a Pilot</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} InjuryScene Nexus. All rights reserved.</p>
          <p className="text-slate-400">
            Founded by <span className="text-slate-200 font-semibold">Nabi Jalil</span> | Sports Physiotherapist
          </p>
        </div>
      </div>
    </footer>
  );
};
