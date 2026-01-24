import React from "react";
import GoalSection from "../Accordion";
import SpotlightCard from "./SpotlightCard";

const Experience = ({ title, company, workType, date, address, logo }) => {
  return (
    <SpotlightCard
      className="custom-spotlight-card w-full bg-bg mb-4"
      spotlightColor="rgba(16, 185, 129, 0.2)"
    >
      <div className="pl-4">
        <div className="flex flex-row gap-5 w-full">
          <img src={logo} className="bg-white p-1 w-18 h-18 mt-2 rounded-md" />
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
  );
};

export default Experience;
