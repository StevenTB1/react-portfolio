import SaveSquad from '../../assets/images/savesquad.png';
import Portfolio from '../../assets/images/website.png';
import BlueK from '../../assets/images/bluek.jpg';
import {Link} from 'react-router-dom'
import React from 'react'
import { ExternalLink } from 'lucide-react';
import {motion} from "framer-motion";

const projects = [
  {
    title: "SaveSquad: Modern Solution for achieving your money saving goals",
    description: "Developed at Hack the North 2024 under 32 hours in a team of four. Full-stack web app that can tracks user's money saving goals and update them. With friendlist system to compare and contrast the saving amount, and achievements and points system to encourage acheiving goals faster.",
    link: "https://github.com/StevenTB1/HTN2024",
    image: SaveSquad,
    skills: ["Next.js", "React", "Flask", "MongoDB", "MongoDB Atlas"]
  },
  {
    title: "My Personal Website",
    description: "The current site you are on! As the first front-end project that I've built, I had corporated some popular framworks and libraries like React.js and Tailwind CSS for the overall design. Deployed using Amazon hosting services Lightrail and routing with Route 53.",
    link: "https://github.com/StevenTB1/react-portfolio",
    image: Portfolio,
    skills: ["React.js", "Tailwind CSS", "Framer Motion", "Vite"]
  },
  {
    title: "BlueK: Memory Game Solving Robot",
    description: "First year mechatronics engineering project developed in MTE 100. Using robotC (C++) to implement its game solving logit and Solidworks to draft its mechanical design. With modified and refined testing procedures of the robot to troubleshoot and develop, the robot can solve the memory card flipping game on its own!",
    link: "https://www.youtube.com/watch?v=CVM30NMXGFQ",
    image: BlueK,
    skills: ["AutoCAD", "Solidworks", "RobotC (C++)"]
  }
]

const container = (delay) => ({
  hidden: {x: -100, opacity: 0},
  visiable: {x: 0, opacity: 1, transition: {duration: 0.5, delay: delay}
  }
});


const ProjectDisplay = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12">
      <motion.div 
        variants={container(1)}
        initial="hidden"
        animate="visiable"
        className="space-y-16">
          {projects.map((project, index) => (
            <div key={index} className="flex flex-col md:flex-row bg-gray-800 rounded-lg shadow-xl overflow-hidden">
              <div className="md:w-1/2">
                <img
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8 flex flex-col justify-between">
                <div>
                  <h2 className="text-3xl font-semibold mb-4 text-white">{project.title}</h2>
                  <p className="text-gray-300 mb-6 text-lg">{project.description}</p>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-white">Skills Used:</h3>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="bg-gray-700 text-gray-100 px-3 py-1 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div>
                  <Link
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                    to={project.link}>
                    View Project Link <ExternalLink className="ml-2 h-4 w-4"/>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default ProjectDisplay;