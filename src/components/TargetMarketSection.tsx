import React, { useState } from 'react';
import { Building2, Users2, ShoppingBag, GraduationCap, UserCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

interface TargetMarketSectionProps {
  onSelectAudience: (categoryName: string) => void;
}

export const TargetMarketSection: React.FC<TargetMarketSectionProps> = ({ onSelectAudience }) => {
  const [selectedSegment, setSelectedSegment] = useState(0);

  const segments = [
    {
      id: 'corporate-b2b',
      title: 'Corporate Enterprises & B2B Firms',
      icon: Building2,
      badge: 'High-Volume & Institutional',
      accentColor: 'border-blue-600',
      description:
        'Established companies requiring consistent brand governance across national footprints. From architectural 3D lightbox signs and reception walls to executive stationery, staff uniforms, and annual reports.',
      needs: [
        '3D Illuminated Signage (e.g. SMG PRIME SUPPLY)',
        'Company Profiles, Catalogues & Annual Reports',
        'Embroidered Executive Polo Shirts & Staff Nametags',
        'Branded Presentation Folders & Letterheads',
        'Scheduled recurring print fulfillment',
      ],
      clientPersona: 'Procurement Managers, Marketing Directors & Corporate Communications',
    },
    {
      id: 'events-exhibitions',
      title: 'Events, Summits & Expos',
      icon: Users2,
      badge: 'Time-Sensitive Express',
      accentColor: 'border-red-600',
      description:
        'Event managers and conference conveners who require high-impact visual displays with non-negotiable delivery deadlines across Kampala, Entebbe, and regional conference hubs.',
      needs: [
        'Roll-up & Pullup Banners (Standard & Wide Base)',
        'Teardrop & Feather Event Banners',
        'Stage Media Backdrops & Photo Booth Banners',
        'Custom Woven Lanyards, ID Badges & Wristbands',
        'Same-day emergency turnaround on Nasser Road',
      ],
      clientPersona: 'Event Organizers, PR Agencies & Conference Committees',
    },
    {
      id: 'smes-retail',
      title: 'SMEs, Retailers & Startups',
      icon: ShoppingBag,
      badge: 'Growth & Retail Branding',
      accentColor: 'border-amber-500',
      description:
        'Growing businesses, supermarkets, restaurants, and retail stores looking to establish a professional, recognizable identity at competitive Nasser Road factory rates.',
      needs: [
        'Custom Die-Cut Product Stickers & Decals',
        'Window Graphics (One-Way Vision)',
        'Storefront Fascia Signboards & Lightboxes',
        'Business Cards & Promotional Flyers',
        'Branded Packaging Bags (Paper & Canvas)',
      ],
      clientPersona: 'Business Owners, Retail Managers & Entrepreneurs',
    },
    {
      id: 'institutions-schools',
      title: 'Institutions & Universities',
      icon: GraduationCap,
      badge: 'Accredited Publications',
      accentColor: 'border-indigo-600',
      description:
        'Universities, secondary schools, medical centers, and religious institutions requiring large volume paper printing, tamper-evident security documents, and directional signage.',
      needs: [
        'Graduation Certificates & Diplomas',
        'School Magazines, Yearbooks & Desk Calendars',
        'Campus Pylon Signs & Directional Signage',
        'Exam Booklets & Security Bound Registers',
        'Corporate Staff Umbrellas & Caps',
      ],
      clientPersona: 'School Bursars, Academic Registrars & Church Committees',
    },
    {
      id: 'walk-in-public',
      title: 'Walk-in & Legal Typing Assistance',
      icon: UserCheck,
      badge: 'Individual & Civic Support',
      accentColor: 'border-emerald-600',
      description:
        'Daily visitors to Zebra House seeking fast, lawful administrative typing support, CV typesetting, official online appointment scheduling, and instant document reproduction.',
      needs: [
        'Passport Online Portal Form Typing (Lawful Help)',
        'Interpol Clearance Letter Typing (Lawful Help)',
        'Document Lamination, Spiral & Hard Cover Binding',
        'Express Color Photocopying & Plan Printing',
        'Walk-in direct service at Zebra House Level 1',
      ],
      clientPersona: 'Citizens, Job Applicants, Students & Nasser Road Walk-ins',
    },
  ];

  const current = segments[selectedSegment];

  return (
    <section id="target-market" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200 px-3.5 py-1 rounded-full">
            <span>Market Segmentation &amp; Audience Matrix</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#0b1e3a] tracking-tight">
            WHO WE SERVE &middot; TARGET AUDIENCE
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            DEON ENTERPRISE tailors print technologies and pricing structures to each market vertical, from blue-chip construction corporations in Entebbe to fast-turnaround walk-ins on Nasser Road.
          </p>
        </div>

        {/* Interactive Audience Navigation Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-10">
          {segments.map((seg, idx) => {
            const Icon = seg.icon;
            const isSelected = selectedSegment === idx;
            return (
              <button
                key={seg.id}
                onClick={() => setSelectedSegment(idx)}
                className={`p-4 rounded-2xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#0b1e3a] text-white border-[#0b1e3a] shadow-lg scale-102'
                    : 'bg-white text-slate-800 border-slate-200 hover:border-slate-300 hover:bg-slate-100/60'
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center mb-3 ${
                    isSelected ? 'bg-amber-400 text-slate-950' : 'bg-slate-100 text-slate-700'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider block mb-1 ${
                      isSelected ? 'text-amber-300' : 'text-slate-400'
                    }`}
                  >
                    0{idx + 1} &middot; Audience
                  </span>
                  <h4 className="font-display font-bold text-xs sm:text-sm leading-snug line-clamp-2">
                    {seg.title}
                  </h4>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Segment Deep Dive Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-bold uppercase tracking-wider">
                {current.badge}
              </span>
              <span className="text-slate-400">&middot;</span>
              <span className="text-xs font-semibold text-slate-500">
                Persona: {current.clientPersona}
              </span>
            </div>

            <h3 className="font-display font-black text-2xl sm:text-3xl text-[#0b1e3a] tracking-tight">
              {current.title}
            </h3>

            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              {current.description}
            </p>

            <div className="space-y-2.5 pt-2">
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                Primary Deliverables for this Segment:
              </h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                {current.needs.map((need, i) => (
                  <div key={i} className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 border border-slate-100">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="font-medium truncate">{need}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onSelectAudience(current.title)}
                className="px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors shadow-md flex items-center gap-2 cursor-pointer"
              >
                <span>Request {current.title.split(' ')[0]} Package</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`https://wa.me/256701099816?text=Hello%20DEON%20ENTERPRISE,%20I%20am%20inquiring%20about%20printing%20services%20for%20${encodeURIComponent(current.title)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1.5"
              >
                <span>Consult with Account Specialist</span>
                <span>&rarr;</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 bg-gradient-to-br from-[#0b1e3a] to-[#1e3a8a] text-white p-6 sm:p-8 rounded-2xl border border-white/10 shadow-lg space-y-4">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-widest block">
              The DEON Difference for {current.title.split(' ')[0]}
            </span>

            <h4 className="font-display font-extrabold text-xl text-white">
              Why Leaders Choose DEON ENTERPRISE
            </h4>

            <ul className="space-y-3 text-xs text-slate-200">
              <li className="flex items-start gap-2">
                <span className="text-amber-400 font-bold">&check;</span>
                <span><strong>No Outsource Delays:</strong> Every job is printed on our dedicated Funsun &amp; Konica Minolta lines.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 font-bold">&check;</span>
                <span><strong>Direct Nasser Rd Factory Prices:</strong> Zero agency surcharges or middlemen commissions.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 font-bold">&check;</span>
                <span><strong>Sample Proofing:</strong> Walk into Zebra House Level 1 and examine physical material swatches before full run.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 font-bold">&check;</span>
                <span><strong>Countrywide Logistics:</strong> Safe packaging and direct courier dispatch to all districts across Uganda.</span>
              </li>
            </ul>

            <div className="p-3 rounded-xl bg-white/10 border border-white/10 text-[11px] text-amber-300 font-medium italic">
              &ldquo;Beyond Service &mdash; Precision visual results that build lasting credibility.&rdquo;
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
