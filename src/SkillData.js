import { DiJavascript, DiMongodb, DiFirebase } from "react-icons/di";
import { FaReact, FaCss3, FaBootstrap, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiTypescript, SiExpress, SiShadcnui, SiReactrouter, SiJsonwebtokens, SiPostman, SiJest, SiClickup, SiNetlify, SiVite } from "react-icons/si";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandFramerMotion, TbApi } from "react-icons/tb";
import { FiFigma } from "react-icons/fi";
import { CgVercel, CgNpm } from "react-icons/cg";

export const skills = {
  frontend: [
    { name: "JavaScript", Icon: DiJavascript },
    { name: "ReactJS", Icon: FaReact },
    { name: "TypeScript", Icon: SiTypescript },
    { name: "Next.js", Icon: RiNextjsFill },
    { name: "CSS", Icon: FaCss3 },
    { name: "Tailwind CSS", Icon: RiTailwindCssFill },
    { name: "Bootstrap", Icon: FaBootstrap },
    { name: "ShadcnUI", Icon: SiShadcnui },
    { name: "Material UI", Icon: FaCss3 },
    { name: "React Router", Icon: SiReactrouter },
    { name: "Framer Motion", Icon: TbBrandFramerMotion },
  ],

  backend: [
    { name: "Node.js", Icon: FaNodeJs },
    { name: "Express.js", Icon: SiExpress },
    { name: "MongoDB", Icon: DiMongodb },
    { name: "JWT", Icon: SiJsonwebtokens },
    { name: "REST APIs", Icon: TbApi },
    { name: "Postman", Icon: SiPostman },
  ],

  tools: [
    { name: "Git", Icon: FaGitAlt },
    { name: "GitHub", Icon: FaGithub },
    { name: "Jest", Icon: SiJest },
    { name: "Figma", Icon: FiFigma },
    { name: "ClickUp", Icon: SiClickup },
    { name: "Vercel", Icon: CgVercel },
    { name: "Netlify", Icon: SiNetlify },
    { name: "Firebase", Icon: DiFirebase },
    { name: "npm", Icon: CgNpm },
    { name: "Vite", Icon: SiVite },
  ],
};
