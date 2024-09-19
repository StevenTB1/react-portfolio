import React from 'react'
import { RiReactjsLine } from 'react-icons/ri';
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import {motion} from "framer-motion";

const iconVariants = (duration) => ({
    initial: {y: -10},
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
});

const Tools = () => {
  return (
    <div className='border-b-2 border-neutral-500 my-20'>
      <h1 className='my-14 text-center text-4xl bg-gradient-to-r from-blue-300 via-indigo-400 to-purple-200 bg-clip-text text-transparent'>Techonologies</h1>
      <motion.div 
       whileInView={{opacity: 1, x: 0}}
       initial={{opacity: 0, x: -100}}
       transition={{duration: 1.5}}
       className='flex flex-wrap items-center justify-center gap-4 pb-20'>

        <motion.div
        variants={iconVariants(2.5)}
        initial= "initial"
        animate="animate" 
        whilehover={{scale: 1.1}}
        whileTap={{scale: 1.05}}
        className='rounded-2xl border-4 border-neutral-800 p-4'>
            <RiReactjsLine className='text-7xl text-cyan-400'/>
        </motion.div>

        <motion.div
        variants={iconVariants(3)}
        initial= "initial"
        animate="animate"
        whilehover={{scale: 1.1}}
        whileTap={{scale: 1.05}}
        className='rounded-2xl border-4 border-neutral-800 p-4'>
            <SiMongodb className='text-7xl text-green-600'/>
        </motion.div>

        <motion.div
        variants={iconVariants(4)}
        initial= "initial"
        animate="animate"
        whilehover={{scale: 1.1}}
        whileTap={{scale: 1.05}}
        className='rounded-2xl border-4 border-neutral-800 p-4'>
            <FaNodeJs className='text-7xl text-green-500'/>
        </motion.div>

        <motion.div
        variants={iconVariants(6)}
        initial= "initial"
        animate="animate"
        whilehover={{scale: 1.1}}
        whileTap={{scale: 1.05}}
        className='rounded-2xl border-4 border-neutral-800 p-4'>
            <IoLogoJavascript className='text-7xl text-yellow-300'/>
        </motion.div>

        <motion.div
        variants={iconVariants(5)}
        initial= "initial"
        animate="animate"
        whilehover={{scale: 1.1}}
        whileTap={{scale: 1.05}}
        className='rounded-2xl border-4 border-neutral-800 p-4'>
            <FaHtml5 className='text-7xl text-yellow-600'/>
        </motion.div>
        
        <motion.div
        variants={iconVariants(4.5)}
        initial= "initial"
        animate="animate"
        whilehover={{scale: 1.1}}
        whileTap={{scale: 1.05}}
        className='rounded-2xl border-4 border-neutral-800 p-4'>
            <IoLogoCss3 className='text-7xl text-blue-500'/>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Tools;
