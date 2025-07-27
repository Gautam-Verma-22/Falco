import React, { useState, useEffect, useRef } from "react";
import { FaCrosshairs, FaGlobeAsia, FaSatelliteDish, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const StatsSection = () => {
  const [counts, setCounts] = useState({
    missions: 0,
    countries: 0,
    drones: 0,
    hours: 0
  });
  
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    {
      icon: <FaCrosshairs />,
      number: 500,
      label: "Missions Completed",
      suffix: "+",
      key: "missions"
    },
    {
      icon: <FaGlobeAsia />,
      number: 25,
      label: "Countries Served",
      suffix: "+",
      key: "countries"
    },
    {
      icon: <FaSatelliteDish />,
      number: 1000,
      label: "Drones Deployed",
      suffix: "+",
      key: "drones"
    },
    {
      icon: <FaMapMarkedAlt />,
      number: 50,
      label: "Flight Hours",
      suffix: "K+",
      key: "hours"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounts();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  const animateCounts = () => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounts({
        missions: Math.floor(500 * progress),
        countries: Math.floor(25 * progress),
        drones: Math.floor(1000 * progress),
        hours: Math.floor(50 * progress)
      });

      if (currentStep >= steps) {
        clearInterval(interval);
        setCounts({
          missions: 500,
          countries: 25,
          drones: 1000,
          hours: 50
        });
      }
    }, stepDuration);
  };

  return (
    <section className="stats-section" ref={sectionRef}>
      <motion.div 
        className="stats-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Our Impact in Numbers
      </motion.div>
      <motion.div 
        className="stats-subtitle"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        Delivering exceptional results across defence, commercial, and agricultural sectors
      </motion.div>
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <motion.div 
            key={index} 
            className="stat-item"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              ease: "easeOut", 
              delay: 0.3 + (index * 0.1) 
            }}
          >
            <motion.div 
              className="stat-icon"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ 
                duration: 0.6, 
                ease: "easeOut", 
                delay: 0.4 + (index * 0.1) 
              }}
            >
              {stat.icon}
            </motion.div>
            <motion.div 
              className="stat-number"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ 
                duration: 0.6, 
                ease: "easeOut", 
                delay: 0.5 + (index * 0.1) 
              }}
            >
              {counts[stat.key]}{stat.suffix}
            </motion.div>
            <motion.div 
              className="stat-label"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ 
                duration: 0.6, 
                ease: "easeOut", 
                delay: 0.6 + (index * 0.1) 
              }}
            >
              {stat.label}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection; 