import React from "react";
import LazyLoad from "react-lazyload";

function CenterBOX({ title, sub_title, content, image, imgLeft }) {
  return (
    <div className="py-8 border-none md:px-40 text-xl mx-4 lg:mx-auto max-w-7xl flex flex-col lg:flex-row lg:items-center lg:justify-center">
      <div className={`lg:w-1/2 lg:m-8 text-center lg:text-left lg:min-w-0 lg:flex-grow ${imgLeft ? 'order-2' : 'order-1'}`}>
        <div className="text-3xl font-bold mb-4">{title}</div>
        <h3 className="text-2xl font-semibold mb-4">{sub_title}</h3>
        <p className="text-lg leading-relaxed mb-8">{content}</p>
      </div>
      <div className={`lg:w-1/3 lg:m-4 ${imgLeft ? 'order-1' : 'order-2'} `}>
        <div className="flex justify-center">
          <LazyLoad height={200} once>
            <img
              src={image}
              alt=""
              className="lazyload max-w-full h-auto max-h-96 transition duration-300 transform hover:scale-105"
            />
          </LazyLoad>
        </div>
      </div>
    </div>
  );
}

export default CenterBOX;
