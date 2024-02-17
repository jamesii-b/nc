import React from "react";
import img01 from "../../assets/img-main.jpg";
import { Link } from "react-router-dom";
import pathImage from "../../assets/service-path.png";
import { FaAngleDown } from "react-icons/fa";
import {
  MdCode,
  MdWeb,
  MdPhoneAndroid,
  MdPalette,
  MdCloud,
  MdBuild,
} from "react-icons/md";
import workingPeople from "../../assets/i-0.png";

function HomePage() {
  const data = [
    {
      id: 0,
      title: "Software Development",
      description:
        " We develop custom software solutions that are scalable, secure, and user-friendly. Our team of experts is proficient in the latest technologies and frameworks to deliver high-quality software solutions.",
      icon: <MdCode />,
    },
    {
      id: 1,
      title: "Web Development",
      description:
        " We build web applications that are scalable, secure, and user-friendly. Our team of experts is proficient in the latest technologies and frameworks to deliver high-quality web applications.",
      icon: <MdWeb />,
    },
    {
      id: 2,
      title: "Mobile App Development",
      description:
        " We develop mobile applications that are user-friendly, scalable, and secure. Our team of experts is proficient in the latest technologies and frameworks to deliver high-quality mobile applications.",
      icon: <MdPhoneAndroid />,
    },
    {
      id: 3,
      title: "UI/UX Design",
      description:
        "We design user-friendly, intuitive, and visually appealing interfaces that enhance user experience. Our team of experts is proficient in the latest design tools and technologies to deliver high-quality designs.",
      icon: <MdPalette />,
    },

    {
      id: 4,
      title: "Cloud Services",
      description:
        " We provide cloud services that are scalable, secure, and reliable. Our team of experts is proficient in the latest cloud technologies and platforms to deliver high-quality cloud services.",
      icon: <MdCloud />,
    },
    {
      id: 5,
      title: "DevOps",
      description:
        " We provide DevOps services that enable continuous integration and continuous deployment. Our team of experts is proficient in the latest DevOps tools and technologies to deliver high-quality DevOps services.",
      icon: <MdBuild />,
    },
  ];

  return (
    <>
      <div
        className="h-screen w-screen relative flex bg-cover bg-center bg-fixed bg-no-repeat max-w-full"
        style={{ backgroundImage: `url(${img01})`, backgroundSize: "cover" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute items-center top-72 left-40 font-body">
          <span className="text-4xl text-white ">Empowering</span>
          <br />
          <span className="text-6xl relative left-16 text-yellow-300 font-bold  ">
            Business
          </span>
          <br />
          <span className="text-4xl text-white ">With</span>
          <br />
          <span className="text-6xl relative left-16  text-yellow-300 font-bold ">
            Technology
          </span>
          <br />
          <div className="relative top-5">
            <Link to="/contact">
              <button className="bg-yellow-300 text-gray-800 px-4 py-2 rounded-full absolute  animate-pulse">
                Work With Us
              </button>
            </Link>
          </div>
        </div>
        <div className="m-auto">
          <FaAngleDown className="text-white absolute text-4xl bottom-10 animate-bounce " />
        </div>
      </div>
      <div className="bg-tertiary py-20">
        <div className="container mx-auto text-center">
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-10">
        <div className=" flex-col items-center md:items-start relative top-20 left-40 w-3/4 inline-block">
          <div className="font-bold  mb-4 text-4xl font-body ">
            The Nepcodes
          </div>
          <div className="font-medium text-2xl font-body ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus illo, perspiciatis at ut non quis.
          </div>
          <div className="content-none"> x</div>
          <div className="mb-4 text-xl text-secondary_text font-body">
            At Nepcodes, client satisfaction is a top priority. We are 100%
            oriented around solving your problems and making you successful.When
            you have a job for us, we move mountains to make sure it’s done well
            and on time.
          </div>
        </div>
        <div className="flex justify-center md:justify-end w-fit px-32">
          <img src={workingPeople} alt="" className="max-w-80" />
        </div>
      </div>

      <div className="bg-tertiary py-10">
        <div className="container mx-auto">
          <h2 className="text-3xl text-center text-primary_text font-body mb-4">
            Skills Overview
          </h2>
          <p className="text-lg text-center text-secondary_text mb-8 font-body">
            We incorporate across a wide range of technologies, optimal
            methodologies, application scenarios, and sectors.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.map((item) => (
              <div
                key={item.id}
                className="bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <div className="mr-2 text-2xl">{item.icon}</div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
