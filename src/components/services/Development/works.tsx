import React, { useState, useEffect } from 'react';
import { FaDesktop, FaMobileAlt } from 'react-icons/fa';

const data = [
    {
        image: "/services/dev/port/p1.png",
        mImage: "/services/dev/port/p1-m.jpg",
        video: "/video1.mp4",
        alt: "https://apubt.com",
    },
    {
        image: "/services/dev/port/p2.png",
        mImage: "/services/dev/port/p2-m.jpg",
        video: "/video2.mp4",
        alt: "Website/App 2",
    },
    {
        image: "/services/dev/port/p3.png",
        mImage: "/services/dev/port/p3-m.jpg",
        video: "/video3.mp4",
        alt: "Website/App 3",
    },
    {
        image: "/services/dev/port/p4.png",
        mImage: "/services/dev/port/p4-m.jpg",
        video: "/video3.mp4",
        alt: "Website/App 3",
    },
];

function Works() {
    const [activeButton, setActiveButton] = useState({});

    useEffect(() => {
        const defaultActiveButton = {};
        data.forEach((_, index) => {
            defaultActiveButton[index] = 'desktop';
        });
        setActiveButton(defaultActiveButton);
    }, []);

    const handleButtonClick = (index, buttonType) => {
        setActiveButton({ ...activeButton, [index]: buttonType });
    };

    return (
        <div className="container mx-auto ">
            <h1 className='text-center my-16 text-4xl font-body font-bold'>
                Our Previous Works
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {data.map((stack, index) => (
                    <div
                        key={index}
                        className="relative overflow-hidden mx-10 rounded-lg m shadow-md h-96" 
                    >
                        <img
                            src={activeButton[index] === 'desktop' ? stack.image : stack.mImage}
                            alt={stack.alt}
                            className={`w-full h-full object-cover mx-auto`}
                            style={{ objectFit: 'contain' }}
                        />

                        <div className="absolute top-0 p-4 bg-black opacity-80">
                            <FaDesktop
                                color={activeButton[index] === 'desktop' ? '#fff' : '#aaa'}
                                size={24}
                                style={{ marginBottom: '0.5rem' }}
                                onClick={() => handleButtonClick(index, 'desktop')}
                            />
                            <FaMobileAlt
                                color={activeButton[index] === 'mobile' ? '#fff' : '#aaa'}
                                size={24}
                                onClick={() => handleButtonClick(index, 'mobile')}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Works;
