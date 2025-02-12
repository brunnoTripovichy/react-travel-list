const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-gradient-to-r from-blue-500 to-blue-400 text-white py-4 shadow-md z-50">
      <div className="container mx-auto flex flex-wrap justify-between items-center px-4 md:px-8">
        <h1 className="text-xl md:text-2xl font-bold tracking-wide whitespace-nowrap">
          ✈️ Travel List
        </h1>
        <nav>
          <ul className="flex flex-wrap gap-4 md:gap-6 text-sm md:text-lg">
            <li>
              <a
                href="#"
                className="hover:underline focus:outline-none focus:ring-2 focus:ring-white"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline focus:outline-none focus:ring-2 focus:ring-white"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline focus:outline-none focus:ring-2 focus:ring-white"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
