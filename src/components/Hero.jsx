import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1 className="hero-main-title">Designer, Frontend Developer & Software Engineer</h1>
        <p className="hero-tagline">I design and code beautifully simple things, and I love what I do.</p>
        <div className="hero-intro">
          <h2 className="hero-intro-title">Hi, I'm Edward. Nice to meet you.</h2>
          <p className="hero-intro-text">
            Since beginning my journey as a software developer 9+ years ago, I've worked remotely for agencies, 
            consulted for startups, and collaborated with talented people to create digital products for both business 
            and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero

