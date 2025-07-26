import React from "react";
import "./HeroSection.css";

const HeroSection = () => (
  <section
    className="hero-section"
    id="hero"
  >
    <div className="hero-content">
      <h1 className="hero-title">Future Sight Robotics</h1>
      <p className="hero-subtext">
        End-to-end drone & robotics solutions PAN India
      </p>
      <a
        href="#contact"
        className="hero-btn"
      >
        Contact Us
      </a>
    </div>
    <video
      className="hero-bg-video"
      src="/vid.mp4"
      autoPlay
      muted
      loop
      playsInline
      poster="/drone-hero.jpg"
    />
    <div className="hero-overlay" />
  </section>
);

export default HeroSection; 