import React from "react";
import Image from "next/image";

function TestimonialCard({ testimonials, currentIndex, setCurrentIndex }) {
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
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
    <div className="relative flex items-center justify-center">
      {/* Previous Testimonial */}
      <div className="absolute left-0 w-[20%] hidden md:flex bg-gray-100 p-5 rounded-lg opacity-50">
        <Image
          src={testimonials[getPrevIndex()].image}
          alt="Previous Profile"
          width={70}
          height={60}
          className="rounded-full mx-auto"
        />
        <div className="ml-2">
          <p className="text-sm">
            {testimonials[getPrevIndex()].description}
          </p>
          <p className="mt-2 text-sm">{testimonials[getPrevIndex()].name}</p>
        </div>
      </div>

      {/* Current Testimonial */}
      <div className="bg-gray-100 w-[60%] md:w-[50%] p-7 rounded-lg">
        <div className="flex flex-col md:flex-row">
          <Image
            src={testimonials[currentIndex].image}
            alt="Profile"
            width={100}
            height={100}
            className="rounded-full mx-auto md:mx-0"
          />
          <div className="ml-4">
            <p>{testimonials[currentIndex].description}</p>
            <p className="mt-5">{testimonials[currentIndex].name}</p>
            <p>{testimonials[currentIndex].designation}</p>
          </div>
        </div>
      </div>

      {/* Next Testimonial */}
      <div className="absolute right-0 w-[20%] hidden md:flex bg-gray-100 p-5 rounded-lg opacity-50">
        <Image
          src={testimonials[getNextIndex()].image}
          alt="Next Profile"
          width={60}
          height={60}
          className="rounded-full mx-auto"
        />
        <div className="ml-2">
          <p className="text-sm">
            {testimonials[getNextIndex()].description}
          </p>
          <p className="mt-2 text-sm">{testimonials[getNextIndex()].name}</p>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute top-[10%] mt-[15%] ">
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
