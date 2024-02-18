import React, { useState } from "react";
import { Link } from "react-router-dom";
import admire from "../../../../assets/graphics/admire.png";
import doko1 from "../../../../assets/graphics/doko-1.png";
import doko2 from "../../../../assets/graphics/doko-2.png";
import doko3 from "../../../../assets/graphics/doko-3.png";
import melbourne from "../../../../assets/graphics/melbourne.png";
import nabc from "../../../../assets/graphics/nabc.png";
import doko4 from "../../../../assets/graphics/doko-4.jpg";
import doko5 from "../../../../assets/graphics/doko-5.png";
import header from "../../../../assets/graphics/header.png";

function UiUxPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-quad flex-grow py-20 text-white flex px-40 justify-between items-center">
        <div className="p-20 ">
          <div className="text-4xl font-body mb-4">UI/UX</div>
          <div className="font-body text-lg">
            Our mission is to build digital products that last. By being
            pragmatic product experts with a narrow tech specialization, we're
            able to avoid surprises and deliver highest quality software
            consistently. Since 2015, we have successfully completed 80+ web,
            mobile and desktop projects in fintech, education, healthcare and
            other industries, working with brands like National Geographic, Beam
            or Paradox Interactive. Our approach is simple: build partnerships
            with our clients where we work together towards an optimal solution
            for their business.
          </div>
        </div>
        <div className="mt-10 ">
          <img src={header} className="w-svw" alt="" />
        </div>
      </div>
      <div className=" font-body text-2xl mx-10 mt-10">Our Projects:</div>
      <div className="container mx-auto pb-10 pt-7 px-8 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-start">
          <DesignWorkCard
            title="Doko Restaurant"
            imageUrl={doko1}
            description="Description of project 1."
          />
          <DesignWorkCard
            title="Doko Restaurant"
            imageUrl={doko2}
            description="Description of project 2."
          />
          <DesignWorkCard
            title="Doko Restaurant"
            imageUrl={doko3}
            description="Description of project 3."
          />
          <DesignWorkCard
            title="Doko Restaurant"
            imageUrl={doko4}
            description="Description of project 4."
          />
          <DesignWorkCard
            title="Doko Restaurant"
            imageUrl={doko5}
            description="Description of project 5."
          />
          <DesignWorkCard
            title="Project Name 6"
            imageUrl={melbourne}
            description="Description of project 6."
          />
          <DesignWorkCard
            title="Project Name 7"
            imageUrl={admire}
            description="Description of project 7."
          />
          <DesignWorkCard
            title="Project Name 8"
            imageUrl={nabc}
            description="Description of project 8."
          />
        </div>
      </div>
    </div>
  );
}

function ImageViewer({ imageUrl, onClose }) {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-75 z-50">
      <div className="max-w-4xl w-full bg-white  overflow-hidden">
        <img
          src={imageUrl}
          alt="Image"
          className="w-full max-h-screen object-contain"
        />
        <button
          onClick={onClose}
          className="absolute top-0 right-0 m-4 p-2 text-4xl text-white bg-black "
        >
          X
        </button>
      </div>
    </div>
  );
}

function DesignWorkCard({ title, imageUrl, description }) {
  const [showImageViewer, setShowImageViewer] = useState(false);

  const openImageViewer = () => setShowImageViewer(true);
  const closeImageViewer = () => setShowImageViewer(false);

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-64 object-cover cursor-pointer"
        onClick={openImageViewer}
      />
      <div className="p-4">
        <h3 className="text-xl text-center font-bold mb-2">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
      {showImageViewer && (
        <ImageViewer imageUrl={imageUrl} onClose={closeImageViewer} />
      )}
    </div>
  );
}

export default UiUxPage;
