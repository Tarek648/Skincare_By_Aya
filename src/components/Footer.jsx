import React from "react";
import "../styles/footer.css";

const WHATSAPP_NUMBER = "96178845146";

export default function Footer() {
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hello! I have a question about Glow Beauty Studio services."
  )}`;

  return (
    <footer className="footer" id="contact">
      <div className="footer-container">

                <div className="footer-col about-col">
          <a href="#" className="footer-logo">
            <img src="/logo.png" alt="Glow Beauty Studio" />
            Glow Beauty Studio
          </a>
          <p>
            Enhancing your natural glow with premium skincare and beauty treatments.
          </p>
          <a
            href="https://www.instagram.com/skincare_by_aya?igsh=MWdjeDF1MHR1OWFnMg=="
            target="_blank"
            rel="noopener noreferrer"
            className="insta-link"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
              alt="Instagram"
            />
            @skincare_by_aya
          </a>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#book">Booking</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

                <div className="footer-col">
          <h3>Contact Us</h3>
          <p>📍 Choueifat, Lebanon</p>
          <p>📞 +961 78 845 146</p>
          <p>🕒 Mon – Sat: 10 AM – 8 PM</p>

          <a
            className="btn whatsapp"
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="WhatsApp"
            />
            Chat on WhatsApp
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Glow Beauty Studio • Crafted with 💖 by Aya
      </div>
    </footer>
  );
}
