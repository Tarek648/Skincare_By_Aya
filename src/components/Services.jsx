import React, { useState } from 'react'

const WHATSAPP_NUMBER = '96178845146' // <-- replace with your number

const SERVICES = [
  {
    id: 1,
    name: 'Deep Cleansing Facial',
    price: 35,
    image: 'https://images.unsplash.com/photo-1544213456-b5e9f3f2c9c1?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=1e3b0bf6f4d2a3b0fdfc1f90e3f5a2b1',
    colors: ['Natural', 'Rose']
  },
  {
    id: 2,
    name: 'Hydrating Glow',
    price: 45,
    image: 'https://images.unsplash.com/photo-1588776814546-1f5b8f7f6ecb?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=9a9c8d8a3f4d7f6e0e2b8a6f0f7d9c3d',
    colors: ['Pearl', 'Pink']
  },
  {
    id: 3,
    name: 'Anti-Aging Treatment',
    price: 60,
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=ad5e4f9b8c3c5aaba1d2d6a2b8d5f6b7',
    colors: ['Gold', 'Beige']
  }
]

export default function Services() {

  const openWhatsAppOrder = ({ serviceName, color, qty, price }) => {
    const text = `Hello! I'd like to book: ${serviceName}%0AColor: ${color}%0AQuantity: ${qty}%0ATotal: $${(price * qty).toFixed(2)}%0APlease share available slots.`
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`
    window.open(url, '_blank')
  }

  return (
    <section id="services" className="services-section">
      <div className="container">
        <h2 className="section-title">Our Skincare Services</h2>
        <div className="services-grid">
          {SERVICES.map(s => (
            <ServiceCard key={s.id} service={s} onOrder={openWhatsAppOrder} />
          ))}
        </div>
      </div>

      <div id="booking" style={{ marginTop: '40px' }} className="booking-anchor" />
    </section>
  )
}

function ServiceCard({ service, onOrder }) {
  const [color, setColor] = useState(service.colors[0])
  const [qty, setQty] = useState(1)

  return (
    <div className="card">
      <img className="card-img" src={service.image} alt={service.name} />
      <div className="card-body">
        <h3 className="card-title">{service.name}</h3>
        <p className="card-price">${service.price.toFixed(2)}</p>

        <div className="controls">
          <div className="colors">
            {service.colors.map(c => (
              <button
                key={c}
                className={`swatch ${c === color ? 'active' : ''}`}
                onClick={() => setColor(c)}
                type="button"
              >
                {c}
              </button>
            ))}
          </div>

          <div className="qty">
            <button onClick={() => setQty(q => Math.max(1, q - 1))} type="button">−</button>
            <span>{qty}</span>
            <button onClick={() => setQty(q => q + 1)} type="button">+</button>
          </div>
        </div>

        <div className="card-actions">
          <button
            className="btn primary full"
            onClick={() => onOrder({ serviceName: service.name, color, qty, price: service.price })}
          >
            Order Now
          </button>
        </div>
      </div>
    </div>
  )
}
