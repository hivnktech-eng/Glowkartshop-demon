import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Minus, Plus, X, ArrowLeft, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';
import './Cart.css';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="cart-page">
        <div className="container">
          <div className="empty-cart">
            <ShoppingBag size={64} strokeWidth={1} style={{ marginBottom: '2rem', opacity: 0.3 }} />
            <h2 className="elegant-font">Your bag is currently empty.</h2>
            <p style={{ color: 'var(--color-text-muted)', margin: '1.5rem 0 3rem' }}>
              Explore the collection and find the perfect addition to your digital lifestyle.
            </p>
            <Link to="/shop" className="btn-primary">Continue Shopping</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="container">
        <header className="shop-header">
          <span className="section-subtitle">Shopping Bag</span>
          <h1 className="elegant-font">Review Your Selection</h1>
        </header>

        <div className="cart-grid">
          <div className="cart-items">
            <AnimatePresence mode="popLayout">
              {cart.map((item) => (
                <motion.div 
                  key={item.id}
                  layout
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="cart-item"
                >
                  <div className="cart-item-img">
                    <img src={item.images[0]} alt={item.name} />
                  </div>
                  <div className="cart-item-info">
                    <p className="cart-item-info-category" style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', marginBottom: '0.4rem' }}>{item.category}</p>
                    <Link to={`/product/${item.id}`}>
                      <h3>{item.name}</h3>
                    </Link>
                  </div>
                  <div className="cart-item-qty">
                    <div className="quantity-selector" style={{ transform: 'scale(0.8)' }}>
                      <button className="qty-btn" onClick={() => updateQuantity(item.id, item.quantity - 1)}><Minus size={14} /></button>
                      <span style={{ minWidth: '20px', textAlign: 'center' }}>{item.quantity}</span>
                      <button className="qty-btn" onClick={() => updateQuantity(item.id, item.quantity + 1)}><Plus size={14} /></button>
                    </div>
                  </div>
                  <div className="cart-item-price">
                    <span style={{ fontWeight: '600' }}>${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                  <button className="remove-item" onClick={() => removeFromCart(item.id)}>
                    <X size={20} color="var(--color-text-muted)" />
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>

            <Link to="/shop" className="btn-secondary" style={{ marginTop: '3rem', width: 'fit-content', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <ArrowLeft size={18} /> Continue Shopping
            </Link>
          </div>

          <aside className="cart-summary">
            <h2 className="summary-title elegant-font">Order Summary</h2>
            <div className="summary-row">
              <span>Subtotal</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Standard Shipping</span>
              <span style={{ color: '#008a00' }}>Complimentary</span>
            </div>
            <div className="summary-row">
              <span>Tax Estimator</span>
              <span>Calculated at checkout</span>
            </div>
            
            <div className="summary-row total-row">
              <span>Total</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>

            <button className="btn-primary btn-checkout" onClick={() => navigate('/checkout')}>
              Proceed to Checkout
            </button>
            <p style={{ marginTop: '2rem', fontSize: '0.75rem', color: 'var(--color-text-muted)', textAlign: 'center' }}>
              Shipping and taxes calculated during checkout process.
            </p>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Cart;
