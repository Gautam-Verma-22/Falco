import React from "react";
import { motion } from "framer-motion";
import LazyImage from "./LazyImage";

const DroneRepairSection = () => (
  <section className="drone-repair-section">
    <div className="drone-repair-container">
      <motion.div
        className="drone-repair-text"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.3, ease: "easeOut" }}
      >
        <motion.div
          className="drone-repair-label"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
        >
          FUTURE SIGHT ROBOTICS
        </motion.div>
        <div className="drone-repair-header">
          <motion.h2
            className="drone-repair-title"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.1, ease: "easeOut", delay: 0.1 }}
          >
            We Offer High-Performance Drones with Expert Repair
          </motion.h2>
          <motion.div 
            className="title-underline"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
        </div>
        <motion.div
          className="drone-repair-desc"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut", delay: 0.2 }}
        >
          Our drones offer faster and more efficient aerial imagery than satellites or manned aircraft. We specialize in drone sales, expert repair services, and the production of high-resolution elevation data and orthomosaics—all under one roof.
        </motion.div>
        <motion.div 
          className="drone-repair-btns"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.button
            className="drone-repair-btn shop-now"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Shop Now
          </motion.button>
          <motion.button
            className="drone-repair-btn book-now"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Repair
          </motion.button>
        </motion.div>
      </motion.div>
      <motion.div
        className="drone-repair-image-wrapper"
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.3, ease: "easeOut" }}
      >
        <LazyImage 
          src="/with-white.png" 
          alt="Drone Repair" 
          className="drone-repair-image" 
        />
      </motion.div>
    </div>
  </section>
);

export default DroneRepairSection; 