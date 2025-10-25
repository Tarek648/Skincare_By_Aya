import '../styles/hero.css'
import heroImage from '../assets/skincare.jpg'

const WHATSAPP_NUMBER = '96178845146'

export default function Hero() {
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    'Hello! I want to book a skincare session at Skincare By Aya.'
  )}`

  return (
    <section className="hero">
      {/* Background Image */}
      <div className="hero-bg-image"></div>

      {/* Moving Wavy Layer */}
      <div className="wavy-bg"></div>

      {/* Hero Text Content */}
      <div className="hero-content">
        <div className="hero-left">
          <h1>Skincare By Aya</h1>
          <p className="hero-main-text">
            Revitalize your skin and let your natural beauty shine. Luxurious skincare sessions designed to relax, renew, and rejuvenate your glow.
          </p>
          <p className="hero-sub-text">
            Discover treatments that bring harmony between your skin and confidence.
          </p>
          <div className="hero-buttons">
            <a href="#services" className="btn primary">
              Explore Treatments
            </a>
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn whatsapp">
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" />
              Book Now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
