import React from 'react'
import './WhatIDo.css'

const WhatIDo = () => {
  const roles = [
    {
      title: 'Frontend Developer',
      description: 'I like to code things from scratch, and enjoy bringing ideas to life in the browser.',
      things: [
        'React.js',
        'React Native',
        'AngularJS',
        'HTML/CSS',
        'JavaScript/TypeScript'
      ],
      tools: [
        'VS Code',
        'Git',
        'Figma',
        'Tailwind CSS',
        'Vite'
      ],
      icon: '💻'
    },
    {
      title: 'Backend Developer',
      description: 'I build robust server-side solutions and APIs that power modern applications.',
      things: [
        'Node.js',
        'REST APIs',
        'Real-time Systems',
        'Data Pipelines',
        'Microservices'
      ],
      tools: [
        'PostgreSQL',
        'MongoDB',
        'Firebase',
        'AWS EC2',
        'Docker'
      ],
      icon: '⚙️'
    },
    {
      title: 'Full Stack Engineer',
      description: 'I design and develop end-to-end solutions, from concept to deployment.',
      things: [
        'Full-stack Development',
        'System Architecture',
        'Database Design',
        'DevOps',
        'Code Reviews'
      ],
      tools: [
        'React & Node.js',
        'Cloud Platforms',
        'CI/CD',
        'Testing',
        'Agile Methodologies'
      ],
      icon: '🚀'
    }
  ]

  return (
    <section id="what-i-do" className="what-i-do">
      <div className="what-i-do-content">
        {roles.map((role, index) => (
          <div key={index} className="role-card">
            <div className="role-icon">{role.icon}</div>
            <h3 className="role-title">{role.title}</h3>
            <p className="role-description">{role.description}</p>
            <div className="role-details">
              <div className="role-section">
                <h4 className="role-section-title">Things I enjoy building:</h4>
                <ul className="role-list">
                  {role.things.map((thing, i) => (
                    <li key={i}>{thing}</li>
                  ))}
                </ul>
              </div>
              <div className="role-section">
                <h4 className="role-section-title">Dev Tools:</h4>
                <ul className="role-list">
                  {role.tools.map((tool, i) => (
                    <li key={i}>{tool}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WhatIDo

