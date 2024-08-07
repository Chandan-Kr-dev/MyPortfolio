import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Skills from './Components/Skills/Skills'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'

function App() {
  

  return (
   <main className=' '>
      <Navbar/>
      <div id="Home">
      <Hero/>
      </div>
      <div id="About">
        <About/>
      </div>
      <div id="Skills">
        <Skills/>
        </div>
      <div id="Projects">
        <Projects/> 
      </div>
      <div id="Contact">
        <Contact/>
      </div>
      
   </main>
  )
}

export default App
