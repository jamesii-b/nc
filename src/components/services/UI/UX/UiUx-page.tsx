import React, { useState } from "react";
import HeroCTA from "../../../reusable/HeroCTA";
import HeadBar from "../../../reusable/head-bar";
import ImageCarousel from "./components/corousel";


function UiUxPage() {
  const [viewerOpen, setViewerOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openImageViewer = (imageUrl) => {
    setSelectedImage(imageUrl);
    setViewerOpen(true);
  };

  const closeImageViewer = () => {
    setViewerOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col ">
      <HeadBar title="UI/UX" backgroundColor="bg-blue" imageSrc="/services/ui/01.webp" />
      <div className="p-5 md:flex md:items-center md:justify-between md:mx-auto md:max-w-4xl md:my-20 my-10 ">
        <img src="/services/ui/header.webp" className="w-full max-h-60 md:mr-5 h-auto md:inset-0 md:max-w-64 md:min-h-52 md:h-auto md:max-h-80 md:ml-5 object-cover rounded-lg md:rounded-none" alt="Header Image" />
        <div className="md:w-2/3 md:mr-5 p-5">
          <div className="text-4xl font-body text-blue-700 mb-5">UI/UX</div>
          <div className="font-body text-base text-gray-800 leading-relaxed text-justify">
            Our mission is to build digital products that last. By being pragmatic product experts with a narrow tech specialization, we are able to deliver high-quality products that are easy to maintain and scale. We are a team of experienced designers and developers who are passionate about building high-quality digital products. We are experts in UI/UX design, web development, and mobile app development. We are a team of experienced designers and developers who are passionate about building high-quality digital products.
          </div>
        </div>
      </div>
      <div className="hidden md:block lg:block">
        <ImageCarousel openImageViewer={openImageViewer} />
        {viewerOpen && <ImageViewer imageUrl={selectedImage} onClose={closeImageViewer} />}
      </div>
      <HeroCTA />
    </div>
  );
}

function ImageViewer({ imageUrl, onClose }) {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-75 z-50">
      <div className="max-w-4xl w-full bg-white overflow-hidden">
        <img
          src={imageUrl}
          alt="Image"
          className="w-full max-h-screen object-contain"
        />
        <button
          onClick={onClose}
          className="absolute top-0 right-0 m-4 p-2 text-4xl text-white"
        >
          X
        </button>
      </div>
    </div>
  );
}

export default UiUxPage;
