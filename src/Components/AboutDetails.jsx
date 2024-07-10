import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react'
import { Element } from 'react-scroll';

gsap.registerPlugin(ScrollTrigger);
const AboutDetails = () => {
  useGSAP(()=>{
    var tl = gsap.timeline();
    gsap.from('.about',{
        scrollTrigger : {
          trigger : ".about",
          scroller : "body",
          pin: true,
          pinSpacing : false,
        }
      })
      gsap.from('.boldtext',{
        scrollTrigger : {
          trigger : ".about",
          start : "top 27%"
        },
        y : -250,
        duration : 0.4
      })
      gsap.from('.description',{
        scrollTrigger : {
          trigger : ".about",
          start : "top 27%",
        },
        y : -250,
        delay : 0.4,
        duration : 0.3
      })
      gsap.from('.education', {
        scrollTrigger : {
          trigger : ".about",
          start : "top 27%"
        },
        y : -100,
        delay : 0.7,
        duration : 0.2
      })
      gsap.from('.image',{
        scrollTrigger : {
          trigger : ".about",
          start : "top 27%"
        },
        y : -700,
        duration : 0.5,
        delay : 0.9
      })
})
  return (
      <Element name='about'>
        <div className='about w-full h-[100vh]  bg-[#182928] text-white '>
        <div className='flex md:h-[80vw] lg:h-[50vw] flex-col-reverse md:flex-row lg:flex-row md:gap-10 lg:gap-10 gap-5 lg:py-20 lg:px-12 md:px-10 px-6 md:py-14 py-10'>
          <div className='left text-justify md:w-[65%] md:h-fit lg:w-[65%] w-full flex flex-col'>
            <p className='lg:text-[2.8vw] md:text-[3.5vw] min-[425px]:text-[5vw] text-[5vw] tracking-normal overflow-hidden'>
              <h1 className='boldtext'>
              I specialize in crafting visually appealing and user-friendly websites using NextJS, ReactJS, NodeJS, Express, and MongoDB.
              </h1>
              
            </p>
            <div className='lg:mt-16 md:mt-10 mt-4 overflow-hidden'>
              <p className='description md:text-[2vw] min-[425px]:text-[3.5vw] lg:text-[1.5vw] text-[4vw]'>
              I am a dedicated and enthusiastic web developer based in Rajkot, Gujarat, India. With a passion for creating dynamic and responsive web applications, I bring a comprehensive skill set to the table, encompassing both front-end and back-end development. When I'm not coding, you can find me researching the newest technology trends, and always learning. Let's work together to make your vision a reality!
              </p>
            </div>

            <div className='lg:mt-5 md:mt-10 mt-3 md:text-[2vw] min-[425px]:text-[3.5vw] lg:text-[1.5vw] text-[4vw] overflow-hidden'>
              <div className='education flex flex-col'>
              Education :
              <span>
              Marwadi University, BCA (Final Year), CGPA(8.66)
              </span>
              <span>
              Eklavya Public School, HSC(76%), SSC(83%)
              </span>
              </div> 
            </div>

            {/* <div className="skills lg:mt-5 mt-3">
              <h1>Skills:</h1>
              <div className="cardss flex flex-wrap gap-7  lg:w-3/5">
                <div className='react flex flex-col items-center border-[1px] border-white/55 py-5 px-6 rounded-xl justify-center gap-2 w-fit'>
                  <span className='flex items-center text-[4vw] text-blue-500 w-fit '> <FaReact/> </span>
                  <h1 className='text-[1.5vw]'>ReactJS</h1>
                </div>
                <div className='react flex flex-col items-center border-[1px] border-white/55 py-5 px-6 rounded-xl justify-center gap-2 w-fit'>
                  <span className='flex items-center text-[4vw] text-blue-500 w-fit '> <FaReact/> </span>
                  <h1 className='text-[1.5vw]'>ReactJS</h1>
                </div>
                <div className='react flex flex-col items-center border-[1px] border-white/55 py-5 px-6 rounded-xl justify-center gap-2 w-fit'>
                  <span className='flex items-center text-[4vw] text-blue-500 w-fit '> <FaReact/> </span>
                  <h1 className='text-[1.5vw]'>ReactJS</h1>
                </div>
                <div className='react flex flex-col items-center border-[1px] border-white/55 py-5 px-6 rounded-xl justify-center gap-2 w-fit'>
                  <span className='flex items-center text-[4vw] text-blue-500 w-fit '> <FaReact/> </span>
                  <h1 className='text-[1.5vw]'>ReactJS</h1>
                </div>
                <div className='react flex flex-col items-center border-[1px] border-white/55 py-5 px-6 rounded-xl justify-center gap-2 w-fit'>
                  <span className='flex items-center text-[4vw] text-blue-500 w-fit '> <FaReact/> </span>
                  <h1 className='text-[1.5vw]'>ReactJS</h1>
                </div>
                <div className='react flex flex-col items-center border-[1px] border-white/55 py-5 px-6 rounded-xl justify-center gap-2 w-fit'>
                  <span className='flex items-center text-[4vw] text-blue-500 w-fit '> <FaReact/> </span>
                  <h1 className='text-[1.5vw]'>ReactJS</h1>
                </div>
              </div>
            </div> */}
          </div>
          <div className='right md:h-full md:w-[50%]  lg:h-full h-52 lg:w-[35%] w-full overflow-hidden rounded-lg'>
            <img src="/images/Me2.jpg" className='image h-full w-full object-cover rounded-lg' alt="" />
          </div>
          
        </div>
        </div>
      </Element>

  )
}

export default AboutDetails
{/* I am a dedicated and enthusiastic web developer based in Rajkot, Gujarat, India., I am proficient in HTML, CSS, JavaScript, React, Node.js,  Express, MongoDB, and Next.js. I believe in building dynamic, responsive and user-friendly designs using clean code. 
               */}
              {/* I specialize in crafting visually appealing and user-friendly websites using HTML, CSS, JavaScript and frameworks like React. On the server side, I leverage Node.js, Express, and MongoDB to develop robust and scalable APIs. I am commited to delievering seamless, polished websites that meet client expectations and industry standards. */}