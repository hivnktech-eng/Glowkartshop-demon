import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingBag, Heart, Menu, X, Search } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { motion, AnimatePresence } from "framer-motion";
import "./Navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount } = useCart();
  const { wishlist } = useWishlist();
  const location = useLocation();
  const isHomeTop = location.pathname === "/" && !isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <nav
      className={`navbar ${isScrolled ? "navbar-scrolled" : "navbar-default"} ${isHomeTop ? "navbar-home-top" : ""}`}
      role="navigation"
      aria-label="Main"
    >
      <div className="container nav-container">
        {/* Logo */}
        <Link to="/" className="logo elegant-font">
          GLOWKART<span>SHOP</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="nav-links">
          {["Shop", "Toys", "Accessories", "Track"].map((item) => (
            <Link
              key={item}
              to={
                item === "Shop"
                  ? "/shop"
                  : `/${item.toLowerCase().replace(" ", "-")}`
              }
              className="nav-link"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Icons */}
        <div className="nav-icons">
          <button
            className="icon-btn search-btn"
            type="button"
            aria-label="Search products"
          >
            <Search size={18} />
          </button>
          <Link to="/wishlist" className="icon-btn" aria-label="Wishlist">
            <Heart size={18} />
            {wishlist.length > 0 && (
              <span
                className="badge"
                aria-label={`${wishlist.length} items in wishlist`}
              >
                {wishlist.length}
              </span>
            )}
          </Link>
          <Link to="/cart" className="icon-btn" aria-label="Cart">
            <ShoppingBag size={18} />
            {cartCount > 0 && (
              <span className="badge" aria-label={`${cartCount} items in cart`}>
                {cartCount}
              </span>
            )}
          </Link>
          <button
            className="icon-btn menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            type="button"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-nav-menu"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
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
            id="mobile-nav-menu"
            role="menu"
            aria-label="Mobile Navigation"
          >
            {["Shop", "Toys", "Accessories", "Track"].map((item) => (
              <Link
                key={item}
                to={
                  item === "Shop"
                    ? "/shop"
                    : `/${item.toLowerCase().replace(" ", "-")}`
                }
                className="nav-link"
                role="menuitem"
                onClick={() => setIsMobileMenuOpen(false)}
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
