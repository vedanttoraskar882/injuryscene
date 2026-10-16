import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import type { FaqItem } from '../types';

const faqItems: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'What is InjuryScene Nexus?',
    answer:
      'A proposed evidence platform that connects a sports injury or near-miss event with its observations, footage, clinical evidence and outcomes through one persistent InjuryScene identity.',
  },
  {
    id: 'faq-2',
    question: 'Who is the initial platform intended for?',
    answer:
      'Professional football clubs and academies, particularly their medical and performance teams.',
  },
  {
    id: 'faq-3',
    question: 'Does it replace our medical or athlete-management software?',
    answer:
      'It is intended to complement existing systems by providing a connected event-level evidence history.',
  },
  {
    id: 'faq-4',
    question: 'Does the platform diagnose injuries?',
    answer:
      'No. It supports evidence organisation and review. Diagnosis and return-to-play decisions remain with authorised clinicians.',
  },
  {
    id: 'faq-5',
    question: 'What happens when a diagnosis changes?',
    answer:
      'Later findings are added to the same scene while earlier observations and provisional interpretations remain traceable.',
  },
  {
    id: 'faq-6',
    question: 'Can a scene be created without video?',
    answer:
      'Yes. Available evidence can be recorded while missing footage or other information remains explicitly identified.',
  },
  {
    id: 'faq-7',
    question: 'What is a digital injury twin?',
    answer:
      'An evolving digital representation of the event and its evidence history, rather than a simulated physical body.',
  },
  {
    id: 'faq-8',
    question: 'Can near-miss events be recorded?',
    answer:
      'Basic near-miss capture is included in the proposed initial scope. More advanced comparative capabilities are planned for later phases.',
  },
  {
    id: 'faq-9',
    question: 'How will sensitive information be handled?',
    answer:
      'The proposed architecture includes role-based access, separation of identifiable clinical information and governed de-identified or aggregate research outputs. Implementation must be validated during development.',
  },
  {
    id: 'faq-10',
    question: 'How much does it cost?',
    answer:
      'The executive summary does not specify fixed prices. Pilot pricing is negotiated, and annual licensing is intended to reflect teams or sites, functionality and event volume.',
  },
  {
    id: 'faq-11',
    question: 'Is advanced AI available in the initial version?',
    answer:
      'The initial scope prioritises structured capture, evidence history and clinician review. Advanced automation and analytics are planned after sufficient validated data exists.',
  },
  {
    id: 'faq-12',
    question: 'What happens when I submit this website’s enquiry form?',
    answer:
      'Your details are saved only in localStorage in this browser. This demonstration website does not send the enquiry to the InjuryScene Nexus team.',
  },
];

export const FaqSection: React.FC = () => {
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    'faq-1': true,
  });

  const toggleItem = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section
      id="faq"
      className="relative py-24 md:py-32 bg-[#0B1220] text-slate-100 border-b border-slate-800/80 scroll-mt-20 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-teal-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/25 text-teal-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-teal-400" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.15]">
            Frequently Asked{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300">
              Questions
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Direct answers on the platform’s scope, clinical boundaries, and pilot engagement.
          </p>
        </div>

        {/* Accessible Accordion List */}
        <div className="space-y-4 text-left">
          {faqItems.map((item, index) => {
            const isOpen = !!openIds[item.id];
            const contentId = `${item.id}-content`;
            const headerId = `${item.id}-header`;

            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-[#0F172A] border-teal-500/50 shadow-xl shadow-teal-950/20'
                    : 'bg-[#0D1526]/80 border-slate-800/90 hover:border-slate-700'
                }`}
              >
                <button
                  id={headerId}
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 rounded-2xl"
                >
                  <span className="font-bold text-white text-base sm:text-lg flex items-center gap-3.5">
                    <span className="text-xs font-mono font-bold text-teal-400 w-6 shrink-0">
                      {String(index + 1).padStart(2, '0')}.
                    </span>
                    <span>{item.question}</span>
                  </span>
                  <div
                    className={`w-8 h-8 rounded-xl bg-slate-800/80 flex items-center justify-center text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-teal-500/20 text-teal-300' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" aria-hidden="true" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={contentId}
                    role="region"
                    aria-labelledby={headerId}
                    className="px-6 pb-6 pt-2 text-sm sm:text-base text-slate-300 leading-relaxed border-t border-slate-800/80 pl-14 sm:pl-16 font-normal"
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
