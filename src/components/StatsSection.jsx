import React from "react";
import { FaCrosshairs, FaGlobeAsia, FaSatelliteDish, FaMapMarkedAlt } from "react-icons/fa";
import { motion, useAnimationFrame, useInView } from "framer-motion";

const stats = [
  {
    icon: <FaCrosshairs />,
    value: 500,
    suffix: "+",
    label: "DRONE DEPLOYMENTS",
  },
  {
    icon: <FaGlobeAsia />,
    value: 20,
    suffix: "+",
    label: "STATES PRESENCE",
  },
  {
    icon: <FaSatelliteDish />,
    value: 1000,
    suffix: "+",
    label: "HOURS OF TRIALS",
  },
  {
    icon: <FaMapMarkedAlt />,
    value: 200000,
    suffix: "",
    label: "ACRES OF TESTING",
  },
];

function AnimatedCount({ end, duration = 2600 }) {
  const ref = React.useRef();
  const isInView = useInView(ref, { once: false, margin: "-20% 0px" });
  const [value, setValue] = React.useState(0);
  const start = 0;
  const startTime = React.useRef(null);

  useAnimationFrame((t) => {
    if (!isInView) return;
    if (startTime.current === null) startTime.current = t;
    const elapsed = t - startTime.current;
    if (elapsed < duration) {
      const progress = Math.min(elapsed / duration, 1);
      setValue(Math.floor(progress * (end - start) + start));
    } else if (value !== end) {
      setValue(end);
    }
  });

  React.useEffect(() => {
    if (!isInView) {
      setValue(0);
      startTime.current = null;
    }
  }, [isInView]);

  return <span ref={ref}>{value}</span>;
}

function StatBlock({ icon, value, suffix, label }) {
  return (
    <div className="stat-block">
      <div className="stat-icon">{icon}</div>
      <div className="stat-value">
        <AnimatedCount end={value} />{suffix}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

const StatsSection = () => (
  <section className="stats-section">
    <div className="stats-header">
      <motion.h2 className="stats-title" initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1.1, ease: "easeOut" }}>
        Performance That Soars Beyond Limits
      </motion.h2>
      <motion.div className="stats-subtitle" initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1.1, ease: "easeOut", delay: 0.2 }}>
        Driving Innovation, Efficiency and Progress Across Industries
      </motion.div>
    </div>
    <div className="stats-grid">
      {stats.map((stat, i) => (
        <StatBlock key={i} {...stat} />
      ))}
    </div>
  </section>
);

export default StatsSection; 