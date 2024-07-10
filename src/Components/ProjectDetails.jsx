import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaGithub } from "react-icons/fa";
import { LuArrowUpRightSquare } from "react-icons/lu";
import { Element } from 'react-scroll';
gsap.registerPlugin(ScrollTrigger);

const ProjectDetails = () => {
  useGSAP(()=>{
    gsap.from('.project',{
      scrollTrigger : {
        trigger : ".project",
        pin: true,
        end : () => `+=document.querySelector('.project').offsetHeight`,
        pinSpacing : false,
      }
    })
    gsap.from('.card1 .left', {
        scrollTrigger : {
            trigger : ".project",
            start : "top 30%",
        },
        x : -700,
        duration : 0.4
    })
    gsap.from('.card1 .right', {
        scrollTrigger : {
            trigger : ".project",
            start : "top 30%"
        },
        x : 700,
        duration : 0.4
    })
    gsap.from('.card2 .left', {
        scrollTrigger : {
            trigger : ".line1",
            start : "top 40%",
        },
        x : -700,
        duration : 0.4
    })
    gsap.from('.card2 .right', {
        scrollTrigger : {
            trigger : '.line1',
            start : "top 40%"
        },
        x : 700,
        duration : 0.4
    })
    gsap.from('.card3 .left', {
        scrollTrigger : {
            trigger : ".line2",
            start : "top 40%"
        },
        x : -700,
        duration : 0.4
    })
    gsap.from('.card3 .right', {
        scrollTrigger : {
            trigger : ".line2",
            start : "top 40%"
        },
        x : 700,
        duration : 0.4
    })
    gsap.from('.card4 .left', {
        scrollTrigger : {
            trigger : ".line3",
            start : "top 40%"
        },
        x : -700,
        duration : 0.4
    })
    gsap.from('.card4 .right', {
        scrollTrigger : {
            trigger : ".line3",
            start : "top 40%"
        },
        x : 700,
        duration : 0.4
    })
    gsap.from('.card5 .left', {
        scrollTrigger : {
            trigger : ".line4",
            start : "top 40%"
        },
        x : -700,
        duration : 0.4
    })
    gsap.from('.card5 .right', {
        scrollTrigger : {
            trigger : ".line4",
            start : "top 40%"
        },
        x : 700,
        duration : 0.4
    })
  })
  return (
    <Element name='projects'>
        <div className='project w-full bg-[#182928] text-white  min-h-screen'>
            <div className='w-full lg:px-12 md:px-10  lg:py-28 py-20 px-6'>
                {/* card 1 */}
                <div className='card1 w-full min-w-full h-auto flex flex-col lg:flex-row gap-10 overflow-hidden'>
                    <div className='left w-full md:h-56 lg:w-1/2 h-48 lg:h-full rounded-lg overflow-hidden'>
                        <img className='w-full h-full object-cover' src="/images/posthub.jpg" alt="" />
                    </div>
                    <div className='right w-full lg:w-1/2  h-full overflow-hidden'>
                        <div className='flex items-center md:gap-5 gap-3 lg:gap-5'>
                            <h1 className='text-[6vw] md:text-[3.5vw] lg:text-[2vw] font-medium'>01</h1>
                            <h1 className='text-[6vw] md:text-[3.5vw] lg:text-[2vw] font-medium'>PostHub</h1>
                        </div>
                        <div>
                            <div className='flex flex-wrap gap-3 lg:gap-5 mt-5 '>
                                {["Node.js", "EJS", "Express.js", "Multer.js", "MongoDB"].map((item,index)=>{
                                    return(
                                        <div className='py-1 px-4 bg-[#F3F4F1]/90 rounded-md flex items-center justify-center'>
                                            <h1 key={index} className='text-black'>{item}</h1>
                                        </div>
                                    )
                                })}
                            </div>
                            <p className='mt-7 lg:mt-5 text-justify lg:leading-[2vw] text-md md:text-[2.3vw] lg:text-[1.2vw]'>This project is a full-stack web application built with Node.js and EJS that provides secure user login and social posting capabilities. Users can register and log in using their credentials. After authentication, users can update their profile images. The application allows users to create posts by uploading photographs and writing captions, resulting in a dynamic and engaging experience. Additionally, users can interact with postings by liking them and remove their own posts. 
                            </p>
                            <div className='mt-7 flex flex-row gap-5'>
                            <a href='https://posthub-rvpx.onrender.com' target='_blank' className='flex items-center justify-center gap-2 py-2 px-4 bg-[#0F181A] rounded-md'> <span className='flex items-center justify-center'><LuArrowUpRightSquare /></span> Live Link</a>
                            <a href='https://github.com/Jenil0704/PostHub' target='_blank' className='flex items-center justify-center gap-2 py-2 px-4 bg-[#0F181A] rounded-md'> <span className='flex items-center justify-center'><FaGithub /></span> GitHub Link</a>
                            {/* 2b1524 */}
                            </div>
                        </div>
                    </div>
                </div>

                <div className='line1 w-full h-[0.1px] bg-white/15 mt-20 mb-20'></div>
                
                {/* card 2 */}
                <div className='card2 w-full min-w-full h-auto  flex flex-col-reverse lg:flex-row gap-10 overflow-hidden'>
                    <div className='left w-full lg:w-1/2 h-full '>
                        <div className='flex items-center md:gap-5 gap-3 lg:gap-5'>
                            <h1 className='text-[6vw] md:text-[3.5vw] lg:text-[2vw] font-medium'>02</h1>
                            <h1 className='text-[6vw] md:text-[3.5vw] lg:text-[2vw] font-medium'>BlogPosts</h1>
                        </div>
                        <div>
                            <div className='flex flex-wrap gap-3 lg:gap-5 mt-5 '>
                                {["React", "Node.js", "Tailwind CSS", "Express", "MongoDB"].map((item,index)=>{
                                    return(
                                        <div className='py-1 px-4 bg-[#F3F4F1]/90 rounded-md flex items-center justify-center'>
                                            <h1 key={index} className='text-black'>{item}</h1>
                                        </div>
                                    )
                                })}
                            </div>
                            <p className='mt-7 lg:mt-5 text-justify lg:leading-[2vw] text-md md:text-[2.3vw] lg:text-[1.2vw]'>BlogPosts is a full-stack web application based on the MERN Stack (MongoDB, Express.js, React.js, Node.js). It offers users a platform for easily creating, sharing, and managing blog content. Users can safely register and log in to their account, write new blog articles, update their profiles, and engage with other users by commenting on their postings. The application supports features like searching for specific blogs, deleting their own posts, and viewing a curated feed of other user's blog postings on the home page.  
                            </p>
                            <div className='mt-7 flex flex-row'>
                            <a href='https://github.com/Jenil0704/Blog-App' target='_blank' className='flex items-center justify-center gap-2 py-2 px-4 bg-[#0F181A] rounded-md'> <span className='flex items-center justify-center'><FaGithub/> </span> GitHub Link</a>
                            
                            </div>
                        </div>
                    </div>
                    <div className='right w-full lg:w-1/2 md:h-56 h-48 lg:h-full rounded-lg overflow-hidden'>
                        <img className='w-full h-full object-cover' src="/images/quickposts.jpg" alt="" />
                    </div>
                </div>
                
                
                <div className='line2 w-full h-[0.1px] bg-white/15 mt-20 mb-20'></div>
                
                {/* card 3 */}
                <div className='card3 w-full min-w-full h-auto  flex flex-col lg:flex-row gap-10 overflow-hidden'>
                    <div className='left w-full lg:w-1/2 md:h-56 h-48 lg:h-full rounded-lg overflow-hidden'>
                        <img className='w-full h-full object-cover' src="/images/ochi.jpg" alt="" />
                    </div>
                    <div className='right w-full lg:w-1/2 h-full '>
                        <div className='flex items-center md:gap-5 gap-3 lg:gap-5'>
                            <h1 className='text-[6vw] md:text-[3.5vw] lg:text-[2vw] font-medium'>03</h1>
                            <h1 className='text-[6vw] md:text-[3.5vw] lg:text-[2vw] font-medium'>Ochi Clone</h1>
                        </div>
                        <div>
                            <div className='flex flex-wrap gap-3 lg:gap-5 mt-5 '>
                                {["React", "Tailwind CSS", "GSAP", "Locomotive.js"].map((item,index)=>{
                                    return(
                                        <div className='py-1 px-4 bg-[#F3F4F1]/90 rounded-md flex items-center justify-center'>
                                            <h1 key={index} className='text-black'>{item}</h1>
                                        </div>
                                    )
                                })}
                            </div>
                            <p className='mt-7 lg:mt-5 text-justify lg:leading-[2vw] text-md md:text-[2.3vw] lg:text-[1.2vw]'>I created a clone of the OCHI website using React.js, Tailwind CSS, GSAP, and locomotive.js. This project duplicates how the original site looks, showing what I know about current front-end technology. I used React.js to create a flexible interfaces, Tailwind CSS for stylish designs, GSAP for smooth animations that make the site more engaging, and locomotive.js for smooth scrolling effects. This project demonstrates my skills in web development, showing I can recreate complex designs accurately. 
                            </p>
                            <div className='mt-7 flex flex-row gap-5'>
                            <a href='https://awwards-ochi.netlify.app/' target='_blank' className='flex items-center justify-center gap-2 py-2 px-4 bg-[#0F181A] rounded-md'> <span className='flex items-center justify-center'> <LuArrowUpRightSquare/> </span> Live Link</a>
                            <a href='https://github.com/Jenil0704/Ochi-Website-Clone' target='_blank' className='flex items-center justify-center gap-2 py-2 px-4 bg-[#0F181A] rounded-md'> <span className='flex items-center justify-center'> <FaGithub/> </span> GitHub Link</a>
                            </div>
                        </div>
                    </div>
                </div>
                

                <div className='line3 w-full h-[0.1px] bg-white/15 mt-20 mb-20'></div>

                {/* card 4 */}
                <div className='card4 w-full min-w-full h-auto  flex flex-col-reverse lg:flex-row gap-10 overflow-hidden'>
                    <div className='left w-full lg:w-1/2 h-full'>
                        <div className='flex items-center gap-3 md:gap-5 lg:gap-5'>
                            <h1 className='text-[6vw] md:text-[3.5vw] lg:text-[2vw] font-medium'>04</h1>
                            <h1 className='text-[6vw] md:text-[3.5vw] lg:text-[2vw] font-medium'>Significo Clone</h1>
                        </div>
                        <div>
                            <div className='flex flex-wrap gap-3 lg:gap-5 mt-5 '>
                                {["HTML", "CSS", "JavaScript", "GSAP"].map((item,index)=>{
                                    return(
                                        <div className='py-1 px-4 bg-[#F3F4F1]/90 rounded-md flex items-center justify-center'>
                                            <h1 key={index} className='text-black'>{item}</h1>
                                        </div>
                                    )
                                })}
                            </div>
                            <p className='mt-7 lg:mt-5 text-justify lg:leading-[2vw] text-md md:text-[2.3vw] lg:text-[1.2vw]'>I created a clone of the Significo website using HTML, CSS, JavaScript, and GSAP. This project replicates Significo's beautiful designs, interactive elements using JavaScript, and smooth animations using GSAP. This project demonstrates my skill in web development, showing I can create complex and fantastic designs. 
                            </p>
                            <div className='mt-7 flex flex-row gap-5'>
                            <a href='https://significo-sigma.vercel.app/' target='_blank' className='flex items-center justify-center gap-2 py-2 px-4 bg-[#0F181A] rounded-md'> <span className='flex items-center justify-center'> <LuArrowUpRightSquare/> </span> Live Link</a>
                            <a href='https://github.com/Jenil0704/Significo-Website-Clone' target='_blank' className='flex items-center justify-center gap-2 py-2 px-4 bg-[#0F181A] rounded-md'> <span className='flex items-center justify-center'> <FaGithub/> </span> GitHub Link</a>
                            </div>
                        </div>
                    </div>
                    <div className='right w-full lg:w-1/2 md:h-56 h-48 lg:h-full rounded-lg overflow-hidden'>
                        <img className='w-full h-full object-cover' src="/images/significo.jpg" alt="" />
                    </div>
                    
                </div>
                
                <div className='line4 w-full h-[0.1px] bg-white/15 mt-20 mb-20'></div>

                {/* card 5 */}
                <div className='card5 w-full min-w-full h-auto  flex flex-col lg:flex-row gap-10 overflow-hidden'>
                    <div className='left w-full lg:w-1/2 md:h-56 h-48 lg:h-full rounded-lg overflow-hidden bg-green-900'>
                        <img className='w-full h-full object-cover' src="/images/picture.jpg" alt="" />
                    </div>
                    <div className='right w-full lg:w-1/2 h-full'>
                        <div className='flex items-center gap-3 lg:gap-5'>
                            <h1 className='text-[6vw] md:text-[3.5vw] lg:text-[2vw] font-medium'>05</h1>
                            <h1 className='text-[6vw] md:text-[3.5vw] lg:text-[2vw] font-medium'>TwinScreen</h1>
                        </div>
                        <div>
                            <div className='flex flex-wrap gap-3 lg:gap-5 mt-5 '>
                                {["HTML", "CSS", "JavaScript"].map((item,index)=>{
                                    return(
                                        <div className='py-1 px-4 bg-[#F3F4F1]/90 rounded-md flex items-center justify-center'>
                                            <h1 key={index} className='text-black'>{item}</h1>
                                        </div>
                                    )
                                })}
                            </div>
                            <p className='mt-7 lg:mt-5 text-justify lg:leading-[2vw] text-md md:text-[2.3vw] lg:text-[1.2vw]'>TwinScreen is a web application developed using HTML, CSS, and JavaScript. It is designed to facilitate real-time browser tab sharing. Users can effortlessly synchronize their browser experience using TwinScreen. 
                            </p>
                            <div className='mt-7 flex flex-row gap-5'>
                            <a href='https://awwards-ochi.netlify.app/' target='_blank' className='flex items-center justify-center gap-2 py-2 px-4 bg-[#0F181A] rounded-md'> <span className='flex items-center justify-center'> <LuArrowUpRightSquare/> </span> Live Link</a>
                            <a href='https://github.com/Jenil0704/Ochi-Website-Clone' target='_blank' className='flex items-center justify-center gap-2 py-2 px-4 bg-[#0F181A] rounded-md'> <span className='flex items-center justify-center'> <FaGithub/> </span> GitHub Link</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className='card5 w-full min-w-full h-auto  flex flex-col md:flex-row gap-10 overflow-hidden'>
                    <div className='left w-full md:w-1/2 h-48 md:h-full rounded-lg overflow-hidden'>
                        <img className='w-full h-full object-cover' src="/images/picture.jpg" alt="" />
                    </div>
                    <div className='right w-full md:w-1/2 h-full '>
                        <div className='flex items-center gap-3 md:gap-5'>
                            <h1 className='text-[6vw] md:text-[2vw] font-medium'>05</h1>
                            <h1 className='text-[6vw] md:text-[2vw] font-medium'>Twin Screen</h1>
                        </div>
                        <div>
                            <div className='flex flex-wrap gap-3 md:gap-5 mt-5'>
                                {["HTML", "CSS", "JavaScript"].map((item,index)=>{
                                    return(
                                        <div className='py-1 px-4 bg-[#F3F4F1]/90 rounded-md flex items-center justify-center'>
                                            <h1 key={index} className='text-black'>{item}</h1>
                                        </div>
                                    )
                                })}
                            </div>
                            <p className='mt-7 md:mt-5 text-justify md:leading-[2vw] text-md md:text-[1.2vw]'>
                            TwinScreen is a web application developed using HTML, CSS, and JavaScript. It is designed to facilitate real-time browser tab sharing. Users can effortlessly synchronize their browser experience using TwinScreen.
                            </p>
                            <div className='mt-7 flex flex-row gap-5'>
                            <a href='https://twinscreen.netlify.app/' target='_blank' className='flex items-center justify-center gap-2 py-2 px-4 bg-[#0F181A] rounded-md'> <span className='flex items-center justify-center'> <LuArrowUpRightSquare/> </span> Live Link</a>
                            <a href='https://github.com/Jenil0704/Picture-in-Project' target='_blank' className='flex items-center justify-center gap-2 py-2 px-4 bg-[#0F181A] rounded-md'> <span className='flex items-center justify-center'> <FaGithub/> </span> GitHub Link</a>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    </Element>
    
  )
}

export default ProjectDetails

// 