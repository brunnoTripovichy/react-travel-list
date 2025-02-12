import React, { FormEvent, ReactNode } from 'react';

interface FormProps {
  children: ReactNode;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  className?: string; // Allow additional styling
  ariaLabel?: string; // Accessibility label
}

const Form: React.FC<FormProps> = ({
  children,
  onSubmit,
  className = '',
  ariaLabel,
}) => {
  return (
    <form
      onSubmit={onSubmit}
      className={`w-full  bg-white 
                  px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4
                  rounded-lg shadow-md transition-all duration-200 
                  focus-within:ring-2 focus-within:ring-blue-400 ${className}`}
      aria-label={ariaLabel || 'Form'}
    >
      {children}
    </form>
  );
};

export default Form;
