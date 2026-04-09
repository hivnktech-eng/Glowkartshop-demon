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
import heroImg from "../assets/hero/hero.png";
import accessoriesImg from "../assets/categories/accessories.png";
import toysImg from "../assets/categories/toys.avif";
import "./Home.css";

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
        <img src={heroImg} className="hero-img-bg" alt="Glowkart Hero" />
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

      {/* Category Section */}
      <section className="category-section">
        <div className="container">
          <div className="category-grid">
            <Link to="/accessories" className="category-card">
              <img
                src={accessoriesImg}
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
                <span className="btn-secondary category-cta-btn">
                  View Collection
                </span>
              </div>
            </Link>
            <Link to="/toys" className="category-card">
              <img src={toysImg} className="category-img" alt="Toys" />
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
                <span className="btn-secondary category-cta-btn">
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
