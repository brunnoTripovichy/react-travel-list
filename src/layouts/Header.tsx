import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 w-full bg-gradient-to-r from-blue-500 to-blue-400 text-white py-4 shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
        {/* Logo */}
        <h1 className="text-xl md:text-2xl font-bold tracking-wide whitespace-nowrap">
          ✈️ Travel List
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex flex-wrap gap-4 md:gap-6 text-sm md:text-lg">
            <li>
              <a
                href="#"
                className="hover:underline focus:ring-2 focus:ring-white"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline focus:ring-2 focus:ring-white"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline focus:ring-2 focus:ring-white"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center px-3 py-2 border border-white rounded focus:outline-none focus:ring-2 focus:ring-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>
      </div>

      {/* Mobile Fullscreen Overlay with True Transparent Background */}
      <div
        className={`fixed inset-0 bg-[rgba(0,0,0,0.7)] transition-opacity duration-300 flex items-center justify-center z-40 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      >
        <div
          className="bg-blue-500 w-5/6 max-w-sm p-6 rounded-lg shadow-lg text-center transition-transform transform 
                     duration-300 ease-in-out scale-95"
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
        >
          <ul className="flex flex-col gap-6 text-lg">
            <li>
              <a
                href="#"
                className="hover:underline focus:ring-2 focus:ring-white"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline focus:ring-2 focus:ring-white"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline focus:ring-2 focus:ring-white"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Close Button */}
          <button
            className="mt-6 px-4 py-2 bg-white text-blue-600 rounded shadow hover:bg-gray-200 focus:ring-2 focus:ring-blue-300"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            Close
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
