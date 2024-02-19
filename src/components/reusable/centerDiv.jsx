import React from "react";
import LazyLoad from "react-lazyload";
function CenterDiv({ title, sub_title, content, image }) {
  return (
    <div className="bg-gradient-to-br from-blue-900 to-blue-700 my-10 lg:px-20 py-16 text-white text-xl mx-60 max-w-7xl flex flex-col lg:flex-row lg:items-center lg:justify-center shadow-2xl">
      <div id="x" className="lg:w-1/2 lg:mr-8 text-center lg:text-left">
        <div className="text-3xl font-bold mb-4">{title}</div>
        <h3 className="text-2xl font-semibold mb-4">{sub_title}</h3>
        <p className="text-lg leading-relaxed mb-8">{content}</p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Learn More
        </button>
      </div>
      <div id="y" className="min-w-">
        <LazyLoad height={200} once>
          <img
            src={image}
            alt=""
            className="lazyload h-96 hover:shadow-lg transition duration-300 transform hover:scale-105 rounded-lg shadow-lg"
          />
        </LazyLoad>
      </div>
    </div>
  );
}

export default CenterDiv;
