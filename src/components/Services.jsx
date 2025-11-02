import React from "react";
import "../styles/services.css";

const services = [
  {
    title: "Facials",
    desc: "Deep cleansing and nourishing care to refresh, hydrate, and restore skin balance.",
    icon: "💧", // water drop
    color: "#f08eb4",
  },
  {
    title: "Glow Skin Treatment",
    desc: "Brightening therapy that boosts hydration, evens tone, and enhances natural radiance.",
    icon: "✨", // sparkle
    color: "#b7c8f8",
  },
  {
    title: "Microneedling",
    desc: "Collagen-boosting treatment that reduces fine lines, scars, and uneven skin texture.",
    icon: "🩹", // minimal needle/patch
    color: "#f8d47b",
  },
  {
    title: "Peels",
    desc: "Exfoliating solutions that unclog pores and renew the skin’s surface.",
    icon: "🍃", // leaf
    color: "#f08eb4",
  },
  {
    title: "Pure Algae Peel",
    desc: "Natural peel rich in minerals that detoxifies and revitalizes without harsh chemicals.",
    icon: "🌿", // algae/plant
    color: "#b7c8f8",
  },
];

const ServicesSection = () => {
  return (
    <section className="services">
      <div className="services-header">
        <h2>Our Skincare Services</h2>
        <p>Glow, Heal & Transform — expert care for every skin journey</p>
      </div>

      <div className="scroll-wrapper">
        <div className="scroll-track">
          {[...services, ...services].map((service, index) => (
            <div className="service-card" key={index}>
              <div
                className="service-icon"
                style={{ backgroundColor: service.color }}
              >
                <span className="icon-text">{service.icon}</span>
                <span className="icon-shine"></span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
