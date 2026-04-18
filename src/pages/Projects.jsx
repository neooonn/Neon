import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react' // Optional icons

const projectData = [
  {
    title: "Project Alpha",
    description: "A high-performance dashboard built with React and Tailwind.",
    tech: ["React", "Tailwind", "Firebase"],
    link: "#",
    github: "#"
  },
  {
    title: "Project Beta",
    description: "E-commerce platform with seamless payment integration.",
    tech: ["Next.js", "Stripe", "Prisma"],
    link: "#",
    github: "#"
  },
  {
    title: "Project Gamma",
    description: "Real-time chat application using WebSockets.",
    tech: ["Node.js", "Socket.io", "MongoDB"],
    link: "#",
    github: "#"
  },
  {
    title: "Project Alpha",
    description: "A high-performance dashboard built with React and Tailwind.",
    tech: ["React", "Tailwind", "Firebase"],
    link: "#",
    github: "#"
  },
]

const Projects = () => {
  // Container animation for staggering children
  const containerVars = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVars = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <div className='bg-homeBg w-full min-h-full text-white p-4 mt-4'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      >
        <div>
          <h1 className="text-3xl font-semibold mb-4">Projects</h1>
          <p className="text-zinc-400 mb-8">Here are some of my recent projects.</p>
        </div>

        <hr className="border-zinc-600 border-dashed w-full mb-10" />
      </motion.div>

      {/* Grid Layout */}
      <motion.div 
        variants={containerVars}
        initial="initial"
        animate="animate"
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {projectData.map((project, index) => (
          <motion.div
            key={index}
            variants={itemVars}
            whileHover={{ y: -5 }}
            className="group relative p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-emerald-500/50 transition-all duration-300"
          >
            {/* Project Header */}
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold group-hover:text-emerald-400 transition-colors">
                {project.title}
              </h3>
              <div className="flex gap-3 text-zinc-400">
                <a href={project.github} className="hover:text-white transition-colors"><Github size={20} /></a>
                <a href={project.link} className="hover:text-white transition-colors"><ExternalLink size={20} /></a>
              </div>
            </div>

            {/* Description */}
            <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
              {project.description}
            </p>

            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tag) => (
                <span key={tag} className="px-2 py-1 text-[10px] uppercase tracking-wider active:border-green-600 font-medium bg-zinc-800 text-zinc-300 rounded-md border border-zinc-700">
                  {tag}
                </span>
              ))}
            </div>

            {/* Sublte Glow Effect on Hover */}
            <div className="absolute inset-0 rounded-2xl bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Projects