import React from 'react';
import Navbar from '../components/common/Navbar.jsx';
import Hero from '../components/Home/Hero.jsx';
import About from '../components/Home/About.jsx';
import Tools from '../components/Home/Tools.jsx';
import Contact from '../components/common/Contact.jsx';

const Home = () => {
    return(
        <>
            <div className='overflow-x-hidden antialiased selection:bg-cyan-300 selection:text-cyan-900'>
                <div className='flixed top-0 -z-10 h-full w-full'></div>
                    <div className="absolute bottom-0 z-[-2] left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
                <div className='container px-8'>
                    <Navbar />
                    <Hero />
                    <About />
                    <Tools />
                    <Contact />
                </div>
            </div>
        </>
    );
}

export default Home;


// dhashuidiadhuias