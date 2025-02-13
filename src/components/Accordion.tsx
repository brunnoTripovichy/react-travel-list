import React, { useState, useCallback } from 'react';

interface AccordionItem {
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean; // If true, multiple sections can be open at once
  className?: string;
}

const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
  className = '',
}) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  // Handle toggle logic
  const toggleItem = useCallback(
    (index: number) => {
      setOpenIndexes((prev) => {
        if (allowMultiple) {
          return prev.includes(index)
            ? prev.filter((i) => i !== index)
            : [...prev, index];
        }
        return prev.includes(index) ? [] : [index];
      });
    },
    [allowMultiple],
  );

  return (
    <div className={`w-full border border-gray-200 rounded-lg ${className}`}>
      {items.map((item, index) => {
        const isOpen = openIndexes.includes(index);

        return (
          <div key={index} className="border-b last:border-b-0">
            {/* Accordion Header */}
            <button
              className="w-full flex justify-between items-center px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-5 
                         text-left font-medium text-gray-800 bg-white hover:bg-gray-100 transition-all 
                         focus:outline-none focus:ring-2 focus:ring-blue-400"
              onClick={() => toggleItem(index)}
              aria-expanded={isOpen}
              aria-controls={`accordion-content-${index}`}
            >
              {item.title}
              <span
                className={`transform transition-transform duration-200 ${
                  isOpen ? 'rotate-180 text-blue-500' : 'text-gray-500'
                }`}
              >
                ▼
              </span>
            </button>

            {/* Accordion Content */}
            <div
              id={`accordion-content-${index}`}
              role="region"
              aria-labelledby={`accordion-header-${index}`}
              className={`overflow-hidden transition-[max-height] duration-300 ${
                isOpen ? 'max-h-96' : 'max-h-0'
              }`}
            >
              <div className="px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 text-gray-700 bg-gray-50">
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
