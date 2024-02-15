import React from "react";
import img01 from "../assets/img-main.jpg";

function HomePage() {
  return (
    <div
      className="h-screen w-screen relative flex bg-cover bg-center  bg-fixed bg-opacity-50"
      style={{ backgroundImage: `url(${img01})`, backgroundSize: "cover" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute items-center top-60 left-10">
        <span className="text-4xl text-white leading-tight">Empowering</span>
        <br />
        <span className="text-6xl relative left-32 text-primary font-bold leading-tight">
          Business
        </span>
        <br />
        <span className="text-4xl text-white leading-tight">With</span>
        <br />
        <span className="text-6xl relative left-32 text-primary font-bold leading-tight">
          Technology
        </span>
      </div>
    </div>
  );
}

export default HomePage;
