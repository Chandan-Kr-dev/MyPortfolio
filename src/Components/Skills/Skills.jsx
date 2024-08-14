import React from 'react'




function Skills() {

 
  return (
    <div className='skill-section bg-blue-900 md:m-32  mx-6  my-8  rounded-lg p-10 text-center'>
        <h1 className='  text-white font-bold  md:text-5xl text-xl mb-10'>Skills</h1>
        <div className='grid md:grid-cols-3 grid-cols-2 md:gap-20 gap-10 gap-y-10 '>
          <div className='text-white md:text-xl px-3 py-1 rounded shadow-md shadow-black basis-1/6'>HTML</div>
          <div className='text-white md:text-xl text-base md:px-3 px-1 py-1 rounded shadow-md shadow-black basis-1/6'>CSS</div>
          <div className='text-white md:text-xl text-base md:px-3 px-1 py-1 rounded shadow-md shadow-black basis-1/6'>Javascript</div>
          <div className='text-white md:text-xl text-base md:px-3 px-1 py-1 rounded shadow-md shadow-black basis-1/6'>React Js</div>
          <div className='text-white md:text-xl text-base md:px-3 px-1 py-1 rounded shadow-md shadow-black basis-1/6'>Next Js</div>
          <div className='text-white md:text-xl text-base md:px-3 px-1 py-1 rounded shadow-md shadow-black basis-1/6'>Python</div>
          <div className='text-white md:text-xl text-base md:px-3 px-1 py-1 rounded shadow-md shadow-black basis-1/6'>Java</div>
          <div className='text-white md:text-xl text-base md:px-3 px-1 py-1 rounded shadow-md shadow-black basis-1/6'>C#</div>
          <div className='text-white md:text-xl text-base md:px-3 px-1 py-1 rounded shadow-md shadow-black basis-1/6'>Unity</div>
        </div>
    </div>
  )
}

export default Skills