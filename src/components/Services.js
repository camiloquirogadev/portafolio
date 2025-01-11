import React from 'react';
import './Services.css'; // Asegúrate de tener este archivo CSS

const Services = () => {
  return (
    <section id="services" className="services-container">
      <div className="services-content">
        <h2 className="services-title">What I Do</h2>
        <div className="services-list">
          <div className="service-item">
            <i className="fas fa-code service-icon"></i>
            <h3 className="service-title">Full Stack Development</h3>
            <p className="service-description">
              I build dynamic and responsive web applications using modern technologies like React, Node.js, and databases.
            </p>
          </div>
          <div className="service-item">
            <i className="fas fa-laptop-code service-icon"></i>
            <h3 className="service-title">Custom Web & App Solutions</h3>
            <p className="service-description">
            I craft visually appealing, user-centric designs for websites and applications, ensuring intuitive navigation and seamless user experiences across devices.
            </p>
          </div>
          <div className="service-item">
            <i className="fas fa-cogs service-icon"></i>
            <h3 className="service-title">Notebook-PC Repair & Data Backup</h3>
            <p className="service-description">
            I provide comprehensive computer repair services, including system formatting and data backup, ensuring your device runs smoothly and your important files are safe.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
