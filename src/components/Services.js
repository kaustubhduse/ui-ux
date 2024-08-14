import React, { useEffect, useState } from "react";
import Card from "UI/Card.js";

function Services() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("services");
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
      id="services"
      className={`mt-[20%] lg:px-[4%] ${isVisible ? "fade-in" : ""}`}
    >
      <h1 className="text-4xl font-bold text-center">Services</h1>
      <p className="text-center mt-[2%]">
        Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
        lectus netus in. Aliquet donec morbi convallis pretium
      </p>
      <div className="flex flex-col justify-center items-center lg:flex-row lg:space-x-7 mt-[5%] space-y-7 lg:space-y-0">
        <Card
          image="/assets/uiux.png"
          alt="UI/UX Design"
          title="UI/UX"
          description="Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium"
        />
        <Card
          image="/assets/webdesign.png"
          alt="Web Design"
          title="Web Design"
          description="Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium"
        />
        <Card
          image="/assets/appdesign.png"
          alt="App Design"
          title="App Design"
          description="Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium"
        />
        <Card
          image="/assets/graphicdesign.png"
          alt="Graphic Design"
          title="Graphic Design"
          description="Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium"
        />
      </div>
    </div>
  );
}

export default Services;
