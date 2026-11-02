import React, { useState } from 'react';
import { Target, Compass, Award, ShieldCheck, CheckCircle2, Sparkles, Building, Rocket, HeartHandshake, Eye } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'mission-vision' | 'goals' | 'objectives'>('mission-vision');

  const goals = [
    {
      title: 'Zero-Defect Production Quality',
      desc: 'Rigorous color registration, Pantone matching, and premium durable vinyl/paper stocks on all production runs.',
      metric: '100% Quality Inspected',
    },
    {
      title: 'Direct Nasser Road Factory Value',
      desc: 'Eliminating broker markups by maintaining our own Funsun and Konica Minolta press lines in Zebra House.',
      metric: 'Zero Middleman Fees',
    },
    {
      title: 'Rapid Kampala & Countrywide Turnaround',
      desc: 'Empowering urgent events and businesses with same-day express printing and dependable courier dispatches.',
      metric: 'Same-Day Express Available',
    },
    {
      title: 'Ethical & Lawful Practice',
      desc: 'Eco-solvent UV-stable inks, paper waste management, and strictly lawful administrative typing support.',
      metric: 'Strict Compliance Guarantee',
    },
  ];

  const objectives = [
    {
      step: '01',
      title: 'Industrial Capacity Expansion',
      desc: 'Scale high-volume continuous digital press and 3D architectural signage fabrication capabilities across Uganda.',
    },
    {
      step: '02',
      title: 'Frictionless Digital Ordering Pipeline',
      desc: 'Streamline client quotes, pre-press proofing, and artwork verification through our rapid WhatsApp ordering desk.',
    },
    {
      step: '03',
      title: 'Full Corporate Brand Empowerment',
      desc: 'Provide comprehensive branded identity suites—from business cards and apparel to 3D outdoor illuminated fascias.',
    },
    {
      step: '04',
      title: 'Operational Excellence on Nasser Road',
      desc: 'Maintain a 99.8% on-time dispatch rate from Zebra House Level 1 and Level 2 for corporate and walk-in clients.',
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-white border-b border-slate-200 relative overflow-hidden">
      {/* Background visual accents */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 border border-red-200 px-3.5 py-1 rounded-full">
            <span>Corporate Profile &amp; Core Philosophy</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#0b1e3a] tracking-tight">
            ABOUT DEON ENTERPRISE
          </h2>

          {/* The Signature Phrase Highlight */}
          <div className="py-2">
            <p className="font-display text-lg sm:text-xl font-bold text-red-600 italic">
              &ldquo;Where Ideas Become Visual &mdash; Beyond Service&rdquo;
            </p>
          </div>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Headquartered in the commercial print capital of East Africa at Zebra House on Nasser Road, Kampala, DEON ENTERPRISE delivers industrial-grade printing, creative graphic design, corporate branding, and architectural 3D signage.
          </p>
        </div>

        {/* The Signature Phrase Hero Callout */}
        <div className="mb-14 rounded-3xl bg-gradient-to-r from-[#0b1e3a] via-[#122b54] to-[#1e3a8a] text-white p-6 sm:p-10 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-amber-400/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs font-bold text-amber-400 tracking-widest uppercase block">
                The DEON Creed &amp; Guiding Phrase
              </span>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight">
                Beyond Service: Our Relentless Commitment to Excellence
              </h3>
              <p className="text-slate-200 text-sm leading-relaxed">
                At DEON ENTERPRISE, <strong className="text-white font-semibold">&ldquo;Beyond Service&rdquo;</strong> is not merely a slogan—it is the foundational metric by which every print job is judged. From the precision registration of 50,000 corporate brochures on our Konica Minolta digital press to custom-welded 3D illuminated lightbox letters, we go past standard client satisfaction to deliver lasting visual distinction.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl bg-white/10 border border-white/15 text-center">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-white shadow-lg mb-3 border-2 border-red-500/80">
                <img
                  src="/assets/aistudio/IMG-20261102-WA0058_7d208db8.jpg"
                  alt="DEON ENTERPRISE Official Seal"
                  className="w-full h-full object-cover scale-[1.04]"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="font-display font-extrabold text-base text-white">DEON ENTERPRISE</span>
              <span className="text-xs text-amber-400 font-bold uppercase tracking-wider mt-0.5">&ldquo;Beyond Service&rdquo;</span>
              <span className="text-[11px] text-slate-300 mt-1">Zebra House, Nasser Road Kampala</span>
            </div>
          </div>
        </div>

        {/* Tab Controls for Vision & Mission, Goals, and Strategic Objectives */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 bg-slate-100 rounded-2xl border border-slate-200 shadow-inner">
            <button
              onClick={() => setActiveTab('mission-vision')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'mission-vision'
                  ? 'bg-[#0b1e3a] text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Vision &amp; Mission
            </button>
            <button
              onClick={() => setActiveTab('goals')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'goals'
                  ? 'bg-[#0b1e3a] text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Core Goals
            </button>
            <button
              onClick={() => setActiveTab('objectives')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'objectives'
                  ? 'bg-[#0b1e3a] text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Strategic Objectives
            </button>
          </div>
        </div>

        {/* Tab 1: Vision & Mission */}
        {activeTab === 'mission-vision' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Vision Card */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-slate-300 shadow-md transition-all flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-900/20 group-hover:scale-105 transition-transform">
                  <Eye className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold text-red-600 uppercase tracking-widest block">
                  Our Aspiration
                </span>
                <h3 className="font-display font-black text-2xl text-[#0b1e3a] tracking-tight">
                  OUR VISION
                </h3>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  To be East Africa&apos;s most trusted, innovative, and technologically advanced commercial printing and corporate branding enterprise—renowned across Uganda and beyond for uncompromising print fidelity, ultra-fast turnaround, and unwavering integrity.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200 flex items-center gap-2 text-xs font-bold text-blue-900">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Pan-African Print Standard &amp; Innovation</span>
              </div>
            </div>

            {/* Mission Card */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-slate-300 shadow-md transition-all flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-red-600 text-white flex items-center justify-center shadow-lg shadow-red-900/20 group-hover:scale-105 transition-transform">
                  <Compass className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold text-blue-700 uppercase tracking-widest block">
                  Our Purpose
                </span>
                <h3 className="font-display font-black text-2xl text-[#0b1e3a] tracking-tight">
                  OUR MISSION
                </h3>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  To transform our clients&apos; ideas into vivid, high-impact visual realities by pairing state-of-the-art industrial printing machinery with seasoned creative craftsmanship, honest Nasser Road pricing, and an obsessive dedication to customer satisfaction that goes truly <em>Beyond Service</em>.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200 flex items-center gap-2 text-xs font-bold text-red-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Precision Execution &middot; Direct Factory Value</span>
              </div>
            </div>

          </div>
        )}

        {/* Tab 2: Core Goals */}
        {activeTab === 'goals' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {goals.map((g, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0b1e3a] text-amber-400 flex items-center justify-center font-display font-black text-sm">
                    G{idx + 1}
                  </div>
                  <h4 className="font-display font-bold text-base text-[#0b1e3a]">
                    {g.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {g.desc}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-200">
                  <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider block">
                    {g.metric}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Strategic Objectives */}
        {activeTab === 'objectives' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {objectives.map((obj, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 shadow-sm hover:shadow-lg transition-all group"
              >
                <span className="text-3xl font-display font-black text-slate-300 group-hover:text-red-600 transition-colors block mb-2">
                  {obj.step}
                </span>
                <h4 className="font-display font-bold text-base text-[#0b1e3a] mb-2">
                  {obj.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {obj.desc}
                </p>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
