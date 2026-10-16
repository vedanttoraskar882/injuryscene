import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import type { NavItem } from '../types';

interface NavbarProps {
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

export const Navbar: React.FC<NavbarProps> = ({ onRequestPilot }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-[#070B14]/90 backdrop-blur-xl border-b border-slate-800/80 shadow-2xl shadow-black/40'
          : 'py-5 bg-[#070B14]/70 backdrop-blur-md border-b border-slate-800/40'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo - Pure sleek wordmark without any logo icon container */}
          <a
            href="#home"
            className="flex flex-col group focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 rounded-lg p-1 transition-transform"
          >
            <div className="flex items-baseline gap-1.5">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-white group-hover:text-slate-100 transition-colors">
                InjuryScene
              </span>
              <span className="text-xl sm:text-2xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                Nexus
              </span>
            </div>
            <span className="text-[10px] tracking-widest uppercase font-semibold text-slate-400 group-hover:text-teal-400/90 transition-colors -mt-0.5">
              Evidence Infrastructure
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full bg-slate-900/60 border border-slate-800/60 backdrop-blur-md"
            aria-label="Main Navigation"
          >
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3.5 py-1.5 text-xs lg:text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/70 rounded-full transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <button
              type="button"
              onClick={onRequestPilot}
              className="relative group inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs lg:text-sm font-semibold text-[#070B14] bg-gradient-to-r from-teal-400 via-teal-300 to-cyan-400 hover:from-teal-300 hover:to-cyan-300 transition-all shadow-lg shadow-teal-500/20 hover:shadow-teal-500/35 hover:scale-[1.02] active:scale-[0.98] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
            >
              <span>Request a Pilot</span>
              <ArrowRight className="w-4 h-4 text-[#070B14] group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-300 hover:text-white bg-slate-900/80 border border-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 transition-colors"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-teal-400" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 px-4 pt-3 pb-6 bg-[#0B1220]/95 backdrop-blur-2xl border-b border-slate-800 shadow-2xl transition-all">
          <nav className="flex flex-col space-y-1.5" aria-label="Mobile Navigation">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMobileMenu}
                className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:text-white hover:bg-slate-800/80 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="pt-4 mt-2 border-t border-slate-800/80">
            <button
              type="button"
              onClick={(e) => {
                closeMobileMenu();
                onRequestPilot(e);
              }}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-[#070B14] bg-gradient-to-r from-teal-400 to-cyan-400 hover:from-teal-300 hover:to-cyan-300 transition-all shadow-md cursor-pointer"
            >
              <span>Request a Pilot</span>
              <ArrowRight className="w-4 h-4 text-[#070B14]" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
