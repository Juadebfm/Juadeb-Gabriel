import React from "react";
import Star from "../assets/star.png";
import HeroImg from "../assets/website2.png";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="relative">
      {/* Circles */}
      <svg
        className="absolute bottom-10 right-10 z-0"
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="15" cy="15" r="15" fill="#DA9829"></circle>
      </svg>

      {/* Triangles */}
      <svg
        className="absolute top-10 right-10 z-0"
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon
          points="15,5 25,25 5,25"
          fill="#FFD794"
          transform="rotate(30 15 15)"
        >
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            from="0 15 15"
            to="360 15 15"
            dur="4s"
            repeatCount="indefinite"
          />
        </polygon>
      </svg>
      <svg
        className="absolute bottom-48 left-10 z-0"
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon
          points="15,5 25,25 5,25"
          fill="#B87C19"
          transform="rotate(-45 15 15)"
        >
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            from="0 15 15"
            to="360 15 15"
            dur="3s"
            repeatCount="indefinite"
          />
        </polygon>
      </svg>
      <svg
        className="absolute bottom-96 left-96 z-0"
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon
          points="15,5 25,25 5,25"
          fill="#FFD794"
          transform="rotate(30 15 15)"
        >
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            from="0 15 15"
            to="360 15 15"
            dur="4s"
            repeatCount="indefinite"
          />
        </polygon>
      </svg>

      <div class="mx-auto absolute right-96 top-[40rem]">
        <div class="-mt-10 mr-5 relative h-10 w-10 animate-bounce">
          <div class="mx-auto h-10 w-10 animate-pulse rounded-full bg-mainBlack"></div>
          <span class="absolute flex h-7 w-7 animate-spin test">
            <span class="h-5 w-5 rounded-full bg-[#523300]"> </span>
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="leading-none font-bold capitalize text-center w-[70%] mx-auto pt-16 relative z-10">
        {/* Star image */}
        <img
          src={Star}
          alt=""
          className="w-[30px] h-[30px] absolute top-16 left-80 z-10 animate-ping"
        />
        <span className="z-20 text-[70px] leading-normal">Blazetech</span>{" "}
        <br />
        <span className="text-[50px]">Connect to efficient processes</span>
      </div>
      <p className="text-center w-[55%] mx-auto text-[20px] leading-normal mt-5">
        We are a team of creative designers and DevOps professionals who are
        ready to help you evolve your ideas from conception to completion
      </p>
      <div className="flex items-center justify-center gap-5 mt-10">
        <Button
          btnText={`Take A Tour`}
          className={`py-4 px-10 rounded-lg hover:shadow-xl hover:bg-mainBlack/90 shadow-black duration-150 ease-in-out transition-all text-[14px] text-white bg-[#523300]`}
        />
        <Button
          btnText={`What We Do`}
          className={`py-4 px-10 rounded-lg hover:shadow-xl hover:bg-mainBlack/90 shadow-black duration-150 ease-in-out transition-all text-[14px] text-white bg-[#523300]`}
        />
      </div>
      <div className="pb-24">
        <img
          src={HeroImg}
          alt="Web engineers at work"
          className="w-[60%] mt-16 mx-auto"
        />
      </div>
    </div>
  );
};

export default Hero;
