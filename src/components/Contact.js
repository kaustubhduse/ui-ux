import React from "react";

function Contact() {
  return (
    <div id="contact">
      <div className="mt-[15%]">
        <h1 className="text-4xl font-bold text-center">Lets Design Together</h1>
        <p className="text-center mt-[3%]">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium
        </p>
        <div className="flex justify-center items-center mt-[3%]">
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

export default Contact;
