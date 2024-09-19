import React from 'react'
import {FaLinkedin, FaGithub} from "react-icons/fa"
import {motion} from "framer-motion";
import { Link } from "react-router-dom";

const MotionComponent = ({ as, children, ...props }) => {
  const ChildrenComponent = motion.create(as, {
    forwardMotionProps: true,
  });

  return <ChildrenComponent {...props}>{children}</ChildrenComponent>;
};

const Navbar = () => {
  return (
    <nav className='lg:mb-20 mb-4 flex items-center justify-between py-6'>
        <div className='lg:m-8 m-4 flex items-center justify-center lg:gap-10 gap-3 text-sm lg:text-2xl'>
            <MotionComponent as={Link} to="/" className="hover:bg-neutral-700" whileHover={{ scale: 1.1, transition: { duration: 0.25 } }}>Home</MotionComponent>
            <MotionComponent as={Link} to="/Experience" className="hover:bg-neutral-700" whileHover={{ scale: 1.1, transition: { duration: 0.25 } }}>Experience</MotionComponent>
            <MotionComponent as={Link} to="/Projects" className="hover:bg-neutral-700" whileHover={{ scale: 1.1, transition: { duration: 0.25 } }}>Projects</MotionComponent>
        </div>

        <div className='lg:m-8 m-2 flex items-center justify-center gap-4 text-5xl'>
            <motion.a 
            whileHover={{scale: 1.1}}
            whileTap={{scale: 1.05}}
            href='https://www.linkedin.com/in/stevenchow0812/' target="_blank" rel="noopener noreferrer" alt="LinkedIn" className='hover:bg-blue-500 transition-colors duration-200'>
              <FaLinkedin />
            </motion.a>

            <motion.a 
            whileHover={{scale: 1.1}}
            whileTap={{scale: 1.05}}
            href='https://www.github.com/StevenTB1' target="_blank" rel="noopener noreferrer" alt="Github" className='hover:bg-gray-700 transition-colors duration-200'>
              <FaGithub />
            </motion.a>
        </div>
    </nav>
  )
}

export default Navbar;
