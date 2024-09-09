import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import about from '../components/about';
import { motion } from "framer-motion";

const Home = () => {
    return(
        <>
            <Navbar />
            <Hero />
        </>
    );
}

export default Home;