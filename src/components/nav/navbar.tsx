import { useState } from "react";


export const Navbar = ({ navcolor }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const navbutton = [
    { name: "Home", link: "./home" },
    { name: "About", link: "./about" },
    { name: "Services", link: "./services" },
    { name: "Portfolio", link: "./portfolio" },
    { name: "Blog", link: "./blog" },
    { name: "Contact", link: "./contact" },
  ];

  return (
    <>
      <nav
        className={`absolute top-0 w-full flex justify-between items-center px-6 py-4 z-50 ${navcolor}`}
      >
        {/* Left Links - Desktop */}
        <div className="hidden md:flex space-x-6 lg:space-x-8">
          {navbutton.slice(0, 3).map((item, i) => (
            <a
              key={i}
              href={item.link}
              className="px-2 hover:text-gray-400 transition-colors duration-300 text-sm lg:text-base"
            >
              {item.name}
            </a>
          ))}
        </div>
          <div className="lg:hidden"></div>
        {/* Logo */}
        <div className="font-bold text-xl lg:text-2xl ">MORGAN</div>

        {/* Right Links - Desktop */}
        <div className="hidden md:flex space-x-6 lg:space-x-8">
          {navbutton.slice(3).map((item, i) => (
            <a
              key={i}
              href={item.link}
              className="px-2 hover:text-gray-400 transition-colors duration-300 text-sm lg:text-base"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Animated Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative w-8 h-8 flex items-center justify-center focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 relative flex flex-col items-center justify-center">
              <span
                className={`absolute w-full h-0.5 bg-current transform transition-all duration-300 ease-in-out ${
                  isOpen ? "rotate-45" : "-translate-y-2"
                }`}
              ></span>
              <span
                className={`absolute w-full h-0.5 bg-current transition-all duration-300 ease-in-out ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`absolute w-full h-0.5 bg-current transform transition-all duration-300 ease-in-out ${
                  isOpen ? "-rotate-45" : "translate-y-2"
                }`}
              ></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Full-Screen Menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-95 z-40 md:hidden transition-all duration-500 ease-in-out ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`flex flex-col items-center justify-center h-full space-y-8 transform transition-all duration-500 ease-in-out ${
            isOpen ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
          }`}
        >
          {navbutton.map((item, i) => (
            <a
              key={i}
              href={item.link}
              className={`text-white text-3xl font-light hover:text-gray-400 transition-all duration-300 transform hover:scale-110 ${
                isOpen ? "animate-fadeInUp" : ""
              }`}
              style={{ animationDelay: `${i * 50}ms` }}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.5s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default Navbar;