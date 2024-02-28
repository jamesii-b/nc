import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import HeadBar from "../reusable/head-bar"
import { IoMdCodeWorking } from "react-icons/io";

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasColonSeparatedItems = answer.includes(":::::");

  return (
    <div className="mb-10 font-body px-10 md:max-w-4xl md:px-20 mx-auto">
      <button
        className="flex justify-between items-center w-full p-1 border-b border-gray-300"
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
          <div ref={ref} className="p-4 text-gray-800 rounded-b-md">
            {hasColonSeparatedItems ? (
              <ul className="list-none pl-5" >
                {answer.split(":::::").map((item, index) => (
                  <li key={index} className="py-1 flex items-center">
                    <IoMdCodeWorking className="mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              <div>
                {answer.split('\n').map((line, index) => (
                  <p key={index} className="py-1">{line}</p>
                ))}
              </div>
            )}
          </div>
        )}
      </Transition>
    </div>
  );
};


function FaqPage() {
  return (
    <>
      <HeadBar backgroundColor="bg-primary" imageSrc="/faq/h1.webp" title="FAQs" />
      <div className="container mx-auto py-8 min-h-screen">

        <h1 className="text-4xl font-bold mb-8 text-center text-blue-500">
          FAQs
        </h1>
        <div>
          <FaqItem
            question="What services do you offer?"
            answer=" Custom software development for CRM, ERP, web applications, and mobile apps.:::::
             UI/UX design for seamless user experiences.:::::
             Technical consultation and support throughout the development process.:::::
             Integration services to ensure smooth operation with existing systems.
             "
          />
          <FaqItem
            question="How do I get started with your company?"
            answer="Simply reach out to us via email or phone and we'll schedule a consultation to discuss your project requirements."
          />
          <FaqItem

            question="How do you ensure the quality of your work?"
            answer="Quality is our top priority. We adhere to industry best practices such as Agile methodology, continuous integration, and automated testing. Our experienced team of developers conducts thorough code reviews to maintain high standards."
          />

          <FaqItem
            question="Can you customize software according to our specific requirements?"
            answer="Absolutely! We understand that every business is unique. Our team works closely with clients to gather requirements and tailor solutions that meet their exact needs."
          />
          <FaqItem
            question="What is your approach to data security and confidentiality?"
            answer="We take data security and confidentiality very seriously. We adhere to strict security protocols and ensure that all client information remains confidential. Our team members sign non-disclosure agreements (NDAs) to protect your sensitive data."
          />


          <FaqItem
            question=" How do you handle communication and project updates?"
            answer="We believe in transparent communication. We provide regular project updates through your preferred channels, whether it's email, video calls, or project management tools like Slack or Jira."
          />
          <FaqItem
            question="What is your pricing model?"
            answer="Our pricing model is flexible and depends on the scope and complexity of the project. We offer competitive rates and can provide both fixed-price and hourly billing options."
          />
          <FaqItem
            question="Can you customize software according to our specific requirements?"
            answer="Absolutely! We understand that every business is unique. Our team works closely with clients to gather requirements and tailor solutions that meet their exact needs."
          />
          <FaqItem
            question="Do you provide ongoing support and maintenance after the project is completed?"
            answer="Yes, we offer ongoing support and maintenance services to ensure the smooth operation of your software. Whether it's bug fixes, updates, or enhancements, our team is here to assist you even after the project is completed."
          />
          <FaqItem
            question="Can you customize software according to our specific requirements?"
            answer="Absolutely! We understand that every business is unique. Our team works closely with clients to gather requirements and tailor solutions that meet their exact needs."
          />
          <FaqItem
            question="Can you customize software according to our specific requirements?"
            answer="Absolutely! We understand that every business is unique. Our team works closely with clients to gather requirements and tailor solutions that meet their exact needs."
          />

        </div>

      </div>
    </>

  );
};

export default FaqPage;
