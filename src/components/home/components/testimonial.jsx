import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import testimonialImg from "/hero/h1.webp"; // Import the image of the testimonial giver

// Sample testimonial data
const testimonial = {
  quote: "We are very happy with the Development Services received from Nepcodes. The young team is incredibly talented and attentive detail which made us achieve the website that we envisioned of.",
  author: "Krishna Neupane",
  position: "EEBSS",
  image: testimonialImg // Image of the testimonial giver
};

function TestimonialSection() {
  return (
    <section className="py-4  ">
      <div className="container mx-auto px-4 ">
        <div className="max-w-3xl mx-auto text-center bg- bg-bg_secondary rounded-lg shadow-lg p-8">
          <FaQuoteLeft className="text-3xl text-blue-500 mb-4 mx-auto" />
          <p className="text-lg text-gray-800 leading-relaxed mb-6">{testimonial.quote}</p>
          <div className="flex flex-col items-center">
            <img src={testimonial.image} alt={testimonial.author} className="w-20 h-20 object-cover rounded-full mb-4" />
            <p className="text-lg font-semibold text-gray-800">{testimonial.author}</p>
            <p className="text-gray-600">{testimonial.position}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
