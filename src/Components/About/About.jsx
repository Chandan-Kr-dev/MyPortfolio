import React from 'react'
import gsap from 'gsap';


function About() {

  // useGSAP(()=>{
  //   gsap.from(".about-section",{
  //     x:300,
  //     duration:1,
  //     scrollTrigger:{
  //       trigger:".about-section",
  //       scroller:"body",
  //       start:"top 50%",
  //       scrub:1
  //     }

  //   })
  // })
  // useGSAP(()=>{
  //   gsap.from(".fullstack",{
  //     y:100,
  //     duration:1,
  //     opacity:0
      

  //   })
  // })
  // useGSAP(()=>{
  //   gsap.from(".about",{
  //     y:100,
  //     duration:1,
  //     opacity:0
      

  //   })
  // })

  return (
    <div className='md:m-32 mx-8  '>
      <div className='about-section bg-blue-800 rounded-lg'>
        <h1 className='text-center text-xl md:text-5xl text-white font-semibold p-2'>About</h1>
        <div className=' p-5 gap-2 md:flex justify-center items-center space-y-2  '>
            <h2 className='fullstack text-white text-sm md:text-2xl font-bold font-serif'>I am a  <br /> <span className='text-green-500'>FullStack Developer </span>and <br /> <span className='text-orange-500'>Game Developer</span> <br />lets create things together</h2>
            <div className=' md:h-80 md:w-1 h-1 w-48 border-gray-600 border-2'></div>
            <p className='about md:text-lg text-sm text-white md:w-2/4'>Full-stack developer with a passion for breathing life into games using Unity. I build beautiful and functional web applications while crafting engaging 2D/3D game experiences. My skills bridge the gap between front-end and back-end, ensuring seamless data flow and user experience. Let's create something amazing together! </p>
        </div>

      </div>

    </div>
  )
}

export default About