import React from 'react'
import python from '../../../public/python.png'

function Skills() {
  return (
    <div className='bg-blue-900 m-32 rounded-lg p-10 text-center'>
        <h1 className='  text-white font-bold  text-5xl mb-10'>Skills</h1>
        <div className='grid grid-cols-3 gap-20 gap-y-10 '>
          <div className='text-white text-xl px-3 py-1 rounded shadow-md shadow-black basis-1/6'>HTML</div>
          <div className='text-white text-xl px-3 py-1 rounded shadow-md shadow-black basis-1/6'>CSS</div>
          <div className='text-white text-xl px-3 py-1 rounded shadow-md shadow-black basis-1/6'>Javascript</div>
          <div className='text-white text-xl px-3 py-1 rounded shadow-md shadow-black basis-1/6'>React Js</div>
          <div className='text-white text-xl px-3 py-1 rounded shadow-md shadow-black basis-1/6'>Next Js</div>
          <div className='text-white text-xl px-3 py-1 rounded shadow-md shadow-black basis-1/6'>Python</div>
          <div className='text-white text-xl px-3 py-1 rounded shadow-md shadow-black basis-1/6'>Java</div>
          <div className='text-white text-xl px-3 py-1 rounded shadow-md shadow-black basis-1/6'>C#</div>
          <div className='text-white text-xl px-3 py-1 rounded shadow-md shadow-black basis-1/6'>Unity</div>
        </div>
    </div>
  )
}

export default Skills