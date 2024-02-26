import React from "react";

interface Section {
  title: string;
  text: string;
  image: string;
  reverse: boolean;
}

function ImageLeft({ image, }: { image: string; }) {
  return (
    <div className="flex justify-center md:justify-start">
      <div className="max-w-96 w-full">
        <img src={image} alt="Working People" className="w-3/4" />
      </div>
    </div>
  );
}

function ImageRight({ image, }: { image: string; }) {
  return (
    <div className="flex justify-center md:justify-end">
      <div className="max-w-96 w-full">
        <img src={image} alt="Working People" className="w-3/4" />
      </div>
    </div>
  );
}

function AboutSection() {
  const sections: Section[] = [
    { title: "Client-Centric Approach", text: "Prioritizing your success and satisfaction drives everything we do.", image: "i-0.png", reverse: true },
    { title: "Transparent Communication", text: "We believe in open and honest communication throughout the project lifecycle.", image: "i-0.png", reverse: false },
    { title: "Continuous Improvement", text: "We stay updated on the latest technologies and methodologies to deliver cutting-edge solutions.", image: "i-0.png", reverse: true },
    { title: "Customized Solutions", text: "Every project is tailored to meet your unique requirements and challenges.", image: "i-0.png", reverse: false },
    { title: "Proactive Support", text: "We provide ongoing assistance and troubleshooting to ensure your long-term success.", image: "i-0.png", reverse: true }
    // Add more sections here as needed
  ];

  return (
    <div className="container mx-auto mt-32 px-4 md:px-20 lg:px-40">
      <h1 className="text-center mb-20 font-bold font-body text-4xl">
        We are Different
      </h1>
      {sections.map((section, index) => {
        return (
          <div key={index} className={`grid grid-cols-1 md:grid-cols-2 mb-5 gap-8 ${section.reverse ? 'md:flex-row-reverse' : ''}`}>
            {section.reverse ? (
              <>
                <ImageRight image={section.image} />
                <div className="flex flex-col justify-center items-center md:items-start">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center md:text-left">{section.title}</h2>
                  <p className="text-lg sm:text-base leading-relaxed text-gray-700 mb-4 text-center md:text-left">
                    {section.text}
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="flex flex-col justify-center mb-10 items-center md:items-start">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center md:text-left">{section.title}</h2>
                  <p className="text-lg sm:text-base leading-relaxed text-gray-700 mb-4 text-center md:text-left">
                    {section.text}
                  </p>
                </div>
                <ImageLeft image={section.image} />
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default AboutSection;
