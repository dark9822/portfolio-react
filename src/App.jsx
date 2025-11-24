import React from 'react'
import Hero from './components/Hero'
import WhatIDo from './components/WhatIDo'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'
import Navigation from './components/Navigation'
import './App.css'

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <WhatIDo />
      <Experience />
      <Skills />
      <Education />
      <Contact />
    </div>
  )
}

export default App

