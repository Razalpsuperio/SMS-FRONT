import React, { useState } from 'react';
import Form from '../Form/Form';
import { Button } from '@nextui-org/react';
import Lessons from '../LessonsAdd/Lessons';

const Modules = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="p-4">
      <div className="flex justify-end mb-4">
        <Form />
      </div>

      <div>
        {/* Accordion Item 1 */}
        <div className="mb-4">
          <h2>
            <button
              type="button"
              className={`flex items-center justify-between w-full p-5 text-lg font-semibold text-left text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 transition-colors duration-300 ${
                activeIndex === 1 ? 'bg-gray-100' : 'bg-white'
              }`}
              onClick={() => toggleAccordion(1)}
            >
              <span>What is React?</span>
              <svg
                className={`w-5 h-5 transform ${activeIndex === 1 ? 'rotate-180' : ''}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </h2>
          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${
              activeIndex === 1 ? 'max-h-screen' : 'max-h-0'
            }`}
          >
            <div className="p-5 text-gray-700 bg-gray-50 border border-t-0 border-gray-300">
              <div className="flex justify-between items-center">
                <p className="mb-2">
                  React is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.
                </p>
                <Lessons/>
              </div>
            </div>
          </div>
        </div>

        {/* Accordion Item 2 */}
        <div className="mb-4">
          <h2>
            <button
              type="button"
              className={`flex items-center justify-between w-full p-5 text-lg font-semibold text-left text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 transition-colors duration-300 ${
                activeIndex === 2 ? 'bg-gray-100' : 'bg-white'
              }`}
              onClick={() => toggleAccordion(2)}
            >
              <span>Is there a next js is like react?</span>
              <svg
                className={`w-5 h-5 transform ${activeIndex === 2 ? 'rotate-180' : ''}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </h2>
          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${
              activeIndex === 2 ? 'max-h-screen' : 'max-h-0'
            }`}
          >
            <div className="p-5 text-gray-700 bg-gray-50 border border-t-0 border-gray-300">
              <div className="flex justify-between items-center">
                <p className="mb-2">
                  Next.js is a framework for React applications, providing additional features and optimizations for server-side rendering, routing, and more.
                </p>
                <Button>+</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modules;
