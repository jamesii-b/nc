import React from "react";
import workingPeople from "../../../assets/i-0.png";

function AboutSection() {
  return (
    <div className="container mx-auto px-4 py-10 md:px-20 lg:px-40">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col justify-center items-center md:items-start">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center md:text-left"> Nepcodes</h2>
          <p className="text-lg sm:text-base leading-relaxed text-gray-700 mb-4 text-center md:text-left">
            At Nepcodes, we are dedicated to providing innovative solutions tailored to meet your unique needs. With a commitment to excellence, we strive to exceed your expectations at every step.
          </p>
          <p className="text-lg sm:text-base leading-relaxed text-gray-700 mb-4 text-center md:text-left">
            Our unwavering focus on client satisfaction drives us to deliver outstanding results. We approach every project with passion and determination, ensuring your success is our top priority.
          </p>
        </div>
        <div className="flex justify-center md:justify-end">
          <div className="max-w-96 w-full">
            <img src={workingPeople} alt="Working People" className="w-2/3" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
