import React, { useRef } from 'react'
import Landing from './Components/Landing';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import ProjectDetails from './Components/ProjectDetails';
import About from './Components/About';
import AboutDetails from './Components/AboutDetails';
import Contact from './Components/Contact';
import LocomotiveScroll from 'locomotive-scroll';
import ContactDetails from './Components/ContactDetails';

const App = () => {

  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
    <div className='bg-[#182928] overflow-hidden'>
        <Navbar/>
        <Landing/>
        <Projects/>
        <ProjectDetails/>
        <About/>
        <AboutDetails/>
        <Contact/> 
        <ContactDetails/>
      </div>
      
    </>
    
  )
}

export default App