import React from 'react';
import './about.css'; // Asegúrate de tener este archivo CSS

const About = () => {
  return (
    <section id="about" className="about-container">
      <div className="about-content">
        <h1 className="about-title">Hello world 🌎</h1>
        <p className="about-text" id= "p">I'm Camilo Quiroga 👋</p>
        <p className="about-description" id="p">
          A passionate Full Stack developer from Argentina.
        </p>
      </div>
    </section>
  );
};

export default About;
