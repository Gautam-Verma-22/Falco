import React from "react";

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-container">
      <span className="brand">
        <img src="/forlightmode.png" alt="Falco Robotics Logo" className="navbar-logo" />
      </span>
      <div className="navbar-links">
        <a href="#products">About Us</a>
        <a href="#about">Portfolio</a>
        <a href="#contact">Services & Solutions</a>
        <a href="#products">Shop</a>
        <a href="#about">Cart</a>
        <a href="#contact">Contact Us</a>
      </div>
    </div>
  </nav>
);

export default Navbar; 