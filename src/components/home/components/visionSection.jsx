import React from "react";

function VisualSection() {
  return (
    <div className="bg-tertiary lg:px-36 py-20">
      <div className="container mx-auto text-center">
        <h2 className="font-bold text-4xl md:px-20  font-body mb-4">
          How We Do IT
        </h2>
        <p className="text-lg text-secondary_text mb-8 ">
          Create, Construct, and Expand Your Digital Vision
        </p>
        <img src="/hero/service-path.webp" className="w-full rounded-lg" alt="" />
      </div>
    </div>
  );
}

export default VisualSection;
