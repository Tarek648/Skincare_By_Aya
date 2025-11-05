import React, { useState } from 'react';
import '../styles/navbar.css'; 

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="brand">Glow Beauty Studio</div>

                <div
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>

                <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#booking" onClick={() => setMenuOpen(false)}>Booking</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
      </div>
    </nav>
  );
}
