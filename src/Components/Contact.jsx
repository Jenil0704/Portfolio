import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaRegCopyright } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {

  useGSAP(()=>{
    gsap.from('.contact',{
      scrollTrigger : {
        trigger : ".contact",
        pin: true,
        pinSpacing : false,
      }
    })
    gsap.from('.one', {
      scrollTrigger : {
        trigger : ".contact",
        start : "top 27%"
      },
      y : -210,
      duration : 0.45
    })
  })

  return (
    <div className='contact bg-[#F3F4F1] w-full h-screen overflow-hidden flex items-center justify-center'>
    <div className='text overflow-hidden px-2'>
      <h1 className='one text-[12vw] lg:text-[9.5vw] text-center text-[#182928]'>LET'S CONNECT!</h1>
    </div>
  </div>
  )
}

export default Contact