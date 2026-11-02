import React, { useState } from 'react';
import { MessageCircle, Phone, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2">
      {/* Tooltip speech bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 p-3 bg-white text-slate-900 rounded-xl shadow-xl border border-slate-200 text-xs animate-bounce">
          <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
          <span className="font-semibold">Chat with DEON Nasser Road on WhatsApp</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-slate-600 p-0.5 ml-1"
            aria-label="Close tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Button Group */}
      <div className="flex items-center gap-2">
        <a
          href="tel:+256701099816"
          className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg hover:bg-red-500 hover:scale-105 active:scale-95 transition-all"
          title="Call DEON ENTERPRISE (+256 701099816)"
          aria-label="Call DEON ENTERPRISE"
        >
          <Phone className="w-5 h-5" />
        </a>

        <a
          href="https://wa.me/256701099816?text=Hello%20DEON%20ENTERPRISE,%20I%20am%20visiting%20your%20website%20and%20need%20a%20printing%20quote."
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-2xl hover:bg-emerald-400 hover:scale-105 active:scale-95 transition-all relative group"
          title="Chat with DEON ENTERPRISE on WhatsApp"
          aria-label="WhatsApp DEON ENTERPRISE"
        >
          <MessageCircle className="w-7 h-7" />
          <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-amber-400 text-slate-950 text-[10px] font-black flex items-center justify-center border-2 border-white">
            1
          </span>
        </a>
      </div>
    </div>
  );
};
