import React from 'react'
import './Skills.css'

const Skills = () => {
  const topSkills = [
    { name: 'React.js', level: 95, icon: '⚛️' },
    { name: 'AngularJS', level: 85, icon: '🅰️' },
    { name: 'React Native', level: 90, icon: '📱' }
  ]

  const skillCategories = [
    {
      title: 'Languages & Tools',
      skills: ['JavaScript', 'TypeScript', 'Python', 'SQL', 'Bash', 'Git', 'Node.js']
    },
    {
      title: 'Frontend & Mobile',
      skills: ['React.js', 'React Native', 'AngularJS', 'HTML', 'CSS', 'Figma']
    },
    {
      title: 'Backend & Databases',
      skills: ['Node.js', 'PostgreSQL', 'MongoDB', 'Firebase', 'MySQL']
    },
    {
      title: 'Cloud & Deployment',
      skills: ['AWS EC2', 'Docker']
    },
    {
      title: 'Other Tools',
      skills: ['WordPress', 'mPDF', 'Canvas API']
    }
  ]

  return (
    <section id="skills" className="skills">
      <div className="section-header">
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle">Technologies I work with</p>
      </div>
      
      <div className="skills-content">
        <div className="top-skills">
          <h3 className="skills-category-title">Top Skills</h3>
          <div className="skill-bars">
            {topSkills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-header">
                  <span className="skill-icon">{skill.icon}</span>
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-categories">
          {skillCategories.map((category, catIndex) => (
            <div key={catIndex} className="skill-category">
              <h3 className="skills-category-title">{category.title}</h3>
              <div className="skills-grid">
                {category.skills.map((skill, index) => (
                  <div key={index} className="skill-tag">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

