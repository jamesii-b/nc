import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function CaseStudySection() {
  const navigate = useNavigate();

  const handleCaseStudyClick = () => {
    navigate("/blogs/apubt");
  };

  return (
    <div className="container mx-auto py-16 px-12">
      <h1 className="text-center font-bold font-body  text-4xl mb-10">
        Case Study
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-1/2"
        >
          <img src="/hero/case-study.webp" alt="Case Study Left" className="w-full rounded-lg shadow-md" />
        </motion.div>
        <div className="md:w-1/2 md:pl-8"> {/* Right Column */}
          <div className="text-center md:text-left"> {/* Text Container */}
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-3xl md:text-4xl font-bold mb-4 text-gray-800"
            >
              The Apubt Case Study
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-lg text-gray-600 mb-6"
            >
              Explore the Apubt case study to learn how we helped them achieve their business goals.
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleCaseStudyClick}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-md shadow-md transition duration-300 ease-in-out"
            >
              Read More
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaseStudySection;
