import { useState } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

export const Navbar = ({ navcolor }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const navbutton = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Portfolio", link: "/portfolio" },
    { name: "Services", link: "/services" },

    { name: "Blog", link: "/blog" },
    { name: "Contact", link: "/contact" },
  ];
  const [isOpen2, setIsOpen2] = useState(false);
 
  const options = ["Gallary1", "Gallary2", "Gallary3"];

  const handleSelect = (_option:string) => {
    setIsOpen(false);
  };

  return (
    <>
      <nav
        className={`absolute top-0 w-full flex justify-between items-center px-2 lg:px-30 py-5 z-50  ${navcolor}`}
      >
        {/* Left Links - Desktop */}
        <div className="hidden md:flex space-x-6 lg:space-x-8">
          <Link
            className="font-[Montserrat] px-2  text-sm lg:text-base"
            to={navbutton[0].link}
          >
            {navbutton[0].name}
          </Link>
          <Link
            className=" font-[Montserrat] px-2 text-sm lg:text-base"
            to={navbutton[1].link}
          >
            {navbutton[1].name}
          </Link>
        
          <div className="relative">
            {/* Dropdown Button */}
            <button
              onClick={() => setIsOpen2(!isOpen2)}
              className="font-[Montserrat] flex "
            >
              <span className="font-medium">Portfolio </span>
              <X
                className={`w-3 h-3 transition-transform duration-300 mt-[6px] ml-1  ${
                  isOpen2 ? "rotate-0" : "rotate-45"
                }`}
              />
            </button>
            <div
              className={`absolute text-black top-full left-0 mt-1 bg-white shadow-xl w-[150px] overflow-hidden transition-all duration-300 origin-top ${
                isOpen2
                  ? "opacity-100 visible scale-y-100"
                  : "opacity-0 invisible scale-y-95"
              }`}
            >
              {options.map((option, index) => (
                <div
                  key={index}
                  onClick={() => handleSelect(option)}
                  className="px-4 py-2 hover:bg-gray-100 active:bg-gray-200 cursor-pointer transition-colors duration-200 border-b border-gray-100 last:border-b-0"
                >
                  {option}
                </div>
              ))}
            </div>

            {isOpen2 && (
              <div
                onClick={() => setIsOpen2(false)}
                className="fixed inset-0 -z-10"
              />
            )}
          </div>
        </div>
        <div className="lg:hidden"></div>
        
        {/* Logo */}
        <div className={`font-[Montserrat] text-xl lg:text-2xl ${isOpen &&"text-white"} `}>MORGAN</div>

        {/* Right Links - Desktop */}
        <div className="hidden md:flex space-x-6 lg:space-x-8">
         
            <Link
            className="font-[Montserrat] px-2  text-sm lg:text-base"
            to={navbutton[3].link}
          >
            {navbutton[3].name}
          </Link>
          <Link
            className=" font-[Montserrat] px-2 text-sm lg:text-base"
            to={navbutton[4].link}
          >
            {navbutton[4].name}
          </Link>
           <Link
            className=" font-[Montserrat] px-2 text-sm lg:text-base"
            to={navbutton[5].link}
          >
            {navbutton[5].name}
          </Link>
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
                  isOpen ? "rotate-45 text-white" : "-translate-y-2"
                }`}
              ></span>
              <span
                className={`absolute w-full h-0.5 bg-current transition-all duration-300 ease-in-out ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`absolute w-full h-0.5 bg-current transform transition-all duration-300 ease-in-out ${
                  isOpen ? "-rotate-45 text-white" : "translate-y-2"
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
              className={`text-white text-xl  hover:text-gray-400 font-[Montserrat] transition-all duration-300 transform hover:scale-110 ${
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
