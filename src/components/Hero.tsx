import React from 'react';
import { Printer, Sparkles, Box, Phone, MessageCircle, ChevronRight, CheckCircle2, ShieldCheck, MapPin } from 'lucide-react';

interface HeroProps {
  onOpenQuote: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote }) => {
  return (
    <section className="relative overflow-hidden bg-[#0b1e3a] text-white pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-white/10">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#1e3a8a]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Badge: Quality Print Press Now Available */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-red-600/20 border border-red-500/40 text-red-300 text-xs sm:text-sm font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-red-500" />
              <span>Quality Print Press Now Available</span>
              <span className="text-white/40">·</span>
              <span className="text-amber-400 font-bold uppercase tracking-wider text-[11px]">Nasser Road Kampala</span>
            </div>

            {/* Main Headline with Official Logo Mark: DESIGN & PRINTING COMPANY */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-full overflow-hidden bg-white shadow-xl border-2 border-red-500/80 ring-2 ring-white/20 shrink-0">
                  <img
                    src="/assets/aistudio/IMG-20261102-WA0058_7d208db8.jpg"
                    alt="DEON ENTERPRISE Official Logo"
                    className="w-full h-full object-cover scale-[1.04]"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <p className="font-display text-xl sm:text-2xl font-extrabold text-red-500 tracking-wide leading-none">
                    DEON ENTERPRISE
                  </p>
                  <p className="text-amber-400 text-xs sm:text-sm font-semibold italic tracking-wide mt-1">
                    &ldquo;Beyond Service&rdquo;
                  </p>
                </div>
              </div>

              <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.08] text-white">
                DESIGN &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-200">PRINTING</span> COMPANY
              </h1>
            </div>

            {/* Tagline & Subtext */}
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
              <strong className="text-white font-semibold">Where Ideas Become Visual.</strong> Uganda&apos;s trusted commercial printing hub on Nasser Road. From vibrant large-format banners and high-volume digital press runs to corporate merchandise and bespoke 3D illuminated architectural signage.
            </p>

            {/* The 3 Core Pillars: PRINT | BRAND ADVERTISE | 3D SIGNAGE */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 flex flex-col items-center text-center hover:bg-white/10 transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-blue-600/30 text-amber-400 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <Printer className="w-5 h-5 text-amber-400" />
                </div>
                <span className="font-display font-extrabold text-xs sm:text-sm tracking-wider uppercase text-white">
                  PRINT
                </span>
                <span className="text-[11px] text-slate-400 mt-0.5 hidden sm:block">
                  Large Format &amp; Digital
                </span>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 flex flex-col items-center text-center hover:bg-white/10 transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-red-600/30 text-red-400 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <Sparkles className="w-5 h-5 text-red-400" />
                </div>
                <span className="font-display font-extrabold text-xs sm:text-sm tracking-wider uppercase text-white">
                  BRAND ADVERTISE
                </span>
                <span className="text-[11px] text-slate-400 mt-0.5 hidden sm:block">
                  Shirts, Mugs &amp; Gifts
                </span>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 flex flex-col items-center text-center hover:bg-white/10 transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-amber-500/20 text-amber-300 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <Box className="w-5 h-5 text-amber-300" />
                </div>
                <span className="font-display font-extrabold text-xs sm:text-sm tracking-wider uppercase text-white">
                  3D SIGNAGE
                </span>
                <span className="text-[11px] text-slate-400 mt-0.5 hidden sm:block">
                  Lightboxes &amp; Letters
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="https://wa.me/256701099816?text=Hello%20DEON%20ENTERPRISE,%20I%20would%20like%20to%20inquire%20about%20printing%20and%20branding%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-900/40 hover:shadow-emerald-600/30 transition-all active:scale-95"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Order via WhatsApp (+256 701099816)</span>
              </a>

              <button
                onClick={onOpenQuote}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-amber-400 hover:bg-amber-300 text-slate-950 shadow-lg shadow-amber-500/20 transition-all active:scale-95 cursor-pointer"
              >
                <span>Calculate &amp; Request Quote</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Quick Proof Trust Strip */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-300">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Heavy-Duty Funsun &amp; Konica Minolta Fleet</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Same-Day Nasser Rd Pickup</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Direct Factory Prices</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Asset (Showcasing DEON Reception Wall & illuminated branding) */}
          <div className="lg:col-span-5">
            <div className="relative group">
              {/* Outer decorative glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-red-600 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition duration-500" />
              
              <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-slate-900 shadow-2xl">
                <img
                  src="/assets/aistudio/IMG-20261102-WA0134_be8d3a30.jpg"
                  alt="DEON ENTERPRISE authentic office reception and illuminated logo wall at Zebra House Nasser Road"
                  className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-102 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />
                
                {/* Overlay Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1e3a] via-[#0b1e3a]/30 to-transparent pointer-events-none" />

                {/* Floating On-Image Card */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#0b1e3a]/90 backdrop-blur-md border border-white/15 text-white">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-amber-400/20 border border-amber-400/40 flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5 text-amber-400" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-amber-400 uppercase tracking-wide">
                          Visit Our Workshop
                        </p>
                        <p className="text-xs text-slate-200 font-medium">
                          Zebra House Level 1 &amp; Plot 27 Level 2, Nasser Road
                        </p>
                      </div>
                    </div>
                    <a
                      href="#contact"
                      className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold whitespace-nowrap transition-colors"
                    >
                      Map &amp; Hours
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
