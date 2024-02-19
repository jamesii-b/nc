// Remove the invalid module declaration for '*.jpg'

import React from "react";
import { FaAngleDown } from "react-icons/fa";
import img01 from "../../../assets/img-main.jpg";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div>
      <div
        className="h-screen w-screen relative flex bg-cover bg-center bg-fixed bg-no-repeat max-w-full"
        style={{ backgroundImage: `url(${img01})`, backgroundSize: "cover" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute items-center top-72 left-40 font-body">
          <span className="text-4xl text-white ">Empowering</span>
          <br />
          <span className="text-6xl relative left-16 text-yellow-300 font-bold  ">
            Business
          </span>
          <br />
          <span className="text-4xl text-white ">With</span>
          <br />
          <span className="text-6xl relative left-16  text-yellow-300 font-bold ">
            Technology
          </span>
          <br />
          <div className="relative top-5">
            <Link to="/contact">
              <button className="bg-yellow-300 text-gray-800 px-4 py-2 rounded-full absolute  animate-pulse">
                Work With Us
              </button>
            </Link>
          </div>
        </div>
        <div className="m-auto">
          <FaAngleDown className="text-white absolute text-4xl bottom-10 animate-bounce " />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
