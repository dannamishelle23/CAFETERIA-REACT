import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <a href="#" className="footer-link">Políticas de Privacidad</a> |
          <a href="#" className="footer-link">Términos de Uso</a>
        </div>
        <div className="footer-section">
          <p>© 2024 HELD Coffee Shop. Todos los derechos reservados.</p>
        </div>
        <div className="footer-section social-icons">
          <a href="https://www.facebook.com/DannaMishelle" target="_blank">
            <img src="/images/facebook.png" alt="Facebook" className="social-icon" />
          </a>
          <a href="https://wa.me/983203628" target="_blank">
            <img src="/images/whatsapp.png" alt="WhatsApp" className="social-icon" />
          </a>
          <a href="https://www.instagram.com/danna.mishelle._" target="_blank">
            <img src="/images/instagram.png" alt="Instagram" className="social-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
