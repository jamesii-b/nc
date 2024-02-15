import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <nav
      className={`fixed left-0 w-full text-white z-50 h-20 top-0 inset-0 transition-colors duration-300 ${
        scrolled ? "bg-gray-900" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="px-24 space-x-16">
          <Link
            to="/"
            className={`text-lg font-semibold ${
              location.pathname === "/"
                ? "text-yellow-300 overline leading-loose "
                : "hover:text-yellow-300"
            }`}
          >
            Home
          </Link>
          <Link
            to="/what-we-do"
            className={`ml-4 text-lg font-semibold ${
              location.pathname === "/what-we-do"
                ? "text-yellow-300 overline leading-loose"
                : "hover:text-yellow-300"
            }`}
          >
            What We Do?
          </Link>
          <Link
            to="/about"
            className={`ml-4 text-lg font-semibold ${
              location.pathname === "/about"
                ? "text-yellow-300 overline leading-loose"
                : "hover:text-yellow-300"
            }`}
          >
            About
          </Link>
        </div>
        <div>
          <Link to="/contact">
            <button className="bg-yellow-300 text-gray-800 px-4 py-2 rounded-full">
              Work With Us
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
