import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const About = () => {
  useGSAP(()=>{
    gsap.from('.main', {
      scrollTrigger: {
        trigger: ".main",
        scroller: "body",
        pin: true,
        pinSpacing: false,
      }
    });
    gsap.from('.aboutme', {
      scrollTrigger : {
        trigger : '.main',
        start : "top 27%"
      },
      y : -210,
      duration : 0.45
    })
  })
  return (
    <div className='main bg-[#F3F4F1] w-full h-screen overflow-hidden flex items-center justify-center'>
      <div className='text overflow-hidden px-2'>
        <h1 className='aboutme text-[12vw] lg:text-[9.5vw] text-center  text-[#182928] '>ABOUT ME</h1>
      </div>
    </div>
  )
}

export default About