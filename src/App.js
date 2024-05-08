import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import PortFolio from './components/Portfolio'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Skills from './components/Skills'

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <PortFolio />
      <Contact />
      <Footer />
    </>
  )
}
