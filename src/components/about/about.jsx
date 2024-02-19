import React from "react";
import about1 from "../../assets/about1.png";
import about2 from "../../assets/about2.png";
import about3 from "../../assets/about3.png";
import CenterDiv from "../reusable/centerDiv";
const aboutUsSections = [
  {
    title: "Empowering Tomorrow's Solutions Today",
    subtitle: "Driving Innovation with a Fresh Perspective",
    content:
      "At [Company Name], we are committed to shaping the future of IT solutions. With our fresh perspective and dedication to innovation, we empower businesses to embrace the opportunities of tomorrow, today.",
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
      <div className="bg-black ">
        <div className="bg-red-100 h-96">Center Box</div>
        <div className="my-10">
          {aboutUsSections.map((section, index) => (
            <CenterDiv
              title={section.title}
              sub_title={section.subtitle}
              content={section.content}
              image={section.image}
            />
          ))}
        </div>
        <div className="h-3"></div>
      </div>
    </>
  );
}

export default About;
