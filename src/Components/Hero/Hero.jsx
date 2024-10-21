import React, { useState } from "react";
import { motion } from "framer-motion";


import { Link } from "react-scroll";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


function Hero() {

 


  return (
    <div className=" h-96">
      <motion.aside
        initial={{y:10 ,opacity:0}}
        animate={{y:0 ,opacity:1}}
        transition={{duration:0.5}}
        id="icons"
        className="fixed top-1/2 left-0 z-[999] flex flex-col shadow-md shadow-black p-2 bg-violet-950 md:bg-transparent "
      >
        <motion.a
        whileHover={{scale:1.5 ,color:"green"}}
        whileTap={{scale:0 }}
          target="_blank"
          href="https://github.com/Chandan-Kr-dev"
          className="invert md:text-4xl m-2 "
        >
          <FaGithub />
        </motion.a>
        <motion.a
        whileHover={{scale:1.5 ,color:"green"}}
        whileTap={{scale:0 }}
          target="_blank"
          className="invert md:text-4xl  m-2"
          href="https://www.linkedin.com/in/chandan-kumar-30aa0328a"
        >
          <FaLinkedin />
        </motion.a>
        <motion.a
        whileHover={{scale:1.5 ,color:"green"}}
        whileTap={{scale:0 }}
          target="_blank"
          className="invert md:text-4xl  m-2"
          href="https://www.instagram.com/invites/contact/?igsh=5i2pyt1ttbw3&utm_content=lqq6upt"
        >
          <FaInstagram />
        </motion.a>
      </motion.aside>
      <div className=" w-4/5 mx-auto mt-60 grid grid-cols-1  md:flex justify-center items-center md:gap-28">
        <motion.img
          initial={{opacity:0 ,y:-100}}
          animate={{y:0 ,opacity:1}}
          transition={{duration:0.5}}
          src="profile.jpg"
          alt="CK"
          className="avatar md:h-80 md:w-80 h-40 w-40 m-auto  bg-cover object-cover rounded-full"
        />
        <div className="m-auto">
          <div className="myself text-slate-300 ">
            <motion.p initial={{x:-100 ,opacity:0}} animate={{x:0 , opacity:1}} transition={{duration:0.2}} className="hi text-xl font-semibold font-mono">Hi,</motion.p>
            <motion.h1 initial={{opacity:0 ,x:200}} animate={{x:0 ,opacity:1}} className="md:text-6xl text-2xl font-extrabold my-2 font-mono">
              Hey , I'm  <span className="text-yellow-300">Chandan</span><span className="text-green-500">.</span>
            </motion.h1>
            <motion.p initial={{x:200 ,opacity:0}} animate={{opacity:1,x:0}} transition={{delay:0.3,duration:0.2}} className=" from md:text-2xl font-bold font-sans ">
              FullStack web Developer <br /> Game Developer
            </motion.p>
          </div>
          <Link
          
            to="About"
            smooth={true}
            duration={500}
            className="about-btn mx-auto bg-purple-600 p-3 text-white font-semibold hover:bg-purple-800 rounded relative top-10 left-8 cursor-pointer"
          >
            About
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
