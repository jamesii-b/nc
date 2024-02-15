import React from "react";
import img01 from "../assets/img-main.jpg";
import { Link } from "react-router-dom";
import pathImage from "../assets/service-path.png";
import {
  FaAngleDown,
  FaCogs,
  FaPencilAlt,
  FaCode,
  FaRocket,
  FaChartLine,
} from "react-icons/fa";

function HomePage() {
  const datum = [
    {
      title: "Explore",
      icon: <FaPencilAlt />,
      description: [
        "Discovery Sessions",
        "Workflow Analysis",
        "Ideation Sessions",
        "Competitive Analysis",
        "Goal Definition",
      ],
    },
    {
      title: "Create",
      icon: <FaCogs />,
      description: [
        "UI/UX Design",
        "Interactive Prototypes",
        "Branding Solutions",
        "Visual Identity",
      ],
    },
    {
      title: "Develop",
      icon: <FaCode />,
      description: [
        "Web & Mobile App Development",
        "AI & Machine Learning Integration",
        "Quality Assurance",
        "Continuous Deployment",
      ],
    },
    {
      title: "Launch",
      icon: <FaRocket />,
      description: [
        "Cloud Infrastructure Setup",
        "Performance Monitoring",
        "Data Management",
        "Robust Security Measures",
      ],
    },
    {
      title: "Expand",
      icon: <FaChartLine />,
      description: [
        "Product Performance Analysis",
        "Data-driven Insights",
        "Process Automation",
        "Optimization Strategies",
      ],
    },
  ];

  return (
    <>
      <div
        className="h-screen w-screen relative flex bg-cover bg-center bg-fixed bg-no-repeat"
        style={{ backgroundImage: `url(${img01})`, backgroundSize: "cover" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute items-center top-64 left-40 font-body">
          <span className="text-4xl text-white ">Empowering</span>
          <br />
          <span className="text-6xl relative left-16 text-yellow-300 font-bold  ">
            Business
          </span>
          <br />

          <span className="text-4xl text-white ">With</span>
          <br />
          <span className="text-6xl relative left-28 -top-2 text-yellow-300 font-bold ">
            Technology
          </span>
          <br />
          <div className="relative top-5">
            <Link to="/contact">
              <button className="bg-yellow-300 text-gray-800 px-4 py-2 rounded-full absolute ">
                Work With Us
              </button>
            </Link>
          </div>
        </div>
        <div className="m-auto">
          <FaAngleDown className="text-white absolute text-2xl bottom-20 " />
        </div>
      </div>
      <div className="bg-tertiary  py-10">
        <div className="container mx-auto text-center ">
          <h2 className="text-3xl text-primary_text font-body mb-4">
            Create, Construct, and Expand Your Digital Vision
          </h2>
          <p className="text-lg text-secondary_text mb-8 font-body">
            Whether you need developers only or want a full-fledged partnership
            for your digital journey, we're here to be your secret weapon.
          </p>
          <img src={pathImage} className="w-auto" alt="" />
        </div>
      </div>
    </>
  );
}

export default HomePage;
