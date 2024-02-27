
import { motion, useInView, useAnimation } from 'framer-motion';
import React, { useEffect, useRef } from 'react';

function HeroCTA() {
    const refer = useRef(null);
    const inView = useInView(refer, { once: false });
    const motionControls = useAnimation();
    useEffect(() => {
      if (inView) {
        motionControls.start({
          opacity: 1,
          y: 0,
          transition: { duration: 2, ease: 'easeInOut' }
        });
      }
      console.log('in view');
      console.log(inView);
    }, [inView]);
    return (
      <div ref={refer}>
  
        <motion.div
          initial={{ opacity: 0, y: 75 }}
          animate={motionControls}
  
          className="bg-gray-900 py-20"
        >
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: 'easeInOut' }}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              Boost Your Business Growth Today!
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: 'easeInOut' }}
              className="text-lg text-gray-300 mb-6"
            >
              Supercharge your business with our industry-leading solutions.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9, ease: 'easeInOut' }}
              className="flex justify-center md:justify-start"
            >
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out">
                Get Started
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
  
    );
  }
  
  
  export default HeroCTA;
  
  