import React from 'react';
import './skills.css';

const Skills = () => {
  const skillsData = [
    { skill: 'JavaScript', level: 90 },
    { skill: 'React', level: 85 },
    { skill: 'HTML5', level: 95 },
    { skill: 'CSS3', level: 90 },
    { skill: 'Node.js', level: 80 },
    { skill: 'Python', level: 70 },
  ];

  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-title">Habilidades</h2>
      <div className="skills-list">
        {skillsData.map((item, index) => (
          <div key={index} className="skill-card">
            <div className="skill-name">{item.skill}</div>
            <div className="skill-bar">
              <div
                className="skill-progress"
                style={{ width: `${item.level}%` }}
              ></div>
            </div>
            <div className="skill-level">{item.level}%</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
