import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link, useLocation } from "react-router-dom";
import Blazetech from "../assets/Logo v1.png";
import { PiFacebookLogoLight } from "react-icons/pi";
import { PiTwitterLogoLight } from "react-icons/pi";
import { PiInstagramLogoLight } from "react-icons/pi";
import { PiLinkedinLogoLight } from "react-icons/pi";
import Button from "./Button";

const Navbar = () => {
  const location = useLocation();
  // TODO: Implement gsap text animation
  useGSAP(() => {
    gsap.to(".stagger", {
      ease: "power1.inOut",
      opacity: 1,
      y: 0,
    });
    gsap.fromTo(
      ".stagger",
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        delay: 1,
        stagger: 0.1,
      }
    );
  }, []);
  return (
    <nav className="">
      {/* Top Nav */}
      <div className="flex items-center justify-between bg-mainGold px-24 py-5">
        <div className="flex items-center gap-3 justify-center text-sm">
          <Link
            to="mailto:info@juadebgabriel.com"
            className="hover:underline underline-offset-4 duration-150 ease-linear"
          >
            Email: info@juadebgabriel.com
          </Link>
          <span>|</span>
          <Link
            to="tel:+2347063116133"
            className="hover:underline underline-offset-4 duration-150 ease-linear"
          >
            +234 706 311 6133
          </Link>
        </div>
        <div className="flex items-center justify-center gap-3 text-2xl font-bold">
          <Link
            to="https://facebook.com"
            target="_blank"
            className="hover:shadow-xl shadow-white duration-100 ease-in-out transition-all stagger"
          >
            <PiFacebookLogoLight />
          </Link>
          <Link
            to="https://twitter.com"
            target="_blank"
            className="hover:shadow-xl shadow-white duration-100 ease-in-out transition-all stagger"
          >
            <PiTwitterLogoLight />
          </Link>
          <Link
            to="https://instagram.com"
            target="_blank"
            className="hover:shadow-xl shadow-white duration-100 ease-in-out transition-all stagger"
          >
            <PiInstagramLogoLight />
          </Link>
          <Link
            to="https://instagram.com"
            target="_blank"
            className="hover:shadow-xl shadow-white duration-100 ease-in-out transition-all stagger"
          >
            <PiLinkedinLogoLight />
          </Link>
        </div>
      </div>
      {/* Main Nav */}
      <div className="px-24 py-10 bg-mainGoldGray flex items-center justify-between">
        <Link to="/">
          <img src={Blazetech} alt="" className="w-auto h-[40px]" />
        </Link>
        <ul className="flex items-center justify-between gap-10 text-[15px]">
          <li
            className={`${
              location.pathname === "/"
                ? "text-[#523300] underline"
                : "text-black"
            } hover:underline duration-200 stagger decoration-2 underline-offset-4 ease-in-out transition-all`}
          >
            <Link to="/">Home</Link>
          </li>
          <li
            className={`${
              location.pathname === "/about"
                ? "text-[#523300] underline"
                : "text-black"
            } hover:underline duration-200 stagger decoration-2 underline-offset-4 ease-in-out transition-all`}
          >
            <Link to="/about">About</Link>
          </li>
          <li
            className={`${
              location.pathname === "/blog"
                ? "text-[#523300] underline"
                : "text-black"
            } hover:underline duration-200 stagger decoration-2 underline-offset-4 ease-in-out transition-all`}
          >
            <Link to="/blog">Blog</Link>
          </li>
          <li
            className={`${
              location.pathname === "/work"
                ? "text-[#523300] underline"
                : "text-black"
            } hover:underline duration-200 stagger decoration-2 underline-offset-4 ease-in-out transition-all`}
          >
            <Link to="/work">Work</Link>
          </li>
          <li
            className={`${
              location.pathname === "/contact"
                ? "text-[#523300] underline"
                : "text-black"
            } hover:underline duration-200 stagger decoration-2 underline-offset-4 ease-in-out transition-all`}
          >
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <div>
          <Button
            btnText={`Get Free Estimate`}
            className={`py-4 px-8 rounded-lg hover:shadow-xl hover:bg-mainBlack/90 shadow-black duration-150 ease-in-out transition-all text-[14px] text-white bg-mainBlack`}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
