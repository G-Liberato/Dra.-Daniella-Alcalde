
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  variant?: 'primary' | 'outline';
}

const Button: React.FC<ButtonProps> = ({ children, onClick, href, className = "", variant = 'primary' }) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 text-sm font-bold uppercase tracking-widest transition-all duration-300 rounded-full text-center";
  const variants = {
    primary: "gold-bg text-black hover:scale-105 shadow-lg shadow-yellow-900/20 active:scale-95",
    outline: "border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black"
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={combinedStyles}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedStyles}>
      {children}
    </button>
  );
};

export default Button;
