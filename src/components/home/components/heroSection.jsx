import React from "react";
import { motion } from "framer-motion";
import { FaAngleDown } from "react-icons/fa";
import img01 from "/public/hero/img-main.webp";
import { Link } from "react-router-dom";


function HeroSection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative h-screen bg-cover bg-center bg-fixed bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `url(${img01})` }}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1.5 }}
        className="absolute inset-0 flex flex-col justify-center items-center text-center text-white"
      >

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-body font-bold  text-yellow-400 ">
          Empowering Businesses Through <br /> IT Solutions
        </h1>

        <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-3xl mb-8 text-gray-300">
          Partnering with businesses to navigate the digital landscape and achieve unparalleled success.
        </p>
        <div className="flex justify-center">
          <Link
            to="/contact"
            className="bg-gradient-to-r from-blue-500 to-blue-600 hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700 text-white text-lg sm:text-xl lg:text-2xl font-semibold py-3 px-8 rounded-md shadow-md mr-4 transition duration-300 ease-in-out"
          >
            Work with Us
          </Link>
          <Link to="/about" className="text-lg sm:text-xl lg:text-2xl text-white rounded-md py-3 px-8 border border-white hover:bg-white hover:text-blue-600 transition duration-300 ease-in-out">
            Why Us?
          </Link>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-0 w-full text-center mb-8"
      >
        <FaAngleDown className="text-white text-3xl mx-auto sm:text-4xl lg:text-4xl animate-bounce" />
      </motion.div>
    </motion.div>
  );
}

export default HeroSection;
