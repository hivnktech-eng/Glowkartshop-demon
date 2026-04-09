import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Heart, Menu, X, Search } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount } = useCart();
  const { wishlist } = useWishlist();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : 'navbar-default'}`}>
      <div className="container nav-container">
        {/* Logo */}
        <Link to="/" className="logo elegant-font">
          GLOWKART<span>SHOP</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="nav-links">
          {['Shop', 'Toys', 'Accessories', 'Track'].map((item) => (
            <Link 
              key={item} 
              to={item === 'Shop' ? '/shop' : `/${item.toLowerCase().replace(' ', '-')}`} 
              className="nav-link"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Icons */}
        <div className="nav-icons">
          <button className="icon-btn search-btn">
            <Search size={18} />
          </button>
          <Link to="/wishlist" className="icon-btn">
            <Heart size={18} />
            {wishlist.length > 0 && (
              <span className="badge">{wishlist.length}</span>
            )}
          </Link>
          <Link to="/cart" className="icon-btn">
            <ShoppingBag size={18} />
            {cartCount > 0 && (
              <span className="badge">{cartCount}</span>
            )}
          </Link>
          <button 
            className="icon-btn menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mobile-menu"
          >
            {['Shop', 'Toys', 'Accessories', 'Track'].map((item) => (
              <Link 
                key={item} 
                to={item === 'Shop' ? '/shop' : `/${item.toLowerCase().replace(' ', '-')}`} 
                className="nav-link"
              >
                {item}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
