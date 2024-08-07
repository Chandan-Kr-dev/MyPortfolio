import React from 'react'

function About() {
  return (
    <div className='m-32  '>
      <div className='bg-blue-800 rounded-lg'>
        <h1 className='text-center text-5xl text-white font-semibold p-2'>About</h1>
        <div className=' p-5 gap-2 flex justify-center items-center  '>
            <h2 className='text-white text-2xl font-bold font-serif'>I am a  <br /> <span className='text-green-500'>FullStack Developer </span>and <br /> <span className='text-orange-500'>Game Developer</span> <br />lets create things together</h2>
            <div className='h-80 w-1 border-gray-600 border-2'></div>
            <p className='text-lg text-white w-2/4'>Full-stack developer with a passion for breathing life into games using Unity. I build beautiful and functional web applications while crafting engaging 2D/3D game experiences. My skills bridge the gap between front-end and back-end, ensuring seamless data flow and user experience. Let's create something amazing together! </p>
        </div>

      </div>

    </div>
  )
}

export default About