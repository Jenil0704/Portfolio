import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import { MdMailOutline } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";
import { Element } from 'react-scroll';
// import emailjs from 'emailjs-com';
function ContactDetails() {
    const email = "jenilreshamiya7@gmail.com"
    const phone = "+917990136913"

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "45a43150-d75a-41c4-a7db-87936d21453b");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          console.log("Success", res);
        }
        event.target.reset();
      };
    // const form = useRef();
    // const sendEmail = (e) => {
    //     e.preventDefault();
    
    //     emailjs
    //       .sendForm('service_otgbgaj', 'template_nmc6ga9', form.current, {
    //         publicKey: '0BUZyZmmhCpDxWturq3Os',
    //       })
    //       .then(
    //         () => {
    //           console.log('SUCCESS!');
    //         },
    //         (error) => {
    //           console.log('FAILED...', error.text);
    //         },
    //       );
    //   };
    useGSAP(()=>{
        var tl = gsap.timeline();
        gsap.from('.contactme',{
            scrollTrigger : {
              trigger : ".contactme",
              scroller : "body",
              pin: true,
              pinSpacing : false,
            }
        })
        gsap.from('.touch', {
            scrollTrigger : {
                trigger : ".contactme",
                start : "top 27%"
            },
            y : -150,
            duration : 0.6
        })
        gsap.from('.touch1', {
            scrollTrigger : {
                trigger : ".contactme",
                start : "top 27%"
            },
            y : -150,
            duration : 0.6
        })
        gsap.from('.contactform', {
            scrollTrigger : {
                trigger : ".contactme",
                start : "top 27%"
            },
            y : -260,
            duration : 0.35,
            delay : 0.6
        })
        gsap.from('.linkdesc',{
            scrollTrigger : {
                trigger : ".contactme",
                start : "top 27%"
            },
            y : -50,
            duration : 0.4,
            delay : 0.95
        })
        gsap.from('.links a',{
            scrollTrigger : {
                trigger : ".contactme",
                start : "top 27%"
            },
            y : -50,
            duration : 0.2,
            delay : 0.99,
            stagger : 0.2
        })
        gsap.from('.social', {
            scrollTrigger : {
                trigger : ".contactme",
                start : "top 27%"
            },
            opacity : 0,
            y : -50,
            duration : 0.4,
            delay : 1.19
        })
    })
  return (
<>
    <Element name='contact'>
        <div className='relative contactme w-full h-screen bg-[#182928] lg:px-12 md:px-10 px-6 md:py-10 lg:py-10 py-14 flex flex-col justify-between'>
       <div className='w-full h-[50vw] flex lg:flex-row flex-col lg:gap-14 gap-6 lg:py-20'>
            {/* left part */}
            <div className="left-part w-full lg:w-1/2 flex flex-col gap-6 lg:gap-16">
                <div className="text text-white overflow-hidden">
                    <h1 className='touch1 text-4xl lg:text-[5.2vw] md:text-[6vw] leading-snug lg:leading-[5.3vw]'>Get in touch.</h1>
                    <div className="text mt-4 md:mt-5 lg:mt-7 text-justify overflow-hidden">
                        <h1 className='touch text-white/75 md:text-[2vw] lg:text-[1.5vw]'>Have a project in mind or just want to say hello? Fill out the form below and I'll get back to you as soon as possible.</h1>
                    </div>
                </div>
                <div className='form overflow-hidden'>
                    <form onSubmit={onSubmit} className='contactform'>
                        <div className='flex flex-col gap-4 md:gap-5 lg:gap-5'>
                            <div className='flex flex-col lg:flex-row gap-4 lg:gap-5'>
                                <input name='name' className='py-2 px-4 md:px-5 lg:px-5 outline-none rounded-md w-full bg-[#F3F4F1]' placeholder='Enter your name' type="text" />
                                <input name='email' className='py-2 px-4 md:px-5 lg:px-5 outline-none rounded-md w-full bg-[#F3F4F1]' placeholder='Enter your email' type="email" />
                            </div>
                            <textarea name='message' className='py-2 px-4 md:px-5 lg:px-5 outline-none rounded-md w-full bg-[#F3F4F1]' placeholder='How can I help?' type="text" />
                            <input type="submit" className='w-full py-2 md:py-1.5 lg:py-1.5 text-white cursor-pointer font-semibold bg-[#1e3735] rounded-md' />
                        </div>
                    </form>
                </div>
            </div>
            {/* right part */}
            <div className="right-part w-full md:w-full  lg:w-1/2 flex flex-col gap-12 lg:gap-16  ">
            <div className="flex flex-col overflow-hidden">
                <h1 className='linkdesc text-white/55 text-lg md:text-[3vw] lg:text-[2vw]'>Find me elsewhere on web,</h1>
                <div className='links flex md:flex-row lg:flex-row gap-3 mt-2 md:mt-4 md:gap-6 lg:mt-3 lg:gap-8 text-white overflow-hidden'>
                    {[
                        { name: "LinkedIn", url: " https://linkedin.com/in/jenil-reshamiya" },
                        { name: "Twitter", url: "https://x.com/reshamiya_jenil" },
                        { name: "GitHub", url: "https://github.com/Jenil0704" },
                        { name: "Resume", url: "https://drive.google.com/file/d/1MVuUk4yWNJJ13HxzfM2lCDMdWJ8VQTDG/view" }
                    ].map((item, index) => {
                        return (
                            <a href={item.url} className='link-with-animation md:text-[3.1vw] lg:text-[2.1vw] border-b-[1px] w-fit border-gray-400' key={index} target="_blank" rel="noopener noreferrer">
                            {item.name}
                            </a>
                        );
                    })}
                </div>
            </div>

                <div className="text-white flex flex-col items-start md:gap-2 lg:gap-2 overflow-hidden">
                    <a href={`mailto:${email}`} target='_blank' rel='noopener no referrer' className='social flex items-center gap-2 md:text-[2.7vw] lg:text-[1.6vw]'><span className='flex items-center justify-center text-xl md:text-[3vw] lg:text-[2vw]'><MdMailOutline /></span> {email}</a>
                    <a href={`https://wa.me/${phone}`} target='_blank' rel="noopener noreferrer" className='social flex items-center gap-2 md:text-[2.7vw] lg:text-[1.6vw]'><span className='flex items-center justify-center text-xl md:text-[3vw] lg:text-[2vw]'><MdOutlinePhone /></span> {phone}</a>
                </div>
            </div>
       </div>
       <div className='rights md:mt-24 lg:mt-24 text-center absolute lg:bottom-5 bottom-3 md:-translate-x-1/2  md:left-1/2  lg:-translate-x-1/2 lg:-translate-y-1/2 lg:left-1/2'>
            <h1 className='lg:text-[1.2vw] md:text-[2vw] text-[3.7vw] text-white/45'>Designed and developed by Jenil Reshamiya © 2024</h1>
       </div>
        </div>
    </Element>
    
</>
  )
}

export default ContactDetails
{/* <h1 className='text-[5vw] leading-[5.3vw]'>Available for work,</h1> */}
