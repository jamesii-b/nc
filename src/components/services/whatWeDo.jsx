import React from "react";
import techStack from "/services/tech-stacks.webp";
import s1 from "/services/s1.webp";
import s2 from "/services/s2.webp";
import WhyUs from "../whyUs";
import { Link } from "react-router-dom";
import { FaDesktop, FaPalette } from "react-icons/fa";
import HeadBar from "../reusable/head-bar";
import HeroCTA from "../reusable/HeroCTA";

const WhatWeDo = () => {
  return (
    <>
      <HeadBar title="Services" imageSrc="/services/01.webp" backgroundColor="bg-primary" />
      <div className="container mx-auto py-20 px-6 sm:px-24"> {/* Adjust padding for small screens */}
        <div className="flex flex-col md:flex-row items-center mb-8">
          <div className="w-full md:w-1/2 mb-4 md:mb-0 pr-4 md:pr-8"> {/* Adjust padding for small screens */}
            <h1 className="text-4xl font-body font-bold mb-4 text-gray-800">
              What We Do
            </h1>
            <p className="text-lg text-gray-700">
              We specialize in providing top-notch IT outsourcing services tailored
              to meet your development and graphic design needs. Our mission is to
              transform your ideas into reality by leveraging cutting-edge
              technologies and creative expertise.
            </p>
            <p className="mt-4 text-lg text-gray-700">
              Our team consists of highly skilled professionals dedicated to
              delivering exceptional results. With years of experience in the
              industry, we understand the importance of staying ahead of the curve
              and continuously adapting to new trends and technologies.
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

      <div className="container mx-auto max-w-screen-md" id="x"> {/* Remove unnecessary whitespace */}
        <div className="grid md:grid-cols-1 gap-8  ">
          {/* Development Box */}
          <div className="flex flex-col md:flex-row ">
            <ServiceBox
              title="Development"
              description="Our meticulous attention to detail ensures that every aspect of the user journey is thoughtfully considered and optimized for maximum usability and engagement."
              sub_description="We stay at the forefront of industry trends and emerging technologies, allowing us to create innovative solutions tailored to each client's unique requirements."
              path="/services/development"
              color="bg-blue-200"
              icon={<FaDesktop className="text-5xl text-blue-500" />}
            />
            <div className="w-0 md:w-8"></div> {/* Adjust spacing */}
            <img src={s1} className="max-h-96 mx-auto w-fit  md:h-auto md:max-h-96  md:w-auto" alt="" />
            {/* <img src={s1} className="max-h-80 mx-auto w-fit  md:h-full" alt="" /> */}

          </div>
          {/* UI and UX Box */}
          <div className="flex flex-col md:flex-row ">
            <img src={s2} className="max-h-96 mx-auto w-fit  md:h-auto md:max-h-96  md:w-auto" alt="" />
            {/* <img src={s2} className="h-full  md:h-auto md:max-h-96 w-full md:w-auto" alt="" /> */}
            <div className="w-0 md:w-8"></div> {/* Adjust spacing */}
            <ServiceBox
              title="UI and UX"
              description="Our meticulous attention to detail ensures that every aspect of the user journey is thoughtfully considered and optimized for maximum usability and engagement."
              sub_description="We stay at the forefront of industry trends and emerging technologies, allowing us to create innovative solutions tailored to each client's unique requirements."
              color="bg-green-200"
              path="/services/ui-ux"
              icon={<FaPalette className="text-5xl text-green-500" />}
            />
          </div>
        </div>
      </div >

      <div className="bg-tertiary mx-auto text-center pt-20">
        <div className="mx-auto text-center mb-8">
          <h2 className="text-3xl font-bold font-body">Why Nepcodes?</h2>
        </div>
        <WhyUs />
      </div>
      <HeroCTA />
    </>
  );
};

const ServiceBox = ({ title, description, sub_description, color, icon, path }) => {
  return (
    <div className={`rounded-lg p-4 md:p-6 w-full md:w-auto ${color} hover:shadow-lg transition duration-300 transform hover:scale-105`}>
      <div className="flex items-center mb-4">
        <div className="mr-4 p-3 rounded-full bg-white">{icon}</div>
        <h3 className="text-xl md:text-2xl font-semibold">{title}</h3>
      </div>
      <div>
        <p className="text-base md:text-base text-gray-700 mb-4">{description}</p>
        <p className="text-base md:text-base text-gray-700 mb-4">{sub_description}</p>
        <div className="text-center md:text-left">
          <Link to={path}>
            <button className="text-blue-600 hover:underline" >
              Find Out More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
