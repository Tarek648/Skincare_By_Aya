import React from 'react';
import '../styles/about.css';

export default function About() {
  return (
<section className="about" id="about">
  <div className="about-container">
    <div className="about-text">
            <h2 className="about-section-header">About Me</h2>

            <h3 className="about-main-title">Your Journey to Radiant Skin</h3>

            <p className="about-subtitle">
        I help you achieve natural beauty through science-backed treatments and personalized care.
      </p>


      <p className="about-description">
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil voluptas illo mollitia, provident dolorum quod officia. Magnam nam pariatur expedita dolorem sed, tenetur reiciendis sunt dolorum quasi a autem rem!      </p>

      <div className="about-stats">
        <div className="stat">
          <div className="stat-content">
            <h3>5+</h3>
            <p>Years Experience</p>
          </div>
        </div>
        <div className="stat">
          <div className="stat-content">
            <h3>1000+</h3>
            <p>Happy Clients</p>
          </div>
        </div>
        <div className="stat">
          <div className="stat-content">
            <h3>99%</h3>
            <p>Customer Satisfaction</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  );
}
