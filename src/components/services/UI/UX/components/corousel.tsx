import React from "react";

const i1 = "/services/ui/corousel/i1.png";
const i2 = "/services/ui/corousel/i2.png";
const i3 = "/services/ui/corousel/i3.png";
const i4 = "/services/ui/corousel/i4.png";
const i5 = "/services/ui/corousel/i5.png";
const i6 = "/services/ui/corousel/i6.jpg";
const i7 = "/services/ui/corousel/i7.png";
const i8 = "/services/ui/corousel/i8.png";
const i9 = "/services/ui/corousel/i9.png";
const i10 = "/services/ui/corousel/i10.png";
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

function ImageCarousel({ openImageViewer }) {
    return (
        <div className="z-50 bg-white">
            <div className="font-body text-2xl mx-10 font-bold mt-10">Our Projects:</div>
            <div className="container mx-auto my-10 w-4/5 h-1/2 p-10 overflow-hidden">
                <div className="w-full h-full grid grid-cols-4 auto-rows-[50px] gap-x-3 gap-y-4">
                    {GridItems.map((item, index) => (
                        <div key={index} className={`grid-item ${item.className} hover:scale-105 duration-300 relative ease-in-out`} onClick={() => openImageViewer(gridImages[index])}>
                            <img src={gridImages[index]} alt={`Image ${index + 1}`} className="w-full h-full object-cover" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ImageCarousel;
