import React, { useState, useEffect } from 'react';
import './DarkModeToggle.css'; // Para los estilos del botón

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Cargar el tema desde el localStorage al cargar el componente
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'true') {
      setIsDarkMode(true);
      document.body.classList.add('dark-mode');
    } else {
      setIsDarkMode(false);
      document.body.classList.remove('dark-mode');
    }
  }, []);

  // Cambiar el modo
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      localStorage.setItem('darkMode', 'true');
      document.body.classList.add('dark-mode');
    } else {
      localStorage.setItem('darkMode', 'false');
      document.body.classList.remove('dark-mode');
    }
  };

  return (
    <button className="dark-mode-toggle" onClick={toggleDarkMode}>
      {isDarkMode ? '🌙' : '🌞'}
    </button>
  );
};

export default DarkModeToggle;
