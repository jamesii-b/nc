import React, { useState } from "react";

const gridImages = [
  "/services/ui/corousel/i1.png",
  "/services/ui/corousel/i2.png",
  "/services/ui/corousel/i3.png",
  "/services/ui/corousel/i4.png",
  "/services/ui/corousel/i5.png",
  "/services/ui/corousel/i6.jpg",
  "/services/ui/corousel/i7.png",
  "/services/ui/corousel/i8.png",
  "/services/ui/corousel/i9.png",
  "/services/ui/corousel/i10.png",
];

function ImageViewer({ imageUrl, closeImageViewer }) {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-75 z-50">
      <div className="max-w-4xl w-full bg-white overflow-hidden">
        <img
          src={imageUrl}
          alt="Image"
          className="w-full max-h-screen object-contain"
        />
        <button
          onClick={closeImageViewer}
          className="absolute top-0 right-0 m-4 p-2 text-4xl text-black"
        >
          X
        </button>
      </div>
    </div>
  );
}

function MobileCorousel() {
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
    <div className="z-50 bg-white">
      <div className="font-body text-2xl mx-10 font-bold mt-10">
        Our Projects:
      </div>
      <div className="container mx-auto my-10 min-w-4/5 min-h-1/2 p-10 overflow-hidden">
        <div className="" onClick={() => openImageViewer(gridImages[1])}>
          <img src={gridImages[1]} alt="Image 2" className="w-full h-auto" />
        </div>
        <div className="flex my-12">
          <div className="" onClick={() => openImageViewer(gridImages[4])}>
            <img src={gridImages[4]} alt="Image 5" className="w-full h-auto" />
          </div>
          <div className="" onClick={() => openImageViewer(gridImages[2])}>
            <img src={gridImages[2]} alt="Image 3" className="w-full h-auto" />
          </div>
        </div>
          <div className="" onClick={() => openImageViewer(gridImages[3])}>
            <img src={gridImages[3]} alt="Image 4" className="mx-auto w-auto h-80" />
          </div>
        <div className="flex relative top-14">
        <div className="" onClick={() => openImageViewer(gridImages[5])}>
          <img src={gridImages[5]} alt="Image 6" className="w-full h-auto" />
        </div>
          <div className=" " onClick={() => openImageViewer(gridImages[0])}>
            <img src={gridImages[0]} alt="Image 1" className="w-full h-2/3 object-contain" />
          </div>
       
        </div>
        <div className="flex mb-12">
          <div className="" onClick={() => openImageViewer(gridImages[6])}>
            <img src={gridImages[6]} alt="Image 7" className="w-full h-auto" />
          </div>
          <div className="" onClick={() => openImageViewer(gridImages[7])}>
            <img src={gridImages[7]} alt="Image 8" className="w-full h-auto" />
          </div>

        </div>

        <div className="" onClick={() => openImageViewer(gridImages[9])}>
          <img src={gridImages[9]} alt="Image 2" className="w-full h-auto" />
        </div>

      </div>
      {viewerOpen && (
        <ImageViewer
          imageUrl={selectedImage}
          closeImageViewer={closeImageViewer}
        />
      )}
    </div>
  );
}

export default MobileCorousel;
