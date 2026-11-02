import React, { useState } from 'react';
import {
  Palette,
  Printer,
  Sparkles,
  Box,
  MonitorPlay,
  PenTool,
  FileText,
  ShieldCheck,
  CheckCircle,
  ArrowRight,
  Info,
} from 'lucide-react';

interface FullServicesGridProps {
  onSelectService: (serviceName: string) => void;
}

export const FullServicesGrid: React.FC<FullServicesGridProps> = ({ onSelectService }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'creative' | 'signage' | 'legal-typing'>('all');

  const services = [
    {
      id: 'graphic-design',
      category: 'creative',
      title: 'Graphic Design',
      icon: Palette,
      color: 'text-blue-600 bg-blue-50 border-blue-200',
      description:
        'Professional visual identity, vector artwork, social media graphics, print layouts, packaging, and marketing collateral designed by experienced Kampala designers.',
      deliverables: ['Vector Brand Assets', 'Print-Ready CMYK Files', 'Social Media Graphics', 'Brochure & Book Layouts'],
      tag: 'Creative Studio',
    },
    {
      id: 'printing',
      category: 'creative',
      title: 'Printing (Large Format & Digital)',
      icon: Printer,
      color: 'text-red-600 bg-red-50 border-red-200',
      description:
        'End-to-end commercial printing on our in-house Funsun & Konica Minolta press fleet. From single express prototypes to thousands of books, cards, and banners.',
      deliverables: ['Pullup & Teardrop Banners', 'Business Cards & Flyers', 'Corporate Booklets & Calendars', 'Stickers & Decals'],
      tag: 'In-House Press',
    },
    {
      id: 'branding',
      category: 'creative',
      title: 'Material Branding',
      icon: Sparkles,
      color: 'text-amber-600 bg-amber-50 border-amber-200',
      description:
        'Comprehensive corporate merchandise branding using embroidery, heat transfer, and screen printing. Custom apparel, office stationary, drinkware, and promotional gifts.',
      deliverables: ['Polo & T-shirts', 'Lanyards & ID Cards', 'Custom Branded Mugs', 'Tote Bags & Umbrellas'],
      tag: 'Merchandise',
    },
    {
      id: '3d-signage',
      category: 'signage',
      title: '3D Signage',
      icon: Box,
      color: 'text-indigo-600 bg-indigo-50 border-indigo-200',
      description:
        'Architectural, retail, and corporate 3D signs. Backlit dimensional acrylic letters, stainless steel channel signs, outdoor lightboxes, and pylon signs engineered for endurance.',
      deliverables: ['Illuminated Lightboxes', 'Acrylic Dimensional Letters', 'Brushed Metal Channel Signs', 'Reception Feature Walls'],
      tag: 'Architectural',
    },
    {
      id: 'digital-adverts',
      category: 'creative',
      title: 'Digital Adverts',
      icon: MonitorPlay,
      color: 'text-emerald-600 bg-emerald-50 border-emerald-200',
      description:
        'High-converting digital advertising graphics, digital screen video billboards, animated social promotions, and web banner campaigns tailored for the East African market.',
      deliverables: ['Animated Ad Banners', 'LED Billboard Visuals', 'WhatsApp & Social Ad Kits', 'Motion Graphic Promos'],
      tag: 'Digital Media',
    },
    {
      id: 'logo-designing',
      category: 'creative',
      title: 'Logo Designing',
      icon: PenTool,
      color: 'text-purple-600 bg-purple-50 border-purple-200',
      description:
        'Memorable, timeless, and scalable brand marks crafted from scratch. We provide complete vector master files (AI, EPS, SVG, PNG) with full typography and brand guidelines.',
      deliverables: ['Custom Vector Logos', 'Brand Style Guide', 'Stationery Templates', 'Full Copyright Transfer'],
      tag: 'Brand Identity',
    },
    {
      id: 'passport-assistance',
      category: 'legal-typing',
      title: 'Passport Processing Assistance (Legal Typing Help Only)',
      icon: FileText,
      color: 'text-sky-700 bg-sky-50 border-sky-200',
      description:
        'Strictly professional typing, document formatting, and appointment scheduling support for clients submitting their official online passport applications to the Ministry of Internal Affairs Uganda.',
      deliverables: [
        'Official Portal Form Typing',
        'Document Dimension Formatting',
        'Appointment Slip Printing',
        'Strictly Legal & Compliant Process',
      ],
      tag: 'Legal Typing Only',
      notice: 'Legal typing & digital form filing assistance only. No document alteration or counterfeit services.',
    },
    {
      id: 'interpol-assistance',
      category: 'legal-typing',
      title: 'Interpol Letter Processing Assistance (Legal Typing Help Only)',
      icon: ShieldCheck,
      color: 'text-slate-800 bg-slate-100 border-slate-300',
      description:
        'Lawful typing assistance, formal letter drafting, fee payment generation assistance, and interview booking support for clients applying for Uganda Police Interpol Certificate of Good Conduct.',
      deliverables: [
        'Formal Application Letter Typing',
        'Online Assessment Slip Printing',
        'Requirement Checklist Review',
        'Legitimate Administrative Help',
      ],
      tag: 'Legal Typing Only',
      notice: 'Official typing support only. We operate in strict compliance with the Uganda Police Force guidelines.',
    },
  ];

  const filtered =
    activeTab === 'all' ? services : services.filter((s) => s.category === activeTab);

  return (
    <section id="all-services" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-red-600 bg-red-100/70 border border-red-200 px-3 py-1 rounded-full inline-block">
            Comprehensive Catalog
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#0b1e3a] tracking-tight">
            OUR COMPLETE SERVICES
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            From creative ideation and heavy industrial printing to corporate 3D signage and official administrative typing assistance.
          </p>
        </div>

        {/* Ethical Compliance Disclaimer Banner */}
        <div className="mb-10 p-4 rounded-xl bg-blue-50/80 border border-blue-200 text-blue-900 flex items-start gap-3 text-xs leading-relaxed">
          <Info className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
          <div>
            <strong className="font-bold">Strict Ethical &amp; Professional Standard:</strong> DEON ENTERPRISE only provides genuine, lawful design, commercial printing, branding, and legitimate administrative typing assistance. We do not edit, alter, or falsify scanned certificates, official stamps, identity records, or legal documents.
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'all'
                ? 'bg-[#0b1e3a] text-white shadow-md'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            All 8 Services
          </button>
          <button
            onClick={() => setActiveTab('creative')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'creative'
                ? 'bg-[#0b1e3a] text-white shadow-md'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Design, Printing &amp; Branding
          </button>
          <button
            onClick={() => setActiveTab('signage')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'signage'
                ? 'bg-[#0b1e3a] text-white shadow-md'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            3D Signage &amp; Lightboxes
          </button>
          <button
            onClick={() => setActiveTab('legal-typing')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'legal-typing'
                ? 'bg-[#0b1e3a] text-white shadow-md'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Passport &amp; Interpol Typing Assistance
          </button>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  {/* Icon & Tag */}
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center border ${service.color} group-hover:scale-110 transition-transform`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold tracking-wide uppercase px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                      {service.tag}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="font-display font-extrabold text-base text-[#0b1e3a] group-hover:text-red-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Legal Notice if applicable */}
                  {service.notice && (
                    <div className="p-2 rounded bg-amber-50 border border-amber-200 text-[11px] font-semibold text-amber-900 leading-tight">
                      {service.notice}
                    </div>
                  )}

                  {/* Deliverables */}
                  <div className="space-y-1.5 pt-2">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Key Highlights:
                    </p>
                    {service.deliverables.map((item, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-xs text-slate-700">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="pt-6 mt-6 border-t border-slate-100">
                  <button
                    onClick={() => onSelectService(service.title)}
                    className="w-full py-2 px-3 rounded-lg text-xs font-bold text-slate-900 bg-slate-100 hover:bg-amber-400 hover:text-slate-950 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Inquire / Request Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
