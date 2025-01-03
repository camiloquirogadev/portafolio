import React from 'react';
import './modernAbout.css';

const ModernAbout = () => {
  const socialLinks = {
    linkedin: "https://www.linkedin.com/in/camilo-quiroga-dev",
    github: "https://github.com/camiloquirogadev",
  };

  return (
    <section id="about" className="modern-about">
      <div className="content">
        {/* Columna izquierda: Introducción */}
        <div className="intro">
          <h1 className="title">Hi, I'm <span className="highlight">Camilo Quiroga</span> </h1>
          <p className="description">
            A creative <strong>Full Stack Developer</strong> who loves coding, design, and problem-solving.
          </p>
          <div className="social-links">
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="social linkedin">
              LinkedIn
            </a>
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="social github">
              GitHub
            </a>
          </div>
        </div>

        {/* Columna derecha: Skills 
        <div className="skills">
          <div className="skills-grid">
            <div className="skill">💻 Web Development</div>
            <div className="skill">🌐 JavaScript & React</div>
            <div className="skill">🗺️ GIS & Spatial Analysis</div>
            <div className="skill">🎨 UI/UX Enthusiast</div>
            <div className="skill">🚴‍♂️ Fitness & Cycling</div>
            <div className="skill">🎮 Gaming</div>
          </div>
        </div>*/}
      </div>
    </section>
  );
};

export default ModernAbout;
