import React from "react";
import techStack from "../../assets/tech-stacks.png";
import s1 from "../../assets/s1.png";
import s2 from "../../assets/s2.png";
import growImg from "../../assets/growth.png";
import WhyUs from "../whyUs";
import { Link } from "react-router-dom";
import { FaDesktop, FaPalette } from "react-icons/fa";
import whatwedo01 from "../../assets/whatwedo01.png";
const WhatWeDo = () => {
  return (
    <>
      <div>
        <img src={whatwedo01} alt="" />
        <div>
          <h1 className="text-4xl font-bold text-center bg-blue-400 inline-block p-20 relative left-20 -top-14 text-gray-800 pt-8">
            What We Do
          </h1>
        </div>
      </div>
      <div className="container mx-auto relative -top-24 px-24">
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
          <div className="grid md:grid-cols-1 ml-40 gap-8 font-body">
            {/* Development Box */}
            <div className="flex flex-col min-w-screen/2 md:flex-row">
              <ServiceBox
                title="Development"
                description="We Develop fast and extensive software"
                color="bg-blue-200"
                icon={<FaDesktop className="text-5xl text-blue-500" />}
                image={s1}
              />
              <img src={s1} className="h-96" alt="" />
            </div>
            {/* UI and UX Box */}
            <div className="flex flex-col w-screen/2 pl-96 md:flex-row">
              <img src={s2} className="h-96" alt="" />
              <ServiceBox
                title="UI and UX"
                description="We Create elegant and pretty UI"
                color="bg-green-200"
                icon={<FaPalette className="text-5xl text-green-500" />}
                image={s2}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-tertiary max-h-min  py-8">
        <div className=" mx-auto text-center mb-8">
          <h2 className="text-3xl font-bold font-body">Why Nepcodes?</h2>
        </div>
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
          <WhyUs />
          <div className="relative pl-20">
            <img src={growImg} className="w-80 top-0 md:w-80 " alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

const ServiceBox = ({ title, description, color, icon, image }) => {
  return (
    <div
      className={`rounded-lg p-6 shadow-md ${color} hover:shadow-lg transition duration-300 transform hover:scale-105`}
    >
      <div className="flex items-center mb-4">
        <div className="mr-4 p-3 rounded-full bg-white">{icon}</div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-lg text-gray-700 mb-4">{description}</p>
      <div className="text-center">
        <Link
          to={`/what-we-do/${title.toLowerCase()}`}
          className="text-blue-600 hover:underline"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default WhatWeDo;
