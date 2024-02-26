import React from "react";
import { FaAngleDown } from "react-icons/fa";
import img01 from "../../../assets/img-main.jpg";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div className="relative h-screen bg-cover bg-center bg-fixed bg-no-repeat" style={{ backgroundImage: `url(${img01})` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-body font-bold mb-6">
          Empowering Businesses Through Strategic Technology Solutions
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl  leading-relaxed max-w-3xl mb-8">
          Partnering with businesses to navigate the digital landscape and achieve unparalleled success.
        </p>
        <div className="flex justify-center">
          <Link to="/contact" className="bg-primary hover:bg-primary text-white text-lg sm:text-xl lg:text-2xl font-semibold py-3 px-8 rounded-md mr-4">
            Work with Us
          </Link>
          {/* <Link to="/about" className="bg-secondary hover:bg-secondary text-lg sm:text-xl lg:text-2xl text-white rounded-md py-3 px-8"> */}
          <Link to="/about" className="text-lg sm:text-xl lg:text-2xl text-white rounded-md py-3 px-8">
            Why Us?
          </Link>
        </div>
      </div>
      <div className="absolute bottom-0 w-full text-center mb-8">
        <FaAngleDown className="text-white text-3xl mx-auto sm:text-4xl lg:text-4xl animate-bounce" />
      </div>
    </div>
  );
}

export default HeroSection;
