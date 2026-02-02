import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "lucide-react";
import { FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { House, User, Folders, Medal, Mail, MoveRightIcon } from "lucide-react";

import picture from "../assets/picture.png";

const Navbar = () => {
  const currentYear = new Date().getFullYear();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const linkStyle =
    "text-zinc-300 p-3 rounded-md hover:bg-zinc-800 hover:text-white transition-all";

  return (
    <nav className="relative w-full bg-bg lg:bg-homeBg lg:h-full md:h-32.75 flex flex-col border-b border-zinc-800 lg:border-b-0">
      {/* TOP PROFILE + HAMBURGER */}
      <div className="flex items-center justify-between p-4 lg:flex-col lg:items-center lg:pt-10">
        <div className="flex items-center gap-3 lg:flex-col lg:text-center">
          <img
            className="w-10 lg:w-24 rounded-full border border-zinc-700 md:w-22.5 md:ml-4 lg:hover:border-white transition-all duration-1000"
            src={picture}
            alt="profile"
          />
          <div>
            <h1 className="text-white font-bold lg:text-xl lg:mt-3">
              Neon Aurellano
            </h1>
            <p className="text-zinc-500 text-xs hidden lg:block">
              @neonaurellano
            </p>
          </div>
        </div>

        {/* HAMBURGER BUTTON (MOBILE ONLY) */}
        <div className="lg:hidden md:mr-4 text-white">
          {isOpen ? (
            <FiX size={28} onClick={toggleMenu} />
          ) : (
            <Menu size={28} onClick={toggleMenu} />
          )}
        </div>
      </div>

      {/* 🔥 MOBILE DROPDOWN MENU WITH ANIMATION */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: -300, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -300, opacity: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 18 }}
            className="lg:hidden absolute top-full left-0 w-full bg-bg border-t border-zinc-800 z-40 shadow-xl"
          >
            <div className="flex flex-col p-4 gap-2">
              <NavLink
                to="/"
                onClick={() => setIsOpen(false)}
                className={linkStyle}
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                onClick={() => setIsOpen(false)}
                className={linkStyle}
              >
                About
              </NavLink>
              <NavLink
                to="/projects"
                onClick={() => setIsOpen(false)}
                className={linkStyle}
              >
                Projects
              </NavLink>
              <NavLink
                to="/achievements"
                onClick={() => setIsOpen(false)}
                className={linkStyle}
              >
                Achievements
              </NavLink>
              <NavLink
                to="/contact"
                onClick={() => setIsOpen(false)}
                className={linkStyle}
              >
                Contact
              </NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* DESKTOP SIDEBAR MENU */}
      <div className="hidden lg:flex flex-col px-4 py-6 gap-2 h-full">
        <hr className="border-zinc-800 mb-4" />

        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-lg transition-all hover:scale-105 ${
              isActive
                ? "bg-emerald-500/20 text-white shadow-[0_0_0_1px_rgba(34,197,94,0.4),0_8px_30px_rgba(34,197,94,0.35)]"
                : "text-zinc-400 hover:bg-zinc-800 hover:text-white"
            }`
          }
        >
          {({ isActive }) => (
            <>
              <House
                size={20}
                strokeWidth={isActive ? 2.5 : 2}
                className={`transition-all ${isActive ? "text-emerald-400 scale-110" : ""}`}
              />
              <span className="flex-1">Home</span>
              <MoveRightIcon
                size={18}
                strokeWidth={isActive ? 2.5 : 2}
                className={`transition-all ${
                  isActive
                    ? "opacity-100 translate-x-0 text-emerald-400"
                    : "opacity-0 -translate-x-2"
                }`}
              />
            </>
          )}
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-lg transition-all hover:scale-105 ${
              isActive
                ? "bg-emerald-500/20 text-white shadow-[0_0_0_1px_rgba(34,197,94,0.4),0_8px_30px_rgba(34,197,94,0.35)]"
                : "text-zinc-400 hover:bg-zinc-800 hover:text-white"
            }`
          }
        >
          {({ isActive }) => (
            <>
              <User
                size={20}
                strokeWidth={isActive ? 2.5 : 2}
                className={`transition-all ${isActive ? "text-emerald-400 scale-110" : ""}`}
              />
              <span className="flex-1">About</span>
              <MoveRightIcon
                size={18}
                strokeWidth={isActive ? 2.5 : 2}
                className={`transition-all ${
                  isActive
                    ? "opacity-100 translate-x-0 text-emerald-400"
                    : "opacity-0 -translate-x-2"
                }`}
              />
            </>
          )}
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-lg transition-all hover:scale-105 ${
              isActive
                ? "bg-emerald-500/20 text-white shadow-[0_0_0_1px_rgba(34,197,94,0.4),0_8px_30px_rgba(34,197,94,0.35)]"
                : "text-zinc-400 hover:bg-zinc-800 hover:text-white"
            }`
          }
        >
          {({ isActive }) => (
            <>
              <Folders
                size={20}
                strokeWidth={isActive ? 2.5 : 2}
                className={`transition-all ${isActive ? "text-emerald-400 scale-110" : ""}`}
              />
              <span className="flex-1">Projects</span>
              <MoveRightIcon
                size={18}
                strokeWidth={isActive ? 2.5 : 2}
                className={`transition-all ${
                  isActive
                    ? "opacity-100 translate-x-0 text-emerald-400"
                    : "opacity-0 -translate-x-2"
                }`}
              />
            </>
          )}
        </NavLink>
        <NavLink
          to="/achievements"
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-lg transition-all hover:scale-105 ${
              isActive
                ? "bg-emerald-500/20 text-white shadow-[0_0_0_1px_rgba(34,197,94,0.4),0_8px_30px_rgba(34,197,94,0.35)]"
                : "text-zinc-400 hover:bg-zinc-800 hover:text-white"
            }`
          }
        >
          {({ isActive }) => (
            <>
              <Medal
                size={20}
                strokeWidth={isActive ? 2.5 : 2}
                className={`transition-all ${isActive ? "text-emerald-400 scale-110" : ""}`}
              />
              <span className="flex-1">Achievements</span>
              <MoveRightIcon
                size={18}
                strokeWidth={isActive ? 2.5 : 2}
                className={`transition-all ${
                  isActive
                    ? "opacity-100 translate-x-0 text-emerald-400"
                    : "opacity-0 -translate-x-2"
                }`}
              />
            </>
          )}
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-lg transition-all hover:scale-105 ${
              isActive
                ? "bg-emerald-500/20 text-white shadow-[0_0_0_1px_rgba(34,197,94,0.4),0_8px_30px_rgba(34,197,94,0.35)]"
                : "text-zinc-400 hover:bg-zinc-800 hover:text-white"
            }`
          }
        >
          {({ isActive }) => (
            <>
              <Medal
                size={20}
                strokeWidth={isActive ? 2.5 : 2}
                className={`transition-all ${isActive ? "text-emerald-400 scale-110" : ""}`}
              />
              <span className="flex-1">Contact</span>
              <MoveRightIcon
                size={18}
                strokeWidth={isActive ? 2.5 : 2}
                className={`transition-all ${
                  isActive
                    ? "opacity-100 translate-x-0 text-emerald-400"
                    : "opacity-0 -translate-x-2"
                }`}
              />
            </>
          )}
        </NavLink>

        <hr className="border-zinc-800 mt-6 mb-8" />

        <div className="mt-auto pb-4 text-[10px] text-zinc-600 uppercase tracking-widest text-center">
          &copy; {currentYear} <br /> Neon Aurellano
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
