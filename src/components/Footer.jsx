import React from 'react'

const WHATSAPP_NUMBER = '96178845146' // <-- replace with your number

export default function Footer() {
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello! I have a question about Glow Beauty Studio services.')}`
  return (
    <footer className="footer" id="contact">
      <div className="container footer-inner">
        <div>
          <strong>Glow Beauty Studio</strong>
          <p>Elegant skincare treatments • Book via WhatsApp</p>
        </div>
        <div className="footer-actions">
          <a className="btn whatsapp" href={waLink} target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" />
            Chat on WhatsApp
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        © {new Date().getFullYear()} Glow Beauty Studio • All rights reserved.
      </div>
    </footer>
  )
}
