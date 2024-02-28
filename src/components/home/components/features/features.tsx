import React, { useEffect, useRef, useState } from 'react';
import sections from './components/models';
import './feature.css';
import ImageLeft from './components/imageLeft'
import ImageRight from './components/imageRight'

function useIntersectionObserver(callback, options) {
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            callback();
          }
        });
      },
      options
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, [callback, options]);

  return targetRef;
}

function FeatureSection() {
  const [isVisible, setIsVisible] = useState(false);
  const handleIntersection = () => {
    setIsVisible(true);
  };

  const targetRef = useIntersectionObserver(handleIntersection, { threshold: 0.5 });

  return (
    <div className="container mx-auto px-4 md:px-20 lg:px-40">
      <h1 className="text-center mb-20 font-bold font-body text-4xl">
        We are{' '}
        <button ref={targetRef} id="btn1" className={`button ${isVisible ? 'visible' : ''}`}>
          Different
        </button>
      </h1>
      {sections.map((section, index) => {
        return (
          <div
            key={index}
            className={`grid hover:shadow-lg px-4 w-3/4 mx-auto transform transition-transform duration-300 hover:scale-105 grid-cols-1 md:grid-cols-2 mb-10 gap-8 ${section.reverse ? 'md:flex-row-reverse' : ''
              }`}
          >
            {section.reverse ? (
              <>
                <ImageLeft image={section.image} />
                <div className="flex  flex-col justify-center  items-center md:items-start">
                  <h2 className="text-2xl sm:text-3xl  md:text-4xl font-bold mb-10 text-center md:text-left">{section.title}</h2>
                  <p className="text-lg sm:text-base leading-relaxed text-gray-700 mb-2 text-center md:text-left">{section.text}</p>
                </div>
              </>
            ) : (
              <>
                <div className="flex  flex-col justify-center   items-center md:items-start">
                  <h2 className="text-2xl sm:text-3xl   md:text-4xl font-bold mb-10 text-center md:text-left">{section.title}</h2>
                  <p className="text-lg sm:text-base leading-relaxed text-gray-700 mb-2 text-center md:text-left">{section.text}</p>
                </div>

                <ImageRight image={section.image} />
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default FeatureSection;
