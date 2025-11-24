import React, { useState, useEffect } from 'react'
import './Navigation.css'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo" onClick={() => scrollToSection('hero')}>
          Edward Smith
        </div>
        <div className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
          <a href="#what-i-do" onClick={(e) => { e.preventDefault(); scrollToSection('what-i-do') }}>What I Do</a>
          <a href="#experience" onClick={(e) => { e.preventDefault(); scrollToSection('experience') }}>Work</a>
          <a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills') }}>Skills</a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact') }}>Contact</a>
        </div>
        <button 
          className={`mobile-menu-toggle ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
}

export default Navigation

