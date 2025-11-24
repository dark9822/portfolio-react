import React from 'react'
import './Experience.css'
import predictionstrikeImg from '../image/predictionstrike_1.png'
import doorvestImg from '../image/doorvest_1.png'
import skillzImg from '../image/skillz_1.png'
import readyfireImg from '../image/readyfire_1.png'

const Experience = () => {
  const experiences = [
    {
      company: 'PredictionStrike',
      role: 'Software Engineer',
      period: '07/2023 – Present',
      location: 'San Francisco, CA',
      description: 'Develop and maintain full-stack web and mobile applications for live sports investment platforms.',
      highlights: [
        'Implement React.js/React Native frontends and Node.js backend services with real-time data integration',
        'Collaborate with product and QA teams to optimize feature performance and deployment pipelines'
      ],
      images: [predictionstrikeImg]
    },
    {
      company: 'Doorvest',
      role: 'Senior Software Engineer',
      period: '08/2021 – 10/2022',
      location: 'San Francisco, CA',
      description: 'Led development of scalable web and mobile solutions for real estate investment platforms.',
      highlights: [
        'Designed front-end components in React.js and React Native, and backend APIs in Node.js',
        'Mentored junior engineers and performed code reviews to maintain high-quality standards'
      ],
      images: [doorvestImg]
    },
    {
      company: 'Skillz Inc.',
      role: 'Software Engineer',
      period: '08/2019 – 08/2021',
      location: 'TX	Chico',
      description: 'Built features for competitive mobile gaming platforms using React Native and Firebase.',
      highlights: [
        'Integrated real-time leaderboards, gameplay metrics, and push notifications for high engagement'
      ],
      images: [skillzImg]
    },
    {
      company: 'Readyfire',
      role: 'Mobile App Engineer',
      period: '12/2017 – 07/2019',
      location: 'TX	Chico',
      description: 'Developed live trivia app Halftime Live and sports contests FiveAlive using React Native and Firebase.',
      highlights: [
        'Built second-screen experiences for live sports, supporting NFL, MLB, NBA, and NHL audiences'
      ],
      images: [readyfireImg]
    },
    {
      company: 'Welsh Oil',
      role: 'Software Developer',
      period: '07/2016 – 08/2017',
      location: 'Shreveport, LA',
      description: 'Built web scrapers to extract well data in North Louisiana and exported results using ExcelJS.',
      highlights: [
        'Automated data parsing and submission to state repositories using Node.js, PostgreSQL, MongoDB, and AWS EC2'
      ]
    },
    {
      company: 'Pel-State',
      role: 'Software Developer',
      period: '10/2014 – 02/2015',
      location: 'Shreveport, LA',
      description: 'Developed career portal and ticketing/billing systems using WordPress, MySQL, mPDF, and Canvas API.',
      highlights: [
        'Created brochure websites and managed digital submission workflows for government compliance'
      ]
    }
  ]

  return (
    <section id="experience" className="experience">
      <div className="section-header">
        <h2 className="section-title">My Recent Work</h2>
        <p className="section-subtitle">Here are a few past projects I've worked on.</p>
      </div>
      <div className="work-grid">
        {experiences.filter(exp => exp.images && exp.images.length > 0).map((exp, index) => (
          <div key={index} className="work-card">
            {exp.images && exp.images.length > 0 && (
              <div className="work-image-container">
                <img 
                  src={exp.images[0]} 
                  alt={`${exp.company} project`}
                  className="work-image"
                  loading="lazy"
                />
              </div>
            )}
            <div className="work-content">
              <h3 className="work-title">{exp.description}</h3>
              <div className="work-meta">
                <span className="work-company">{exp.company}</span>
                <span className="work-role">{exp.role}</span>
                <span className="work-period">{exp.period}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience

