import React, { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Experience from './components/Experience'
import Education from './components/Education'

function App() {

  const [isDarkMode, setIsDarkMode] = useState(false) // new state for theme

  const themeToggle = (data) => {
    setIsDarkMode(data)
  }

  return (
    <div className="App">
      <Header themeToggle={themeToggle} />
      <main>
        <Hero isDarkMode={isDarkMode}/>
        <About isDarkMode={isDarkMode}/>
        <Experience isDarkMode={isDarkMode}/>
        <Skills isDarkMode={isDarkMode}/>
        <Projects isDarkMode={isDarkMode}/>
        <Education isDarkMode={isDarkMode}/>
        <Contact isDarkMode={isDarkMode}/>
      </main>
      {/* <Footer /> */}
    </div>
  )
}

export default App
