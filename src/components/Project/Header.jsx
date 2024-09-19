import React from 'react'
import {motion} from "framer-motion"

const container = (delay) => ({
  hidden: {x: -100, opacity: 0},
  visiable: {x: 0, opacity: 1, transition: {duration: 0.5, delay: delay}
  }
});

const Header = () => {
  return (
    <header className="mb-16 text-center">
        <motion.h1 
          variants={container(0.5)}
          initial="hidden"
          animate="visiable" 
          className="text-5xl font-bold mb-4 text-white">My Portfolio
        </motion.h1>
        
        <motion.p 
        variants={container(0.75)}
        initial="hidden"
        animate="visiable" 
        className="text-xl text-gray-300">
        Explore a collection of my recent projects showcasing some of my skills and technologies.
        </motion.p>
    </header>
  )
}

export default Header
