import React from "react";
import { FaGithub, FaStar } from 'react-icons/fa';
 
export function NavBar() {
  return (
    <div className="bg-[#ee943f] xl:h-16 w-screen  flex justify-between space-x-4 text-center flex items-center justify-center">
    <p className="text-white px-6 text-[#000] text-xl font-extrabold">Hackathon Idea Generator</p>
    <a
      href="https://github.com/your-github-repo-url"
      target="_blank"
      rel="noopener noreferrer"
    >
      <button className="bg-[#ee943f] font-bold xl:h-16 text-white px-6 rounded-full flex items-center text-xl">
         Star <FaStar className="ml-2 text-[#fbe2aa] mr-2" />  on Github <FaGithub className="mr-2 text-[#000] ml-2" />
      </button>
    </a>
  </div>
  )}