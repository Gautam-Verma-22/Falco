import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { href: "#products", label: "About Us" },
  { href: "#about", label: "Portfolio" },
  { href: "#contact", label: "Services & Solutions" },
  { href: "#products", label: "Shop" },
  { href: "#about", label: "Cart" },
  { href: "#contact", label: "Contact Us" },
];

const linkVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: (i) => ({ opacity: 1, x: 0, transition: { delay: 0.08 * i } }),
};

const overlayVariants = {
  hidden: { opacity: 0, scale: 0.98, filter: "blur(8px)" },
  visible: { opacity: 1, scale: 1, filter: "blur(0px)", transition: { duration: 0.25 } },
  exit: { opacity: 0, scale: 0.98, filter: "blur(8px)", transition: { duration: 0.18 } },
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar futuristic-navbar${scrolled ? " navbar-shadow" : ""}`}>
      <div className="navbar-container">
        <span className="brand">
          <img src="/forlightmode.png" alt="Falco Robotics Logo" className="navbar-logo" />
        </span>
        <div className="navbar-links desktop-only">
          {navLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              whileHover={{ scale: 1.08, y: -2, boxShadow: "0 2px 12px rgba(0,0,0,0.10)" }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {link.label}
            </motion.a>
          ))}
        </div>
        <button
          className="burger-menu mobile-only"
          aria-label="Open menu"
          onClick={() => setMenuOpen(true)}
        >
          <FaBars size={28} />
        </button>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu-overlay"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div
              className="mobile-menu futuristic-menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <button
                className="close-menu"
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
              >
                <FaTimes size={28} />
              </button>
              <div className="mobile-menu-links">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    custom={i}
                    variants={linkVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    whileHover={{ scale: 1.08, x: 8, boxShadow: "0 2px 12px rgba(0,0,0,0.10)" }}
                    whileTap={{ scale: 0.96 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar; 