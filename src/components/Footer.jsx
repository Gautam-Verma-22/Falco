import React, { useState, useEffect } from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark');
    setDarkMode(isDark);

    // Create a mutation observer to watch for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          const isDark = document.documentElement.classList.contains('dark');
          setDarkMode(isDark);
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  return (
  <footer className="footer-new">
    <div className="footer-new-container">
      <div className="footer-new-col footer-new-brand">
        <img 
          src={darkMode ? "/DarkModeLogo.png" : "/LightMode.png"}
          alt="Future Sight Robotics Logo" 
          className="footer-new-logo" 
        />
        <div className="footer-new-desc">
          <em>At Future Sight Robotics, we create high-performance drones and robotic solutions to boost efficiency, safety, and precision across industries</em>
        </div>
      </div>
      <div className="footer-new-col">
        <div className="footer-new-heading">CATEGORIES</div>
        <ul>
          <li>About us</li>
          <li>Services and Solutions</li>
          <li>Shop</li>
          <li>Cart</li>
        </ul>
      </div>
      <div className="footer-new-col">
        <div className="footer-new-heading">INFORMATION</div>
        <ul>
          <li>Portfolio</li>
          <li>Privacy Policy</li>
          <li>Terms and Conditions</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="footer-new-col">
        <div className="footer-new-heading">Contact</div>
        <div className="footer-new-contact">
          <div><b>Add-</b> A-22, Future Sight Robotics</div>
          <div><b>Call-</b> +91 9354150989</div>
          <div><b>Email–</b> info@futuresightrobotics.in</div>
        </div>
      </div>
      <div className="footer-new-col footer-new-subscribe">
        <div className="footer-new-heading">SUBSCRIBE NOW</div>
        <form className="footer-new-form" onSubmit={e => e.preventDefault()}>
          <input type="email" placeholder="E-mail" className="footer-new-input" />
          <button className="footer-new-submit">&gt;</button>
        </form>
        <div className="footer-new-socials">
          <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
          <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://youtube.com" aria-label="YouTube" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
        </div>
      </div>
    </div>
    <div className="footer-new-bottom">
      <span>&copy; {new Date().getFullYear()} Future Sight Robotics. All rights reserved.</span>
    </div>
  </footer>
  );
};

export default Footer; 