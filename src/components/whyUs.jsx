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
  ];

  const [displayIndex, setDisplayIndex] = useState(0); // Default to first item displayed
  const listRef = useRef(null);

  const toggleContent = (index) => {
    if (displayIndex === index) {
      setDisplayIndex(null);
    } else {
      setDisplayIndex(index);
    }
  };

  return (
    <div className="space-y-4 inline-block ml-20 mt-3 min-h-screen/1.5 w-1/2 p-8 relative" style={{ minWidth: "480px" }}>
      {data.map((item, index) => (
        <div key={index} className="border-pink-300">
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
  );
}

export default WhyUs;
