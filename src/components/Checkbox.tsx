import React from 'react';

interface CheckboxProps {
  id: string;
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  className?: string;
  disabled?: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({
  id,
  label,
  checked,
  onChange,
  className = '',
  disabled = false,
}) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Hidden Checkbox Input */}
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled}
        className="hidden peer"
      />

      {/* Custom Styled Checkbox */}
      <div
        tabIndex={-1} // Prevents keyboard focus causing caret
        className={`w-5 h-5 flex items-center justify-center border-2 rounded-md transition-all duration-200 cursor-pointer select-none
                   border-gray-400 hover:border-blue-600 // ✅ Unchecked now changes border on hover
                   peer-checked:bg-blue-500 peer-checked:border-blue-500
                   peer-checked:hover:bg-blue-600 peer-checked:hover:border-blue-600 // ✅ Checked changes both background & border
                   peer-disabled:cursor-not-allowed peer-disabled:opacity-50`}
      >
        {/* SVG Checkmark (Always White & Properly Centered) */}
        {checked && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-3.5 h-3.5 md:w-4 md:h-4 pointer-events-none"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        )}
      </div>

      {/* Clickable Label (Prevents Text Selection & Caret) */}
      <label
        htmlFor={id}
        className="text-gray-800 text-sm sm:text-base font-medium cursor-pointer select-none 
                   peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
      >
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
