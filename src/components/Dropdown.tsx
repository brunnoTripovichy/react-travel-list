import React, { useState, useRef } from 'react';

interface DropdownProps<T> {
  id: string;
  label: string;
  options: { value: T; label: string }[];
  value: T | null;
  onChange: (value: T) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
}

const Dropdown = <T,>({
  id,
  label,
  options,
  value,
  onChange,
  placeholder = 'Select an option...',
  className = '',
  disabled = false,
}: DropdownProps<T>) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    if (!disabled) {
      setIsOpen((prev) => !prev);
    }
  };

  // Close dropdown when clicking outside
  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setTimeout(() => setIsOpen(false), 150); // Delay to prevent instant closing
    }
  };

  React.useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div
      className={`flex flex-col gap-1 relative w-full ${className}`}
      ref={dropdownRef}
    >
      {/* Dropdown Label */}
      <label
        htmlFor={id}
        className="text-gray-600 text-xs sm:text-sm md:text-md font-medium select-none"
      >
        {label}
      </label>

      {/* Select Dropdown with Placeholder */}
      <div
        className={`relative w-full px-2 py-1 sm:px-4 sm:py-1 md:px-4 md:py-2 text-xs sm:text-sm md:text-base 
                    border border-gray-300 rounded-md bg-white text-gray-800 shadow-sm cursor-pointer
                    focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all duration-200 select-none
                    hover:border-gray-400 disabled:cursor-not-allowed disabled:opacity-50 flex justify-between items-center`}
        onClick={toggleDropdown}
        tabIndex={0}
      >
        {/* ✅ Placeholder and Selected Value (Properly Aligned) */}
        <span className={`truncate ${value ? '' : 'text-gray-400'}`}>
          {value
            ? options.find((option) => option.value === value)?.label
            : placeholder}
        </span>

        {/* ✅ Aligned Custom SVG Caret */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-500 transition-all duration-200 ${
            isOpen ? 'rotate-180 text-blue-500' : 'text-gray-500'
          }`}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>

      {/* ✅ Dropdown Menu (Now Renders Below Input) */}
      {isOpen && (
        <ul
          className="absolute left-0 p-1 top-full w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto
                     transition-opacity duration-150 ease-in-out z-50 mt-1"
        >
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
              className="px-4 py-2 hover:bg-blue-100 cursor-pointer transition-colors duration-200 rounded-sm"
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
