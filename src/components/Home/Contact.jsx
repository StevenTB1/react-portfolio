import React from 'react'
import { Linkedin, Mail } from 'lucide-react'

const Contact = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <nav className="mb-4 sm:mb-0">
            <ul className="flex space-x-4">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/projects" className="hover:text-white transition-colors">Projects</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
            </ul>
          </nav>
          <div className="flex space-x-4">
            <a href="https://github.com/StevenTB1" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://linkedin.com/in/stevenchow0812" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <span className="sr-only">LinkedIn</span>
              <Linkedin size={20} />
            </a>
            <a href="mailto:s9chow@uwaterloo.ca" className="hover:text-white transition-colors">
              <span className="sr-only">Email</span>
              <Mail size={20} />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>© {new Date().getFullYear()} Steven Chow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Contact;
