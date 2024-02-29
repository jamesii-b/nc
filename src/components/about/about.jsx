import React from "react";
import CenterBOX from "../reusable/centerBOX";
import about1 from "../../assets/about1.png";
import about2 from "../../assets/about2.png";
import about3 from "../../assets/about3.png";
import "./styleSheet.css";
import about01 from "../../assets/about01.jpg";
import Testimonial from "../reusable/testimonial";
import HeroCTA from '../../components/reusable/HeroCTA';
import HeadBar from "../reusable/head-bar";


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
    image: about3,
  },
  {
    title: "Ambitious Goals, Bright Future",
    subtitle: "Driving Impact and Value Creation",
    content:
      "Our journey may be young, but our goals are ambitious. By prioritizing global impact and delivering outstanding value, we aspire to become leaders in the industry, setting the stage for a global innovators.",
    image: about2,
  },
];


function About() {
  return (
    <>
      <HeadBar title="About Us" imageSrc={about01} backgroundColor="bg-primary" />
      <div className="flex flex-col items-center my-20">
        {aboutUsSections.map((section, index) => (
          < CenterBOX
            key={index}
            title={section.title}
            subtitle={section.subtitle}
            content={section.content}
            image={section.image}
            imgLeft={index % 2 === 0}
          />
        ))}
      </div>
      <Testimonial />
      <HeroCTA />
    </>
  );
}

export default About;
