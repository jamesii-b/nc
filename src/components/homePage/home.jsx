import React from "react";
import {
  MdCode,
  MdWeb,
  MdPhoneAndroid,
  MdPalette,
  MdCloud,
  MdBuild,
} from "react-icons/md";
import HeroSection from "./components/heroSection";
import DigitalVisionSection from "./components/visionSection";

import AboutSection from "./components/about";
import TestimonialSection from "./components/skillSection copy";
import USP from "./components/features";
function HomePage() {
  // const data = [
  //   {
  //     id: 0,
  //     title: "Software Development",
  //     description:
  //       " We develop custom software solutions that are scalable, secure, and user-friendly. Our team of experts is proficient in the latest technologies and frameworks to deliver high-quality software solutions.",
  //     icon: <MdCode />,
  //   },
  //   {
  //     id: 1,
  //     title: "Web Development",
  //     description:
  //       " We build web applications that are scalable, secure, and user-friendly. Our team of experts is proficient in the latest technologies and frameworks to deliver high-quality web applications.",
  //     icon: <MdWeb />,
  //   },
  //   {
  //     id: 2,
  //     title: "Mobile App Development",
  //     description:
  //       " We develop mobile applications that are user-friendly, scalable, and secure. Our team of experts is proficient in the latest technologies and frameworks to deliver high-quality mobile applications.",
  //     icon: <MdPhoneAndroid />,
  //   },
  //   {
  //     id: 3,
  //     title: "UI/UX Design",
  //     description:
  //       "We design user-friendly, intuitive, and visually appealing interfaces that enhance user experience. Our team of experts is proficient in the latest design tools and technologies to deliver high-quality designs.",
  //     icon: <MdPalette />,
  //   },

  //   {
  //     id: 4,
  //     title: "Cloud Services",
  //     description:
  //       " We provide cloud services that are scalable, secure, and reliable. Our team of experts is proficient in the latest cloud technologies and platforms to deliver high-quality cloud services.",
  //     icon: <MdCloud />,
  //   },
  //   {
  //     id: 5,
  //     title: "DevOps",
  //     description:
  //       " We provide DevOps services that enable continuous integration and continuous deployment. Our team of experts is proficient in the latest DevOps tools and technologies to deliver high-quality DevOps services.",
  //     icon: <MdBuild />,
  //   },
  // ];

  return (
    <>
      <HeroSection />
      <TestimonialSection/>
      <USP />
      {/* <DigitalVisionSection /> */}
      <AboutSection />
    </>
  );
}

export default HomePage;
