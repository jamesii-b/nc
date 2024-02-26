import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './ss.css';

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

function AndMore() {
  const [isVisible, setIsVisible] = useState(false);
  const handleIntersection = () => {
    setIsVisible(true);
  };

  const targetRef = useIntersectionObserver(handleIntersection, { threshold: 0.5 });

  return (
    <div ref={targetRef} className={`flex items-center justify-center font-semibold w-2/3 mx-auto bg-primary h-28 text-3xl text-center button ${isVisible ? 'visible' : ''}`}>
      <Link to="/about" className="text-white">
        and more
      </Link>
    </div>
  );
}

export default AndMore;
