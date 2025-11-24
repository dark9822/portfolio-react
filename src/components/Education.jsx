import React from 'react'
import './Education.css'

const Education = () => {
  return (
    <section id="education" className="education">
      <div className="section-header">
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">Academic background</p>
      </div>
      <div className="education-content">
        <div className="education-card">
          <div className="education-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
              <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
            </svg>
          </div>
          <div className="education-details">
            <h3 className="school-name">LSU Shreveport</h3>
            <h4 className="degree">Finance, General</h4>
            <p className="education-period">2010 - 2014</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education

