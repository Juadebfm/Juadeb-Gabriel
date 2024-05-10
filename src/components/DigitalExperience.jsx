import React, { useState } from "react";
import DGImg from "../assets/test.png";
import { FaPlay, FaTimes } from "react-icons/fa";
import "../index.css";

const DigitalExperience = () => {
  const [showVideo, setShowVideo] = useState(false);

  const toggleVideo = () => {
    setShowVideo(!showVideo);
    document.body.style.overflow = showVideo ? "auto" : "hidden"; // Lock scroll when video is open
  };

  return (
    <div className="h-max bg-mainBlack text-white px-24 py-24 ">
      <div className="grid grid-cols-2">
        <div className="w-full">
          <img src={DGImg} alt="" className="w-full" />
        </div>
        <div>
          <div className="relative cont">
            {showVideo && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
                <div className="relative">
                  <button
                    className="absolute -top-16 -right-24 m-4 text-white  hover:shadow-lg shadow-white"
                    onClick={toggleVideo}
                  >
                    <FaTimes className="text-2xl" />
                  </button>
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/Ip9DxgukwCg?si=wwrRRB5VoTWNECzK"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            )}
            {!showVideo && (
              <div
                className="w-max bg-white rounded-full flex items-center justify-center p-8 mb-6 relative animate-pulse hover:animate-none hover:cursor-pointer"
                onClick={toggleVideo}
              >
                <div className="absolute inset-0 rounded-full bg-black opacity-30"></div>
                <div className="absolute inset-0 rounded-full bg-black opacity-30"></div>
                <div className="absolute inset-0 rounded-full bg-black opacity-30"></div>
                <div className="ripple absolute inset-0"></div>
                <FaPlay className="text-mainBlack text-[25px] relative z-10" />
              </div>
            )}
          </div>

          <div>
            <h2 className="text-[44px] leading-tight mb-6 font-bold">
              We create awesome digital experiences.
            </h2>
            <p className="w-full mx-auto text-[20px] leading-normal my-5 text-gray-400">
              Our passion and desire is to meet people's needs. The more we meet
              their needs, the more value we get for our deeds. This is our
              route to stardom. You can visit our office during any of our
              working hours. Let us discuss business over a cup of coffee.
            </p>
            <div className="text-[20px]">
              <h3 className="font-bold">Juadeb Gabriel Adebowale</h3>
              <span className="text-base text-gray-300">
                Founder & Technical Director
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalExperience;
