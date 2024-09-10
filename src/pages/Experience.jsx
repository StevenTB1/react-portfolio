import React from 'react';
import Navbar from '../components/Home/Navbar.jsx';
import { motion } from "framer-motion";

const Experience = () => {
    return(
        <div className='overflow-x-hidden antialiased selection:bg-cyan-300 selection:text-cyan-900'>
            <div className='flixed top-0 -z-10 h-full w-full'></div>
                <div className="absolute bottom-0 z-[-2] left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
            <div className='container px-8'>
                <Navbar />            
            </div>
        </div>
    );
}

export default Experience;