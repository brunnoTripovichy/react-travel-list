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

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-500">
          <ul className="flex flex-col items-center gap-4 py-4 text-white">
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
        </div>
      )}
    </header>
  );
};

export default Header;
