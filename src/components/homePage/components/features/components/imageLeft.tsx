// ImageLeft.js
import React from 'react';

function ImageLeft({ image }: { image: string }) {
  return (
    <div className="flex justify-center md:justify-start">
      <div className="max-w-96 w-full">
        <img src={image} alt="Working People" className="w-3/4 " /> {/* Adjust right margin */}
      </div>
    </div>
  );
}

export default ImageLeft;
