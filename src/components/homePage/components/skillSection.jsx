import React from "react";

function SkillSection({data}) {
  return (
    <div className="bg-tertiary px-20 py-10">
      <div className="container mx-auto">
        <h2 className="text-3xl text-center text-primary_text font-body mb-4">
          Skills Overview
        </h2>
        <p className="text-lg text-center text-secondary_text mb-8 font-body">
          We incorporate across a wide range of technologies, optimal
          methodologies, application scenarios, and sectors.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.map((item) => (
            <div
              key={item.id}
              className="bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <div className="mr-2 text-2xl">{item.icon}</div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
              </div>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SkillSection;
