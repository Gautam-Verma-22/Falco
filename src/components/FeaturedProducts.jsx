import React from "react";

const products = [
  {
    name: "DJI Drone Camera",
    img: "/product1.jpg",
  },
  {
    name: "Drone Accessories",
    img: "/product2.jpg",
  },
  {
    name: "FPV Drone Suppliers",
    img: "/product3.jpg",
  },
];

const FeaturedProducts = () => (
  <section className="products-section" id="products">
    <h2 className="products-title">Featured Products</h2>
    <div className="products-grid">
      {products.map((p, i) => (
        <div key={i} className="product-card">
          <img src={p.img} alt={p.name} className="product-img" />
          <h3 className="product-name">{p.name}</h3>
          <a
            href="#contact"
            className="product-btn"
          >
            Get Quote
          </a>
        </div>
      ))}
    </div>
  </section>
);

export default FeaturedProducts; 