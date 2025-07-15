import React from "react";

const HeroSection = () => (
  <section
    className="hero-section"
    id="hero"
    style={{
      background: "#222"
    }}
  >
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
    <div className="hero-content">
      <h1 className="hero-title">Falco Robotics</h1>
      <p className="hero-subtext">
        End-to-end drone & robotics solutions PAN India
      </p>
      <a
        href="#contact"
        className="hero-btn"
      >
        Get in Touch
      </a>
    </div>
  </section>
);

export default HeroSection; 