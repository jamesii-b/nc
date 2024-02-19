import React from "react";
import CenterDiv from "../reusable/centerDiv";
import about1 from "../../assets/about1.png";
import about2 from "../../assets/about2.png";
import about3 from "../../assets/about3.png";
import "./styleSheet.css";
import about01 from "../../assets/about01.jpg";
import Testimonial from "../reusable/testimonial";
const aboutUsSections = [
  {
    title: "Empowering Tomorrow",
    subtitle: "Driving Innovation with a Fresh Perspective",
    content:
      "We are committed to shaping the future of IT solutions. With our fresh perspective and dedication to innovation, we empower businesses to embrace the opportunities of tomorrow, today.",
    image: about1,
  },
  {
    title: "Our Vision for Excellence",
    subtitle: "Setting the Bar High in IT Outsourcing",
    content:
      "Despite being newly established, we set high standards for ourselves. Our focus on excellence, agility, and client value propels us to redefine the landscape of IT outsourcing, ensuring exceptional service from day one.",
    image: about2,
  },
  {
    title: "Ambitious Goals, Bright Future",
    subtitle: "Driving Impact and Value Creation",
    content:
      "Our journey may be young, but our goals are ambitious. By prioritizing global impact and delivering outstanding value, we aspire to become leaders in the industry, setting the stage for a global innovators.",
    image: about3,
  },
];

function About() {
  return (
    <>
      <div class="relative h-fit">
        <img src={about01} class="h-96 object-cover min-w-full" alt="" />
        <div class="absolute z-50 -bottom-20 left-10 w-96 h-60 bg-blue-400 text-center opacity-95 text-secondary pt-20 text-3xl font-body font-bold transform translate-x-5 translate-y-5">
          About Us
        </div>
      </div>
      <div className="bg-black h-20 "></div>
      <div className="bg-black relative  py-5">
        <div className="mb-10">
          {aboutUsSections.map((section, index) => (
            <CenterDiv
              key={index} // Add key prop for each child component
              title={section.title}
              sub_title={section.subtitle}
              content={section.content}
              image={section.image}
            />
          ))}
        </div>
        <div className="h-3"></div>
      </div>
      <Testimonial />
    </>
  );
}

export default About;
