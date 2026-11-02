import React, { useState } from 'react';
import { ArrowRight, Check, Printer, Layers, Shirt, MessageCircle, ExternalLink } from 'lucide-react';

interface ServicesThreeColumnsProps {
  onSelectServiceForQuote: (serviceName: string, item?: string) => void;
}

export const ServicesThreeColumns: React.FC<ServicesThreeColumnsProps> = ({ onSelectServiceForQuote }) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const columns = [
    {
      id: 'large-format',
      title: 'LARGE FORMAT PRINTING',
      subtitle: 'Outdoor, Indoor & Event Display Solutions',
      image: '/src/assets/images/large_format_printer_1793614303980.jpg',
      badge: 'High Res Eco-Solvent & UV',
      icon: Printer,
      accentColor: 'border-blue-600',
      headerBg: 'from-[#0b1e3a] to-[#1e3a8a]',
      items: [
        'Pull Up Banners',
        'Teardrop Banners',
        'Backdrops Banners',
        'Car Branding',
        'Stickers & Decals',
        'Window Graphics (One-Way Vision)',
        'Posters (Glossy / Matte)',
        'Billboards & Hoardings',
        '& More Custom Signage Media',
      ],
      description:
        'Vibrant, weather-resistant large format prints produced with industrial Funsun printers. UV-cured inks ensure zero fading under bright sunlight.',
      popularChoice: 'Pull Up Banners & Teardrop Flags',
    },
    {
      id: 'digital-printing',
      title: 'DIGITAL PRINTING',
      subtitle: 'High-Volume Commercial & Office Collateral',
      image: '/src/assets/images/digital_press_machine_1793614305176.jpg',
      badge: 'Konica Minolta Precision',
      icon: Layers,
      accentColor: 'border-red-600',
      headerBg: 'from-red-700 to-[#0b1e3a]',
      items: [
        'Brochures (Bi-Fold / Tri-Fold)',
        'Business Cards (Embossed & Matt)',
        'Certificates & Diplomas',
        'Desk Calendars & Wall Planners',
        'Books & Company Profiles',
        'Notebooks & Branded Diaries',
        'Flyers & Handbills',
        'Magazines & Catalogues',
        'Folders & Presentation Kits',
        'Agendas & Conference Booklets',
        'Branded Pens & Stationeries',
        'Envelopes & Letterheads',
        '& More Corporate Paperwork',
      ],
      description:
        'Fast-turnaround digital press with deep black text, photo-grade color registration, and automated precision scoring, folding, and trimming.',
      popularChoice: 'Business Cards & Desk Calendars',
    },
    {
      id: 'material-branding',
      title: 'MATERIAL BRANDING',
      subtitle: 'Corporate Apparel, Gifts & Promotional Assets',
      image: '/src/assets/images/material_branding_display_1793614305119.jpg',
      badge: 'Heat Press, Screen & Embroidery',
      icon: Shirt,
      accentColor: 'border-amber-500',
      headerBg: 'from-[#0b1e3a] to-amber-700',
      items: [
        'Branded Bags (Tote & Paper)',
        'Key Holders (Metal, Acrylic & Leather)',
        'Nametags & Metal Badges',
        'Corporate Shirts & Blouses',
        'T-shirts (Roundneck & Polo)',
        'Jackets & Windbreakers',
        'Sweaters & Hoodies',
        'Embroidered Caps & Hats',
        'Lanyards & ID Cards',
        'Silicone & Tyvek Wristbands',
        'Drink Ware (Mugs, Bottles & Flasks)',
        'Wall Clocks (Custom Branded)',
        'Umbrellas (Golf & Standard)',
        '& More Promotional Merchandise',
      ],
      description:
        'Elevate company visibility across Kampala and East Africa with high-durability apparel printing, sublimation, screen printing, and embroidery.',
      popularChoice: 'Polo T-shirts, Lanyards & Mugs',
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 border border-red-200 px-3 py-1 rounded-full">
            <span>Primary Divisions</span>
            <span>·</span>
            <span>Image 2 Reference Standard</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#0b1e3a]">
            OUR CORE PRODUCTION DIVISIONS
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            DEON ENTERPRISE houses state-of-the-art production lines right in Nasser Road, Kampala. Choose your printing division below for instant quotations and fast execution.
          </p>
        </div>

        {/* 3 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {columns.map((col) => {
            const Icon = col.icon;
            return (
              <div
                key={col.id}
                className="flex flex-col bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 hover:border-slate-300 shadow-md hover:shadow-xl transition-all duration-300 group"
              >
                {/* Column Visual Header with Badge */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900">
                  <img
                    src={col.image}
                    alt={col.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  
                  {/* Subtle Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1e3a]/90 via-[#0b1e3a]/30 to-transparent" />

                  {/* Top Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-md bg-[#0b1e3a]/90 backdrop-blur-sm text-amber-400 border border-amber-400/40 text-[11px] font-bold tracking-wide uppercase">
                      {col.badge}
                    </span>
                  </div>

                  {/* Bottom Header text inside image scrim */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider block">
                        Category 0{col.id === 'large-format' ? '1' : col.id === 'digital-printing' ? '2' : '3'}
                      </span>
                      <h3 className="font-display font-extrabold text-lg sm:text-xl text-white tracking-tight leading-tight">
                        {col.title}
                      </h3>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center shrink-0 shadow-md">
                      <Icon className="w-5 h-5 text-slate-950" />
                    </div>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                  
                  <div className="space-y-4">
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {col.description}
                    </p>

                    {/* Popular Choice Tag */}
                    <div className="p-2.5 rounded-lg bg-white border border-slate-200 text-xs flex items-center justify-between">
                      <span className="text-slate-500 font-medium">Most Requested:</span>
                      <span className="font-bold text-[#0b1e3a]">{col.popularChoice}</span>
                    </div>

                    {/* Items Checklist Exactly as required */}
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-red-600" />
                        <span>Included Products &amp; Formats</span>
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                        {col.items.map((item, idx) => (
                          <li
                            key={idx}
                            onClick={() => onSelectServiceForQuote(col.title, item)}
                            className="flex items-start gap-1.5 p-1.5 rounded hover:bg-amber-50 hover:text-slate-950 cursor-pointer transition-colors group/item"
                            title="Click to request quote for this item"
                          >
                            <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5 group-hover/item:scale-120 transition-transform" />
                            <span className="font-medium group-hover/item:font-semibold">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Actions for this column */}
                  <div className="pt-4 border-t border-slate-200/80 space-y-2">
                    <button
                      onClick={() => onSelectServiceForQuote(col.title)}
                      className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                    >
                      <span>Quote for {col.title.toLowerCase()}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <a
                      href={`https://wa.me/256701099816?text=Hello%20DEON%20ENTERPRISE,%20I%20am%20inquiring%20about%20${encodeURIComponent(col.title)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2 px-3 rounded-lg text-xs font-semibold text-slate-700 hover:text-emerald-700 hover:bg-emerald-50 transition-colors flex items-center justify-center gap-1.5 border border-slate-200"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Direct WhatsApp Inquiry</span>
                    </a>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Nasser Road Turnaround Promise Callout */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#0b1e3a] to-[#1e3a8a] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-amber-400 text-xs font-bold tracking-widest uppercase">
              DEON ENTERPRISE EXPRESS WORKSHOP
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-extrabold">
              Need Urgent Same-Day Printing in Kampala?
            </h3>
            <p className="text-sm text-slate-300 max-w-xl">
              We process urgent orders right from Zebra House Level 1 &amp; Plot 27 Level 2 on Nasser Road. Deliveries arranged throughout Uganda.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="tel:+256701099816"
              className="px-5 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md"
            >
              Call +256 701099816
            </a>
            <a
              href="https://wa.me/256701099816"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md flex items-center gap-1.5"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat Live on WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
