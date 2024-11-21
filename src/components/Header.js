import React, { useState } from 'react';
import './header.css'; // Importa los estilos
/*import DarkModeToggle from './DarkModeToggle';*/

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
  const downloadCV = () => {
    const driveLink = "https://drive.google.com/file/d/1CD7ftHtmDAP2CdA0OjQ_09hNrCXA8DYk/view?usp=sharing";
    window.open(driveLink, "_blank");
  };

  return (
    <header>
      {/* Logo */}
      <div className="logo" onClick={() => scrollToSection('about')}>
        Quiroga C
      </div>
      
      {/* Menú hamburguesa */}
      <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu} aria-label="Toggle navigation">
        <div></div>
        <div></div>
        <div></div>
      </div>


      {/* Menú de navegación */}
      <ul className={menuOpen ? 'active' : ''}>
        <li><button onClick={() => scrollToSection('about')}>About</button></li>
        <li><button onClick={() => scrollToSection('services')}>Services</button></li>
        <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
        <li><button onClick={downloadCV}>Resume</button></li>
       {/* /* <li>
            <DarkModeToggle /> {/* Botón para cambiar entre modo claro y oscuro  </li>*/}
      
      </ul>
    </header>
  );
};

export default Header;
