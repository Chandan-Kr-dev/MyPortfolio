import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";



function Navbar() {

 
  return (
    <header>
      <nav
        
        className="navbar bg-blue-950 px-5 py-3   "
      >
        <div className="flex justify-between items-center ">
          <h1 className=" md:text-3xl text-sm font-bold font-sans text-yellow-300">
            Chandan Kr{" "}
          </h1>
          <ul  className="flex justify-end text-white md:gap-5 gap-2 cursor-pointer items-center">
            <li>
              <Link
                to="Home"
                smooth={true}
                duration={500}
                className="text-sm hover:border-b-2 transition-all md:text-2xl hover:text-lg"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="About"
                smooth={true}
                duration={500}
                className="text-sm hover:border-b-2 transition-all md:text-2xl hover:text-lg"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="Skills"
                smooth={true}
                duration={500}
                className="text-sm hover:border-b-2 transition-all md:text-2xl hover:text-lg"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="Projects"
                smooth={true}
                duration={500}
                className="text-sm hover:border-b-2 transition-all md:text-2xl hover:text-lg"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="Contact"
                smooth={true}
                duration={500}
                className="text-sm hover:border-b-2 transition-all md:text-2xl hover:text-lg opacity-0 md:opacity-100 hidden md:block"
              >
                Contact me
              </Link>
            </li>
            
          </ul>
          
        </div>
      </nav>
      
    </header>
  );
}

export default Navbar;
