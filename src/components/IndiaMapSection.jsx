import React from "react";
import { motion } from "framer-motion";

const IndiaMapSection = () => (
  <section className="india-map-section">
    <div className="india-map-container">
      <motion.div
        className="india-map-image-wrapper"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.3, ease: "easeOut" }}
      >
        <img src="/Outline-Map-of-India-with-States.png" alt="India Map" className="india-map-image" />
      </motion.div>
      <motion.div
        className="india-map-content"
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.3, ease: "easeOut", delay: 0.2 }}
      >
        <motion.h2
          className="india-map-title"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
        >
          Empower Your Operations with Advanced Drone Technology
        </motion.h2>
        <motion.div
          className="india-map-desc"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.1, ease: "easeOut", delay: 0.2 }}
        >
          Discover the wide range of solutions you can perform using our advanced drones — from surveying and inspection to surveillance, delivery, and beyond. Empower your operations with reliable, cutting-edge technology designed to meet the unique demands of your industry.
        </motion.div>
        <button className="india-map-btn india-map-btn-center">Explore Our Solutions</button>
      </motion.div>
    </div>
  </section>
);

export default IndiaMapSection; 