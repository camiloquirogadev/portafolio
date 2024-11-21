import React from 'react';
import './about.css'; // Asegúrate de tener este archivo CSS



const About = () => { 
   // Enlaces a tus redes sociales
  const socialLinks = {
    linkedin: "https://www.linkedin.com/in/camilosolquiroga/",
    github: "https://github.com/camilosolquiroga",
    instagram: "https://www.instagram.com/camilosolquiroga",
  };
  return (
    <section id="about" className="about-container">
      <div className="about-content">
        <h1 className="about-title">Hello world 🌎 I'm Camilo Quiroga 👋</h1>
        <p className="about-description">
          A passionate Full Stack developer from Argentina.
        </p>
          {/* Sección de redes sociales */}
          <div className="social-links">
          <div className="social-buttons">
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-button linkedin"
            >
              LinkedIn
            </a>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-button github"
            >
              GitHub
            </a>
          </div>
        </div>
        {/* Sección de habilidades e intereses */}
        <div className="about-skills">
          <h2 className="skills-title">Skills & Interests</h2>
          <div className="skills-items">
            <div className="skill-item">💻 Full Stack Development</div>
            <div className="skill-item">🌐 JavaScript, React, Node.js</div>
            <div className="skill-item">🗺️ GIS Enthusiast</div>
            <div className="skill-item">🚴‍♂️ Cycling and Fitness</div>
            <div className="skill-item">🎮 Video Games</div>
            <div className="skill-item">🎥 Filmography and Photography</div>
          </div>
        </div>
      </div>
      
         
    </section>
  );
};

export default About;
