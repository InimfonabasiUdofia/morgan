
import { Facebook, Instagram, Youtube, } from "lucide-react";
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <>
      <section className="bg-white pt-20 pb-10 text-center">
        <p className="uppercase text-lg tracking-widest mb-6 font-[Montserrat]">
          Follow Me On Instagram
        </p>
        <div className=" lg:px-20 px-5 lg:pt-8 pt-5 grid grid-cols-2  sm:grid-cols-2 md:grid-cols-6 gap-4">
          <img
            src="https://picsum.photos/id/1018/1920/1080"
            alt="insta1"
            className="w-full h-[200px] object-cover transition-transform duration-300 group-hover:brightness-110 "
          />
          <img
            src="https://picsum.photos/id/1018/1920/1080"
            alt="insta2"
            className="w-full h-[200px] object-cover transition-transform duration-300 group-hover:brightness-110 "
          />
          <img
            src="https://picsum.photos/id/1018/1920/1080"
            alt="insta1"
            className="w-full h-[200px] object-cover transition-transform duration-300 group-hover:brightness-110 "
          />
          <img
            src="https://picsum.photos/id/1018/1920/1080"
            alt="insta2"
            className="w-full h-[200px] object-cover transition-transform duration-300 group-hover:brightness-110 "
          />
          <img
            src="https://picsum.photos/id/1018/1920/1080"
            alt="insta1"
            className="w-full h-[200px] object-cover transition-transform duration-300 group-hover:brightness-110 "
          />
          <img
            src="https://picsum.photos/id/1018/1920/1080"
            alt="insta2"
            className="w-full h-[200px] object-cover transition-transform duration-300 group-hover:brightness-110"
          />
        </div>
         <div className="text-center mb-6">
        <h2 className="text-lg font-[Montserrat] tracking-wide pt-10">@PIXIESET</h2>
      </div>

      <div className="flex flex-wrap justify-center space-x-6 text-sm font-medium text-gray-800 pt-5">
        <a href="#" className="hover:text-gray-600 transition-colors">
          <Facebook className="w-5 h-5" />
        </a>
        <a href="#" className="hover:text-gray-600 transition-colors">
          <Instagram className="w-5 h-5" />
        </a>
        {/* <a href="#" className="hover:text-gray-600 transition-colors">
          <Pinterest className="w-5 h-5" />
        </a> */}
        <a href="#" className="hover:text-gray-600 transition-colors">
          <Youtube className="w-5 h-5" />
        </a>
      </div>

      {/* Menu */}
      <div className="flex flex-wrap justify-center space-x-6 text-sm font-medium text-gray-800 mb-10 pt-10 font-[Montserrat] gap-2">
        <Link  className="hover:text-gray-600" to="/">HOME</Link>
        <Link  className="hover:text-gray-600" to="/about">ABOUT</Link>
        <Link  className="hover:text-gray-600" to="">PORTFOLIO</Link>
        <Link  className="hover:text-gray-600" to="/blog">BLOG</Link>
        <Link  className="hover:text-gray-600" to="">INFO</Link>
        <Link  className="hover:text-gray-600" to="/contact">CONTACT</Link>
   
      </div>

      {/* Scroll to top */}
     
        <p className="text-xs text-gray-400">© 2025 Pixieset</p>
      </section>
    </>
  );
};
