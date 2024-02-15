import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();

  return (
    <nav className=" fixed left-0 w-full bg-transparent text-white z-50 h-20 top-5 inset-0">
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
