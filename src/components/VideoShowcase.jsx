import React from "react";
import { FaShieldAlt, FaIndustry, FaSeedling, FaRocket } from "react-icons/fa";
import { motion } from "framer-motion";

const VideoShowcase = () => (
  <section className="video-section" id="showcase">
    <div className="video-showcase-container">
      <div className="video-showcase-header">
        <motion.h2 className="video-showcase-title" initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1.1, ease: "easeOut" }}>
          Falco Robotics
        </motion.h2>
        <motion.div className="video-showcase-subtitle" initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1.1, ease: "easeOut", delay: 0.1 }}>
          Battle-Tested Drone Tech for Every Mission
        </motion.div>
        <motion.div className="video-showcase-desc" initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1.1, ease: "easeOut", delay: 0.2 }}>
          Falco drones lead the skies with smart, secure, and scalable solutions for defence and civil applications.
        </motion.div>
      </div>
      <div className="video-showcase-content">
        <div className="video-showcase-texts video-showcase-texts-left">
          <motion.div className="video-showcase-feature" initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1.1, ease: "easeOut" }}>
            <FaShieldAlt className="video-showcase-icon" />
            <div>
              <div className="video-showcase-feature-title">DEFENCE</div>
              <div className="video-showcase-feature-desc">
                Advanced drone solutions engineered for tactical missions — featuring anti-jamming systems, GPS-denied navigation, autonomous path planning, and AI-powered target tracking for search & rescue and reconnaissance.
              </div>
            </div>
          </motion.div>
          <motion.div className="video-showcase-feature" initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1.1, ease: "easeOut", delay: 0.1 }}>
            <FaIndustry className="video-showcase-icon" />
            <div>
              <div className="video-showcase-feature-title">COMMERCIAL</div>
              <div className="video-showcase-feature-desc">
                Commercial-grade drones for surveying, inspection, mapping, and logistics — optimized for industries like infrastructure, construction, energy, and smart cities
              </div>
            </div>
          </motion.div>
        </div>
        <div className="video-showcase-image-wrapper">
          <img src="/falco.jpg" alt="Falco Drone" className="video-showcase-image" />
        </div>
        <div className="video-showcase-texts video-showcase-texts-right">
          <motion.div className="video-showcase-feature" initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1.1, ease: "easeOut" }}>
            <FaSeedling className="video-showcase-icon" />
            <div>
              <div className="video-showcase-feature-title">AGRICULTURE</div>
              <div className="video-showcase-feature-desc">
                Transforming modern farming with drone-based crop monitoring, precision spraying, field mapping, and pest detection — enabling data-driven, sustainable agriculture.
              </div>
            </div>
          </motion.div>
          <motion.div className="video-showcase-feature" initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1.1, ease: "easeOut", delay: 0.1 }}>
            <FaRocket className="video-showcase-icon" />
            <div>
              <div className="video-showcase-feature-title">FPV</div>
              <div className="video-showcase-feature-desc">
                High-performance FPV drones for immersive flight, aerial cinematography, freestyle racing, and custom builds — designed for creators and adrenaline seekers.
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

export default VideoShowcase; 