import React from "react";
import { FaShieldAlt, FaIndustry, FaSeedling, FaRocket } from "react-icons/fa";
import { motion } from "framer-motion";
import LazyImage from "./LazyImage";

const VideoShowcase = () => (
  <section className="video-section" id="showcase">
    <div className="video-showcase-container">
      <div className="video-showcase-header">
        <motion.h2 
          className="video-showcase-title"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          Future Sight Robotics
        </motion.h2>
        <motion.div 
          className="title-underline"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />
        <motion.div 
          className="video-showcase-subtitle"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Battle-Tested Drone Tech for Every Mission
        </motion.div>
        <motion.div 
          className="video-showcase-desc"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Future Sight drones lead the skies with smart, secure, and scalable solutions for defence and civil applications
        </motion.div>
      </div>

      <div className="video-showcase-content">
        <motion.div 
          className="feature-left-top" 
          initial={{ opacity: 0, x: -30 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.5 }}
        >
          <FaShieldAlt className="feature-icon" />
          <div className="feature-title">DEFENCE</div>
          <div className="feature-desc">
            Advanced drone solutions engineered for tactical missions — featuring anti-jamming systems, GPS-denied navigation, autonomous path planning, and AI-powered target tracking for search & rescue and reconnaissance
          </div>
        </motion.div>

        <motion.div 
          className="feature-left-bottom" 
          initial={{ opacity: 0, x: -30 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <FaIndustry className="feature-icon" />
          <div className="feature-title">COMMERCIAL</div>
          <div className="feature-desc">
            Commercial-grade drones for surveying, inspection, mapping, and logistics — optimized for industries like infrastructure, construction, energy, and smart cities
          </div>
        </motion.div>

        <motion.div 
          className="drone-image-wrapper" 
          initial={{ opacity: 0, scale: 0.9 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
          <LazyImage 
            src="/falco.jpg" 
            alt="Falco Drone" 
            className="drone-image" 
          />
        </motion.div>

        <motion.div 
          className="feature-right-top" 
          initial={{ opacity: 0, x: 30 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.5 }}
        >
          <FaSeedling className="feature-icon" />
          <div className="feature-title">AGRICULTURE</div>
          <div className="feature-desc">
            Transforming modern farming with drone-based crop monitoring, precision spraying, field mapping, and pest detection — enabling data-driven, sustainable agriculture
          </div>
        </motion.div>

        <motion.div 
          className="feature-right-bottom" 
          initial={{ opacity: 0, x: 30 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <FaRocket className="feature-icon" />
          <div className="feature-title">FPV</div>
          <div className="feature-desc">
            High-performance FPV drones for immersive flight, aerial cinematography, freestyle racing, and custom builds — designed for creators and adrenaline seekers
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default VideoShowcase;