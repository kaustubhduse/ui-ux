import React from 'react';
import Image from 'next/image';
import { Fragment } from 'react';

function Navbar({ menuOpen, toggleMenu, children }) {
  return (
    <Fragment>
      <div className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="relative flex items-center h-[67px] px-[4%] mx-auto">
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
            <a href="#home" className="hover-zoom whitespace-nowrap cursor-pointer">Home</a>
            <a href="#about-me" className="hover-zoom whitespace-nowrap cursor-pointer">About Me</a>
            <a href="#services" className="hover-zoom whitespace-nowrap cursor-pointer">Services</a>
            <a href="#projects" className="hover-zoom whitespace-nowrap cursor-pointer">Projects</a>
            <a href="#testimonials" className="hover-zoom whitespace-nowrap cursor-pointer">Testimonials</a>
            <a href="#contact" className="hover-zoom whitespace-nowrap cursor-pointer">Contact</a>
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
              <a href="#home" className="block hover-zoom" onClick={toggleMenu}>Home</a>
              <a href="#about-me" className="block hover-zoom" onClick={toggleMenu}>About Me</a>
              <a href="#services" className="block hover-zoom" onClick={toggleMenu}>Services</a>
              <a href="#projects" className="block hover-zoom" onClick={toggleMenu}>Projects</a>
              <a href="#testimonials" className="block hover-zoom" onClick={toggleMenu}>Testimonials</a>
              <a href="#contact" className="block hover-zoom" onClick={toggleMenu}b >Contact</a>
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
      {children}
    </Fragment>
  );
}

export default Navbar;
