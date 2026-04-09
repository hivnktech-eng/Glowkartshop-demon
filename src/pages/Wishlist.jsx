import React from 'react';
import { Link } from 'react-router-dom';
import { useWishlist } from '../context/WishlistContext';
import { Heart, ArrowRight } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import './Shop.css'; // Reuse product grid styles

const Wishlist = () => {
  const { wishlist } = useWishlist();

  return (
    <div className="shop-page">
      <div className="shop-header">
        <div className="container">
          <span className="section-subtitle">Personal Gallery</span>
          <h1 className="elegant-font">Your Curated Wishlist</h1>
        </div>
      </div>

      <div className="container" style={{ paddingBottom: '10rem' }}>
        {wishlist.length > 0 ? (
          <div className="product-grid">
            {wishlist.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="no-results">
            <Heart size={64} strokeWidth={1} style={{ marginBottom: '2rem', opacity: 0.3 }} />
            <h2 className="elegant-font">Your wishlist is empty.</h2>
            <p style={{ color: 'var(--color-text-muted)', margin: '1.5rem 0 3rem' }}>
              Save your favorite minimalist pieces to revisit them later.
            </p>
            <Link to="/shop" className="btn-primary">Explore Products <ArrowRight size={18} /></Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
