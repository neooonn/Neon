import React from "react";
import { skills } from "../SkillData";
import { CodeXml } from "lucide-react";
import LogoLoop from "./LogoLoop";

const frontLogos = skills.frontend.map((skill) => ({
  ...skill,
  node: <skill.Icon size={60} />
}));
const backLogos = skills.backend.map((skill) => ({
  ...skill,
  node: <skill.Icon size={60} />
}));
const toolLogos = skills.tools.map((skill) => ({
  ...skill,
  node: <skill.Icon size={60} />
}));

const SkillsComponent = () => {
  return (
    <div className="w-full md:p-2">
      <h1 className="flex items-center gap-2 text-2xl md:text-3xl font-semibold mb-6">
        <CodeXml size={24} />
        <span>Skills</span>
      </h1>
      <h2 className="text-xl md:text-2xl font-medium mb-6">Technical Skills</h2>
      <div
        style={{ height: "h-vh", position: "relative", overflow: "hidden" }}
      >
        <br/>
        <h2 className="text-xl md:text-2xl font-medium mb-6">Front-End</h2>
        <LogoLoop logos={frontLogos} gap={35} useCustomRender={false} />
        <br/>
        <h2 className="text-xl md:text-2xl font-medium mb-6">Back-End</h2>
        <LogoLoop logos={backLogos} gap={35} useCustomRender={false} />
        <br/>
        <h2 className="text-xl md:text-2xl font-medium mb-6">Tools</h2>
        <LogoLoop logos={toolLogos} gap={35} useCustomRender={false} />
      </div>
    </div>
  );
};

export default SkillsComponent;
