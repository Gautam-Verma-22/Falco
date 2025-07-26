import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const logos = [
  "/trustedby1.png",
  "/trustedby2.png",
  "/trustedby3.png",
  "/trustedby4.png",
  "/trustedby5.png",
  "/trustedby6.png",
  "/trustedby7.png",
  "/trustedby8.png",
].filter(logo => logo); // Filter out any empty strings

const TrustedBySection = () => {
  const rowRef = useRef();
  const [x, setX] = useState(0);

  useEffect(() => {
    let raf;
    let last = performance.now();
    const speed = 0.04; // px per ms (very slow and smooth)
    function animate(now) {
      const dt = now - last;
      last = now;
      setX((prev) => {
        const row = rowRef.current;
        if (!row) return prev;
        const rowWidth = row.scrollWidth / 2;
        let next = prev - dt * speed;
        if (Math.abs(next) > rowWidth) {
          next += rowWidth;
        }
        return next;
      });
      raf = requestAnimationFrame(animate);
    }
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section className="trusted-section">
      <div className="trusted-header">
        <motion.div className="trusted-label" initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1.1, ease: "easeOut" }}>
          EMPOWERING INDUSTRIES WITH INNOVATION
        </motion.div>
        <motion.h2 className="trusted-title" initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1.1, ease: "easeOut", delay: 0.1 }}>
          Trusted by Innovators Across Industries
        </motion.h2>
        <motion.div className="trusted-desc" initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1.1, ease: "easeOut", delay: 0.2 }}>
          From agriculture to advanced surveillance, Future Sight Robotics delivers reliable and innovative drone solutions that drive progress.<br />
          Our expertise supports industries in achieving efficiency, precision, and sustainability, making us a trusted partner for trailblazers everywhere.
        </motion.div>
      </div>
      <div className="trusted-logos-row-outer">
        <div
          className="trusted-logos-row"
          ref={rowRef}
          style={{ transform: `translateX(${x}px)` }}
        >
          {[...logos, ...logos].map((src, i) => (
            <div className="trusted-logo-wrapper" key={i}>
              <img src={src} alt={`Trusted Logo ${i + 1}`} className="trusted-logo" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection; 