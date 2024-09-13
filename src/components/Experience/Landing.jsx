import React from 'react'
import {motion} from "framer-motion";

const container = (delay) => ({
  hidden: {x: -100, opacity: 0},
  visiable: {x: 0, opacity: 1, transition: {duration: 0.5, delay: delay}
  }
});


const Landing = () => {
  return (
    <div className="lg:h-screen border-b-2 border-neutral-500 pb-4 lg:mb-35 mb-20">
      <div className="flex flex-wrap mb-10">
        <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start">
                <motion.h1 
                variants={container(0.5)}
                initial="hidden"
                animate="visiable"
                className="lg:pb-16 pb-6 text-5xl font-thin tracking-tight lg:mt-10 lg:text-7xl">My Experience</motion.h1>

                <motion.span 
                variants={container(0.75)}
                initial="hidden"
                animate="visiable"className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl lg:text-4xl text-transparent lg:ml-5">Where and how I come along</motion.span>

                <motion.p 
                variants={container(1)}
                initial="hidden"
                animate="visiable"
                className="indent-10 font-mono text-gray-200 my-6 max-w-xl text-xl px-4 py-5 font-light tracking-tighter">Your mom text</motion.p>

                <motion.p 
                variants={container(1.25)}
                initial="hidden"
                animate="visiable"
                
                className="indent-10 font-mono text-gray-200 max-w-xl text-xl px-4 font-light tracking-tighter">
                </motion.p>
            </div>
        </div>
        {/* <div className='w-full lg:w-1/2 mx-auto flex justify-center items-center mt-10'>
              <motion.img 
              variants={container(1.5)}
              initial="hidden"
              animate="visiable"
              whileHover={{scale: 1.05}}
              whileTap={{scale: 1.03}}
              className="max-h-[40rem]" src={} alt="my picture"/>
        </div> */}
      </div>
    </div>
  )
}

export default Landing
