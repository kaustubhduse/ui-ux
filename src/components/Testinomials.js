import React from "react";
import TestimonialCard from "UI/TestinomialCard";

const testimonials = [
    {
      image: "/assets/testinomial.png",
      name: "John Doe",
      designation: "CEO, XYZ Company",
      description:
        "Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium",
    },
    {
      image: "/assets/testinomial.png",
      name: "Jane Smith",
      designation: "CTO, ABC Corp",
      description:
        "Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium",
    },
    {
      image: "/assets/testinomial.png",
      name: "Robert Brown",
      designation: "COO, DEF Inc",
      description:
        "Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium",
    },
    {
      image: "/assets/testinomial.png",
      name: "Emily White",
      designation: "CFO, GHI LLC",
      description:
        "Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium",
    },
  ];    

function Testinomials() {
  return (
    <div className="mt-[10%]">
      <div>
        <h1 className="text-4xl font-bold text-center">Testinomials</h1>
        <p className="text-center mt-[4%]">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium
        </p>
      </div>

      <div className="flex justify-center mt-[7%]">
        <TestimonialCard testimonials={testimonials} />
      </div>

      <div className="mt-[10%]">
        <h1 className="text-4xl font-bold text-center">
          Let's Design Together
        </h1>
        <p className="text-center mt-[3%]">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium
        </p>
        <div className="flex justify-center items-center mt-[7%]">
          <input
            type="text"
            placeholder="Enter your Email"
            className="w-[40%] border border-gray-300 rounded-lg p-2"
          />
          <button
            style={{ backgroundColor: "rgba(253, 111, 0, 1)" }}
            className="text-white px-4 py-2 rounded-lg ml-4"
          >
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
}

export default Testinomials;
