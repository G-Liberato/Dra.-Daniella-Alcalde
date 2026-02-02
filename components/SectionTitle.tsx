
import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  light?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, light = false }) => {
  return (
    <div className="mb-12 text-center">
      {subtitle && (
        <span className="text-[#d4af37] text-xs font-bold uppercase tracking-widest mb-2 block">
          {subtitle}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl font-serif ${light ? 'text-white' : 'text-white'}`}>
        {title}
      </h2>
      <div className="w-16 h-1 gold-bg mx-auto mt-4 rounded-full"></div>
    </div>
  );
};

export default SectionTitle;
