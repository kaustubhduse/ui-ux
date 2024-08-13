import React, { useState } from "react";
import Image from "next/image";

function TestimonialCard({ testimonials }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    console.log("Next Slide");  // Debugging log
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    console.log("Previous Slide");  // Debugging log
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const getPrevIndex = () => {
    return currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
  };

  const getNextIndex = () => {
    return currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1;
  };

  return (
    <div className="relative w-[50%] flex flex-col items-center">
      <div className="flex items-center justify-center space-x-4">
        {/* Previous Testimonial */}
        <div className="hidden md:flex bg-gray-100 w-[50%] p-5 rounded-lg opacity-50">
          <Image
            src={testimonials[getPrevIndex()].image}
            alt="Previous Profile"
            width={40} // Set width
            height={40} // Set height
            className="rounded-full mx-auto" // Reduced size
          />
          <div className="ml-2">
            <p className="text-sm">{testimonials[getPrevIndex()].description}</p>
            <p className="mt-2 text-sm">{testimonials[getPrevIndex()].name}</p>
          </div>
        </div>

        {/* Current Testimonial */}
        <div className="flex flex-col md:flex-row bg-gray-100 w-[50%] md:w-[50%] p-7 rounded-lg">
          <Image
            src={testimonials[currentIndex].image}
            alt="Profile"
            width={80} // Set width
            height={80} // Set height
            className="rounded-full mx-auto md:mx-0" // Adjusted size
          />
          <div className="ml-0 md:ml-4 mt-4 md:mt-0 text-center md:text-left">
            <p>{testimonials[currentIndex].description}</p>
            <p className="mt-5">{testimonials[currentIndex].name}</p>
            <p>{testimonials[currentIndex].designation}</p>
          </div>
        </div>

        {/* Next Testimonial */}
        <div className="hidden md:flex bg-gray-100 w-[50%] p-5 rounded-lg opacity-50">
          <Image
            src={testimonials[getNextIndex()].image}
            alt="Next Profile"
            width={40} // Set width
            height={40} // Set height
            className="rounded-full mx-auto" // Reduced size
          />
          <div className="ml-2">
            <p className="text-sm">{testimonials[getNextIndex()].description}</p>
            <p className="mt-2 text-sm">{testimonials[getNextIndex()].name}</p>
          </div>
        </div>
      </div>

      {/* Sliding Bars */}
      <div className="flex space-x-2 mt-4">
        {testimonials.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-8 rounded-full mt-10 ${
              index === currentIndex ? "bg-orange-500" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="absolute top-[50%] transform -translate-y-[50%] w-full flex justify-between px-4">
        <button onClick={prevSlide} className="text-2xl">
          &#8592;
        </button>
        <button onClick={nextSlide} className="text-2xl">
          &#8594;
        </button>
      </div>
    </div>
  );
}

export default TestimonialCard;
