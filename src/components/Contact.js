import React from "react";
import "./contact.css";

function Contact() {
  // Enlace a Calendly y WhatsApp
  const calendlyLink = "https://calendly.com/camilosolquiroga"; // Tu enlace de Calendly
  const phoneNumber = "5491122690995"; // Reemplaza con tu número en formato internacional
  const message = "Hola, me interesa agendar una reunión contigo."; // Mensaje personalizado
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="contact-container">
      <div className="contact-card">
        <h2 className="contact-title">Contáctame</h2>
        <p className="contact-description">
          Si deseas ponerte en contacto o agendar una reunión, utiliza los enlaces a continuación:
        </p>
        <div className="contact-buttons">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-button whatsapp"
          >
             WhatsApp
          </a>
          <br/>
          <a
            href={calendlyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-button calendly"
          >
            Agendar reunión
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
