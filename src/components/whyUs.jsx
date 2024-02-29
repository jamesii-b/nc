import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { CSSTransition } from "react-transition-group";
import "./whyUs.css";

function WhyUs() {
  const data = [
    {
      title: "Fast Delivery",
      content: "We ensure top-notch quality in everything we do.",
    },
    {
      title: "24/7 Customer Support",
      content: "Our dedicated support tea is always here to assist you.",
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
  ];

  const [displayIndex, setDisplayIndex] = useState(null); // Default to no item displayed
  const listRef = useRef(null);

  const toggleContent = (index) => {
    if (displayIndex === index) {
      setDisplayIndex(null);
    } else {
      setDisplayIndex(index);
    }
  };

  return (
    <div className="container mx-auto flex justify-center p-8">
      <div className="space-y-4 ml-4 md:ml-20 md:min-h-screen/1.5 md:w-full lg:w-1/2 relative">
        <div className="flex flex-wrap">
          {data.map((item, index) => (
            <div key={index} className="w-full md:w-full border-pink-300 mb-4 md:mb-0 md:mr-4">
              <div className={`overflow-hidden ${index === displayIndex ? "min-h-28" : "min-h-12"}`}>
                <div className="flex items-start" onClick={() => toggleContent(index)}>
                  <h3 className={`text-lg font-semibold border-pink-300 border-b-4 flex-grow`} style={{ marginRight: '1rem', textAlign: 'left' }}>{item.title}</h3>
                  <FontAwesomeIcon icon={faChevronDown} className={`text-gray-600 transition-transform ${index === displayIndex ? "rotate-180" : ""}`} />
                </div>
                <CSSTransition in={index === displayIndex} timeout={500} classNames="fade" unmountOnExit>
                  <div ref={listRef} className={`text-base py-3 text-gray-700 ${index === displayIndex ? "" : "block"}`}>
                    {item.content}
                  </div>
                </CSSTransition>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
