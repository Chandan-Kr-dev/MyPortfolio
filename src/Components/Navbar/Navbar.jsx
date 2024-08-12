import React from "react";
import { useRef } from "react";
import { Link } from "react-scroll";
import { FaBars, FaBraille, FaTimes } from "react-icons/fa";


function Navbar() {
 

  return (
    <header>
      <nav
        
        className="bg-blue-950 px-5 py-3 fixed w-full top-0 left-0 "
      >
        <div className="flex justify-between items-center ">
          <h1 className=" md:text-2xl text-sm font-bold font-sans text-yellow-300">
            Chandan Kr{" "}
          </h1>
          <ul  className="flex justify-end text-white md:gap-5 gap-2 cursor-pointer items-center">
            <li>
              <Link
                to="Home"
                smooth={true}
                duration={500}
                className="text-sm hover:border-b-2 transition-all hover:text-lg"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="About"
                smooth={true}
                duration={500}
                className="text-sm hover:border-b-2 transition-all hover:text-lg"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="Skills"
                smooth={true}
                duration={500}
                className="text-sm hover:border-b-2 transition-all hover:text-lg"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="Projects"
                smooth={true}
                duration={500}
                className="text-sm hover:border-b-2 transition-all hover:text-lg"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="Contact"
                smooth={true}
                duration={500}
                className="text-sm hover:border-b-2 transition-all hover:text-lg opacity-0 md:opacity-100 hidden md:block"
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
