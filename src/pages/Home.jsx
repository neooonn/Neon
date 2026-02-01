import React, { useState } from "react";
import Skills from "../components/Skills";
import HomeHero from "../components/HomeHero";
import { motion } from "framer-motion";

const Home = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="w-full h-full text-white p-4 mt-8 overflow-y-hidden">
      <motion.div
        initial={{ opacity: 0, y: 150 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 , ease: "easeInOut" }}
      >
        <HomeHero />
        <hr className="w-full text-zinc-700" />

        <div className="mt-10 mb-15">
          <Skills />
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
