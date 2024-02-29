import React, { useEffect, useState } from "react";
import ContentBox from "./box";
import HeadBar from "../../reusable/head-bar";
const path = "/services/dev/stack";
import HeroCTA from "../../reusable/HeroCTA"
import Works from "./works";
import './development.css'

const techStacks = [
  { src: `${path}/aws.webp`, alt: "AWS" },
  { src: `${path}/azure.webp`, alt: "Azure" },
  { src: `${path}/electron.webp`, alt: "Electron" },
  { src: `${path}/flutter.webp`, alt: "Flutter" },
  { src: `${path}/nodejs.webp`, alt: "Node.js" },
  { src: `${path}/reactjs.webp`, alt: "React.js" },
  { src: `${path}/next.webp`, alt: "Next.js" },
  { src: `${path}/docker.webp`, alt: "Docker" },
  { src: `${path}/kube.webp`, alt: "Kubernetes" },
  { src: `${path}/nginx.webp`, alt: "Nginx" },
  { src: `${path}/tailwind.webp`, alt: "Tailwind" },
  { src: `${path}/ts.webp`, alt: "TypeScript" },

];


const TechStackCarousel = () => {

  const combinedTech = [...techStacks, ...techStacks];


  return (

    <div id="parent-slider" className="whitespace-nowrap overflow-hidden bg-gray-200 my-20 ">
      <div id="slider" className=" p-10 inline-block ">
        {combinedTech.map((stack, index) => (
          <img key={index} src={stack.src} alt={stack.alt} className="h-20 mx-10 inline-block" />
        ))}
      </div>

    </div>
  );
};

function DevelopmentPage() {


  return (
    <div>
      <HeadBar title="Development" imageSrc="/services/dev/h1.webp" backgroundColor="bg-primary" />
      <div className="p-5 md:flex md:items-center md:justify-between md:mx-auto md:max-w-4xl md:my-20 my-10 ">
        <img src="/services/s1.webp" className="w-full max-h-60 md:mr-5 h-auto md:inset-0 md:max-w-64  md:min-h-52 md:h-auto md:max-h-80 md:ml-5 object-cover rounded-lg md:rounded-none" alt="Header Image" />
        <div className="md:w-2/3 md:mr-5 p-5">
          <div className="text-4xl font-body text-blue-700 mb-5">Development</div>
          <div className="font-body text-base text-gray-800 leading-relaxed text-justify">
            Our mission is to build digital products that last. By being pragmatic product experts with a narrow tech specialization, we're able to avoid surprises and deliver highest quality software consistently. Since 2020, we have successfully completed numerous web, mobile and desktop projects in education, and other industries, working with acdemic institutions and more. Our approach is simple: build partnerships with our clients where we work together towards an optimal solution for their business.
          </div>
        </div>
      </div>

      <ContentBox />
      <Works />
      <div className="my-20">
        <h1 className="text-center font-bold font-body text-3xl">
          Tools We Work With
        </h1>

        <TechStackCarousel />
      </div>
      <HeroCTA />
    </div>
  );
}

export default DevelopmentPage;



