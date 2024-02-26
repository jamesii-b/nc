// ImageRight.js
import React from 'react';

function ImageRight({ image }: { image: string }) {
  return (
    <div className="flex justify-center md:justify-end">
        <div className="flex justify-center md:justify-end">
          <div className="max-w-96 w-full">
            <img src={image} alt="Working People" className="w-3/4 " />
          </div>
        </div>
    </div>
  );
}

export default ImageRight;
