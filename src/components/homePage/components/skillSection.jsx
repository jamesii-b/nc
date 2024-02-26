import React from "react";
import { motion } from "framer-motion";
import softwareDevelopmentImage from "../../../assets/hero/graphics.png";
import uiUxDesignImage from "../../../assets/hero/graphics.png";
import webDevelopmentImage from "../../../assets/hero/graphics.png";
import mobileAppDevelopmentImage from "../../../assets/hero/graphics.png";
import iotImage from "../../../assets/hero/graphics.png";

const SkillSection = () => {
  return (
    <div className="bg-gray-100 py-20">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center  text-gray-800 mb-12">Our Services</h1>
        <div className="grid  grid-cols-1 md:grid-cols-3 bg-pink-200 gap-8">
          <SkillCard
            title="Software Development"
            description="Transform your ideas into reality with our bespoke software development solutions."
            image={softwareDevelopmentImage}
          />
          <SkillCard
            title="Internet of Things (IoT)"
            description="Unlock new possibilities with our innovative Internet of Things solutions."
            image={iotImage}
          />
        </div>
      </div>
    </div>
  );
};

const SkillCard = ({ title, description, image }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative group"
    >
      <div className="relative overflow-hidden rounded-lg mx-auto shadow-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-auto transform transition duration-300 ease-in-out group-hover:scale-125"
        />
        <div className="absolute inset-0 bg-blue-200 opacity-90 rounded-lg transition duration-300 ease-in-out group-hover:opacity-60"></div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="p-6 text-center">
          <h2 className="text-xl font-bold mb-2 text-white z-10">{title}</h2>
          <p className="text-gray-700">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default SkillSection;
