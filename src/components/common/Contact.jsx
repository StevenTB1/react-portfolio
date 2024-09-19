import React from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'

const Contact = () => {
  return (
    <footer className="text-gray-300">
      <div className="max-w-3xl mx-auto px-4 py-6">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://github.com/StevenTB1" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <span className="sr-only">GitHub</span>
            <Github size={24} />
          </a>
          <a href="https://linkedin.com/in/stevenchow0812" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <span className="sr-only">LinkedIn</span>
            <Linkedin size={24} />
          </a>
          <a href="mailto:s9chow@uwaterloo.ca" className="hover:text-white transition-colors">
            <span className="sr-only">Email</span>
            <Mail size={24} />
          </a>
        </div>
        <div className="text-center text-sm">
          <p>© {new Date().getFullYear()} Steven Chow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
export default Contact;
