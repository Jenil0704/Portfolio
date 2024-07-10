import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);
const Projects = () => {

    // Animation for pinning .wrapper
    useGSAP(()=>{
      gsap.from('.wrapper', {
        scrollTrigger: {
          trigger: ".wrapper",
          scroller: "body",
          pin: true,
          pinSpacing: false,
        }
      });
      gsap.from('.projects', {
        scrollTrigger : {
          trigger : ".wrapper",
          start : "top 27%",
        },
        y : -210,
        duration : 0.45
      })
    })
    

    // Animation for h1 inside .text
    // gsap.from('.text h1', {
    //   scrollTrigger: {
    //     trigger: ".text",
    //     start: "top 50%",
    //     scroller: "body"
    //   },
    //   y: 350,
    //   opacity: 0,
    //   // ease: "power2.out", // Optional: Add easing
    //   // duration: 1.5 // Optional: Adjust duration
    // });
  

  return (
    <div className='wrapper bg-[#F3F4F1] w-full h-screen overflow-hidden flex items-center justify-center'>
      <div className='overflow-hidden px-2'>
        <h1 className='projects text-[12vw] lg:text-[9.5vw] text-center text-[#182928] '>PROJECTS</h1>
      </div>
    </div>
  );
};

export default Projects;
