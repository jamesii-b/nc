import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";


function NavBar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showCategories, setShowCategories] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function toggleMenu() {
    setShowMenu(!showMenu);

  };
  const handleHover = () => setShowCategories(true);
  const handleLeave = () => setShowCategories(false);

  return (
    <nav className={`fixed w-full text-secondary_text z-50 h-20 top-0 ${scrolled ? "bg-secondary" : "bg-transparent"}`}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="px-8 space-x-8">
          <button className="lg:hidden md:hidden text-2xl text-blue-300 focus:outline-none" onClick={toggleMenu}>
            {showMenu ?
              <IoCloseSharp className="text-white text-3xl" /> : <IoMdMenu className="text-white text-3xl" />
            }
          </button>
          <div className="hidden lg:block md:block">
            <Link to="/" className={`text-lg font-semibold ${location.pathname === "/" ? "text-blue-300 overline leading-loose" : "hover:text-blue-300"}`}>Home</Link>
            <Link to="/what-we-do" onMouseEnter={handleHover} onMouseLeave={handleLeave} className={`ml-4 text-lg font-semibold relative ${location.pathname.startsWith("/what-we-do") ? "text-blue-300 overline leading-loose" : "hover:text-blue-300"}`}>
              {showCategories && (
                <span className="absolute top-full left-0 max-w-full lg:max-w-md -ml-4 bg-blue-100 bg-opacity-80 p-4 rounded-md">
                  <div className="w-full lg:w-96 flex">
                    <Link to="/what-we-do/development" className="text-lg mr-6 font-semibold block mb-4 pr-6 border-r-2   border-gray-600">Development<div className="text-sm text-black mt-2">We provide web development services that are scalable, secure, and reliable.</div></Link>
                    <Link to="/what-we-do/ui-ux" className="text-lg font-semibold block">UI/UX Design<div className="text-sm text-black mt-2">We design user-friendly, intuitive, and visually appealing interfaces that enhance user experience.</div></Link>
                  </div>
                </span>
              )}
              What We Do?
            </Link>
            <Link to="/about" className={`ml-4 text-lg font-semibold ${location.pathname === "/about" ? "text-blue-300 overline leading-loose" : "hover:text-blue-300"}`}>About</Link>
            <Link to="/faqs" className={`ml-4 text-lg font-semibold ${location.pathname === "/faqs" ? "text-blue-300 overline leading-loose" : "hover:text-blue-300"}`}>FAQs</Link>
          </div>
        </div>
        <div className="hidden lg:block md:block">
          <Link to="/contact"><button className="bg-blue-400 text-gray-800 px-4 py-2 rounded-md">Work With Us</button></Link>
        </div>
      </div>
      {
        showMenu && (
          <div className="lg:hidden sm:visible md:hidden bg-blue-100 p-7 rounded-md">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-lg font-semibold py-1 px-4 rounded-md ">Home</Link>
              <hr className="border-blue-200 my-2" />
              <div className="flex flex-col">
                <div className="flex items-center">
                  <Link to="/what-we-do" className="text-lg font-semibold py-1 px-4 rounded-md ">What We Do?</Link>
                  <FaAngleDown className="text-2xl ml-2" />
                </div>
                <div className="pl-8">
                  <Link to="/what-we-do/development" className="text-lg font-semibold block py-1 px-4 rounded-md hover:bg-blue-200">Web Development</Link>
                  <Link to="/what-we-do/ui-ux" className="text-lg font-semibold block py-1 px-4 rounded-md ">UI/UX Design</Link>
                </div>
              </div>
              <hr className="border-blue-200 my-2" />
              <Link to="/about" className="text-lg font-semibold py-1 px-4 rounded-md ">About</Link>
              <Link to="/faqs" className="text-lg font-semibold py-1 px-4 rounded-md ">FAQs</Link>
              <hr className="border-blue-200 my-2" />
              <Link to="/contact">
                <button className="bg-blue-400 text-gray-800 py-2 px-4 rounded-md ">Work With Us</button>
              </Link>
            </div>
          </div>


        )
      }
    </nav >
  );
}

export default NavBar;
