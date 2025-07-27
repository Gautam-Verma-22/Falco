import React from "react";
import { motion } from "framer-motion";
import LazyImage from "./LazyImage";

const pressImages = [
  { src: "/press1.png", alt: "Press Logo 1" },
  { src: "/press2.jpeg", alt: "Press Logo 2" },
  { src: "/press3.png", alt: "Press Logo 3" },
  { src: "/press4.jpeg", alt: "Press Logo 4" },
  { src: "/press5.jpeg", alt: "Press Logo 5" },
  { src: "/press6.jpeg", alt: "Press Logo 6" },
  { src: "/press7.jpeg", alt: "Press Logo 7" },
  { src: "/press8.png", alt: "Press Logo 8" },
  { src: "/press9.jpeg", alt: "Press Logo 9" },
  { src: "/press10.jpeg", alt: "Press Logo 10" },
  { src: "/press11.jpeg", alt: "Press Logo 11" },
  { src: "/press12.png", alt: "Press Logo 12" },
  { src: "/press13.jpeg", alt: "Press Logo 13" },
  { src: "/press14.jpeg", alt: "Press Logo 14" },
  { src: "/press15.jpeg", alt: "Press Logo 15" },
  { src: "/press16.jpeg", alt: "Press Logo 16" },
];

const PressReleaseSection = () => (
  <section className="press-release-section">
    <div className="press-release-header">
      <motion.h2 
        className="press-release-title" 
        initial={{ opacity: 0, x: -60 }} 
        whileInView={{ opacity: 1, x: 0 }} 
        transition={{ duration: 1.1, ease: "easeOut" }}
      >
        Our Press Release
      </motion.h2>
      <motion.div 
        className="title-underline"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      />
    </div>
    <div className="press-release-logos">
      {pressImages.map((img, i) => (
        <motion.div
          className="press-logo-wrapper"
          key={img.src}
          initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ 
            duration: 0.8, 
            ease: "easeOut", 
            delay: i * 0.1 
          }}
        >
          <LazyImage src={img.src} alt={img.alt} className="press-logo" />
        </motion.div>
      ))}
    </div>
  </section>
);

export default PressReleaseSection; 