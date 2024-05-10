import React from "react";
import Hero from "../components/Hero";
import DigitalExperience from "../components/DigitalExperience";
import WhatWeDo from "../components/WhatWeDo";

const Home = () => {
  return (
    <div className="bg-mainGoldGray h-max">
      <Hero />
      <DigitalExperience />
      <WhatWeDo />
    </div>
  );
};

export default Home;
