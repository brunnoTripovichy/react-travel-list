const Footer = () => {
  return (
    <footer className="sticky bottom-0 w-full bg-yellow-100 text-gray-800 py-3 md:py-4 shadow-md">
      <div className="container mx-auto text-center text-sm md:text-lg">
        <p className="break-words">
          &copy; {new Date().getFullYear()} Travel List. All Rights Reserved.
        </p>
        <div className="mt-2 flex flex-wrap justify-center gap-3 md:gap-4">
          <a
            href="#"
            className="hover:text-blue-600 focus:ring-2 focus:ring-blue-400"
          >
            🌍 Instagram
          </a>
          <a
            href="#"
            className="hover:text-blue-600 focus:ring-2 focus:ring-blue-400"
          >
            📘 Facebook
          </a>
          <a
            href="#"
            className="hover:text-blue-600 focus:ring-2 focus:ring-blue-400"
          >
            🐦 Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
