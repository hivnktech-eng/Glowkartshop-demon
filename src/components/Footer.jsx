import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, Globe, Share2, ArrowRight } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-about">
            <h2 className="elegant-font">GLOWKART<span>SHOP</span></h2>
            <p>Elevating your digital lifestyle with curated electronic accessories and futuristic play. Minimalist by design, luxury by nature.</p>
          </div>

          <div className="footer-section">
            <h3>Explore</h3>
            <div className="footer-links">
              <Link to="/shop" className="footer-link">Shop All</Link>
              <Link to="/toys" className="footer-link">Electronic Toys</Link>
              <Link to="/accessories" className="footer-link">Accessories</Link>
              <Link to="/new-arrivals" className="footer-link">New Arrivals</Link>
            </div>
          </div>

          <div className="footer-section">
            <h3>Support</h3>
            <div className="footer-links">
              <Link to="/track" className="footer-link">Track Order</Link>
              <Link to="/shipping" className="footer-link">Shipping & Returns</Link>
              <Link to="/care" className="footer-link">Product Care</Link>
              <Link to="/contact" className="footer-link">Contact Us</Link>
            </div>
          </div>

          <div className="footer-section">
            <h3>Journal</h3>
            <div className="newsletter-form">
              <p className="footer-link">Join our mailing list for exclusive previews and minimalist insights.</p>
              <div style={{ position: 'relative' }}>
                <input type="email" placeholder="Email Address" className="newsletter-input" />
                <button style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)' }}>
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Glowkartshop. All rights reserved.</p>
          <div className="social-links">
            <a href="#" className="footer-link"><Camera size={20} /></a>
            <a href="#" className="footer-link"><Globe size={20} /></a>
            <a href="#" className="footer-link"><Share2 size={20} /></a>
          </div>
          <div className="footer-links" style={{ flexDirection: 'row', gap: '2rem' }}>
            <Link to="/privacy" className="footer-link">Privacy Policy</Link>
            <Link to="/terms" className="footer-link">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
