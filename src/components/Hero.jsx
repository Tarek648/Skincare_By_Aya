import '../styles/hero.css'
import heroImage from '../assets/skincare.jpg'

const WHATSAPP_NUMBER = '96178845146'

export default function Hero() {
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    'Hello! I want to book a skincare session at Skincare By Aya.'
  )}`

  return (
    <section className="hero" id='home'>
      <div className="hero-bg-image"></div>

      <div className="wavy-bg"></div>
      <div className="hero-content">
        <div className="hero-left">
          <h1>Skincare By Aya</h1>
          <p className="hero-main-text">
            Discover treatments that bring harmony between your skin and confidence.
          </p>
          <div className="hero-buttons">
            <a href="#services" className="btn primary">
              Explore Treatments
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
