import React from 'react'
import {FaLinkedin, FaGithub} from "react-icons/fa"
import 'animate.css';


const Navbar = () => {
  return (
    <nav className='container lg:mb-20 mb-4 flex items-center justify-between py-6'>
        <div className='lg:m-8 m-4 flex items-center justify-center lg:gap-15 gap-4 text-xs lg:text-2xl'>
          <a className="home-page" href="../pages/home.jsx">Home</a>
          <a className="aboutme-page" href="../pages/home.jsx">Aboue Me</a>
          <a className="project-page" href="../pages/home.jsx">Projects</a>
        </div>

        <div className='lg:m-8 m-4 flex items-center justify-center gap-4 text-5xl'>
            <a href='https://www.linkedin.com/in/stevenchow0812/' target="_blank" rel="noopener noreferrer" alt="LinkedIn">
              <FaLinkedin />
            </a>

            <a href='https://www.github.com/StevenTB1' target="_blank" rel="noopener noreferrer" alt="LinkedIn">
              <FaGithub />
            </a>
        </div>
    </nav>
  )
}



export default Navbar;
