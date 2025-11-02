import React from "react";
import "../styles/process.css";

const steps = [
  {
    id: "01",
    title: "Skin Analysis",
    desc: "A personalized consultation to understand your skin needs and select the ideal treatment plan.",
  },
  {
    id: "02",
    title: "Luxury Treatment",
    desc: "Relax and enjoy a professional skincare session using advanced techniques for visible rejuvenation.",
  },
  {
    id: "03",
    title: "Aftercare Guidance",
    desc: "Receive expert recommendations and care tips to keep your skin glowing and healthy post-treatment.",
  },
];

const WorkProcess = () => {
  return (
    <section className="work-process">
      <div className="work-bg"></div>
      <div className="work-bg2"></div>

      <div className="process-content">
        <h4 className="section-label">Work Process</h4>
        <h2 className="process-title">How We Perfect Your Glow</h2>
        <p className="process-subtitle">
          Each step is designed with precision, care, and love — blending science and beauty for flawless results.
        </p>

        <div className="process-container">
          {steps.map((step, index) => (
            <div
              className="process-card shine"
              key={step.id}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <div className="process-badge">{step.id}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
