'use client';
import React from 'react'
import Image from 'next/image'
import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import passm from "../../public/passm.png";
import futureme from "../../public/futureme.png";
import movieapp from "../../public/movieapp.png";
import ticket from "../../public/ticket.png";
import countryquiz from "../../public/countryquiz.png";
import translate from "../../public/translate.png";
import coffee from "../../public/coffeelisting.png";
import colorgame from "../../public/colorgame.png";
import chatio from "../../public/chatio.png";
import homii from "../../public/homii.png";
import quiethours from "../../public/quiethours.png";
import trustlens from "../../public/trustlens.png";
import Link from 'next/link';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiMedium } from "react-icons/si";

import { useEffect, useState } from "react";

const Header = () => {
    const imgRef = useRef(null);
    const fwTitleRef = useRef(null);
    const fwRef = useRef(null);
    const OPTitleRef = useRef(null);
    const OPRef = useRef(null);

    const { scrollYProgress: imgProgress } = useScroll({target: imgRef, offset: ["start 20%", "end start"]});
    const reactX = useTransform(imgProgress, [0, 1], [130, 550])
    const reactR = useTransform(imgProgress, [0, 1], [-20, 0])
    const reactY = useTransform(imgProgress, [0, 1], [0, 300])
    const twdX = useTransform(imgProgress, [0, 1], [50, 355])
    const twdR = useTransform(imgProgress, [0, 1], [-10, 0])
    const twdY = useTransform(imgProgress, [0, 1], [-40, 300])
    const jvsX = useTransform(imgProgress, [0, 1], [-10, 160])
    const jvsR = useTransform(imgProgress, [0, 1], [-5, 0])
    const jvsY = useTransform(imgProgress, [0, 1], [-60, 300])
    const tpsX = useTransform(imgProgress, [0, 1], [-70, -35])
    const tpsR = useTransform(imgProgress, [0, 1], [2, -0])
    const tpsY = useTransform(imgProgress, [0, 1], [-65, 300])
    const nodejsX = useTransform(imgProgress, [0, 1], [-130, -225])
    const nodejsR = useTransform(imgProgress, [0, 1], [7, -0])
    const nodejsY = useTransform(imgProgress, [0, 1], [-45, 300])
    const mongodbX = useTransform(imgProgress, [0, 1], [-190, -423])
    const mongodbR = useTransform(imgProgress, [0, 1], [10, 0])
    const mongodbY = useTransform(imgProgress, [0, 1], [-20, 300])

    const { scrollYProgress: fwTitleProgress } = useScroll({target: fwTitleRef, offset: ["start end", "end start"]});
    const fwTitleOpacity = useTransform(fwTitleProgress, [0, 1], [0, 1])
    const fwTitleY = useTransform(fwTitleProgress, [0, 1], [0, -75])

    const { scrollYProgress: fwProgress } = useScroll({ target: fwRef});
    const fwX = useTransform(fwProgress, [0, 1], ["40%", "-70%"]);
    const fwR1 = useTransform(fwProgress, [0, 0.7], [10, -10]);
    const fwR2 = useTransform(fwProgress, [0.3, 0.7], [10, -10]);
    const fwR3 = useTransform(fwProgress, [0.3, 1], [10, -10]);
    const smoothX = useSpring(fwX, {
        stiffness: 50,
        damping: 20,
    });

    
    const { scrollYProgress: OPTitleProgress } = useScroll({target: OPTitleRef});
    const OPTitleOpacity = useTransform(OPTitleProgress, [0, 1], [0, 1])
    const OPTitleY = useTransform(OPTitleProgress, [0, 1], [0, -75])

    const { scrollYProgress: OPProgress } = useScroll({ target: OPRef });
    const OPX = useTransform(OPProgress, [0, 1.3], ["-60%", "60%"]);
    const OPR1 = useTransform(OPProgress, [0, 0.7], [-10, 10]);
    const OPR2 = useTransform(OPProgress, [0.3, 0.7], [-10, 10]);
    const OPR3 = useTransform(OPProgress, [0, 0.7], [-10, 10]);
    const OPSmoothX = useSpring(OPX, {
        stiffness: 50,
        damping: 20,
    });

    const textReveal = useTransform(fwProgress, [0.7, 1], ["0%", "100%"]);
  return (
    <div>
        <div className='flex flex-col justify-center items-center'>
        <a href="mailto:elizase405@gmail.com" className="text-[#6B7280] mt-4 uppercase text-sm">elizase405@gmail.com</a>
        <div className='text-2xl sm:text-7xl flex sm:flex-col font-bold mt-8'>
            <p>Elizabeth</p>
            <p className='ml-2 sm:ml-0 sm:mt-2'>Akindele</p>
        </div>
        <p className='text-center text-[#6B7280]'>Software Engineer. Cybersecurity Analyst.</p>
        <div className='flex mt-26 mb-16 hidden lg:flex' ref={imgRef}>
            <motion.div style={{ x: reactX, rotate: reactR, y: reactY }}>
                <Image src="/react.svg" alt="LinkedIn" width={350} height={30} />
            </motion.div>
            <motion.div style={{ x: twdX, rotate: twdR, y: twdY }}>
                <Image src="/tailwind.svg" alt="LinkedIn" width={350} height={30} />
            </motion.div>
            <motion.div style={{ x: jvsX, rotate: jvsR, y: jvsY }}>
                <Image src="/javascript.svg" alt="LinkedIn" width={350} height={30} />
            </motion.div>
            <motion.div style={{ x: tpsX, rotate: tpsR, y: tpsY }}>
                <Image src="/typescript.svg" alt="LinkedIn" width={350} height={30} />
            </motion.div>
            <motion.div style={{ x: nodejsX, rotate: nodejsR, y: nodejsY }}>
                <Image src="/nodejs.svg" alt="LinkedIn" width={350} height={30} />
            </motion.div>
            <motion.div style={{ x: mongodbX, rotate: mongodbR, y: mongodbY }}>
                <Image src="/mongodb.svg" alt="LinkedIn" width={350} height={30} />
            </motion.div>
        </div>
        </div>
        {/* ABOUT */}
        <div className='mt-16 lg:mt-0 w-full mb-64'>
            <h3 className='uppercase mb-4 lg:mb-8'>about</h3>
            <div className='lg:w-1/2 text-2xl sm:text-4xl font-bold mb-6 sm:mb-10'>
                <h4 className='inline sm:block'>Transforming Ideas into Fast,</h4>
                <h4 className='inline sm:block ml-1'>Interactive, and User-Centered</h4>
                <h4 className='inline sm:block ml-1'>Interfaces.</h4>
            </div>
            <div className='text-base md:text-lg lg:text-base lg:w-2/5'>
                <p className='mb-4'>Hi, I'm a frontend developer focused on building high-performance, scalable, and visually engaging web applications. I specialize in React and Next.js, creating seamless user interfaces that deliver real value.</p>
                <p className='mb-4'>I pay strong attention to user experience, performance, and clean architecture — ensuring every product I build is fast, responsive, and easy to use across all devices.</p>
                <p className='mb-4'>Beyond frontend development, I bring knowledge of backend systems and cybersecurity principles, allowing me to build applications that are not only functional, but also secure and reliable.</p>
            </div>
        </div>
        {/* Featured Work */}
        <div className='relative'>
            <motion.h3 className='uppercase text-[#939393] text-4xl sm:text-6xl lg:text-8xl font-bold' style={{ opacity: fwTitleOpacity, y: fwTitleY }} ref={fwTitleRef}>Featured work</motion.h3>
            <div className='h-[150vh] sm:h-[300vh] bg-[#ECE5D7] flex justify-end gap-2' ref={fwRef}>
                <div className="sticky top-0 flex h-[50%] sm:h-screen items-center justify-center overflow-hidden" style={{ WebkitMaskImage: "linear-gradient(to bottom, transparent, black 30%, black 70%, transparent)", maskImage: "linear-gradient(to bottom, transparent, black 30%, black 70%, transparent)"}}>
                    <motion.div className="flex items-center gap-6 sm:gap-12" style={{ x: smoothX }}>
                        <motion.div className='relative w-[20rem] h-[20rem] sm:w-[30rem] sm:h-[30rem] overflow-hidden bg-blue-200'  style={{ rotate: fwR1 }}>
                                <Link href="https://passm-eight.vercel.app/" target='_blank'>
                                    <Image src={passm} width={600} height={200} alt="" className='absolute w-[90%] h-[60%] object-cover rounded-2xl self-center inset-0 z-0 transition-transform duration-300 hover:scale-110 mx-auto'/>
                                </Link>
                        </motion.div>
                        <motion.div className='relative w-[20rem] h-[20rem] sm:w-[30rem] sm:h-[30rem] overflow-hidden bg-blue-200'  style={{ rotate: fwR2 }}>
                                <Link href="https://futureme-seven.vercel.app/" target='_blank'>
                                    <Image src={futureme} width={600} height={200} alt="" className='absolute w-[90%] h-[60%] object-cover rounded-2xl self-center inset-0 z-0 transition-transform duration-300 hover:scale-110 mx-auto'/>
                                </Link>
                        </motion.div>
                        <motion.div className='relative w-[20rem] h-[20rem] sm:w-[30rem] sm:h-[30rem] overflow-hidden bg-blue-200'  style={{ rotate: fwR3 }}>
                                <Link href="/" target='_blank'>
                                    <Image src={movieapp} width={600} height={1200} alt="" className='absolute w-[90%] h-[60%] object-cover rounded-2xl self-center inset-0 z-0 transition-transform duration-300 hover:scale-110 mx-auto' />
                                </Link>
                        </motion.div>
                        <motion.div className='relative w-[20rem] h-[20rem] sm:w-[30rem] sm:h-[30rem] overflow-hidden bg-blue-200'  style={{ rotate: fwR3 }}>
                                <Link href="https://conference-ticket-generator-ruby.vercel.app/attendee-details" target='_blank'>
                                    <Image src={ticket} width={600} height={1200} alt="" className='absolute w-[90%] h-[60%] object-cover rounded-2xl self-center inset-0 z-0 transition-transform duration-300 hover:scale-110 mx-auto' />
                                </Link>
                        </motion.div>
                        <motion.div className='relative w-[20rem] h-[20rem] sm:w-[30rem] sm:h-[30rem] overflow-hidden bg-blue-200'  style={{ rotate: fwR3 }}>
                                <Link href="https://country-quiz-olive.vercel.app/" target='_blank'>
                                    <Image src={countryquiz} width={600} height={1200} alt="" className='absolute w-[90%] h-[60%] object-cover rounded-2xl self-center inset-0 z-0 transition-transform duration-300 hover:scale-110 mx-auto' />
                                </Link>
                        </motion.div>
                        <motion.div className='relative w-[20rem] h-[20rem] sm:w-[30rem] sm:h-[30rem] overflow-hidden bg-blue-200'  style={{ rotate: fwR3 }}>
                                <Link href="https://text-processing-interface.vercel.app/" target='_blank'>
                                    <Image src={translate} width={600} height={1200} alt="" className='absolute w-[90%] h-[60%] object-cover rounded-2xl self-center inset-0 z-0 transition-transform duration-300 hover:scale-110 mx-auto' />
                                </Link>
                        </motion.div>
                        <motion.div className='relative w-[20rem] h-[20rem] sm:w-[30rem] sm:h-[30rem] overflow-hidden bg-blue-200'  style={{ rotate: fwR3 }}>
                                <Link href="https://coffee-listing-website2.vercel.app/" target='_blank'>
                                    <Image src={coffee} width={600} height={1200} alt="" className='absolute w-[90%] h-[60%] object-cover rounded-2xl self-center inset-0 z-0 transition-transform duration-300 hover:scale-110 mx-auto' />
                                </Link>
                        </motion.div>
                        <motion.div className='relative w-[20rem] h-[20rem] sm:w-[30rem] sm:h-[30rem] overflow-hidden bg-blue-200'  style={{ rotate: fwR3 }}>
                                <Link href="https://frontend-stage-1-three.vercel.app/" target='_blank'>
                                    <Image src={colorgame} width={600} height={1200} alt="" className='absolute w-[90%] h-[60%] object-cover rounded-2xl self-center inset-0 z-0 transition-transform duration-300 hover:scale-110 mx-auto' />
                                </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
        {/* Ongoing Projects */}
        <div className='relative'>
            <motion.h3 className='uppercase text-[#939393] text-4xl sm:text-5xl lg:text-8xl font-bold' style={{ opacity: OPTitleOpacity, y: OPTitleY }} ref={OPTitleRef}>Ongoing Projects</motion.h3>
            <div className='h-[300vh] bg-[#ECE5D7] flex justify-end gap-2' ref={OPRef}>
                <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden" style={{ WebkitMaskImage: "linear-gradient(to bottom, transparent, black 30%, black 70%, transparent)", maskImage: "linear-gradient(to bottom, transparent, black 30%, black 70%, transparent)"}}>
                    <motion.div className="flex items-center gap-6 sm:gap-12" style={{ x: OPSmoothX }}>
                        <motion.div className='relative w-[20rem] h-[20rem] sm:w-[30rem] sm:h-[30rem] overflow-hidden bg-blue-200'  style={{ rotate: OPR1 }}>
                                <Link href="/">
                                    <Image src={chatio} width={600} height={1200} alt="" className='absolute w-[90%] h-[60%] object-cover rounded-2xl self-center inset-0 z-0 transition-transform duration-300 hover:scale-110 mx-auto' />
                                </Link>
                        </motion.div>
                        <motion.div className='relative w-[20rem] h-[20rem] sm:w-[30rem] sm:h-[30rem] overflow-hidden bg-blue-200'  style={{ rotate: OPR2 }}>
                                <Link href="/">
                                    <Image src={homii} width={600} height={1200} alt="" className='absolute w-[90%] h-[60%] object-cover rounded-2xl self-center inset-0 z-0 transition-transform duration-300 hover:scale-110 mx-auto' />
                                </Link>
                        </motion.div>
                        <motion.div className='relative w-[20rem] h-[20rem] sm:w-[30rem] sm:h-[30rem] overflow-hidden bg-blue-200'  style={{ rotate: OPR3 }}>
                                <Link href="/">
                                    <Image src={trustlens} width={600} height={1200} alt="" className='absolute w-[90%] h-[60%] object-cover rounded-2xl self-center inset-0 z-0 transition-transform duration-300 hover:scale-110 mx-auto' />
                                </Link>
                        </motion.div>
                        <motion.div className='relative w-[20rem] h-[20rem] sm:w-[30rem] sm:h-[30rem] overflow-hidden bg-blue-200'  style={{ rotate: OPR3 }}>
                                <Link href="/">
                                    <Image src={quiethours} width={600} height={1200} alt="" className='absolute w-[90%] h-[60%] object-cover rounded-2xl self-center inset-0 z-0 transition-transform duration-300 hover:scale-110 mx-auto' />
                                </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
        {/* NEXT SECTION */}
        <div className="h-screen w-full flex flex-col items-center justify-center text-center">
            <p className="text-[#333333] text-lg sm:text-2xl lg:text-5xl font-bold w-2/3">Lets work together to create something awesome and beautiful. Whether you have a project in mind or just want to say hi, feel free to get in touch.</p>
            <p className='mt-12'>Lagos, Nigeria</p>
            <a href="mailto:elizase405@gmail.com" className="text-[#6B7280] uppercase text-sm">elizase405@gmail.com</a>
            <div className='flex mt-4'>
                <Link href="https://www.linkedin.com/in/akindele-elizabeth/" target="_blank" className="text-2xl sm:text-3xl mr-4 transition-transform duration-300 hover:scale-110">
                    <FaLinkedin />
                </Link>
                <Link href="https://www.github.com/elizase405" target="_blank" className="text-2xl sm:text-3xl mr-4 transition-transform duration-300 hover:scale-110">
                    <FaGithub />
                </Link>
                <Link href="https://medium.com/@elizase405" target="_blank" className="text-2xl sm:text-3xl transition-transform duration-300 hover:scale-110">
                    <SiMedium />
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Header