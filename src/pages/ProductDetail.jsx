import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Minus, Plus, Heart, Share2, Shield, Truck, RotateCcw, Star } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import ProductCard from '../components/ProductCard';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeImg, setActiveImg] = useState(0);

  useEffect(() => {
    const found = products.find(p => p.id === parseInt(id));
    if (found) {
      setProduct(found);
      setActiveImg(0);
      setQuantity(1);
    }
  }, [id]);

  if (!product) return (
    <div className="container" style={{ padding: '10rem 0', textAlign: 'center' }}>
      <h2 className="elegant-font">Product not found.</h2>
      <Link to="/shop" className="btn-secondary" style={{ marginTop: '2rem' }}>Back to Shop</Link>
    </div>
  );

  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3);

  return (
    <div className="product-detail-page">
      <div className="container">
        <div className="product-detail-grid">
          {/* Gallery */}
          <div className="product-gallery">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              key={activeImg}
              className="main-image"
            >
              <img src={product.images[0]} alt={product.name} />
            </motion.div>
            <div className="thumb-grid">
              {product.images.map((img, i) => (
                <div 
                  key={i} 
                  className={`thumb-item ${activeImg === i ? 'active' : ''}`}
                  onClick={() => setActiveImg(i)}
                >
                  <img src={img} alt={`${product.name} ${i}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="product-main-info">
            <div className="info-header">
              <span className="detail-category">{product.category}</span>
              <h1 className="detail-title elegant-font">{product.name}</h1>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '1rem' }}>
                <div style={{ display: 'flex' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill={i < Math.floor(product.rating) ? 'black' : 'none'} color="black" />
                  ))}
                </div>
                <span style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>({product.reviews} customer reviews)</span>
              </div>
            </div>

            <p className="detail-price">${product.price.toFixed(2)}</p>
            
            <p className="detail-desc">{product.description}</p>

            <div className="spec-list">
              {product.specs.map((spec, i) => (
                <div key={i} className="spec-item">
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'black' }}></div>
                  {spec}
                </div>
              ))}
            </div>

            <div className="add-to-cart-section">
              <div className="quantity-selector">
                <button className="qty-btn" onClick={() => setQuantity(Math.max(1, quantity - 1))}><Minus size={16} /></button>
                <span style={{ minWidth: '30px', textAlign: 'center', fontWeight: '600' }}>{quantity}</span>
                <button className="qty-btn" onClick={() => setQuantity(quantity + 1)}><Plus size={16} /></button>
              </div>
              <button className="btn-primary btn-add-cart" onClick={() => addToCart(product, quantity)}>
                <ShoppingBag size={20} /> Add to Cart
              </button>
              <button 
                className="icon-btn" 
                style={{ border: '1px solid var(--color-border)', borderRadius: '50%', padding: '1rem' }}
                onClick={() => toggleWishlist(product)}
              >
                <Heart size={20} fill={isInWishlist(product.id) ? 'black' : 'none'} />
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '2rem' }}>
              <div className="spec-item" style={{ color: 'var(--color-text-muted)' }}>
                <Truck size={20} /> <span>Complimentary carbon-neutral shipping on all orders.</span>
              </div>
              <div className="spec-item" style={{ color: 'var(--color-text-muted)' }}>
                <RotateCcw size={20} /> <span>30-day effortless returns in original packaging.</span>
              </div>
              <div className="spec-item" style={{ color: 'var(--color-text-muted)' }}>
                <Shield size={20} /> <span>Two-year global hardware warranty included.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section style={{ marginTop: '10rem' }}>
            <div className="section-header">
              <span className="section-subtitle">Complementary</span>
              <h2 className="section-title">You Might Also Like</h2>
            </div>
            <div className="product-grid">
              {relatedProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
