"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import AboutMe from "@/components/Aboutme";
import Services from "@/components/Services";
import MyProjects from "@/components/MyProjects";
import Testinomials from "@/components/Testinomials";
import Contact from "@/components/Contact";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".slide-in");
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          el.classList.add("active");
        } else {
          el.classList.remove("active");
        }
      });
    };

    // Scroll to the Home section when the page loads
    const homeSection = document.getElementById("home");
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: "smooth" });
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger scroll event to handle initial visibility

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="">
      <div className="relative lg:px-[4%]">
        {/* Header Container */}
        <div className="relative flex items-center h-[67px] top-[21px] mx-auto">
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
            <a href="#home" className="whitespace-nowrap cursor-pointer">Home</a>
            <a href="#about-me" className="whitespace-nowrap cursor-pointer">About Me</a>
            <a href="#services" className="whitespace-nowrap cursor-pointer">Services</a>
            <a href="#projects" className="whitespace-nowrap cursor-pointer">Projects</a>
            <a href="#testimonials" className="whitespace-nowrap cursor-pointer">Testimonials</a>
            <a href="#contact" className="whitespace-nowrap cursor-pointer">Contact</a>
            <button
              style={{ backgroundColor: "rgba(253, 111, 0, 1)" }}
              className="text-white px-4 py-2 rounded cursor-pointer"
            >
              Download CV
            </button>
          </div>

          {/* Hamburger Menu Button for smaller screens */}
          <button
            className="block lg:hidden absolute text-black text-2xl right-4 top-4"
            onClick={toggleMenu}
          >
            &#9776;
          </button>
        </div>

        {/* Mobile Menu (conditionally rendered) */}
        {menuOpen && (
          <div className="lg:hidden bg-slate-600 text-white p-4 absolute top-[67px] w-full">
            <div className="flex flex-col space-y-2">
              <a href="#home" className="block">Home</a>
              <a href="#about-me" className="block">About Me</a>
              <a href="#services" className="block">Services</a>
              <a href="#projects" className="block">Projects</a>
              <a href="#testimonials" className="block">Testimonials</a>
              <a href="#contact" className="block">Contact</a>
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

      {/* Home Section */}
      <div id="home" className="py-[12%] flex items-center px-[4%]">
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

      {/* Other Sections */}
      <div id="about-me" className="slide-in">
        <AboutMe />
      </div>

      <div id="services" className="slide-in">
        <Services />
      </div>

      <div id="projects" className="slide-in">
        <MyProjects />
      </div>

      <div id="testimonials" className="slide-in">
        <Testinomials />
      </div>

      <div id="contact" className="slide-in">
        <Contact />
      </div>

      {/* Footer */}
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
          <a href="#home" className="whitespace-nowrap cursor-pointer">Home</a>
          <a href="#about-me" className="whitespace-nowrap cursor-pointer">About Me</a>
          <a href="#services" className="whitespace-nowrap cursor-pointer">Services</a>
          <a href="#projects" className="whitespace-nowrap cursor-pointer">Projects</a>
          <a href="#testimonials" className="whitespace-nowrap cursor-pointer">Testimonials</a>
          <a href="#contact" className="whitespace-nowrap cursor-pointer">Contact</a>
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

      {/* Last Footer */}
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
