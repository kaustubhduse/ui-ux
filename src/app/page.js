"use client";

import React, { useState } from "react";
import Image from "next/image";

import AboutMe from "@/components/Aboutme";
import Services from "@/components/Services";
import MyProjects from "@/components/MyProjects";
import Testinomials from "@/components/Testinomials";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="lg:px-[10%]">
      <div className="relative">
        {/* Header Container */}
        <div className="relative flex items-center h-[67px] top-[61px] bg-slate-600 mx-auto">
          {/* Logo and Title */}
          <div className="flex items-center flex-shrink-0 w-full md:w-auto">
            <Image
              width={67}
              height={67}
              src="/assets/logo.png"
              alt="Logo"
              className="h-[67px] p-3"
            />
            <p className="text-2xl md:text-4xl">
              <span className="font-bold">M</span>umair
            </p>
          </div>

          {/* Navigation for larger screens */}
          <div className="hidden lg:flex space-x-12 items-center ml-auto">
            <p className="whitespace-nowrap cursor-pointer">Home</p>
            <p className="whitespace-nowrap cursor-pointer">About Me</p>
            <p className="whitespace-nowrap cursor-pointer">Services</p>
            <p className="whitespace-nowrap cursor-pointer">Projects</p>
            <p className="whitespace-nowrap cursor-pointer">Testimonials</p>
            <p className="whitespace-nowrap cursor-pointer">Contact</p>
            <button
              style={{ backgroundColor: "rgba(253, 111, 0, 1)" }}
              className="text-white px-4 py-2 rounded cursor-pointer"
            >
              Download CV
            </button>
          </div>

          {/* Hamburger Menu Button for smaller screens */}
          <button
            className="block lg:hidden text-white text-2xl ml-auto "
            onClick={toggleMenu}
          >
            &#9776;
          </button>
        </div>

        {/* Mobile Menu (conditionally rendered) */}
        {menuOpen && (
          <div className="lg:hidden bg-slate-600 text-white p-4 absolute top-[67px] w-full">
            <div className="flex flex-col space-y-2">
              <div className="flex justify-between">
                <p>Home</p>
                <p>About Me</p>
              </div>
              <div className="flex justify-between">
                <p>Services</p>
                <p>Projects</p>
              </div>
              <div className="flex justify-between">
                <p>Testimonials</p>
                <p>Contact</p>
              </div>
              <button
                style={{ backgroundColor: "rgba(253, 111, 0, 1)" }}
                className="text-white px-4 py-2 rounded mt-4 block mx-auto"
              >
                Download CV
              </button>
            </div>
          </div>
        )}
      </div>

      {/* New Section Below Navbar */}
      <div className="py-[12%] flex items-center">
        <div className="flex-1">
          <p className="text-2xl">
            <span className="text-sm">Hi I am</span> <br />
            <span className="text-xl">Muhammad Umair</span> <br />
            <span className="text-5xl font-bold">
              UI & UX <br />
              Designer
            </span>
          </p>
          <p className="mt-4">
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
            nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis
            tempus pharetra
          </p>
          <button
            style={{ backgroundColor: "rgba(253, 111, 0, 1)" }}
            className="text-white px-4 py-2 rounded mt-4 block"
          >
            Hire Me
          </button>
        </div>
        <div className="flex-1 mt-6 lg:mt-0 lg:ml-6">
          <Image
            width={300}
            height={300}
            src="/assets/profile.png"
            alt="Profile"
            className="w-full max-w-[300px] h-auto"
          />
        </div>
      </div>

      {/* About Me Section */}
      <AboutMe />

      {/* Services */}
      <Services />

      {/* My Projects */}
      <MyProjects />

      {/* {Testinomials} */}
      <Testinomials />

      {/* footer */}
      <div className="mt-[10%] items-center justify-center bg-gray-100 p-2">
        <div className="p-4 flex items-center justify-center flex-shrink-0 w-full md:w-auto">
          <Image
            width={57}
            height={57}
            src="/assets/logo.png"
            alt="Logo"
            className="h-[57px] p-3"
          />
          <p className="text-xl md:text-2xl">
            <span className="font-bold">M</span>umair
          </p>
        </div>

        <div className="flex flex-wrap lg:flex-nowrap space-x-12 items-center justify-center mt-[3%]">
          <p className="whitespace-nowrap cursor-pointer">Home</p>
          <p className="whitespace-nowrap cursor-pointer">About Me</p>
          <p className="whitespace-nowrap cursor-pointer">Services</p>
          <p className="whitespace-nowrap cursor-pointer">Projects</p>
          <p className="whitespace-nowrap cursor-pointer">Testimonials</p>
          <p className="whitespace-nowrap cursor-pointer">Contact</p>
        </div>

        <div className="flex space-x-5 justify-center items-center p-3">
          <Image
            width={20}
            height={20}
            src="/assets/facebook.png"
            alt="Facebook"
            className="h-[20px] mt-[3%] cursor-pointer"
          />
          <Image
            width={20}
            height={20}
            src="/assets/twitter.png"
            alt="Twitter"
            className="h-[20px] mt-[3%] cursor-pointer"
          />
          <Image
            width={20}
            height={20}
            src="/assets/instagram.png"
            alt="Instagram"
            className="h-[20px] mt-[3%] cursor-pointer"
          />
          <Image
            width={20}
            height={20}
            src="/assets/linkedin.png"
            alt="Linkedin"
            className="h-[20px] mt-[3%] cursor-pointer"
          />
        </div>
      </div>

      {/* last footer */}
      <div
        className="flex justify-center items-center p-3"
        style={{ background: "rgba(84, 84, 84, 1)" }}
      >
        <h1 className="text-center">
          © 2023 <span className="font-bold text-orange-500">Mumair</span> All
          Rights Reserved, Inc.
        </h1>
      </div>
    </div>
  );
}

export default App;
