import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Check, CreditCard, Ship, ShoppingBag, ArrowRight, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Checkout.css';

const Checkout = () => {
  const { cart, cartTotal, clearCart } = useCart();
  const [step, setStep] = useState(1); // 1: Shipping, 2: Payment, 3: Success
  const [isProcessing, setIsProcessing] = useState(false);
  const navigate = useNavigate();
  const [orderId] = useState(() => (Math.random() * 1000000).toFixed(0));

  const handlePlaceOrder = () => {
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setStep(3);
      clearCart();
    }, 3000);
  };

  if (step === 3) {
    return (
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="order-success-card"
        >
          <div style={{ width: '80px', height: '80px', background: 'black', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 3rem' }}>
            <Check size={40} />
          </div>
          <h2 className="elegant-font" style={{ fontSize: '2.5rem' }}>Your selection has been secured.</h2>
          <p style={{ margin: '2rem 0 4rem', color: '#666' }}>
            Order #GK-{orderId} is being prepared for carbon-neutral shipment. <br/>
            A confirmation has been sent to your digital address.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
            <button className="btn-primary" onClick={() => navigate('/')}>Return Home</button>
            <button className="btn-secondary" onClick={() => navigate('/track')}>Track Order</button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <div className="container">
        <div className="checkout-grid">
          <div className="checkout-steps">
            {/* Step 1: Shipping */}
            <section className={`checkout-step ${step === 1 ? 'active' : ''}`}>
              <span className="step-num">Step 01</span>
              <h2 className="step-title elegant-font">Shipping Destination</h2>
              <div className="form-grid">
                <div className="form-group">
                  <label className="form-label">First Name</label>
                  <input type="text" className="checkout-input" placeholder="Alexander" />
                </div>
                <div className="form-group">
                  <label className="form-label">Last Name</label>
                  <input type="text" className="checkout-input" placeholder="Vance" />
                </div>
                <div className="form-group full">
                  <label className="form-label">Full Address</label>
                  <input type="text" className="checkout-input" placeholder="123 Minimalist Way, Clarity District" />
                </div>
                <div className="form-group">
                  <label className="form-label">City</label>
                  <input type="text" className="checkout-input" placeholder="Metropolis" />
                </div>
                <div className="form-group">
                  <label className="form-label">Postal Code</label>
                  <input type="text" className="checkout-input" placeholder="10001" />
                </div>
              </div>
              {step === 1 && (
                <button className="btn-primary" style={{ marginTop: '4rem' }} onClick={() => setStep(2)}>
                  Continue to Payment <ArrowRight size={18} />
                </button>
              )}
            </section>

            {/* Step 2: Payment */}
            <section className={`checkout-step ${step === 2 ? 'active' : ''}`}>
              <span className="step-num">Step 02</span>
              <h2 className="step-title elegant-font">Secured Payment</h2>
              <div className="form-grid">
                <div className="form-group full">
                  <div className="payment-method selected">
                    <CreditCard size={24} />
                    <div style={{ flex: 1 }}>
                      <p style={{ fontWeight: '600' }}>Credit / Debit Card</p>
                      <p style={{ fontSize: '0.8rem', opacity: 0.6 }}>Encrypted end-to-end</p>
                    </div>
                  </div>
                </div>
                <div className="form-group full">
                   <label className="form-label">Card Holder</label>
                   <input type="text" className="checkout-input" placeholder="Alexander Vance" />
                </div>
                <div className="form-group full">
                   <label className="form-label">Card Number</label>
                   <input type="text" className="checkout-input" placeholder="•••• •••• •••• ••••" />
                </div>
                <div className="form-group">
                   <label className="form-label">Expiry Date</label>
                   <input type="text" className="checkout-input" placeholder="MM / YY" />
                </div>
                <div className="form-group">
                   <label className="form-label">CVV</label>
                   <input type="text" className="checkout-input" placeholder="•••" />
                </div>
              </div>
              {step === 2 && (
                <div style={{ display: 'flex', gap: '2rem', marginTop: '4rem' }}>
                  <button className="btn-secondary" onClick={() => setStep(1)}>
                    <ArrowLeft size={18} /> Back
                  </button>
                  <button className="btn-primary" style={{ flex: 1, justifyContent: 'center' }} onClick={handlePlaceOrder} disabled={isProcessing}>
                    {isProcessing ? 'Processing Securely...' : `Secure Order for $${cartTotal.toFixed(2)}`}
                  </button>
                </div>
              )}
            </section>
          </div>

          {/* Mini Summary */}
          <aside className="checkout-summary-mini">
            <h3 className="elegant-font" style={{ marginBottom: '2.5rem' }}>Your Selection</h3>
            <div className="mini-items" style={{ maxHeight: '400px', overflowY: 'auto', marginBottom: '2.5rem' }}>
              {cart.map(item => (
                <div key={item.id} className="mini-item">
                  <div className="mini-img">
                    <img src={item.images[0]} alt={item.name} />
                  </div>
                  <div className="mini-info">
                    <h4>{item.name}</h4>
                    <p>{item.quantity} × ${item.price.toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '2rem' }}>
              <div className="summary-row">
                <span>Total Due</span>
                <span style={{ fontWeight: '700', fontSize: '1.2rem' }}>${cartTotal.toFixed(2)}</span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
