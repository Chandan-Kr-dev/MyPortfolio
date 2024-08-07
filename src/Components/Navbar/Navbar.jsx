import React from "react";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <nav className="bg-blue-950 px-5 py-3 fixed w-full top-0 left-0">
      <div className="flex justify-between items-center ">

      <h1 className=" text-2xl font-bold font-sans text-yellow-300">Chandan Kr </h1>
      <ul className="flex justify-end text-white gap-5 cursor-pointer items-center">
        <li>
          <Link to="Home" smooth={true} duration={500}>Home</Link>
        </li>
        <li>
          <Link to="About" smooth={true} duration={500}>About</Link>
        </li>
        <li>
          <Link to="Skills" smooth={true} duration={500}>Skills</Link>
        </li>
        <li>
          <Link to="Projects" smooth={true} duration={500}>Projects</Link>
        </li>
        <li>
          <Link to="Contact" smooth={true} duration={500}>Contact me</Link>
        </li>
      </ul>
      </div>
  </nav>
  );
}

export default Navbar;
