// components/AboutMe.js
import React, { useState } from "react";
import Image from "next/image";

function AboutMe() {
  const [sliderux, setSliderux] = useState(0);
  const [sliderweb, setSliderweb] = useState(0);
  const [sliderapp, setSliderapp] = useState(0);
  const [slidergraphic, setSlidergraphic] = useState(0);

  const handleSliderUx = (event) => {
    setSliderux(event.target.value);
  };

  const handleSliderWeb = (event) => {
    setSliderweb(event.target.value);
  };

  const handleSliderApp = (event) => {
    setSliderapp(event.target.value);
  };

  const handleSliderGraphic = (event) => {
    setSlidergraphic(event.target.value);
  };

  return (
    <div className="flex items-center mt-12">
      <div className="flex-1">
        <Image
          width={350}
          height={350}
          src="/assets/aboutme.png"
          alt="Profile"
          className="w-full max-w-[350px] h-auto"
        />
      </div>
      <div className="flex-1 mt-6">
        <p className="text-2xl">
          <span className="text-4xl font-bold">About Me</span>
        </p>
        <p className="mt-4">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus
          pharetra
        </p>
        <p className="mt-2 text-xl">UX</p>
        <input
          type="range"
          min="0"
          max="100"
          step="1"
          value={sliderux}
          onChange={handleSliderUx}
          className="w-[80%] mt-3 accent-orange-600"
        />
        <p className="text-xl">Website Design</p>
        <input
          type="range"
          min="0"
          max="100"
          step="1"
          value={sliderweb}
          onChange={handleSliderWeb}
          className="w-[80%] mt-3 accent-orange-600"
        />
        <p className="text-xl">App Design</p>
        <input
          type="range"
          min="0"
          max="100"
          step="1"
          value={sliderapp}
          onChange={handleSliderApp}
          className="w-[80%] mt-3 accent-orange-600"
        />
        <p className="text-xl">Graphic Design</p>
        <input
          type="range"
          min="0"
          max="100"
          step="1"
          value={slidergraphic}
          onChange={handleSliderGraphic}
          className="w-[80%] mt-3 accent-orange-600"
        />
      </div>
    </div>
  );
}

export default AboutMe;
