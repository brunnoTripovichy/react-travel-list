import React from 'react';

interface Header1Props {
  children: React.ReactNode;
  className?: string; // Allow custom styles if needed
}

const Header1: React.FC<Header1Props> = ({ children, className = '' }) => {
  return (
    <h1
      className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold 
                  text-blue-600 tracking-tight
                  drop-shadow-sm ${className}`}
      role="heading"
      aria-level={1}
    >
      {children}
    </h1>
  );
};

export default Header1;
