import React from 'react'
import logo from "../assets/logo.svg";
import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"
import 'animate.css';


const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <img className="mx-10 w-20" src={logo} alt="logo" />
        </div>

        <div className='m-8 flex items-center justify-center gap-8 text-1xl'>
          <a className="" href="../pages/home.jsx"><span>Home</span></a>
          <a className="" href="../pages/home.jsx"><span>Aboue Me</span></a>
          <a className="" href="../pages/home.jsx"><span>Projects</span></a>
        </div>

        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <FaLinkedin />
            <FaGithub />
            <FaInstagram />
        </div>
    </nav>
  )
}



export default Navbar;
