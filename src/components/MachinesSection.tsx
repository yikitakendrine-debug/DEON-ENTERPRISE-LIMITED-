import React, { useState } from 'react';
import { Cpu, CheckCircle2, Zap, Shield, Sparkles, Layers, Sliders, ArrowUpRight } from 'lucide-react';

interface MachinesSectionProps {
  onOpenQuote: () => void;
}

export const MachinesSection: React.FC<MachinesSectionProps> = ({ onOpenQuote }) => {
  const [activeTab, setActiveTab] = useState<'funsun' | 'konica' | 'office'>('funsun');

  const machines = [
    {
      id: 'funsun',
      title: 'Funsun Large Format Printing Press',
      tagline: 'Industrial Roll-to-Roll & Outdoor Media powerhouse',
      image: '/src/assets/images/large_format_printer_1793614303980.jpg',
      badge: 'High Speed · Heavy Duty',
      specs: [
        { label: 'Supported Media', value: 'Vinyl, Flex Banner, Backlit Film, Canvas, Mesh' },
        { label: 'Max Width', value: '3.2 Meters Seamless Width' },
        { label: 'Resolution', value: 'Up to 2880 DPI High Precision' },
        { label: 'Ink Technology', value: 'Eco-Solvent & UV Weather-Resistant Pigments' },
      ],
      applications: [
        'Stickers & Decals',
        'Large Outdoor Banners',
        'Teardrop & Feather Flags',
        'Roll-up & Pullup Banners',
        'Highway Billboards & Hoardings',
        'Window One-Way Graphics',
      ],
      description:
        'Our flagship Funsun industrial printer provides exceptional color saturation and pinpoint droplet placement. Whether you need a 10-meter event backdrop banner or 5,000 branded vehicle decals, the Funsun prints seamlessly with zero banding.',
    },
    {
      id: 'konica',
      title: 'Konica Minolta Digital Press',
      tagline: 'Commercial Grade Color Management & High Volume Paper Runs',
      image: '/src/assets/images/digital_press_machine_1793614305176.jpg',
      badge: 'Laser Sharp · Fast Turnaround',
      specs: [
        { label: 'Paper Grammage', value: '60 gsm up to 350 gsm Heavy Art Card' },
        { label: 'Output Capacity', value: 'Up to 5,000 sheets/hour' },
        { label: 'Color Control', value: 'Real-time Automated Density Calibration' },
        { label: 'Finishing System', value: 'In-line Folding, Creasing & Trimming' },
      ],
      applications: [
        'Multi-page Company Profiles',
        'Glossy & Matte Business Cards',
        'Conference Booklets & Agendas',
        'Brochures & Tri-folds',
        'Desk & Wall Calendars',
        'Certificates with Gold Foil Options',
      ],
      description:
        'The Konica Minolta Digital Press is the cornerstone of DEON ENTERPRISE’s corporate stationery production. Delivering Pantone-accurate colors and crisp micro-text, it allows our clients to print small on-demand test runs or tens of thousands of marketing flyers in hours.',
    },
    {
      id: 'office',
      title: 'Full Office & Production Setup',
      tagline: 'Integrated Nasser Road Workshop with Graphic Workstations & Finishing Lines',
      image: '/assets/aistudio/IMG-20261102-WA0134_be8d3a30.jpg',
      badge: 'End-to-End Workflow',
      specs: [
        { label: 'Design Workstation', value: 'High-Performance Apple & PC Design Suite' },
        { label: 'Post-Press Finishing', value: 'Hydraulic Paper Cutters & Cold/Thermal Laminators' },
        { label: 'Heat & Sublimation', value: 'Pneumatic Heat Press for T-Shirts, Mugs & Caps' },
        { label: 'Stock Inventory', value: 'Well-stocked shelves of premium art card & textiles' },
      ],
      applications: [
        'Client Proofing & Design Reviews',
        'Urgent Walk-in Printing & Copying',
        'Corporate Gift Assembly & QC Check',
        'Legal Typing Assistance (Passports & Interpol)',
        '3D Acrylic Signage Pre-assembly',
        'Fast Pickup & Nasser Road Logistics',
      ],
      description:
        'Conveniently situated at Zebra House Level 1 and Plot 27 Level 2 on Nasser Road, Kampala. Our modern office features dedicated client consultation lounges, sample showcases, and well-organized inventory shelves so you can inspect material quality before production starts.',
    },
  ];

  const current = machines.find((m) => m.id === activeTab) || machines[0];

  return (
    <section id="machines" className="py-16 sm:py-24 bg-slate-100 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-red-600 bg-red-100/60 border border-red-200 px-3 py-1 rounded-full inline-block">
              Industrial Print Press Fleet
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-[#0b1e3a] tracking-tight">
              OUR IN-HOUSE PRODUCTION MACHINES
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Unlike brokers who outsource, DEON ENTERPRISE owns and operates high-capacity printing machinery right here in Kampala. This guarantees uncompromised quality and unbeatable direct pricing.
            </p>
          </div>

          {/* Machine Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-white rounded-xl border border-slate-200 shadow-sm shrink-0">
            <button
              onClick={() => setActiveTab('funsun')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                activeTab === 'funsun'
                  ? 'bg-[#0b1e3a] text-white shadow'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              Funsun Large Format
            </button>
            <button
              onClick={() => setActiveTab('konica')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                activeTab === 'konica'
                  ? 'bg-[#0b1e3a] text-white shadow'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              Konica Minolta Digital
            </button>
            <button
              onClick={() => setActiveTab('office')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                activeTab === 'office'
                  ? 'bg-[#0b1e3a] text-white shadow'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              Full Office Setup
            </button>
          </div>
        </div>

        {/* Highlighted Machine Display Showcase */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* Machine Photo */}
          <div className="lg:col-span-6 relative aspect-[4/3] lg:aspect-auto min-h-[320px] bg-slate-900 overflow-hidden">
            <img
              src={current.image}
              alt={current.title}
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b1e3a]/90 via-transparent to-transparent lg:hidden" />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 rounded-full bg-[#0b1e3a]/90 text-amber-400 border border-amber-400/40 text-xs font-bold uppercase tracking-wide backdrop-blur-md">
                {current.badge}
              </span>
            </div>
            <div className="absolute bottom-4 left-4 right-4 lg:hidden text-white">
              <h3 className="font-display font-bold text-lg">{current.title}</h3>
            </div>
          </div>

          {/* Machine Specs and Details */}
          <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            
            <div className="space-y-4">
              <div className="hidden lg:block space-y-1">
                <span className="text-xs font-bold text-red-600 uppercase tracking-widest">
                  Verified In-House Hardware
                </span>
                <h3 className="font-display font-black text-2xl text-[#0b1e3a] tracking-tight">
                  {current.title}
                </h3>
                <p className="text-xs text-slate-500 font-medium">{current.tagline}</p>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed">
                {current.description}
              </p>

              {/* Hardware Specifications Table */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                  <Sliders className="w-3.5 h-3.5 text-blue-600" />
                  <span>Technical Capabilities</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {current.specs.map((spec, i) => (
                    <div key={i} className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                      <span className="text-slate-500 block text-[11px] font-medium">{spec.label}</span>
                      <span className="font-bold text-slate-900">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Applications List */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-amber-500" />
                  <span>Direct Deliverables from this Setup</span>
                </h4>
                <div className="grid grid-cols-2 gap-2 text-xs text-slate-700">
                  {current.applications.map((app, i) => (
                    <div key={i} className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span className="font-medium truncate">{app}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quote Action Bar */}
            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
              <button
                onClick={onOpenQuote}
                className="px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs tracking-wider uppercase transition-colors shadow-sm flex items-center gap-2 cursor-pointer"
              >
                <span>Request Custom Print Specs</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <a
                href="https://wa.me/256701099816"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1.5"
              >
                <span>Inquire about machine availability</span>
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
