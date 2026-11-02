import React, { useState } from 'react';
import { Phone, MessageCircle, Menu, X, Printer } from 'lucide-react';

interface HeaderProps {
  onOpenQuote: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuote }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0b1e3a]/95 backdrop-blur-md border-b border-white/10 text-white">
      {/* Top micro announcement bar */}
      <div className="bg-gradient-to-r from-red-600 via-[#1e3a8a] to-[#0b1e3a] text-white text-xs py-1.5 px-4 font-medium">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="bg-amber-400 text-slate-950 font-bold px-1.5 py-0.5 rounded text-[10px] tracking-wide uppercase shrink-0">
              Nasser Road, Kampala
            </span>
            <span className="truncate">
              Zebra House Level 1 &amp; Plot 27 Level 2 · Fast Turnaround &amp; Countrywide Delivery
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-4 shrink-0 text-slate-200 text-xs">
            <a href="tel:+256701099816" className="hover:text-amber-300 transition-colors flex items-center gap-1">
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>+256 701099816</span>
            </a>
            <span className="text-white/30">|</span>
            <a
              href="https://wa.me/256701099816"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-300 transition-colors flex items-center gap-1 font-semibold text-emerald-400"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Active</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Top Bar Contract: Brand Wordmark — 4-5 Nav Links — 1 Primary Action */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-6">
        {/* Zone 1: Brand Wordmark with Official DEON ENTERPRISE Logo */}
        <a href="#" className="flex items-center gap-3 group shrink-0">
          <div className="w-12 h-12 rounded-full overflow-hidden bg-white shadow-lg shadow-black/20 group-hover:scale-105 transition-transform shrink-0 flex items-center justify-center border-2 border-red-500/60 ring-2 ring-white/10">
            <img
              src="/assets/aistudio/IMG-20261102-WA0058_7d208db8.jpg"
              alt="DEON ENTERPRISE Official Logo"
              className="w-full h-full object-cover scale-[1.04]"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-extrabold text-xl tracking-tight text-white leading-none group-hover:text-amber-400 transition-colors">
              DEON ENTERPRISE
            </span>
            <span className="text-[11px] font-semibold tracking-widest text-amber-400 uppercase mt-1">
              Beyond Service
            </span>
          </div>
        </a>

        {/* Zone 2: Concise Nav Links */}
        <nav className="hidden xl:flex items-center gap-6 text-sm font-medium text-slate-200">
          <a href="#about" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
            About Us
          </a>
          <a href="#services" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
            Core Services
          </a>
          <a href="#target-market" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
            Target Audience
          </a>
          <a href="#system-flow" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
            MVP System Flow
          </a>
          <a href="#machines" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
            Our Machines
          </a>
          <a href="#portfolio" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
            Portfolio
          </a>
          <a href="#contact" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
            Locate Us
          </a>
        </nav>

        {/* Zone 3: 1 Primary CTA */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenQuote}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 shadow-md shadow-amber-500/20 active:scale-95 transition-all whitespace-nowrap shrink-0 cursor-pointer"
          >
            <Printer className="w-4 h-4 text-slate-950" />
            <span>Instant Quote</span>
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0b1e3a] border-t border-white/10 px-4 pt-4 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-white/10 hover:text-white"
            >
              About Us (Vision, Mission &amp; Goals)
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-white/10 hover:text-white"
            >
              Core Services (Large Format · Digital · Branding)
            </a>
            <a
              href="#target-market"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-white/10 hover:text-white"
            >
              Target Market &amp; Audience
            </a>
            <a
              href="#system-flow"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-white/10 hover:text-white"
            >
              MVP System Flow (5-Step Pipeline)
            </a>
            <a
              href="#machines"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-white/10 hover:text-white"
            >
              Production Machines (Funsun &amp; Konica Minolta)
            </a>
            <a
              href="#portfolio"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-white/10 hover:text-white"
            >
              Portfolio &amp; SMG Prime Signage
            </a>
            <a
              href="#all-services"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-white/10 hover:text-white"
            >
              Our Full Services List
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-white/10 hover:text-white"
            >
              Contact &amp; Nasser Road Locations
            </a>
          </nav>
          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full py-3 rounded-lg text-center font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors"
            >
              Calculate Quote / Send to WhatsApp
            </button>
            <div className="flex gap-2">
              <a
                href="https://wa.me/256701099816"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-center text-sm font-semibold flex items-center justify-center gap-1.5"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
              <a
                href="tel:+256701099816"
                className="flex-1 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-lg text-center text-sm font-semibold flex items-center justify-center gap-1.5"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
