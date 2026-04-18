import React from "react";
import { skills } from "../SkillData";
import { CodeXml } from "lucide-react";

const SkillsComponent = () => {
  return (
    <div className="w-full md:p-2">
      <h1 className="flex items-center gap-2 text-2xl md:text-3xl font-semibold mb-6">
        <CodeXml size={24} />
        <span>Skills</span>
      </h1>
      <h2 className="text-xl md:text-2xl font-medium mb-6">Technical Skills</h2>

      {["frontend", "backend", "tools"].map((category) => (
        <div key={category} className="mb-8">
          <h3 className="text-lg md:text-xl font-semibold mb-4 capitalize">
            {category.replace("-", " ")}
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 auto-rows-auto">
            {skills[category].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center gap-1 p-2 bg-gray-800 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer"
              >
                <item.Icon size={24} className="text-indigo-400" />
                <p className="text-sm md:text-base text-center">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsComponent;
