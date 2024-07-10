import React, { useRef } from 'react'
import Navbar from './Navbar'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { MdOutlineFileDownload } from "react-icons/md";
import { Element } from 'react-scroll';
gsap.registerPlugin(ScrollTrigger);

const Landing = () => {
    
    const gsapRef = useRef();
    useGSAP(()=>{
        gsap.from('.landing',{
            scrollTrigger : {
              trigger : ".landing",
              scroller : "body",
            //   markers : true,
              start : "top 10.2%",
            //   end : () => `+=document.querySelector('.project').offsetHeight`,
              pin: true,
              pinSpacing : false,
            }
          })
    })

    useGSAP(()=>{
        var tl = gsap.timeline();
        tl.from('.img',{
            opacity : 0,
            // y : -250,
            scale : 0,
            // delay : 1,
            duration : 0.5
        })
        tl.from('.bounding',{
            y : -120,
            // delay : 0.5,
            duration : 1,
            ease : 'Expo.easeInOut',
            opacity : 0,
            stagger : .1
        })

        tl.from('.ptext',{
            opacity : 0,
            y : -50,
            duration : .35
        })
        tl.from('.btn', {
            y : -25,
            opacity : 0,
            stagger : .2
        })
        
    })
    return (
    <Element name='home'>
        <div className='landing md:h-screen lg:h-screen min-h-[95vh] w-full  bg-[#182928]'>
            <div className="flex flex-col-reverse md:flex-row lg:flex-row w-full md:px-10 lg:px-12 px-6">
            <div className="left w-full md:w-3/4 text-white min-[425px]:-mt-5 lg:mt-12 ">
                {/* name */}
                <div className='text-white flex items-center justify-center flex-col md:block lg:block'>
                    <div className='overflow-hidden h-[22vw] lg:h-[8.8vw]'>
                        <h1 className='name bounding text-[11vw] md:text-[9vw] md:leading-[35vw] lg:text-[8vw] leading-[32vw] lg:leading-[8vw] font-medium'>
                            I'm Jenil
                        </h1>
                    </div>
                    <div className='overflow-hidden h-[22vw] lg:h-[8.8vw]'>
                        <h1 className='name bounding text-[11vw] md:text-[9vw] md:leading-[10vw] lg:text-[8vw] leading-[16vw] lg:leading-[6.5vw] font-medium'>
                            Reshamiya.
                        </h1>
                    </div>
                </div>
                {/* name end */}

                {/* desc */}
                <div className='md:w-[85%] lg:mt-16 min-[425px]:-mt-4 lg:w-3/4 overflow-hidden'>
                    <div className='ptext'>
                        <p className='text-justify text-[4vw] md:text-[2.2vw] lg:text-[1.4vw]'>
                             I specialise in designing dynamic, user-friendly websites with MERN Stack. With a talent for transforming ideas into interactive digital experiences, I enjoy addressing challenges with clean, efficient code. Let's work together to create something awesome!
                        </p>
                    </div>
                </div>
                {/* desc ends */}
            </div>
            <div className="right w-full md:w-1/4 lg:w-1/4 mt-5 md:mt-20 min-[425px]:-mt-2 lg:mt-12 flex flex-col justify-between">
                <div className='w-full flex justify-center md:justify-end lg:justify-end overflow-hidden'>
                    <div className='img w-[55vw] h-[55vw] md:w-[22vw] md:h-[22vw] lg:w-[20vw] lg:h-[20vw] overflow-hidden rounded-full'>
                        <img className='w-full h-full object-cover rounded-full' loading='lazy' src="/images/Me.jpg" alt="Profile Picture" />
                    </div>
                </div>
                
            </div>
            </div>
            <div className="w-full flex items-center justify-between md:px-10 md:mt-14 min-[425px]:mt-5 lg:px-12 px-6 mt-10 overflow-hidden">
            <div className='btn flex gap-3 lg:gap-5'>
                <div className='h-10 w-10 lg:h-14 lg:w-14 flex items-center justify-center bg-white rounded-full'>
                    <a href='https://leetcode.com/u/Jenil_07/' target='_blank' className='py-2 px-4 lg:py-2 lg:px-5 text-xl lg:text-2xl text-black cursor-pointer'>
                        <SiLeetcode/>
                    </a>
                </div>
                <div className='h-10 w-10 lg:h-14 lg:w-14 flex items-center justify-center bg-white rounded-full'>
                <a href='https://github.com/Jenil0704' target='_blank' className='py-2 px-4 lg:py-2 lg:px-5 text-xl lg:text-2xl text-black cursor-pointer'> <FaGithub/> </a>
                </div>
            </div>  
            <div className="btn resume">
            <a href="https://drive.google.com/file/d/1MVuUk4yWNJJ13HxzfM2lCDMdWJ8VQTDG/view" target='_blank' className='flex items-center justify-center w-fit py-1.5 px-6 bg-white rounded-md text-lg md:text-[2vw] lg:text-[1.2vw] font-semibold cursor-pointer'>
                <span className='flex items-center justify-center text-xl'>
                    <MdOutlineFileDownload/>
                </span>
                Resume
            </a>
            </div> 
            </div>
        </div>
    </Element>
    
  )
}

export default Landing
