import React, { useState } from "react";
import customSoftwareImage from "../../assets/custom-d.png";
import desktopDevelopmentImage from "../../assets/desk-d.png";
import mobileDevelopmentImage from "../../assets/mobile-d.png";
import webDevelopmentImage from "../../assets/web-d.png";

const data = [
  {
    id: 1,
    title: "Custom Software Development",
    content: (
      <div>
        <h3>Custom Software Development</h3>
        <p>
          We specialize in developing custom software tailored to meet your
          specific business needs.
        </p>
      </div>
    ),
    image: customSoftwareImage,
  },
  {
    id: 2,
    title: "Desktop Development",
    content: (
      <div>
        <h3>Desktop Development</h3>
        <p>
          We offer desktop application development services using the latest
          technologies and frameworks.
        </p>
      </div>
    ),
    image: desktopDevelopmentImage,
  },
  {
    id: 3,
    title: "Mobile Development",
    content: (
      <div>
        <h3>Mobile Development</h3>
        <p>
          Our team excels in mobile app development for iOS and Android
          platforms, delivering user-friendly and feature-rich applications.
        </p>
      </div>
    ),
    image: mobileDevelopmentImage,
  },
  {
    id: 4,
    title: "Web Development",
    content: (
      <div>
        <h3>Web Development</h3>
        <p>
          We provide comprehensive web development solutions, including
          front-end and back-end development, to help you establish a strong
          online presence.
        </p>
      </div>
    ),
    image: webDevelopmentImage,
  },
];

const Box = () => {
  const [selectedRow, setSelectedRow] = useState(data[0]); // Default to the first item

  const handleRowClick = (item) => {
    setSelectedRow(item);
  };

  return (
    <div className=" mx-10  bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="flex">
        <div className="min-w-fit bg-gray-200 p-4">
          <ul>
            {data.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer py-2 px-4 ${
                  selectedRow.id === item.id
                    ? "text-xl font-bold  text-primary_text"
                    : "text-gray-800 hover:bg-blue-100"
                }`}
                onClick={() => handleRowClick(item)}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-1/2 bg-gray-300  flex flex-col justify-center items-center">
          <div className="text-center">
            <div className="transition-all duration-300 ease-in-out">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {selectedRow.title}
              </h3>
              <p className="text-gray-700">{selectedRow.content}</p>
              <img
                src={selectedRow.image}
                alt=""
                className="mt-4 rounded-lg shadow-lg"
                style={{ maxWidth: "200px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Box;
