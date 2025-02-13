import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  className?: string;
}

const InputText: React.FC<InputProps> = ({
  id,
  label,
  className = '',
  disabled = false,
  ...props
}) => {
  return (
    <div className={`flex flex-col gap-1 select-none relative ${className}`}>
      {/* Input Label */}
      <label
        htmlFor={id}
        className="text-gray-600 text-xs sm:text-sm md:text-md font-medium select-none"
      >
        {label}
      </label>

      {/* Styled Input Field */}
      <input
        id={id}
        type="text"
        disabled={disabled}
        aria-disabled={disabled}
        className={`w-full px-2 py-1 sm:px-4 sm:py-1 md:px-4 md:py-2 
                    text-xs sm:text-sm md:text-base border border-gray-300 
                    rounded-md bg-white text-gray-800 shadow-sm 
                    focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all duration-200
                    hover:border-gray-400 disabled:cursor-not-allowed disabled:opacity-50`}
        {...props}
      />
    </div>
  );
};

export default InputText;
