import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView, useScroll, useTransform } from "framer-motion";

function About() {
  const ref=useRef(null)
  const {scrollYProgress} =useScroll({
    target:ref,
    offset:["0 1","1.33 1"],

  })
  const scaleProgress =useTransform(scrollYProgress,[0,1],[0.8 ,1])
  const opacityProgress =useTransform(scrollYProgress,[0,1],[0.7 ,1])

  return (
    <div 
      
      className="md:m-32 mx-8  "
    >
      <motion.div
      ref={ref} 
      style={{
        opacity:opacityProgress,
        scale:scaleProgress  
      }}
      className="about-section bg-blue-800 rounded-lg relative">
        <h1 className="text-center text-xl md:text-5xl text-white font-semibold p-2">
          About
        </h1>
        <div className=" p-5 gap-2 md:flex justify-center items-center space-y-2  ">
          <h2 className="fullstack text-white text-sm md:text-2xl font-bold font-serif">
            I am a <br />{" "}
            <span className="text-green-500">FullStack Developer </span>and{" "}
            <br /> <span className="text-orange-500">Game Developer</span>{" "}
            <br />
            lets create things together
          </h2>
          <div className=" md:h-80 md:w-1 h-1 w-48 border-gray-600 border-2"></div>
          <p className="about md:text-xl text-sm text-white md:w-2/4">
            Full-stack developer with a passion for breathing life into games
            using Unity. I build beautiful and functional web applications while
            crafting engaging 2D/3D game experiences. My skills bridge the gap
            between front-end and back-end, ensuring seamless data flow and user
            experience. Let's create something amazing together!{" "}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default About;
