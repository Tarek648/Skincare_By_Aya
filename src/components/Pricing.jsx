import React, { useState, useRef, useEffect } from "react";
import "../styles/pricing.css";

const services = {
  Facials: [
    {
      name: "Deep Cleansing Facial",
      price: "$70",
      points: [
        "Removes impurities and dead skin",
        "Hydration and nourishment",
        "Radiant glowing skin",
      ],
    },
    { name: "Hydrating Facial", price: "$65", points: ["Hydrates deeply", "Soft skin"] },
    { name: "Anti-Aging Facial", price: "$90", points: ["Reduces wrinkles", "Firm skin"] },
  ],
  "Glow Skin Treatment": [
    { name: "Vitamin C Glow", price: "$80", points: ["Brightens skin", "Evens tone"] },
    { name: "Brightening Facial", price: "$85", points: ["Radiant glow", "Hydration"] },
  ],
  "Microneedling & Peels": [
    { name: "Microneedling", price: "$120", points: ["Stimulates collagen", "Reduces scars"] },
    { name: "Chemical Peel", price: "$110", points: ["Exfoliates", "Smooth skin"] },
  ],
  BundleNew: [
    { name: "Facial + Glow Treatment", price: "$140", points: ["Complete rejuvenation"] },
    { name: "Peel + Microneedling", price: "$200", points: ["Advanced combo"] },
  ],
};

const WHATSAPP_NUMBER = "96178845146";

export default function TabbedServices() {
  const [activeTab, setActiveTab] = useState("Facials");
  const [activeDot, setActiveDot] = useState(0);
  const packagesRef = useRef(null);

  const handleDotClick = (index) => {
    const cardWidth = packagesRef.current.children[0].offsetWidth + 32; // card width + gap
    packagesRef.current.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });
    setActiveDot(index);
  };

  const handleScroll = () => {
    const scrollLeft = packagesRef.current.scrollLeft;
    const cardWidth = packagesRef.current.children[0].offsetWidth + 32;
    const index = Math.round(scrollLeft / cardWidth);
    setActiveDot(index);
  };

  useEffect(() => {
    setActiveDot(0);
    if (packagesRef.current) packagesRef.current.scrollTo({ left: 0 });
  }, [activeTab]);

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
      <div
        className="service-packages"
        ref={packagesRef}
        onScroll={handleScroll}
      >
        {services[activeTab].map((pkg, idx) => {
          const message = encodeURIComponent(
            `Hello! I want to book the "${pkg.name}" package under "${activeTab}"`
          );
          return (
            <div className="package-card" key={idx}>
              <h3 className="package-name">{pkg.name}</h3>
              <p className="package-price">{pkg.price}</p>
              <ul className="package-points">
                {pkg.points?.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`}
                target="_blank"
                rel="noopener noreferrer"
                className="package-book-btn"
              >
                 Book Now
              </a>
            </div>
          );
        })}
      </div>

      {/* Mobile Dots */}
      <div className="mobile-dots">
        {services[activeTab].map((_, index) => (
          <span
            key={index}
            className={`dot ${activeDot === index ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </section>
  );
}
