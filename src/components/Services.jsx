import React, { useState } from "react";
import "../styles/services.css";

const services = {
  Facials: [
    {
      name: "Deep Cleansing Facial",
      price: "$70",
      points: [
        "Removes impurities and dead skin",
        "Hydration and nourishment",
        "Radiant glowing skin"
      ],
    },
    {
      name: "Hydrating Facial",
      price: "$65",
      points: [
        "Deep moisture boost",
        "Calms dry and sensitive skin",
        "Soft and smooth finish"
      ],
    },
    {
      name: "Anti-Aging Facial",
      price: "$90",
      points: [
        "Reduces fine lines",
        "Boosts collagen production",
        "Firm and youthful look"
      ],
    },
  ],
  "Glow Skin Treatment": [
    {
      name: "Vitamin C Glow",
      price: "$80",
      points: ["Brightens complexion", "Antioxidant protection", "Natural radiance"],
    },
    {
      name: "Brightening Facial",
      price: "$85",
      points: ["Evens skin tone", "Removes dullness", "Healthy glow"],
    },
  ],
  "Microneedling & Peels": [
    {
      name: "Microneedling",
      price: "$120",
      points: ["Stimulates collagen", "Reduces scars", "Smooth skin texture"],
    },
    {
      name: "Chemical Peel",
      price: "$110",
      points: ["Exfoliates dead skin", "Brightens skin", "Refines pores"],
    },
  ],
  BundleNew: [
    {
      name: "Facial + Glow Treatment",
      price: "$140",
      points: ["Combination of deep cleansing", "Hydration and glow", "Radiant skin"],
    },
    {
      name: "Peel + Microneedling",
      price: "$200",
      points: ["Advanced treatment", "Skin rejuvenation", "Youthful appearance"],
    },
  ],
};

const WHATSAPP_NUMBER = "96178845146";

export default function TabbedServices() {
  const [activeTab, setActiveTab] = useState("Facials");
  const [currentPackage, setCurrentPackage] = useState(0);


  return (
    <section className="tabbed-services-section">
      <h2 className="tabbed-services-header">Our Treatments & Packages</h2>

      {/* Tabs */}
      <div className="service-tabs">
        {Object.keys(services).map((category) => (
          <button
            key={category}
            className={`service-tab ${activeTab === category ? "active" : ""}`}
            onClick={() => setActiveTab(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Packages */}
      <div className="service-packages">
        {services[activeTab].map((pkg, idx) => {
          const message = encodeURIComponent(
            `Hello! I want to book the "${pkg.name}" package under "${activeTab}"`
          );
          return (
            <div className="package-card" key={idx}>
              <h3 className="package-name">{pkg.name}</h3>
              <p className="package-price">{pkg.price}</p>

              <ul className="package-points">
                {pkg.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`}
                target="_blank"
                rel="noopener noreferrer"
                className="package-book-btn"
              >
                📲 Book Now
              </a>
            </div>
          );
        })}
      </div>

      {/* Mobile Dots */}
{/* Mobile Dots for Packages */}
<div className="mobile-dots">
  {services[activeTab].map((pkg, idx) => (
    <span
      key={idx}
      className={`dot ${currentPackage === idx ? "active" : ""}`}
      onClick={() => setCurrentPackage(idx)}
    ></span>
  ))}
</div>

    </section>
  );
}
