import React, { useState } from 'react';
import About from './About';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Link } from 'react-scroll';

const Navbar = () => {
  
  const [menuOpen, setMenuOpen] = useState(false);
   useGSAP(()=>{
     gsap.from('.nav',{
       y : -100,
       delay : 2,
       duration : 0.5
     })
  })
  return (
    <>
    
    <div className='w-full h-16'>
      <nav className='w-full z-10  lg:py-6 md:px-10 lg:px-12 px-6 py-4 text-[#fff] flex items-center justify-between fixed top-0'>
          <Link to='home' smooth={true} duration={900} className='nav navname cursor-pointer text-[5vw] md:text-[2.3vw] lg:text-[1.5vw] bg-[#1a2c2a] px-5 py-1  rounded-full '>Jenil</Link>

          <div className='nav flex  gap-5 bg-[#1a2c2a] backdrop-blur-lg  md:px-10 lg:px-10 px-5 py-2  rounded-full'>
            {/* #1b2d2c */}
            <Link to='projects' smooth={true} duration={800} className='link-with-border text-[4vw] md:text-[2vw] lg:text-[1.3vw] navname cursor-pointer'>Projects</Link>
            <Link to='about' smooth={true} duration={800} className='link-with-border text-[4vw] md:text-[2vw] lg:text-[1.3vw] navname cursor-pointer'>About</Link>
            <Link to='contact' smooth={true} duration={800} className='link-with-border text-[4vw] md:text-[2vw] lg:text-[1.3vw] navname cursor-pointer'>Contact</Link>
          </div>

          

        {/* <div className='md:hidden'>
          <button onClick={() => setMenuOpen(!menuOpen)} className={`text-xl transition-transform duration-300 ${menuOpen ? 'rotate-90' : ''}`}>
            ☰
          </button>
        </div> */}
      </nav>
      {/* <div className={`menu-container transition-max-height duration-300 overflow-hidden ${menuOpen ? 'max-h-40' : 'max-h-0'}`}>
        <div className='md:hidden flex flex-col gap-3 px-10 py-6  text-white'>
          {["Projects", "About", "Contact"].map((item, index) => (
            <h3 key={index} className='text-xl'>{item}</h3>
          ))}
        </div>
      </div> */}
    </div>
    </>

  );
};

export default Navbar;

// const gsapRef = useRef();
// useGSAP(()=>{
//     gsap.from("nav h1, h3",{
//         y : -150,
//         opacity : 0,
//         duration : 0.8,
//     })
// })