import React from "react";
import "./footer.css"; // Asegúrate de tener los estilos CSS en este archivo

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">© 2024 Camilo Quiroga. All rights reserved.</p>
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/camilo-quiroga-dev/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/camiloquirogadev" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
