import React from "react";
import GoalSection from "../Accordion";
import SpotlightCard from "./SpotlightCard";
import { motion } from "framer-motion";

const Experience = ({ title, company, workType, date, address, logo }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <SpotlightCard
        className="custom-spotlight-card w-full bg-bg mb-4"
        spotlightColor="rgba(16, 185, 129, 0.2)"
      >
        <div className="pl-4">
          <div className="flex flex-row gap-5 w-full">
            <img
              src={logo}
              className="bg-white p-1 w-18 h-18 mt-2 rounded-md"
            />
            <div>
              <h2 className="text-xl mb-1">{title}</h2>
              <p className="text-zinc-400">{`${company} • ${address}`}</p>
              <p className="text-zinc-400">{`${date} • ${workType}`}</p>
              <div>
                <GoalSection trigger={`Show Details`} content={`test`} />
              </div>
            </div>
          </div>
        </div>
      </SpotlightCard>
    </motion.div>
  );
};

export default Experience;
