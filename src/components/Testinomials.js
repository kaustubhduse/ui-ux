import React, { useEffect, useState } from "react";
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
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("testimonials");
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check visibility on component mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="testimonials"
      className={`mt-[10%] ${isVisible ? "fade-in" : ""}`}
    >
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
    </div>
  );
}

export default Testinomials;
