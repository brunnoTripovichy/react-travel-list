import React from 'react';

interface Header3Props {
  children: React.ReactNode;
  className?: string; // Allow additional styling
}

const Header3: React.FC<Header3Props> = ({ children, className = '' }) => {
  return (
    <h3
      className={`text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 
                  tracking-tight leading-snug text-left select-none ${className}`}
      role="heading"
      aria-level={3}
    >
      {children}
    </h3>
  );
};

export default Header3;
