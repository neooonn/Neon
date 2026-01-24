import React, { useState } from "react";
import Skills from "../components/Skills";
import HomeHero from "../components/HomeHero";

const Home = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="w-full h-full text-white p-4 mt-8 overflow-y-hidden">
      <HomeHero/>
      <hr className="w-full text-zinc-700" />

      <div className="mt-10 mb-15">
        <Skills/>
      </div>
      <div>
      </div>
    </div>
  );
};

export default Home;
