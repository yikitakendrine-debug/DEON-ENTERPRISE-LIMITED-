import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, ArrowUp, Printer, ArrowRight, ShieldCheck, CheckCircle2, Sparkles } from 'lucide-react';

interface FooterProps {
  onOpenQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuote }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0b1e3a] text-white border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Call-to-Action Bar */}
        <div className="pb-12 border-b border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
              Ready to print your next order?
            </span>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
              DEON ENTERPRISE — BEYOND SERVICE
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Where Ideas Become Visual · Zebra House Level 1 &amp; Plot 27 Level 2, Nasser Road Kampala
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://wa.me/256701099816"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Us Now</span>
            </a>
            <a
              href="tel:+256701099816"
              className="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call (+256 701099816)</span>
            </a>
            <button
              onClick={onOpenQuote}
              className="px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors shadow-lg cursor-pointer"
            >
              Request Quote
            </button>
          </div>
        </div>

        {/* The Signature Phrase Highlight Banner */}
        <div className="py-8 border-b border-white/10 my-4 bg-white/5 rounded-2xl px-6 sm:px-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center lg:text-left">
            <span className="text-[11px] font-bold text-amber-400 uppercase tracking-widest">
              The Guiding Brand Phrase
            </span>
            <h4 className="font-display font-black text-xl sm:text-2xl text-white">
              &ldquo;Where Ideas Become Visual &mdash; Beyond Service&rdquo;
            </h4>
            <p className="text-xs text-slate-300 max-w-2xl">
              At DEON ENTERPRISE, printing and branding is an exact discipline. We deliver uncompromising material quality, direct Nasser Road factory pricing, and support that goes truly beyond expectation.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-white shadow-lg border-2 border-red-500/80">
              <img
                src="/assets/aistudio/IMG-20261102-WA0058_7d208db8.jpg"
                alt="DEON ENTERPRISE Seal"
                className="w-full h-full object-cover scale-[1.04]"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="text-left">
              <span className="font-display font-bold text-sm block text-white">DEON ENTERPRISE</span>
              <span className="text-[10px] text-amber-300 uppercase tracking-widest font-semibold">&ldquo;Beyond Service&rdquo;</span>
            </div>
          </div>
        </div>

        {/* Audience / Target Market & MVP System Flow Quick Access Strip */}
        <div className="py-8 border-b border-white/10 grid grid-cols-1 md:grid-cols-2 gap-8 text-xs">
          {/* Target Audience Directory */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500" />
              <h5 className="font-display font-bold text-sm uppercase tracking-wider text-amber-400">
                Target Market &amp; Audience Directory
              </h5>
            </div>
            <ul className="space-y-1.5 text-slate-300">
              <li>
                <a href="#target-market" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-red-500 shrink-0" />
                  <span><strong>Corporate Enterprises &amp; B2B:</strong> Facade Lightboxes, Reports, Uniforms</span>
                </a>
              </li>
              <li>
                <a href="#target-market" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-red-500 shrink-0" />
                  <span><strong>Events &amp; Expos:</strong> Teardrop flags, Pull-up banners, Lanyards &amp; Wristbands</span>
                </a>
              </li>
              <li>
                <a href="#target-market" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-red-500 shrink-0" />
                  <span><strong>SMEs &amp; Retailers:</strong> Product stickers, Window graphics, Paper bags, Flyers</span>
                </a>
              </li>
              <li>
                <a href="#target-market" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-red-500 shrink-0" />
                  <span><strong>Institutions &amp; Schools:</strong> Certificates, Yearbooks, Campus Pylon signs</span>
                </a>
              </li>
              <li>
                <a href="#target-market" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-red-500 shrink-0" />
                  <span><strong>Walk-in Public:</strong> Lawful typing help (Passport &amp; Interpol), Fast binding</span>
                </a>
              </li>
            </ul>
          </div>

          {/* MVP System Flow Directory */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              <h5 className="font-display font-bold text-sm uppercase tracking-wider text-amber-400">
                5-Step MVP Production Pipeline
              </h5>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-300">
              <a href="#system-flow" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors block">
                <span className="font-mono text-amber-400 font-bold">01.</span> File Ingestion &amp; WhatsApp Quote
              </a>
              <a href="#system-flow" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors block">
                <span className="font-mono text-amber-400 font-bold">02.</span> Pre-Press CMYK &amp; Proofing
              </a>
              <a href="#system-flow" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors block">
                <span className="font-mono text-amber-400 font-bold">03.</span> Funsun &amp; Konica Minolta Press
              </a>
              <a href="#system-flow" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors block">
                <span className="font-mono text-amber-400 font-bold">04.</span> Lamination, Cut &amp; QC Audit
              </a>
              <a href="#system-flow" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors block sm:col-span-2">
                <span className="font-mono text-amber-400 font-bold">05.</span> Zebra House Counter Handover / Courier Dispatch
              </a>
            </div>
          </div>
        </div>

        {/* 4 Columns Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-white shadow-lg shrink-0 flex items-center justify-center border-2 border-red-500/60 ring-2 ring-white/10">
                <img
                  src="/assets/aistudio/IMG-20261102-WA0058_7d208db8.jpg"
                  alt="DEON ENTERPRISE Official Logo"
                  className="w-full h-full object-cover scale-[1.04]"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="font-display font-black text-lg text-white block">
                  DEON ENTERPRISE
                </span>
                <span className="text-[11px] font-bold text-amber-400 uppercase tracking-widest">
                  Beyond Service
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              Where Ideas Become Visual. Kampala’s dedicated commercial printing, branding, and 3D architectural signage partner.
            </p>

            <div className="text-xs text-slate-400 space-y-1">
              <p className="text-white font-semibold">Tagline:</p>
              <p>DESIGN &amp; PRINTING COMPANY</p>
            </div>
          </div>

          {/* Column 2: Nasser Road Locations */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
              Our Locations
            </h4>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Location 1:</strong>
                  <span>ZEBRA HOUSE LEVEL 1, NASSER ROAD KAMPALA</span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Location 2:</strong>
                  <span>Plot 27 Zehra House Level 2, Nasser Road, Kampala</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Production Lines */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <a href="#about" className="hover:text-amber-400 transition-colors">
                  About Us (Vision, Mission &amp; Goals)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  Core Divisions (Large Format · Digital · Branding)
                </a>
              </li>
              <li>
                <a href="#target-market" className="hover:text-amber-400 transition-colors">
                  Target Market &amp; Audiences
                </a>
              </li>
              <li>
                <a href="#system-flow" className="hover:text-amber-400 transition-colors">
                  MVP System Flow (5-Step Pipeline)
                </a>
              </li>
              <li>
                <a href="#machines" className="hover:text-amber-400 transition-colors">
                  Our Fleet (Funsun &amp; Konica Minolta)
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-amber-400 transition-colors">
                  Portfolio (SMG PRIME SUPPLY 3D Signage)
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Socials */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
              Contact Channels
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="tel:+256701099816" className="hover:text-amber-300 font-semibold font-mono">
                  +256 701099816
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href="https://wa.me/256701099816"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-300 text-emerald-400 font-semibold"
                >
                  WhatsApp: +256 701099816
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="mailto:deonlinus7@gmail.com" className="hover:text-amber-300">
                  deonlinus7@gmail.com
                </a>
              </div>
              <div className="pt-2 flex items-center gap-3">
                <a
                  href="https://instagram.com/DeonEnterprise"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-amber-400 transition-colors"
                >
                  Instagram: @DeonEnterprise
                </a>
              </div>
              <div>
                <a
                  href="https://facebook.com/DeonEnterpriseLtd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-amber-400 transition-colors"
                >
                  Facebook: @DeonEnterpriseLtd
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Scroll to Top */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} DEON ENTERPRISE. All Rights Reserved. Nasser Road, Kampala, Uganda.
          </div>

          <div className="flex items-center gap-6">
            <span className="font-semibold text-slate-300">&ldquo;Beyond Service&rdquo;</span>
            <span className="text-white/20">·</span>
            <span className="italic text-slate-300">&ldquo;Where Ideas Become Visual&rdquo;</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer flex items-center gap-1"
              title="Scroll back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
