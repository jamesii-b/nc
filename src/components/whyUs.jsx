import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function WhyUs() {
  const data = [
    {
      title: "Fast Delivery",
      content: "We ensure top-notch quality in everything we do.",
    },
    {
      title: "24/7 Customer Support",
      content: "Our dedicated support team is always here to assist you.",
    },
    {
      title: "Affordable Pricing",
      content: "We offer competitive pricing without compromising quality.",
    },
    {
      title: "Experienced Team",
      content: "Our team has years of experience in the IT industry.",
    },
    {
      title: "Quality Assurance",
      content: "We ensure top-notch quality in everything we do.",
    },
    {
      title: "Cutting-Edge Technologies",
      content: "We leverage the latest technologies to meet your needs.",
    },
    // Add more objects to the whyUsData array as needed
  ];

  const [displayIndex, setDisplayIndex] = useState(null);

  const mouseEntered = (index) => {
    setDisplayIndex(index);
  };

  const mouseLeft = () => {
    setDisplayIndex(null);
  };

  return (
    <>
      <div
        className="space-y-4 inline-block ml-20 mt-3 min-h-screen"
        style={{ minWidth: "450px" }}
      >
        {data.map((item, index) => (
          <div
            key={index}
            className={`overflow-hidden ${
              displayIndex === index ? "min-h-28" : "min-h-12"
            }`}
          >
            <div
              className="flex justify-between items-center"
              onMouseEnter={() => mouseEntered(index)}
              onMouseLeave={mouseLeft}
            >
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`text-gray-600 transition-transform ${
                  displayIndex === index ? "rotate-180" : ""
                }`}
              />
            </div>
            <div
              className={`border-t-2 border-gray-300`}
              style={{
                height:
                  displayIndex === index
                    ? `${document.getElementById("list").clientHeight}px`
                    : "0px",
                overflow: "hidden",
                transition: "height 0.5s ease-in-out",
              }}
            >
              <div id="list" className="text-base py-3   text-gray-700">
                {item.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default WhyUs;
