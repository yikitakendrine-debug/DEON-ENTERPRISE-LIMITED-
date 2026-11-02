import React, { useState } from 'react';
import { Building2, Phone, Mail, MapPin, Eye, ExternalLink, CheckCircle, Sparkles, Box, ShieldCheck } from 'lucide-react';

interface PortfolioSectionProps {
  onOpenQuote: () => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onOpenQuote }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'signage' | 'branding' | 'largeformat'>('all');

  const portfolioItems = [
    {
      id: 'smg-prime',
      category: 'signage',
      title: 'SMG PRIME SUPPLY (U) LTD',
      subtitle: '3D Illuminated Lightbox Signage & Architectural Fascia',
      image: '/src/assets/images/portfolio_smg_prime_1793614305728.jpg',
      badge: 'Featured Corporate Signage Client',
      clientDetails: {
        sector: 'Construction and Supplies',
        location: 'Entebbe, UGANDA',
        email: 'smgprimeltd19@gmail.com',
        phones: ['+256 772 994 638', '+256 782 499686', '+256 772071613'],
      },
      description:
        'Custom manufactured 3D illuminated outdoor lightbox signage with precision acrylic lettering, internal weatherproof LED lighting module, and full corporate details for SMG PRIME SUPPLY (U) LTD facade in Entebbe.',
      highlight: 'Weatherproof IP67 LED lighting, precision laser-cut dimensional letters.',
    },
    {
      id: 'deon-reception',
      category: 'signage',
      title: 'DEON ENTERPRISE Headquarters Reception',
      subtitle: 'Illuminated Circular Logo & 3D Brand Signage Wall',
      image: '/assets/aistudio/IMG-20261102-WA0134_be8d3a30.jpg',
      badge: 'Internal Showroom Installation',
      clientDetails: {
        sector: 'Design & Commercial Print Showroom',
        location: 'Zebra House, Nasser Road, Kampala',
        email: 'deonlinus7@gmail.com',
        phones: ['+256 701099816'],
      },
      description:
        'Architectural statement wall featuring the circular backlit DEON ENTERPRISE emblem, halo illumination, and three dimensional sub-panels reading "PRINT · BRAND ADVERTISE · 3D SIGNAGE" over client reception desk.',
      highlight: 'Backlit halo LED glow, precision dimensional iconography.',
    },
    {
      id: 'material-gifts',
      category: 'branding',
      title: 'Executive Corporate Swag & Merchandising',
      subtitle: 'Embroidered Polo Shirts, Mugs, Nametags & Executive Pens',
      image: '/src/assets/images/material_branding_display_1793614305119.jpg',
      badge: 'Corporate Merchandise',
      clientDetails: {
        sector: 'Corporate Gifts & Uniforms',
        location: 'Kampala & Regional Hubs',
        email: 'deonlinus7@gmail.com',
        phones: ['+256 701099816'],
      },
      description:
        'High-density embroidery and screen printing for company polo shirts, thermal printed ceramic mugs, laser-engraved metal ballpoints, and branded woven lanyards.',
      highlight: 'Wash-resistant textile printing, crisp vector logo reproduction.',
    },
    {
      id: 'large-format-press',
      category: 'largeformat',
      title: 'Commercial Event Banners & Car Branding',
      subtitle: 'Heavy-duty Outdoor Teardrop Banners & High-Gloss Vehicle Decals',
      image: '/src/assets/images/large_format_printer_1793614303980.jpg',
      badge: 'Large Format Display',
      clientDetails: {
        sector: 'Advertising & Outdoor Media',
        location: 'Kampala & Countrywide Delivery',
        email: 'deonlinus7@gmail.com',
        phones: ['+256 701099816'],
      },
      description:
        'UV-resistant flex banners and vehicle wrapping vinyl printed on our in-house Funsun large format press. Designed to endure tropical weather without fading.',
      highlight: '3.2m seamless width, ultra-vibrant CMYK pigment registration.',
    },
  ];

  const filteredItems =
    activeCategory === 'all'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 border border-red-200 px-3 py-1 rounded-full inline-block">
              Proven Production Work
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-[#0b1e3a] tracking-tight">
              PORTFOLIO &amp; 3D SIGNAGE SHOWCASE
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Explore completed real-world projects crafted at DEON ENTERPRISE, including architectural 3D signage, corporate rebranding, and high-impact event displays.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl border border-slate-200 shrink-0">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-white text-slate-950 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setActiveCategory('signage')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeCategory === 'signage'
                  ? 'bg-white text-slate-950 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              3D Signage &amp; Lightboxes
            </button>
            <button
              onClick={() => setActiveCategory('branding')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeCategory === 'branding'
                  ? 'bg-white text-slate-950 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Corporate Merchandise
            </button>
            <button
              onClick={() => setActiveCategory('largeformat')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeCategory === 'largeformat'
                  ? 'bg-white text-slate-950 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Large Format
            </button>
          </div>
        </div>

        {/* Highlighted Marquee Showcase: SMG PRIME SUPPLY (U) LTD */}
        <div className="mb-14 rounded-3xl bg-gradient-to-br from-[#0b1e3a] via-[#0f284e] to-[#1e3a8a] text-white p-6 sm:p-10 border border-white/10 shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 right-0 -mt-8 -mr-8 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Column: Image of SMG Prime Signage */}
            <div className="lg:col-span-7">
              <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-xl group">
                <img
                  src="/src/assets/images/portfolio_smg_prime_1793614305728.jpg"
                  alt="SMG PRIME SUPPLY (U) LTD Construction and Supplies 3D Illuminated Lightbox Signage in Entebbe"
                  className="w-full h-72 sm:h-96 object-cover object-center group-hover:scale-103 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-md bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider">
                    Signage Masterpiece
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Exact Project Metadata */}
            <div className="lg:col-span-5 space-y-5">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 text-xs text-amber-400 font-bold tracking-widest uppercase">
                  <Box className="w-3.5 h-3.5" />
                  <span>3D Lightbox &amp; Architectural Lettering</span>
                </div>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight">
                  SMG PRIME SUPPLY (U) LTD
                </h3>
                <p className="text-sm font-semibold text-red-400">
                  Construction and Supplies · Entebbe, UGANDA
                </p>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                DEON ENTERPRISE fabricated and installed the complete exterior 3D illuminated acrylic lightbox fascia. Engineered with energy-efficient backlighting, aluminum composite panelling, and weatherproof seals.
              </p>

              {/* Verified Contact Details for Portfolio Client */}
              <div className="p-4 rounded-xl bg-white/10 border border-white/15 space-y-2 text-xs">
                <p className="font-bold text-amber-300 uppercase tracking-wider text-[11px]">
                  Verified Client Specification
                </p>
                <div className="flex items-center gap-2 text-slate-200">
                  <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Entebbe, Uganda</span>
                </div>
                <div className="flex items-center gap-2 text-slate-200">
                  <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>smgprimeltd19@gmail.com</span>
                </div>
                <div className="flex items-start gap-2 text-slate-200">
                  <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                  <div className="flex flex-wrap gap-x-2">
                    <span>+256 772 994 638</span>
                    <span className="text-white/40">·</span>
                    <span>+256 782 499686</span>
                    <span className="text-white/40">·</span>
                    <span>+256 772071613</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={onOpenQuote}
                  className="px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors shadow-md cursor-pointer"
                >
                  Quote Similar 3D Signage
                </button>
                <a
                  href="https://wa.me/256701099816?text=Hello%20DEON%20ENTERPRISE,%20I%20love%20the%20SMG%20PRIME%20SUPPLY%20lightbox%20signage.%20I%20would%20like%20a%20quote%20for%20my%20business."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs transition-colors flex items-center gap-1.5"
                >
                  <span>Chat with Fabricator</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>

          </div>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems
            .filter((item) => item.id !== 'smg-prime')
            .map((item) => (
              <div
                key={item.id}
                className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 hover:border-slate-300 shadow-md hover:shadow-xl transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] bg-slate-900 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-md bg-[#0b1e3a]/90 text-amber-400 border border-amber-400/40 text-[10px] font-bold tracking-wider uppercase backdrop-blur-sm">
                        {item.badge}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 space-y-3">
                    <div>
                      <h4 className="font-display font-extrabold text-lg text-[#0b1e3a]">
                        {item.title}
                      </h4>
                      <p className="text-xs font-semibold text-red-600 mt-0.5">{item.subtitle}</p>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="p-2.5 rounded-lg bg-white border border-slate-200 text-xs text-slate-700 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                      <span className="font-medium text-[11px]">{item.highlight}</span>
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <button
                    onClick={onOpenQuote}
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-slate-950 bg-slate-200 hover:bg-amber-400 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Request Similar Project</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
        </div>

      </div>
    </section>
  );
};
