import React from "react";
import { MdWorkOutline } from "react-icons/md";
import Experience from "@/components/ui/Experience";
import nclexLogo from "../assets/nclexLogo.png";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="w-full h-full text-white p-4 mt-8 overflow-y-hidden">
      <motion.div
        initial={{ opacity: 0, y: 150 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      >
        <div>
          <h1 className="text-3xl mb-4">About</h1>
          <p className="text-zinc-400 mb-8">Brief Introduction</p>
        </div>

        <hr className="border-zinc-600 border-dashed w-full mb-8" />
        <div className="mb-8">
          <p className="text-zinc-300 mb-5 leading-loose">
            I'm Neon Aurellano, a Developer based in Cavite, Philippines,
            specializing in building maintainable and scalable digital systems.
            From designing responsive interfaces with React and TypeScript to
            developing secure REST APIs with Node.js and JWT, I ensure every
            solution is as efficient as it is well-structured. I leverage modern
            tools like Vercel, Firebase, and ClickUp to manage workflows and
            deliver high-quality, impactful software.
          </p>

          <p className="text-zinc-300 leading-loose">
            Building on 1+ years of Frontend expertise and a solid understanding
            of Backend fundamentals, I am committed to mastering the full
            development stack. My goal is to bridge complex server-side logic
            with intuitive user experiences, leveraging TypeScript to ensure
            high-quality, maintainable code across the entire application
            lifecycle.
          </p>
        </div>

        <hr className="border-zinc-700 mb-8" />

        <div className="mb-7">
          <div className="flex flex-row items-center gap-2 mb-3">
            <MdWorkOutline size={18} />
            <h1 className="text-xl">Career</h1>
          </div>
          <p className="text-zinc-400">My professional journey.</p>
        </div>

        <div className="mb-8">
          <Experience
            title={`Front-End Developer `}
            address={`1700 Eureka Rd. Ste 155 Roseville, CA 95661 USA`}
            company={`Arxon Solution, LLC.`}
            workType={`Full-Time`}
            date={`October 2024 - November 2025`}
            logo={nclexLogo}
          />
          <Experience
            title={`Front-End Developer `}
            address={`1700 Eureka Rd. Ste 155 Roseville, CA 95661 USA`}
            company={`Arxon Solution, LLC.`}
            workType={`Full-Time`}
            date={`October 2024 - November 2025`}
          />
          <Experience
            title={`Front-End Developer `}
            address={`1700 Eureka Rd. Ste 155 Roseville, CA 95661 USA`}
            company={`Arxon Solution, LLC.`}
            workType={`Full-Time`}
            date={`October 2024 - November 2025`}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default About;
