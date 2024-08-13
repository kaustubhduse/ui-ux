import React from "react";
import Card from "UI/Card.js";

function Services() {
  return (
    <div className="mt-[10%]">
        <h1 className="text-4xl font-bold text-center">Services</h1>
        <p className="text-center mt-[2%]">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium
        </p>
        <div className="flex justify-center space-x-7 md:flex-col lg:flex-row mt-[5%]">
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
