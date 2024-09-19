// import Image from "next/image"
import React from 'react'

const projects = [
  {
    title: "Project 1",
    description: "This is a description of Project 1. It was an exciting venture that showcased various technologies and problem-solving skills.",
    image: "../../assets/iamges/about.png?height=300&width=400",
    skills: ["React", "Node.js", "MongoDB"]
  },
  {
    title: "Project 2",
    description: "Project 2 was a challenging endeavor that required innovative thinking and cutting-edge technologies.",
    image: "../../assets/iamges/about.png?height=300&width=400",
    skills: ["Vue.js", "Express", "PostgreSQL"]
  },
  {
    title: "Project 3",
    description: "For Project 3, we developed a state-of-the-art solution that revolutionized the industry standard.",
    image: "../../assets/iamges/about.png?height=300&width=400",
    skills: ["Angular", "Django", "MySQL"]
  }
]

export default function ProjectDisplay() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div key={index} className="flex flex-col md:flex-row bg-gray-900 rounded-lg shadow-xl overflow-hidden">
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
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-white">Skills Used:</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-gray-800 text-gray-100 px-3 py-1 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}