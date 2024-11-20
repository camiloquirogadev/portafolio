import React, { useState } from 'react';
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
    }
  };

  return (
    <header>
      {/* Logo */}
      <div className="logo" onClick={() => scrollToSection('about')}>
        Portafolio
      </div>

      {/* Menú hamburguesa */}
      <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Menú de navegación */}
      <ul className={menuOpen ? 'active' : ''}>
        <li><button onClick={() => scrollToSection('about')}>About</button></li>
        <li><button onClick={() => scrollToSection('skills')}>Skills</button></li>
        <li><button onClick={() => scrollToSection('projects')}>Projects</button></li>
        <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
      </ul>
    </header>
  );
};

export default Header;
