import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Clock,
  Compass,
  CheckCircle,
  ExternalLink,
  Copy,
  Check,
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('+256701099816');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 border border-red-200 px-3 py-1 rounded-full inline-block">
            Nasser Road Printing Hub
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#0b1e3a] tracking-tight">
            VISIT OUR KAMPALA WORKSHOP
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            DEON ENTERPRISE operates from two dedicated levels in Zebra House on Nasser Road, Kampala’s premier commercial graphic and printing boulevard.
          </p>
        </div>

        {/* Contact Info Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Locations & Direct Actions (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* The 2 Locations in Zebra House */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Location 1 */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 shadow-sm transition-all group">
                <div className="w-10 h-10 rounded-xl bg-blue-600/10 text-blue-700 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold text-red-600 uppercase tracking-wider block mb-1">
                  Primary Workshop &amp; Counter
                </span>
                <h3 className="font-display font-extrabold text-lg text-[#0b1e3a]">
                  Location 1: Zebra House Level 1
                </h3>
                <p className="text-xs text-slate-600 mt-2 font-medium">
                  ZEBRA HOUSE LEVEL 1, NASSER ROAD KAMPALA, UGANDA
                </p>
                <p className="text-[11px] text-slate-500 mt-2">
                  Walk-in counter for job orders, sample proofs, graphic design consultations, and express pickup.
                </p>
              </div>

              {/* Location 2 */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 shadow-sm transition-all group">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold text-red-600 uppercase tracking-wider block mb-1">
                  Production &amp; Finishing Facility
                </span>
                <h3 className="font-display font-extrabold text-lg text-[#0b1e3a]">
                  Location 2: Plot 27 Zehra House Level 2
                </h3>
                <p className="text-xs text-slate-600 mt-2 font-medium">
                  Plot 27 Zehra House Level 2, Nasser Road, Kampala
                </p>
                <p className="text-[11px] text-slate-500 mt-2">
                  Heavy-duty Funsun large-format press hall, Konica Minolta digital printing press, and 3D acrylic assembly.
                </p>
              </div>

            </div>

            {/* Direct Instant Channels Card */}
            <div className="p-6 rounded-2xl bg-[#0b1e3a] text-white shadow-xl space-y-5">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-display font-bold text-xl text-white">
                    Direct Production Line
                  </h4>
                  <p className="text-xs text-slate-300">
                    Reach Linus and the senior production team directly
                  </p>
                </div>
                <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Phone & WhatsApp */}
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="font-semibold uppercase tracking-wider">Phone / WhatsApp</span>
                    <button
                      onClick={handleCopyPhone}
                      className="hover:text-amber-300 flex items-center gap-1 cursor-pointer transition-colors"
                      title="Copy number"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copied ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>
                  <p className="text-lg font-bold text-amber-400 tracking-wide font-mono">
                    +256 701099816
                  </p>
                  <div className="flex gap-2 pt-1">
                    <a
                      href="https://wa.me/256701099816"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-1.5 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs text-center flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>
                    <a
                      href="tel:+256701099816"
                      className="flex-1 py-1.5 px-3 rounded-lg bg-red-600 hover:bg-red-500 text-white font-semibold text-xs text-center flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call Now</span>
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                  <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                    Official Email
                  </div>
                  <p className="text-sm font-bold text-white truncate">
                    deonlinus7@gmail.com
                  </p>
                  <p className="text-[11px] text-slate-400">
                    Send large design vector files (AI, PDF, CDR, TIFF)
                  </p>
                  <div className="pt-1">
                    <a
                      href="mailto:deonlinus7@gmail.com"
                      className="w-full py-1.5 px-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold text-xs text-center flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Email Artwork Files</span>
                    </a>
                  </div>
                </div>

              </div>

              {/* Working Hours */}
              <div className="pt-3 border-t border-white/10 flex flex-wrap items-center justify-between text-xs text-slate-300 gap-2">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-400" />
                  <span>Monday - Saturday: <strong>8:00 AM – 7:30 PM EAT</strong></span>
                </div>
                <div className="text-slate-400">
                  Sunday: <em>Emergency &amp; Pre-booked Orders</em>
                </div>
              </div>

            </div>

            {/* Social Media Links */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Official Channels:
              </span>
              <a
                href="https://instagram.com/DeonEnterprise"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-pink-50 text-slate-700 hover:text-pink-600 border border-slate-200 text-xs font-bold flex items-center gap-1.5 transition-colors"
              >
                {/* Instagram Icon */}
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span>@DeonEnterprise</span>
              </a>

              <a
                href="https://facebook.com/DeonEnterpriseLtd"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-blue-600 border border-slate-200 text-xs font-bold flex items-center gap-1.5 transition-colors"
              >
                {/* Facebook Icon */}
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span>@DeonEnterpriseLtd</span>
              </a>
            </div>

          </div>

          {/* Right Column: Directional Guide & Map Box (5 cols) */}
          <div className="lg:col-span-5 bg-slate-50 rounded-2xl border border-slate-200 p-6 space-y-5">
            <div className="flex items-center gap-2 text-xs font-bold text-[#0b1e3a] uppercase tracking-wider">
              <Compass className="w-4 h-4 text-red-600" />
              <span>How to Find Us on Nasser Road</span>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              Nasser Road is the commercial heartbeat of Kampala&apos;s printing district. When coming from Kampala Central Market or Entebbe Road:
            </p>

            <div className="space-y-3 text-xs text-slate-700">
              <div className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#0b1e3a] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                  1
                </span>
                <span>
                  Head down <strong>Nasser Road</strong> past the main stationary arcade complexes toward Entebbe Road junction.
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#0b1e3a] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                  2
                </span>
                <span>
                  Look for <strong>Zebra House</strong> (Plot 27). Enter the main stairway or elevator.
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#0b1e3a] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                  3
                </span>
                <span>
                  Visit <strong>Level 1</strong> for instant reception, proofing, and client desk, or <strong>Level 2</strong> for large-format press inspection.
                </span>
              </div>
            </div>

            {/* Visual Photo of DEON Reception & Location Badge */}
            <div className="rounded-2xl overflow-hidden border border-slate-300 relative group shadow-md">
              <div className="relative aspect-[16/11] overflow-hidden bg-slate-900">
                <img
                  src="/assets/aistudio/IMG-20261102-WA0134_be8d3a30.jpg"
                  alt="DEON ENTERPRISE Reception at Zebra House Level 1 Nasser Road"
                  className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1e3a]/90 via-[#0b1e3a]/20 to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-md bg-[#0b1e3a]/90 text-amber-400 border border-amber-400/40 text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm">
                    Level 1 Client Counter
                  </span>
                </div>
                <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
                  <div className="text-white">
                    <p className="font-display font-bold text-sm">
                      Zebra House, Plot 27
                    </p>
                    <p className="text-[11px] text-slate-300">
                      Nasser Road, Kampala
                    </p>
                  </div>
                  <a
                    href="https://maps.google.com/?q=Nasser+Road+Kampala+Uganda"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-bold transition-colors inline-flex items-center gap-1 shadow"
                  >
                    <span>Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
