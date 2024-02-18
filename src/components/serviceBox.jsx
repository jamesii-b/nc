import React from "react";

const ServiceBox = ({ title, description }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-lg">{description}</p>
    </div>
  );
};

export default ServiceBox;
