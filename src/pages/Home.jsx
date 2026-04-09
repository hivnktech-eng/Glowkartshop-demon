import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Play,
  Zap,
  ShieldCheck,
  Cpu,
  Wifi,
  Headphones,
  Battery,
} from "lucide-react";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";
import "./Home.css";

const HERO_IMG = "src/assets/hero/hero.png";
const ACCESSORIES_IMG = "src/assets/categories/accessories.png";
const TOYS_IMG = "src/assets/categories/toys.avif";

const Home = () => {
  const featuredProducts = products.slice(0, 3);

  const features = [
    {
      icon: <Zap size={28} strokeWidth={1.5} />,
      title: "Hyper Speed",
      desc: "Optimized for modern data standards and rapid charging protocols.",
      stat: "100W+",
      statLabel: "Power Delivery",
    },
    {
      icon: <ShieldCheck size={28} strokeWidth={1.5} />,
      title: "Built to Last",
      desc: "Aerospace-grade materials engineered for ultimate durability.",
      stat: "5yr",
      statLabel: "Warranty",
    },
    {
      icon: <Cpu size={28} strokeWidth={1.5} />,
      title: "Smart Connect",
      desc: "Seamless integration with your entire digital ecosystem.",
      stat: "99.9%",
      statLabel: "Compatibility",
    },
  ];

  const servicePillars = [
    {
      icon: <Wifi size={16} strokeWidth={1.8} />,
      label: "Low-Latency Connectivity",
    },
    {
      icon: <Headphones size={16} strokeWidth={1.8} />,
      label: "Human-Centered Support",
    },
    {
      icon: <Battery size={16} strokeWidth={1.8} />,
      label: "Long-Cycle Reliability",
    },
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <img src={HERO_IMG} className="hero-img-bg" alt="Glowkart Hero" />
        <div className="hero-overlay" />
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="hero-content"
          >
            <span className="hero-subtitle">Future of Essentials</span>
            <h1 className="hero-title elegant-font">
              Redefining Minimalist <br />
              Electronics.
            </h1>
            <div className="hero-btns">
              <Link to="/shop" className="btn-primary">
                Explore Collection <ArrowRight size={20} />
              </Link>
              <button className="btn-hero-secondary">
                <span className="play-icon-wrap">
                  <Play size={16} fill="white" stroke="white" />
                </span>
                Watch Presentation
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services/Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="features-shell">
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="features-intro"
            >
              <span className="section-subtitle">Why Glowkart</span>
              <h2 className="section-title">Engineered for Excellence</h2>
              <p className="features-lead">
                Every product goes through rigorous performance validation,
                material stress checks, and compatibility tuning before it
                reaches your desk.
              </p>
              <div className="features-pill-grid">
                {servicePillars.map((pillar) => (
                  <div key={pillar.label} className="features-pill">
                    <span className="features-pill-icon">{pillar.icon}</span>
                    <span>{pillar.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="features-grid">
              {features.map((item, i) => (
                <motion.article
                  key={i}
                  initial={{ opacity: 0, y: 38 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -8 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    opacity: { duration: 0.55, delay: i * 0.14 },
                    y: { duration: 0.55, delay: i * 0.14 },
                    default: { type: "spring", stiffness: 240, damping: 22 },
                  }}
                  className="feature-card"
                >
                  <div className="feature-card-top">
                    <div className="feature-icon-wrap">{item.icon}</div>
                    <span className="feature-index">0{i + 1}</span>
                  </div>

                  <div className="feature-content">
                    <h3 className="feature-title">{item.title}</h3>
                    <p className="feature-desc">{item.desc}</p>
                  </div>

                  <div className="feature-stat">
                    <div className="feature-stat-meta">
                      <span className="feature-stat-value elegant-font">
                        {item.stat}
                      </span>
                      <span className="feature-stat-label">
                        {item.statLabel}
                      </span>
                    </div>
                    <ArrowRight size={18} className="feature-stat-arrow" />
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Category Section */}
      <section className="category-section">
        <div className="container">
          <div className="category-grid">
            <Link to="/accessories" className="category-card">
              <img
                src={ACCESSORIES_IMG}
                className="category-img"
                alt="Accessories"
              />
              <div className="category-content">
                <span
                  className="section-subtitle"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                >
                  Curated
                </span>
                <h2 className="elegant-font" style={{ fontSize: "2.5rem" }}>
                  Accessories
                </h2>
                <p style={{ marginBottom: "2rem", opacity: 0.8 }}>
                  Precision tools for your digital workspace.
                </p>
                <span
                  className="btn-secondary"
                  style={{ color: "white", borderColor: "white" }}
                >
                  View Collection
                </span>
              </div>
            </Link>
            <Link to="/toys" className="category-card">
              <img src={TOYS_IMG} className="category-img" alt="Toys" />
              <div className="category-content">
                <span
                  className="section-subtitle"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                >
                  Futuristic
                </span>
                <h2 className="elegant-font" style={{ fontSize: "2.5rem" }}>
                  Electronic Toys
                </h2>
                <p style={{ marginBottom: "2rem", opacity: 0.8 }}>
                  Experience the next generation of play.
                </p>
                <span
                  className="btn-secondary"
                  style={{ color: "white", borderColor: "white" }}
                >
                  View Collection
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">New Arrivals</span>
            <h2 className="section-title">The Current Selection</h2>
          </div>
          <div className="product-grid">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                variant="home-featured"
              />
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "6rem" }}>
            <Link to="/shop" className="btn-secondary">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Testimonials</span>
            <h2 className="section-title">Quietly Commended</h2>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-quote">"</div>
            <p className="testimonial-text elegant-font">
              The attention to detail and minimalist aesthetic is unparalleled.
              Glowkartshop doesn't just sell electronics — they sell a lifestyle
              of clarity and quality.
            </p>
            <div className="testimonial-author">
              <div className="testimonial-avatar">AV</div>
              <div>
                <h4 className="elegant-font">Alexander Vance</h4>
                <span className="testimonial-role">Tech Enthusiast</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="cta-title elegant-font">
              Join the Future <br />
              of Essentials
            </h2>
            <p
              style={{
                marginBottom: "4rem",
                opacity: 0.7,
                maxWidth: "600px",
                margin: "0 auto 4rem",
              }}
            >
              Subscribe to get notified about our quarterly limited drops and
              exclusive minimalist tech insights.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "1rem",
                flexWrap: "wrap",
              }}
            >
              <Link
                to="/shop"
                className="btn-primary"
                style={{ background: "white", color: "black" }}
              >
                Shop Collection
              </Link>
              <Link
                to="/track"
                className="btn-secondary"
                style={{ color: "white", borderColor: "rgba(255,255,255,0.4)" }}
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
