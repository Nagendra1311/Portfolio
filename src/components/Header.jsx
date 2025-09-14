import React, { useState, useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'
import './Header.css'

const Header = ({ themeToggle, isDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  // const [isDarkMode, setIsDarkMode] = useState(false)

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  const toggleTheme = () => {
    // setIsDarkMode(!isDarkMode)
    themeToggle(!isDarkMode)
  }

  // Load theme from localStorage
  // useEffect(() => {
  //   const savedTheme = localStorage.getItem('darkMode') === 'true'
  //   setIsDarkMode(savedTheme)
  // }, [])

  return (
    <header
      className={`fixed w-full top-0 left-0 z-50 transition-all ${isScrolled
        ? isDarkMode
          ? 'bg-gray-900 shadow-lg'
          : 'bg-white shadow-md'
        : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-2xl font-bold text-blue-600">
            <a href="#home">Portfolio</a>
          </div>

          {/* Menu */}
          <ul
            className={`fixed md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent"  transition-transform transform ${isMenuOpen ? 'translate-y-0' : '-translate-y-full md:translate-y-0'
              } md:flex md:items-center md:gap-6 ${isMenuOpen ? "" : "responsive"}`}
            style={{ backgroundColor: isDarkMode ? '#111826' : 'white' }}
          >
            {['home', 'about', 'experience', 'skills', 'projects', 'education', 'contact'].map((section) => (
              <li key={section} >
                <a
                  href={`#${section}`}
                  onClick={closeMenu}
                  className={`block px-4 py-2 md:p-0 text-gray-800 md:text-gray-700 hover:text-blue-600 transition-colors ${isDarkMode ? 'text-gray-200 hover:text-yellow-400' : ''
                    }`}
                  style={{ color: isDarkMode ? 'white' : '' }}

                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>

          {/* Actions: Theme toggle + Hamburger */}
          <div className="flex items-center gap-3">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${isDarkMode
                ? 'bg-gray-700 text-yellow-400 hover:bg-gray-600'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Hamburger */}
            <button
              onClick={toggleMenu}
              className="flex flex-col justify-between w-6 h-5 md:hidden focus:outline-none"
            >
              <span
                className={`block h-0.5 w-full bg-gray-800 dark:bg-gray-200 transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
              ></span>
              <span
                className={`block h-0.5 w-full bg-gray-800 dark:bg-gray-200 transition-opacity ${isMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
              ></span>
              <span
                className={`block h-0.5 w-full bg-gray-800 dark:bg-gray-200 transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}
              ></span>
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
