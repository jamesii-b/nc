import React from "react";
import techStack from "../../assets/tech-stacks.png";
import {
  FaMobileAlt,
  FaDesktop,
  FaCloud,
  FaPalette,
  FaGlobe,
} from "react-icons/fa";
import WhyUs from "../whyUs";
import growImg from "../../assets/growth.png";

const WhatWeDo = () => {
  return (
    <>
      <div className="container mx-auto pt-20 px-24">
        <div className="flex flex-col md:flex-row items-center mb-8">
          <div className="w-full md:w-1/2 mb-4 md:mb-0 pr-8">
            <h1 className="text-4xl font-bold mb-4 text-gray-800">
              What We Do
            </h1>
            <p className="text-lg text-gray-700">
              We specialize in providing top-notch IT outsourcing services
              tailored to meet your development and graphic design needs. Our
              mission is to transform your ideas into reality by leveraging
              cutting-edge technologies and creative expertise.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={techStack}
              className="w-4/5 rounded-lg"
              alt="Tech Stack"
            />
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceBox
              title="UI/UX Design"
              description="User-friendly, intuitive, and visually appealing interfaces."
              color="bg-blue-100"
              icon={<FaPalette />}
            />
            <ServiceBox
              title="Mobile Development"
              description="iOS and Android app development with a focus on performance."
              color="bg-green-100"
              icon={<FaMobileAlt />}
            />
            <ServiceBox
              title="Web Development"
              description="Responsive, scalable, and feature-rich web applications."
              color="bg-yellow-100"
              icon={<FaGlobe />}
            />
            <ServiceBox
              title="Desktop Development"
              description="Tailored desktop applications for your specific needs."
              color="bg-purple-100"
              icon={<FaDesktop />}
            />
            <ServiceBox
              title="Cloud Services/DevOps"
              description="Efficient deployment, management, and scaling of applications."
              color="bg-pink-100"
              icon={<FaCloud />}
            />
          </div>
        </div>
      </div>
      <div className="bg-tertiary py-8 ">
        <div className="container mx-auto text-center mb-8">
          <h2 className="text-3xl font-bold font-body">Why Nepcodes?</h2>
        </div>
        <div className="container mx-auto flex flex-col md:flex-row ">
          <WhyUs />
          <img
            src={growImg}
            className="absolute right-96 w-80 md:w-80 ml-auto"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

const ServiceBox = ({ title, description, color, icon }) => {
  return (
    <div
      className={`rounded-lg p-6 shadow-md ${color} hover:shadow-lg transition duration-300 transform hover:scale-105`}
    >
      <div className="flex items-center mb-4">
        <div className="mr-4 p-3 rounded-full bg-white">{icon}</div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-lg text-gray-700">{description}</p>
    </div>
  );
};

export default WhatWeDo;
