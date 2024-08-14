"use client";

import { Fragment } from "react";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import AboutMe from "@/components/Aboutme";
import Services from "@/components/Services";
import MyProjects from "@/components/MyProjects";
import Testinomials from "@/components/Testinomials"; // Corrected spelling
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import AnimatedLetters from "@/components/AnimatedLetters";
import "@/components/AnimatedLetters.scss";
import SocialMedia from "@/components/SocialMedia";

function App() {
  const [letterClass, setLetterClass] = useState('text-animate');
  const nameArray = ['U', 'I',' ', '&',' ', 'U','X'];
  const namearray2 = ['D', 'e', 's', 'i', 'g', 'n', 'e', 'r']

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 1000);
  
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  

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
    <Fragment>
      <Navbar menuOpen={menuOpen} toggleMenu={toggleMenu}>
        <div className="">
          {/* Home Section */}
          <div id="home" className="py-[12%] flex items-center px-[4%] lg:px-[15%] ">
            <div className="flex-1">
              <p className="text-2xl">
                <span className="text-sm">Hi I am</span> <br />
                <span className="text-xl">Muhammad Umair</span> <br />
                <span className="lg:text-5xl text-4xl  font-bold mt-4">
                <AnimatedLetters
                  letterClass={letterClass}
                  strArray={nameArray}
                  idx={12}
                />
                <br></br>
                <span className="ml-[22%]">
                <AnimatedLetters
                  letterClass={letterClass}
                  strArray={namearray2}
                  idx={12}
                />
                </span>
                </span>
              </p>
              <p className="mt-4">
                Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
                nibh lectus netus in. Aliquet donec morbi convallis pretium.
                Turpis tempus pharetra
              </p>
              <button
                style={{ backgroundColor: "rgba(253, 111, 0, 1)" }}
                className="text-white px-4 py-2 rounded mt-4 block"
              >
                Hire Me
              </button>
            </div>
            <div className="flex mt-6 lg:mt-0 lg:ml-6">
              <div className="">
              <Image
                width={300}
                height={300}
                src="/assets/profile.png"
                alt="Profile"
                className="w-full max-w-[300px] h-auto"
              />
              <SocialMedia />
              </div>
            </div>
          </div>

          {/* Other Sections */}
          <div id="about-me" style={{scrollMarginTop: "7rem"}} className="slide-in">
            <AboutMe />
          </div>

          <div id="services" style={{scrollMarginTop: "7rem"}} className="slide-in">
            <Services />
          </div>

          <div id="projects" style={{scrollMarginTop: "7rem"}} className="slide-in">
            <MyProjects />
          </div>

          <div id="testimonials" style={{scrollMarginTop: "7rem"}} className="slide-in">
            <Testinomials />
          </div>

          <div id="contact" style={{scrollMarginTop: "7rem"}} className="slide-in">
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
              <a
                href="#home"
                className="whitespace-nowrap cursor-pointer hover-zoom"
              >
                Home
              </a>
              <a
                href="#about-me"
                className="whitespace-nowrap cursor-pointer hover-zoom"
              >
                About Me
              </a>
              <a
                href="#services"
                className="whitespace-nowrap cursor-pointer hover-zoom"
              >
                Services
              </a>
              <a
                href="#projects"
                className="whitespace-nowrap cursor-pointer hover-zoom"
              >
                Projects
              </a>
              <a
                href="#testimonials"
                className="whitespace-nowrap cursor-pointer hover-zoom"
              >
                Testimonials
              </a>
              <a
                href="#contact"
                className="whitespace-nowrap cursor-pointer hover-zoom"
              >
                Contact
              </a>
            </div>

            <div >
              <SocialMedia />
            </div>
          </div>

          {/* Last Footer */}
          <div
            className="flex justify-center items-center p-3"
            style={{ background: "rgba(84, 84, 84, 1)" }}
          >
            <h1 className="text-center">
              © 2023 <span className="font-bold text-orange-500">Mumair</span>{" "}
              All Rights Reserved, Inc.
            </h1>
          </div>
        </div>
      </Navbar>
    </Fragment>
  );
}

export default App;
