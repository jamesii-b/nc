import React from "react";
import workingPeople from "../../../assets/i-0.png";

function AboutSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-10">
      <div className=" flex-col items-center md:items-start relative top-20 left-40 w-3/4 inline-block">
        <div className="font-bold  mb-4 text-4xl font-body ">The Nepcodes</div>
        <div className="font-medium text-2xl font-body ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          illo, perspiciatis at ut non quis.
        </div>
        <div className="content-none"> x</div>
        <div className="mb-4 text-xl text-secondary_text font-body">
          At Nepcodes, client satisfaction is a top priority. We are 100%
          oriented around solving your problems and making you successful.When
          you have a job for us, we move mountains to make sure it’s done well
          and on time.
        </div>
      </div>
      <div className="flex justify-center md:justify-end w-fit px-32">
        <img src={workingPeople} alt="" className="max-w-80" />
      </div>
    </div>
  );
}

export default AboutSection;
