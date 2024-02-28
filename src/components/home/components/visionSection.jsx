import React from "react";
import pathImage from "../../../assets/service-path.png";

function VisualSection() {
  return (
    <div className="bg-tertiary px-10 md:px-20 lg:px-36 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl text-primary_text font-bold font-body mb-4">
          How We Do IT
        </h2>
        <p className="text-lg text-secondary_text mb-8 font-body">
          Create, Construct, and Expand Your Digital Vision
        </p>
        <img src={pathImage} className="w-full rounded-lg" alt="" />
      </div>
    </div>
  );
}

export default VisualSection;
