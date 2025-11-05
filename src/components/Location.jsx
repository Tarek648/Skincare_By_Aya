import React from "react";
import "../styles/location.css";

const LocationSection = () => {
  return (
    <section className="location-section">
      <div className="location-card">
        <div className="location-info">
          <h2 className="title">
            <img
              src="https://cdn-icons-png.flaticon.com/512/854/854878.png"
              alt="map icon"
              className="icon-img"
            />
            Visit Us
          </h2>

          <p className="desc">
            Experience luxury skincare and glowing beauty at our serene studio.
          </p>

          <div className="details">
            <p>
              <strong>📍 Address:</strong> Salon Walid Samhan — Sakit al janzir, Lebanon
            </p>
            <p>
              <strong>🕒 Hours:</strong> Mon–Sat: 9:00 AM – 6:00 PM
            </p>
            <p>
              <strong>📞 Phone:</strong> +961 71 123 456
            </p>
          </div>

          <a
            href="https://www.google.com/maps/place/Salon+Walid+Samhan/@33.887126,35.4781181,17z/data=!3m1!4b1!4m6!3m5!1s0x151f113ce5dd96c9:0xf034cebfe44a4e56!8m2!3d33.887126!4d35.4781181!16s%2Fg%2F11h4cb2yzp?entry=ttu&g_ep=EgoyMDI1MTAyOS4yIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="direction-btn"
          >
            Get Directions
          </a>
        </div>

        <div className="map-container">
          <iframe
            title="Salon Walid Samhan Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.098148817728!2d35.478118099999996!3d33.887125999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f113ce5dd96c9%3A0xf034cebfe44a4e56!2sSalon%20Walid%20Samhan!5e0!3m2!1sar!2slb!4v1762267864971!5m2!1sar!2slb"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
