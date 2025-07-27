import React from "react";
import { motion } from "framer-motion";
import LazyImage from "./LazyImage";

const IndiaMapSection = () => (
  <section className="india-map-section">
    <div className="india-map-container">
      <motion.div
        className="india-map-image-wrapper"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <LazyImage 
          src="/Outline-Map-of-India-with-States.png" 
          alt="India Map" 
          className="india-map-image" 
        />
      </motion.div>
      <motion.div
        className="india-map-content"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        <div className="india-map-header">
          <motion.h2
            className="india-map-title"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Empower Your Operations with Advanced Drone Technology
          </motion.h2>
          <motion.div 
            className="title-underline"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
        </div>
        <motion.div
          className="india-map-desc"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Discover the wide range of solutions you can perform using our advanced drones — from surveying and inspection to surveillance, delivery, and beyond. Empower your operations with reliable, cutting-edge technology designed to meet the unique demands of your industry.
        </motion.div>
        <motion.button
          className="india-map-btn"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore Solutions
        </motion.button>
      </motion.div>
    </div>
  </section>
);

export default IndiaMapSection; 