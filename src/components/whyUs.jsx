import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { IoMdCodeWorking } from "react-icons/io";

const WhyUsItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  // const hasColonSeparatedItems = answer.includes(":::::");

  return (
    <div className="mb-10  px-10 md:max-w-4xl md:px-20 mx-auto">
      <button
        className="flex justify-between items-center  w-full p-1 border-b border-gray-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold">{question}</span>
        <span>{isOpen ? <FaMinus /> : <FaPlus />}</span>
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
          <div ref={ref} className="p-4 text-left text-gray-800 rounded-b-md">
            <div>
              {answer.split('\n').map((line, index) => (
                <p key={index} className="py-1">{line}</p>
              ))}
            </div>
          </div>
        )}
      </Transition>
    </div>
  );
};


function WhyUs() {
  return (


    <div>

      <WhyUsItem
        question="Expertise Across Technologies"
        answer="Our team boasts expertise across a wide array of technologies, ensuring that we can proficiently handle any project requirement, regardless of its complexity or specificity."
      />

      <WhyUsItem
        question="Transparent Communication"
        answer="We believe in fostering open and transparent communication with our clients throughout the entire project lifecycle. From initial discussions to regular progress updates and issue resolution, we keep our clients informed and involved every step of the way."
      />

      <WhyUsItem
        question="Application and Data Security"
        answer="Security is paramount in everything we do. We implement robust security measures to safeguard both applications and data, following industry best practices and protocols to ensure the confidentiality and integrity of our clients' sensitive information."
      />

      <WhyUsItem
        question="Scalability and Support"
        answer="Our solutions are designed with scalability in mind, allowing them to grow seamlessly alongside our clients' businesses. Moreover, we provide comprehensive support and maintenance services to ensure that our clients' systems remain operational and optimized even as their needs evolve."
      />

      <WhyUsItem
        question="Competitive Pricing"
        answer="We offer competitive pricing structures tailored to suit our clients' budgets and project requirements. Our transparent pricing model ensures that clients receive exceptional value for their investment without compromising on quality or service."
      />



    </div>


  );
};

export default WhyUs;
