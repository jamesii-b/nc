import "./uiux.css";
import React, { useState } from "react";
import HeroCTA from "../../../reusable/HeroCTA";
import HeadBar from "../../../reusable/head-bar";
import header from "../../../../assets/graphics/header.png"
const i1 = "/uiux/i1.png";
const i2 = "/uiux/i2.png";
const i3 = "/uiux/i3.png";
const i4 = "/uiux/i4.png";
const i5 = "/uiux/i5.png";
const i6 = "/uiux/i6.jpg";
const i7 = "/uiux/i7.png";
const i8 = "/uiux/i8.png";
const i9 = "/uiux/i9.png";
const i10 = "/uiux/i10.png";


const gridImages = [i1, i2, i3, i4, i5, i6, i7, i8, i9, i10];
const GridItems = [
  { className: " col-span-1 row-span-6" },  // i1
  { className: " col-span-2 row-span-4" },  // i2
  { className: " col-span-1 row-span-5" },  // i3
  { className: " col-span-2 row-span-11" },  // i4
  { className: " col-span-1 row-span-5" },  // i5
  { className: " col-span-1 row-span-6" },  // i10
  { className: " col-span-1 row-span-4" },  // i6
  { className: " col-span-1 row-span-6" },  // i7
  { className: " col-span-1 row-span-5" },  // i8
  { className: " col-span-2 row-span-3" },  // i9
];

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
    <div className="min-h-screen flex flex-col">
      <HeadBar title="UI/UX" backgroundColor="bg-blue" imageSrc="/uiux.png" />
      {/* <div className="bg-quad flex-grow py-20 text-black flex justify-between items-center"> */}
      <div className="p-5 md:flex md:items-center md:justify-between md:mx-auto md:max-w-4xl md:my-20 my-10 ">
        <img src={header} className="w-full max-h-60 md:mr-5 h-auto md:inset-0 md:max-w-64  md:min-h-52 md:h-auto md:max-h-80 md:ml-5 object-cover rounded-lg md:rounded-none" alt="Header Image" />
        <div className="md:w-2/3 md:mr-5 p-5">
          <div className="text-4xl font-body text-blue-700 mb-5">UI/UX</div>
          <div className="font-body text-base text-gray-800 leading-relaxed text-justify">
            Our mission is to build digital products that last. By being pragmatic product experts with a narrow tech specialization, we're able to avoid surprises and deliver highest quality software consistently. Since 2015, we have successfully completed 80+ web, mobile and desktop projects in fintech, education, healthcare and other industries, working with brands like National Geographic, Beam or Paradox Interactive. Our approach is simple: build partnerships with our clients where we work together towards an optimal solution for their business.
          </div>
        </div>
      </div>




      <div className="font-body text-2xl mx-10 font-bold mt-10">Our Projects:</div>

      <div className="z-50 bg-white">
        <div className="container mx-auto my-10 w-4/5  h-1/2 p-10 overflow-hidden ">
          <div className="w-full h-full grid grid-cols-4 auto-rows-[50px] gap-x-3 gap-y-4">
            {GridItems.map((item, index) => (
              <div key={index} className={`grid-item ${item.className} hover:scale-105 duration-300 relative ease-in-out`} onClick={() => openImageViewer(gridImages[index])}>


                <img src={gridImages[index]} alt={`Image ${index + 1}`} className="w-full h-full object-cover " />
              </div>
            ))}
          </div>
        </div>
      </div>
      {viewerOpen && <ImageViewer imageUrl={selectedImage} onClose={closeImageViewer} />}
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
