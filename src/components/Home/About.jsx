import React from 'react'
import AboutPicture from '../../assets/images/about.png'
import {motion} from "framer-motion"

const container = (delay) => ({
  hidden: {x: -100, opacity: 0},
  visiable: {x: 0, opacity: 1, transition: {duration: 0.5, delay: delay}
  }
});

const About = () => {
  return (
    <div className='border-b-2 border-neutral-500'>
      <div className='m-10 grid-cols-12 flex justify-center items-center'>
        <motion.h1 
        variants={container(0.5)}
        initial="hidden"
        animate="visiable"
        className='bg-gradient-to-r from-blue-300 via-indigo-400 to-purple-200 bg-clip-text text-transparent text-4xl font-thin tracking-tight'>About me</motion.h1>
      </div>

      <div className='flex flex-wrap mb-10'>
        <div className='w-full lg:w-1/2 justify-center items-center'>
          <p className='mt-4 indent-10 mx-auto font-mono text-xl'>
            I am dedicated and interested in various innovative fields. For instance, I have a strong passion towards Machine Learning and AI. Although at the moment I do not develop enough skills to practice with it, I am eager to build cool projects around it to test and validate my skills!
          </p>
          <p className='indent-10 mt-4 mx-auto font-mono text-xl'>
            At the same time, I want to practice more about web development and perhaps game development. With varies cool projects planned ahead and potential co-op opportunities, I am eager to contribute to the industry and harness my expertise to the next level!
          </p>

          <div className='flex justify-center items-center'>
            <a className="hover:bg-neutral-500 transition-colors duration-200 text-2xl lg:mt-10 bg-neutral-800 border-2 border-neutral-500 p-4 rounded-lg" href="">Learn More</a>
          </div>
        </div>

        <div className='w-full lg:w-1/2 mt-4 flex justify-center items-center'>
          <img className="max-h-[30rem]" src={AboutPicture} alt="First Year Assignment Photo"/>
        </div>
      </div>
    </div>
  )
}

export default About;
