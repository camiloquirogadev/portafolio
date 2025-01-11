import React, { useState } from 'react';
import img from './cq.png';
import './Header.css'; // Importa los estilos

const Header = () => {
  // Estado para el menú hamburguesa
  const [menuOpen, setMenuOpen] = useState(false);

  // Función para alternar el estado del menú
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Función para hacer scroll hacia las secciones
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false); // Cierra el menú automáticamente
    }
  };

  // Función para descargar el CV
  const downloadCV = () => {
    const driveLink = "https://drive.google.com/file/d/1hmTVZKg-I6NezIvREm394djCoxwTyJCH/view?usp=sharing";
    window.open(driveLink, "_blank");
  };

  return (
    <header>
      {/* Logo */}
      <div className="logo" onClick={() => scrollToSection('about')} aria-label="Go to About section">
        <img src={img} alt="Logo CQ" />
      </div>

      {/* Menú hamburguesa */}
      <div
        className={`hamburger ${menuOpen ? 'open' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle navigation"
      >
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Menú de navegación */}
      <ul className={`menu ${menuOpen ? 'active' : ''}`}>
        <li><button onClick={() => scrollToSection('about')}>About</button></li>
        <li><button onClick={() => scrollToSection('services')}>Services</button></li>
        <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
        <li><button onClick={downloadCV}>Resume</button></li>
      </ul>
    </header>
  );
};

export default Header;
