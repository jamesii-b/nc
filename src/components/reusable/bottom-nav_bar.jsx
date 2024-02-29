import React from "react";
import { Link } from 'react-router-dom'

function BottomNavBar() {
  return (
    <div className="bg-sub_color min-h-max h-auto w-full z-50 bg-black text-white grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 px-4 md:px-10 py-6 md:py-10">
      <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
        <div className="font-bold text-xl md:text-2xl mb-2 md:mb-4">
          <Link to="/">
            Nepcodes
          </Link>
        </div>
        <div className="mb-2 md:mb-4 text-sm md:text-base text-gray-300">Your IT Companion.</div>
      </div>
      <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
        <div className="font-bold text-xl md:text-2xl mb-2 md:mb-4">About Company</div>
        <ul className="list-none">
          <li className="mb-1 md:mb-2"><Link to="/about"> About</Link></li>
          <li className="mb-1 md:mb-2"><Link to="/services"> Services</Link></li>
          <li className="mb-1 md:mb-2"><Link to="/what-we-do"> Work</Link></li>
        </ul>
      </div>
      <div className="flex flex-col items-center md:items-start">
        <div className="font-bold text-xl md:text-2xl mb-2 md:mb-4">Support</div>
        <div className="flex flex-col md:flex-row items-center">
          <input type="email" placeholder="Enter your email" className="bg-white text-black font-bold py-2 px-4 md:mr-2 mb-2 md:mb-0 w-full md:w-auto rounded-md shadow-md" style={{ outline: "none" }} />
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out w-full md:w-auto">
            Get a Proposal
          </button>
        </div>
        <ul className="list-none mt-3">
          <li className="mb-1 md:mb-2">
            <Link to="/faqs">
              FAQ
            </Link>
          </li>
          <li className="mb-1 md:mb-2">
            <Link to='/blogs'>
              Blogs
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default BottomNavBar;
