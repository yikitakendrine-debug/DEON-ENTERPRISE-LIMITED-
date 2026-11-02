import React, { useState } from 'react';
import { FileUp, FileCheck, Printer, CheckCheck, Truck, ArrowRight, ShieldCheck, Clock, CheckCircle } from 'lucide-react';

interface SystemFlowSectionProps {
  onOpenQuote: () => void;
}

export const SystemFlowSection: React.FC<SystemFlowSectionProps> = ({ onOpenQuote }) => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: '01',
      title: 'Order Ideation & File Ingestion',
      icon: FileUp,
      status: 'Intake Phase',
      tagline: 'Instant WhatsApp Quote or In-Person at Zebra House',
      desc: 'Submit your artwork (PDF, AI, CDR, TIFF) or request graphic design from scratch. Our instant quote desk captures your dimensions, material substrate, quantity, and urgency.',
      actions: ['WhatsApp Quote Generation', 'Artwork Resolution Check', 'Substrate & Grammage Selection'],
      duration: '5 - 15 Minutes',
    },
    {
      number: '02',
      title: 'Pre-Press & Color Proofing',
      icon: FileCheck,
      status: 'Verification',
      tagline: 'Pantone Registration & Digital Mockup Approval',
      desc: 'Our pre-press design engineers check bleed lines, RGB-to-CMYK color space conversion, font outlines, and structural layout. A digital proof is sent to your phone for confirmation.',
      actions: ['CMYK Color Profile Calibration', 'Proof Sign-Off via WhatsApp', 'Print Plate / RIP Setup'],
      duration: '15 - 30 Minutes',
    },
    {
      number: '03',
      title: 'Heavy Industrial Production',
      icon: Printer,
      status: 'Press Active',
      tagline: 'Dedicated Funsun & Konica Minolta In-House Fleet',
      desc: 'Your job routes directly to our machines on Nasser Road. Large format banners run on the Funsun roll-to-roll press; books and cards run on the high-speed Konica Minolta press.',
      actions: ['High-Precision Micro-Droplet Inking', 'UV & Eco-Solvent Ink Curing', 'High-Speed Automated Press Run'],
      duration: '1 - 4 Hours (Express Option)',
    },
    {
      number: '04',
      title: 'Post-Press Finishing & QC Audit',
      icon: CheckCheck,
      status: 'Finishing & Inspection',
      tagline: 'Lamination, Die-Cutting & Structural Rigidity',
      desc: 'Post-press specialists apply matte/gloss lamination, eyelet reinforcement on banners, saddle-stitching or wire-o binding on books, and execute a 100% defect inspection before packing.',
      actions: ['Matte / Gloss Laminating', 'Precision Die-Cutting & Trimming', 'Rigid Quality Control Check'],
      duration: '30 - 60 Minutes',
    },
    {
      number: '05',
      title: 'Counter Collection & Delivery',
      icon: Truck,
      status: 'Dispatched',
      tagline: 'Zebra House Level 1 Pickup or Countrywide Courier',
      desc: 'Your finished order is neatly packaged in protective wrap. Collect in person at Zebra House Level 1 on Nasser Road, or opt for rapid delivery across Kampala and upcountry Uganda.',
      actions: ['Express Counter Handover', 'Regional Courier Waybill Issued', 'Post-Service Feedback Check'],
      duration: 'Same-Day / Scheduled Delivery',
    },
  ];

  return (
    <section id="system-flow" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 border border-red-200 px-3.5 py-1 rounded-full">
            <span>MVP Operational Architecture</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#0b1e3a] tracking-tight">
            THE DEON MVP SYSTEM FLOW
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            A frictionless, 5-stage production pipeline engineered to take your visual concept from raw specification to printed perfection on Nasser Road with total transparency.
          </p>
        </div>

        {/* 5-Step Process Horizontal Roadmap */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-10">
          {steps.map((st, idx) => {
            const Icon = st.icon;
            const isCurrent = activeStep === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                  isCurrent
                    ? 'bg-[#0b1e3a] text-white border-[#0b1e3a] shadow-lg'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-100'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`font-display font-black text-lg ${
                      isCurrent ? 'text-amber-400' : 'text-slate-400'
                    }`}
                  >
                    {st.number}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      isCurrent ? 'bg-white/10 text-white' : 'bg-white text-slate-600 border border-slate-200'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider block mb-1 ${
                      isCurrent ? 'text-amber-300' : 'text-slate-400'
                    }`}
                  >
                    {st.status}
                  </span>
                  <h4 className="font-display font-bold text-xs sm:text-sm leading-snug line-clamp-2">
                    {st.title}
                  </h4>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Deep Detail Banner */}
        <div className="rounded-3xl bg-slate-900 text-white p-6 sm:p-10 border border-white/10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider">
                <Clock className="w-3.5 h-3.5" />
                <span>Estimated Step Duration: {steps[activeStep].duration}</span>
              </div>

              <h3 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight">
                Stage {steps[activeStep].number}: {steps[activeStep].title}
              </h3>

              <p className="text-amber-400 font-semibold text-sm">
                {steps[activeStep].tagline}
              </p>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {steps[activeStep].desc}
              </p>

              {/* Action checklist */}
              <div className="pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                  System Milestones:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {steps[activeStep].actions.map((act, i) => (
                    <div key={i} className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-xs flex items-center gap-2 text-slate-200">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span className="font-medium truncate">{act}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right side next action card */}
            <div className="lg:col-span-4 bg-white/10 border border-white/15 rounded-2xl p-6 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center mx-auto shadow-lg">
                <Printer className="w-7 h-7" />
              </div>

              <div>
                <h4 className="font-display font-bold text-lg text-white">
                  Ready to Start at Stage 01?
                </h4>
                <p className="text-xs text-slate-300 mt-1">
                  Our system is live right now at Zebra House Level 1 &amp; Plot 27 Level 2 Nasser Road.
                </p>
              </div>

              <button
                onClick={onOpenQuote}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 text-slate-950 font-black text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Launch Quote in Flow</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-[11px] text-slate-400 italic">
                &ldquo;Where Ideas Become Visual &mdash; Beyond Service&rdquo;
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
