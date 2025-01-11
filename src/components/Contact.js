import React from "react";
import "./Contact.css";

function Contact() {
  // Enlace a Calendly y WhatsApp
  const calendlyLink = "https://calendly.com/camilosolquiroga"; // Tu enlace de Calendly
  const phoneNumber = "5491122690995"; // Reemplaza con tu número en formato internacional
  const message = "Hola, me interesa agendar una reunión contigo."; // Mensaje personalizado
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div id="contact" className="contact-container">
      <div className="contact-card">
        <h2 className="contact-title">Contact me</h2>
        <p className="contact-description">
        If you would like to get in touch or schedule a meeting, please use the links below:
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
            Schedule Meeting
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
