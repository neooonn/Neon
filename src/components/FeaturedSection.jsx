import React from "react";
import { motion } from "framer-motion";

// Example projects data
const projects = [
  {
    title: "Portfolio Website",
    description: "My personal portfolio built with Next.js, Tailwind CSS, and Framer Motion.",
    link: "#",
    image: "/images/portfolio.png",
  },
  {
    title: "E-commerce App",
    description: "A full-stack e-commerce application with Node.js and MongoDB.",
    link: "#",
    image: "/images/ecommerce.png",
  },
  {
    title: "Task Manager",
    description: "A productivity app to manage tasks with React and Express.",
    link: "#",
    image: "/images/taskmanager.png",
  },
  {
    title: "Chat App",
    description: "Real-time chat app using Socket.io and Node.js.",
    link: "#",
    image: "/images/chatapp.png",
  },
];

const FeaturedSection = () => {
  return (
    <motion.div
      className="w-full mb-12"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Section Heading */}
      <h2 className="text-2xl font-semibold mb-6">Featured Projects</h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-bg border border-zinc-700 rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-300"
          >
            {/* Project Image */}
            <div className="h-40 bg-zinc-800">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Project Info */}
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
              <p className="text-zinc-400 text-sm">{project.description}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};

export default FeaturedSection;
