import React, { useState } from 'react';
import { Send, MessageCircle, Calculator, CheckCircle2, Phone, Clock, FileCheck, RefreshCw } from 'lucide-react';

interface QuoteCalculatorProps {
  initialService?: string;
  initialItem?: string;
  onClose?: () => void;
}

export const QuoteCalculator: React.FC<QuoteCalculatorProps> = ({
  initialService = 'LARGE FORMAT PRINTING',
  initialItem = '',
  onClose,
}) => {
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientCompany, setClientCompany] = useState('');
  const [serviceCategory, setServiceCategory] = useState(initialService);
  const [productItem, setProductItem] = useState(initialItem);
  const [quantity, setQuantity] = useState('100');
  const [specs, setSpecs] = useState('');
  const [urgency, setUrgency] = useState('Standard (2-3 Days)');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Common quick items per category
  const categoryItemsMap: Record<string, string[]> = {
    'LARGE FORMAT PRINTING': [
      'Pull Up Banners (Roll-up Base)',
      'Teardrop Banners (with cross base/spike)',
      'Backdrops Banners (Stage/Media)',
      'Car Branding (Full/Half wrap)',
      'Stickers & Die-Cut Decals',
      'Window Graphics (One-Way Vision)',
      'Posters (A0, A1, A2, A3)',
      'Billboards & Hoardings',
    ],
    'DIGITAL PRINTING': [
      'Business Cards (Standard 350gsm)',
      'Business Cards (Embossed/Gold Foil)',
      'Brochures (Bi-Fold / Tri-Fold)',
      'Certificates & Diplomas',
      'Desk Calendars with Wire-O binding',
      'Company Profiles & Books',
      'Flyers & Handbills (A5 / A6)',
      'Magazines & Product Catalogues',
      'Agendas & Conference Booklets',
      'Branded Envelopes & Letterheads',
    ],
    'MATERIAL BRANDING': [
      'Polo T-shirts (Embroidered)',
      'Roundneck T-shirts (Printed)',
      'Branded Tote Bags & Paper Bags',
      'Lanyards with Custom Card Holders',
      'Corporate Ceramic Mugs',
      'Nametags & Magnetic Badges',
      'Custom Branded Metal Pens',
      'Corporate Caps & Hats',
      'Branded Corporate Umbrellas',
      'Drink Ware (Thermal Flasks/Bottles)',
    ],
    '3D SIGNAGE': [
      'Illuminated Lightbox Signage',
      '3D Acrylic Dimensional Letters',
      'Brushed Stainless Steel 3D Channel Letters',
      'Reception Logo Wall (Halo Backlit)',
      'Neon Flex Signs',
      'Pylon & Directional Signboards',
    ],
    'Graphic Design': [
      'Complete Corporate Brand Identity Kit',
      'Logo Design (Vector master files)',
      'Brochure / Company Profile Layout',
      'Social Media Ads & Digital Banners',
      'Packaging & Product Label Design',
    ],
    'Passport & Interpol Processing Assistance': [
      'Passport Online Portal Form Typing',
      'Passport Express Appointment Scheduling Help',
      'Interpol Clearance Letter Typing',
      'Official Assessment Slip Generation',
    ],
  };

  const handleSendToWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    if (!clientName.trim()) {
      alert('Please enter your name.');
      return;
    }

    const whatsappNumber = '256701099816';
    const messageLines = [
      `*DEON ENTERPRISE - NEW QUOTE REQUEST*`,
      `-----------------------------------------`,
      `*Client Name:* ${clientName.trim()}`,
      `*Phone Number:* ${clientPhone.trim() || 'Not specified'}`,
      `*Organization:* ${clientCompany.trim() || 'Individual Client'}`,
      `*Service Category:* ${serviceCategory}`,
      `*Item/Product:* ${productItem || 'Custom Specs'}`,
      `*Quantity:* ${quantity}`,
      `*Dimensions / Specs:* ${specs || 'Standard Size'}`,
      `*Delivery Urgency:* ${urgency}`,
      `*Special Instructions:* ${notes || 'None'}`,
      `-----------------------------------------`,
      `*Source:* DEON ENTERPRISE Official Website (Zebra House Nasser Road)`,
    ];

    const encodedMessage = encodeURIComponent(messageLines.join('\n'));
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    setSubmitted(true);
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="quote" className="py-16 sm:py-24 bg-[#0b1e3a] text-white relative overflow-hidden">
      {/* Background styling */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5" />
            <span>Instant Quote to WhatsApp</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
            REQUEST AN ESTIMATE IN MINUTES
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Fill in your project details. We instantly prepare your formatted specifications and connect you directly to our Nasser Road senior production team on WhatsApp.
          </p>
        </div>

        {/* The Quote Form Card */}
        <div className="bg-slate-900/90 backdrop-blur-md rounded-3xl border border-white/15 p-6 sm:p-10 shadow-2xl">
          <div className="flex items-center gap-3 pb-6 border-b border-white/10 mb-6">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-white shadow-md border-2 border-red-500/80 shrink-0">
              <img
                src="/assets/aistudio/IMG-20261102-WA0058_7d208db8.jpg"
                alt="DEON ENTERPRISE"
                className="w-full h-full object-cover scale-[1.04]"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h3 className="font-display font-extrabold text-lg text-white">
                DEON ENTERPRISE · Quotation Desk
              </h3>
              <p className="text-xs text-amber-400 font-medium">
                Zebra House Level 1 &amp; Plot 27 Level 2, Nasser Road Kampala
              </p>
            </div>
          </div>

          <form onSubmit={handleSendToWhatsApp} className="space-y-6">
            
            {/* Row 1: Name and Contact */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <div>
                <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-2">
                  Your Full Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. David Mukasa"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/20 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-2">
                  WhatsApp Phone Number <span className="text-red-400">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. +256 700 123 456"
                  value={clientPhone}
                  onChange={(e) => setClientPhone(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/20 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-2">
                  Company / Brand (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. SMG Prime Supply (U) Ltd"
                  value={clientCompany}
                  onChange={(e) => setClientCompany(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/20 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
                />
              </div>
            </div>

            {/* Row 2: Service Selection & Product */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-2">
                  Service Category <span className="text-red-400">*</span>
                </label>
                <select
                  value={serviceCategory}
                  onChange={(e) => {
                    setServiceCategory(e.target.value);
                    setProductItem('');
                  }}
                  className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-white/20 text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 transition cursor-pointer"
                >
                  <option value="LARGE FORMAT PRINTING">1. LARGE FORMAT PRINTING (Banners, Stickers, Hoardings)</option>
                  <option value="DIGITAL PRINTING">2. DIGITAL PRINTING (Cards, Books, Profiles, Flyers)</option>
                  <option value="MATERIAL BRANDING">3. MATERIAL BRANDING (T-shirts, Mugs, Bags, Caps)</option>
                  <option value="3D SIGNAGE">4. 3D SIGNAGE (Lightboxes, Dimensional Acrylic Letters)</option>
                  <option value="Graphic Design">5. GRAPHIC DESIGN &amp; BRANDING</option>
                  <option value="Passport & Interpol Processing Assistance">6. PASSPORT &amp; INTERPOL TYPING ASSISTANCE (Legal Typing Only)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-2">
                  Specific Product / Item
                </label>
                <div className="space-y-2">
                  <select
                    value={productItem}
                    onChange={(e) => setProductItem(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-white/20 text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 transition cursor-pointer"
                  >
                    <option value="">Select a common item or type below...</option>
                    {(categoryItemsMap[serviceCategory] || []).map((item, idx) => (
                      <option key={idx} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                  <input
                    type="text"
                    placeholder="Or type custom item name here..."
                    value={productItem}
                    onChange={(e) => setProductItem(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-400 text-xs focus:outline-none focus:ring-1 focus:ring-amber-400"
                  />
                </div>
              </div>
            </div>

            {/* Row 3: Quantity, Specs, Urgency */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div>
                <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-2">
                  Estimated Quantity <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 50 pcs, 2 rollups, 500 cards"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/20 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-2">
                  Dimensions / Media Specs
                </label>
                <input
                  type="text"
                  placeholder="e.g. 85cm x 200cm / A4 / 350gsm"
                  value={specs}
                  onChange={(e) => setSpecs(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/20 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-2">
                  Timeline / Delivery Urgency
                </label>
                <select
                  value={urgency}
                  onChange={(e) => setUrgency(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-white/20 text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 transition cursor-pointer"
                >
                  <option value="Same-Day Express (Nasser Rd Pickup)">Same-Day Express (Nasser Rd Pickup)</option>
                  <option value="24 Hours Express">24 Hours Express</option>
                  <option value="Standard (2-3 Days)">Standard (2-3 Days)</option>
                  <option value="Flexible (Best Price)">Flexible (Best Volume Price)</option>
                </select>
              </div>
            </div>

            {/* Row 4: Notes / Instructions */}
            <div>
              <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-2">
                Additional Notes, Colors or Finishing Details
              </label>
              <textarea
                rows={3}
                placeholder="Describe your design readiness (e.g., 'I have PDF vector artwork ready', 'Need design assistance', 'Gloss lamination preferred', etc.)"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/20 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 transition resize-none"
              />
            </div>

            {/* Submit Action Button */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-400 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Direct WhatsApp message dispatched to +256 701099816</span>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-slate-950 font-black text-sm uppercase tracking-wider bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-300 hover:from-amber-300 hover:to-amber-200 shadow-xl shadow-amber-500/20 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 text-slate-950" />
                <span>Send Quote Request to WhatsApp</span>
              </button>
            </div>

            {submitted && (
              <div className="p-4 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-200 text-xs flex items-center justify-between">
                <span>
                  Quote specifications prepared and forwarded to DEON ENTERPRISE WhatsApp! If WhatsApp did not open automatically,{' '}
                  <a
                    href="https://wa.me/256701099816"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline font-bold text-emerald-300"
                  >
                    click here to open WhatsApp directly
                  </a>.
                </span>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="text-emerald-400 hover:text-white text-xs underline font-semibold ml-3"
                >
                  Dismiss
                </button>
              </div>
            )}

          </form>
        </div>

      </div>
    </section>
  );
};
