import React from 'react';

interface BrandLogoProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  className?: string;
  variant?: 'light' | 'dark';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  showText = false,
  className = '',
  variant = 'light',
}) => {
  const sizeMap = {
    xs: 'w-8 h-8',
    sm: 'w-10 h-10',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24',
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Circular Emblem with clipping to eliminate outer black JPG margins */}
      <div
        className={`${sizeMap[size]} rounded-full overflow-hidden bg-white shadow-md border-2 border-red-600/30 flex items-center justify-center shrink-0 transition-transform duration-300 hover:scale-105`}
      >
        <img
          src="/assets/aistudio/IMG-20261102-WA0058_7d208db8.jpg"
          alt="DEON ENTERPRISE - Beyond Service Logo"
          className="w-full h-full object-cover scale-[1.04]"
          referrerPolicy="no-referrer"
          loading="eager"
        />
      </div>

      {showText && (
        <div className="flex flex-col">
          <span
            className={`font-display font-extrabold tracking-tight leading-none ${
              variant === 'dark' ? 'text-[#0b1e3a]' : 'text-white'
            } text-lg sm:text-xl`}
          >
            DEON ENTERPRISE
          </span>
          <span className="text-[11px] font-bold tracking-widest text-amber-400 uppercase mt-1">
            Beyond Service
          </span>
        </div>
      )}
    </div>
  );
};
