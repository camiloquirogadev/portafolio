import React from "react";
import "./contact.css";

function Contact() {
  // Enlace a Calendly para agendar una cita
  const calendlyLink = "https://calendly.com/camilosolquiroga"; // Reemplaza "tu-usuario" con tu nombre de usuario de Calendly

  return (
    <div className="contact-container">
      <div className="contact-card">
        <h2>Contáctame</h2>
        <p>
          Si deseas ponerte en contacto o agendar una reunión, haz clic en el
          enlace a continuación para ver mi disponibilidad y programar una cita:
        </p>
        <a href={calendlyLink} className="contact-email" target="_blank" rel="noopener noreferrer">
          Agendar reunión
        </a>
      </div>
    </div>
  );
}

export default Contact;
