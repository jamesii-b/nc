import React from "react";
import pathImage from "../../../assets/service-path.png";

const DigitalVisionSection = () => {
  return (
    <div className="bg-tertiary px-36 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl text-primary_text font-body mb-4">
          Create, Construct, and Expand Your Digital Vision
        </h2>
        <p className="text-lg text-secondary_text mb-8 font-body">
          Whether you need developers only or want a full-fledged partnership
          for your digital journey, we're here to be your secret weapon.
        </p>
        <img src={pathImage} className="w-auto" alt="" />
      </div>
    </div>
  );
};

export default DigitalVisionSection;
