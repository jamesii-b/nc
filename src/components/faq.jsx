import React, { useState } from "react";
import { Transition } from "@headlessui/react";

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4">
      <button
        className="flex justify-between items-center w-full bg-blue-500 text-white p-4 rounded-md hover:bg-blue-600 focus:outline-none transition duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold">{question}</span>
        <span>{isOpen ? "-" : "+"}</span>
      </button>
      <Transition
        show={isOpen}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        {(ref) => (
          <p ref={ref} className="p-4 bg-gray-100 text-gray-800 rounded-b-md">
            {answer}
          </p>
        )}
      </Transition>
    </div>
  );
};

const FaqPage = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-500">
        Frequently Asked Questions
      </h1>
      <div>
        <FaqItem
          question="What services do you offer?"
          answer="We specialize in IT outsourcing services including custom software development and UI/UX design."
        />
        <FaqItem
          question="How do I get started with your company?"
          answer="Simply reach out to us via email or phone and we'll schedule a consultation to discuss your project requirements."
        />
        <FaqItem
          question="Can you handle both frontend and backend development?"
          answer="Yes, our team consists of experienced frontend and backend developers who can handle full-stack development projects."
        />
        <FaqItem
          question="Do you provide ongoing support after project completion?"
          answer="Absolutely, we offer maintenance and support services to ensure your application runs smoothly even after launch."
        />
      </div>
    </div>
  );
};

export default FaqPage;
