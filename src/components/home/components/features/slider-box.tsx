import React, { useEffect, useRef, useState } from 'react';

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

function SliderBox({other, highlight, }) {
    const [isVisible, setIsVisible] = useState(false);
    const handleIntersection = () => {
        setIsVisible(true);
    };

    const targetRef = useIntersectionObserver(handleIntersection, { threshold: 0.5 });
    return (
        <>
            <h1 className="text-center mb-10 font-bold font-body  text-4xl">
                {other}{' '}
                <button ref={targetRef} id="btn1" className={`button ${isVisible ? 'visible' : ''}`}>
                    {highlight}
                </button>
            </h1>
        </>
    )
}

export default SliderBox