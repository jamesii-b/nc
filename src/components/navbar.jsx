import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [showCategories, setShowCategories] = useState(false);

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

  const handleHover = () => {
    setShowCategories(true);
  };

  const handleLeave = () => {
    setShowCategories(false);
  };

  return (
    <nav
      className={`fixed left-0 w-full text-white z-50 h-20 top-0 inset-0 transition-colors duration-300 ${
        scrolled ? "bg-gray-900" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="px-8 space-x-8">
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
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
            className={`ml-4 text-lg font-semibold relative ${
              location.pathname === "/what-we-do"
                ? "text-yellow-300 overline leading-loose"
                : "hover:text-yellow-300"
            }`}
          >
            {showCategories && (
              <span className="absolute top-full left-0 w-max -ml-4">
                <div className="bg-black bg-opacity-80 p-4 rounded-md">
                  <div>
                    <div className=" w-64 inline-block ">
                      <Link
                        to="/what-we-do/development"
                        className="text-lg mr-6 font-semibold block mb-4"
                      >
                        Web Development
                        <div className="text-sm text-white mt-2">
                          We provide web development services that are scalable,
                          secure, and reliable.
                        </div>
                      </Link>
                    </div>
                    <div className="w-64 inline-block">
                      <Link
                        to="/what-we-do/ui-ux"
                        className="text-lg font-semibold block"
                      >
                        UI/UX Design
                        <div className="text-sm text-white mt-2">
                          We design user-friendly, intuitive, and visually
                          appealing interfaces that enhance user experience.
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="w-64 inline-block">
                    <Link
                      to="/what-we-do/development"
                      className="text-lg mr-6 font-semibold block mb-4"
                    >
                      Mobile Development
                      <div className="text-sm text-white mt-2">
                        We provide web development services that are scalable,
                        secure, and reliable.
                      </div>
                    </Link>
                  </div>
                  <div className="w-64 inline-block">
                    <Link
                      to="/what-we-do/ui-ux"
                      className="text-lg font-semibold block"
                    >
                      DevOps
                      <div className="text-sm text-white mt-2">
                        We provide web development services that are scalable,
                        secure, and reliable.
                      </div>
                    </Link>
                  </div>
                </div>
              </span>
            )}
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
