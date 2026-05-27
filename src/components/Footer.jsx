import React from 'react'

const Footer = ({ isDarkMode }) => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={`transition-colors duration-300 ${isDarkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-800"}`}>
      <div className="max-w-6xl px-4 mx-auto">
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 py-8 mb-4`}>
          
          <div className="footer-section">
            <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? "text-blue-400" : "text-blue-600"}`}>
              Portfolio
            </h3>
            <p className={isDarkMode ? "text-gray-300" : "text-gray-600"}>
              Creating beautiful, functional, and user-friendly web experiences 
              with modern technologies and best practices.
            </p>
          </div>
          
          <div className="footer-section">
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className={`transition-colors ${isDarkMode ? "text-gray-300 hover:text-blue-400" : "text-gray-600 hover:text-blue-600"}`}>Home</a></li>
              <li><a href="#about" className={`transition-colors ${isDarkMode ? "text-gray-300 hover:text-blue-400" : "text-gray-600 hover:text-blue-600"}`}>About</a></li>
              <li><a href="#skills" className={`transition-colors ${isDarkMode ? "text-gray-300 hover:text-blue-400" : "text-gray-600 hover:text-blue-600"}`}>Skills</a></li>
              <li><a href="#projects" className={`transition-colors ${isDarkMode ? "text-gray-300 hover:text-blue-400" : "text-gray-600 hover:text-blue-600"}`}>Projects</a></li>
              <li><a href="#contact" className={`transition-colors ${isDarkMode ? "text-gray-300 hover:text-blue-400" : "text-gray-600 hover:text-blue-600"}`}>Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="font-semibold mb-3">Connect</h4>
            <div className="space-y-2">
              <a href="#" className={`block transition-colors ${isDarkMode ? "text-gray-300 hover:text-blue-400" : "text-gray-600 hover:text-blue-600"}`}>LinkedIn</a>
              <a href="#" className={`block transition-colors ${isDarkMode ? "text-gray-300 hover:text-blue-400" : "text-gray-600 hover:text-blue-600"}`}>GitHub</a>
              <a href="#" className={`block transition-colors ${isDarkMode ? "text-gray-300 hover:text-blue-400" : "text-gray-600 hover:text-blue-600"}`}>Twitter</a>
              <a href="#" className={`block transition-colors ${isDarkMode ? "text-gray-300 hover:text-blue-400" : "text-gray-600 hover:text-blue-600"}`}>Email</a>
            </div>
          </div>
        </div>
        
        <div className={`border-t ${isDarkMode ? "border-gray-700" : "border-gray-300"} pt-4 flex flex-col md:flex-row justify-between items-center gap-2 text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
          <p>&copy; {currentYear} Nagendra Gupta. All rights reserved.</p>
          <p>Built with React and ❤️</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
