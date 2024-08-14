import React, { useState } from "react";
import img from "../../../public/img1.jpg";
import { HiArrowSmDown } from "react-icons/hi";
import { Link } from "react-scroll";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

function Hero() {

  useGSAP(()=>{
    gsap.from(".avatar",{
      y:50,
      opacity:0,
      duration:1,

    })
  },[])
  useGSAP(()=>{
    gsap.from(".myself",{
      y:50,
      opacity:0,
      duration:1,
      stagger:1

    })
  })
  useGSAP(()=>{
    gsap.from(".myself .hi",{
      y:100,
      opacity:0,
      duration:1,
      stagger:1

    })
  })
  useGSAP(()=>{
    gsap.from(".myself .from",{
      x:200,
      opacity:0,
      duration:1,
      stagger:1

    })
  })


  return (
    <div className=" h-96">
      <aside
        id="icons"
        className="fixed top-1/2 left-0 flex flex-col shadow-md shadow-black p-2 bg-violet-950 md:bg-transparent "
      >
        <a
          target="_blank"
          href="https://github.com/Chandan-Kr-dev"
          className="invert md:text-4xl m-2 "
        >
          <FaGithub />
        </a>
        <a
          target="_blank"
          className="invert md:text-4xl  m-2"
          href="https://www.linkedin.com/in/chandan-kumar-30aa0328a?utm_source=share&utm_campaign=share_via&utm_content=profile"
        >
          <FaLinkedin />
        </a>
        <a
          target="_blank"
          className="invert md:text-4xl  m-2"
          href="https://www.instagram.com/invites/contact/?igsh=5i2pyt1ttbw3&utm_content=lqq6upt"
        >
          <FaInstagram />
        </a>
      </aside>
      <div className=" w-4/5 mx-auto mt-60 grid grid-cols-1  md:flex justify-center items-center md:gap-28">
        <img
          src="img1.jpg"
          alt="CK"
          className="avatar md:h-80 md:w-80 h-40 w-40 m-auto  bg-cover object-cover rounded-full"
        />
        <div className="m-auto">
          <div className="myself text-slate-300 ">
            <p className="hi text-xl font-semibold font-mono">Hi,</p>
            <h1 className="md:text-5xl text-2xl font-bold my-2 font-mono">
              Myself <span className="text-yellow-300">Chandan Kumar</span>
            </h1>
            <p className=" from md:text-xl font-semibold font-mono">
              From Dumka,Jharkhand
            </p>
          </div>
          <Link
            to="About"
            smooth={true}
            duration={500}
            className="mx-auto bg-purple-600 p-3 text-white font-semibold hover:bg-purple-800 rounded relative top-10 left-8 cursor-pointer"
          >
            About
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
