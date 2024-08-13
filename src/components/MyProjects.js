import React from "react";
import SmallCard from "UI/SmallCard";
import Image from "next/image";

function MyProjects() {
  return (
    <div>
      <div className="mt-[10%]">
        <h1 className="text-4xl font-bold text-center">My Projects</h1>
        <p className="text-center mt-[2%]">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium
        </p>
      </div>
      <div className="flex justify-center space-x-7">
        <SmallCard title="All" />
        <SmallCard title="UI/UX" />
        <SmallCard title="Web Design" />
        <SmallCard title="App Design" />
        <SmallCard title="Graphic Design" />
      </div>
      <div className="flex flex-col md:flex-row justify-center md:space-x-6">
        <Image
          width={300}
          height={300}
          src="/assets/aircalling.png"
          alt="Air Calling"
          className="w-[100%] md:w-[30%] h-auto mt-[8%]"
        />
        <Image
          width={300}
          height={300}
          src="/assets/business.png"
          alt="Business"
          className="w-[100%] md:w-[30%] h-auto mt-[8%]"
        />
        <Image
          width={300}
          height={300}
          src="/assets/ecom.png"
          alt="Ecom"
          className="w-[100%] md:w-[30%] h-auto mt-[8%]"
        />
      </div>
    </div>
  );
}

export default MyProjects;
