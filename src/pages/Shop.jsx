import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, SlidersHorizontal, ChevronDown } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import './Shop.css';

const Shop = ({ category: initialCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory || 'All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState(2000);

  useEffect(() => {
    if (initialCategory) {
      setSelectedCategory(initialCategory);
    }
  }, [initialCategory]);

  const categories = ['All', 'Accessories', 'Electronic Toys'];

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategory !== 'All') {
      result = result.filter(p => p.category === selectedCategory);
    }

    if (searchQuery) {
      result = result.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    result = result.filter(p => p.price <= priceRange);

    if (sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [selectedCategory, searchQuery, sortBy, priceRange]);

  return (
    <div className="shop-page">
      <div className="shop-header">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="section-subtitle">Collection</span>
            <h1 className="elegant-font" style={{ fontSize: '3.5rem' }}>
              {selectedCategory === 'All' ? 'The Entire Spectrum' : selectedCategory}
            </h1>
          </motion.div>
        </div>
      </div>

      <div className="container">
        <div className="shop-layout">
          {/* Sidebar Filters */}
          <aside className="filters-sidebar">
            <h3>Filters</h3>
            
            <div className="filter-group">
              <span className="filter-title">Category</span>
              <div className="filter-options">
                {categories.map(cat => (
                  <label key={cat} className="filter-option" style={{ color: selectedCategory === cat ? 'var(--color-accent)' : 'inherit' }}>
                    <input 
                      type="radio" 
                      name="category" 
                      checked={selectedCategory === cat}
                      onChange={() => setSelectedCategory(cat)}
                    />
                    {cat}
                  </label>
                ))}
              </div>
            </div>

            <div className="filter-group">
              <span className="filter-title">Price Limit: ${priceRange}</span>
              <input 
                type="range" 
                min="0" 
                max="2000" 
                step="50"
                value={priceRange}
                onChange={(e) => setPriceRange(Number(e.target.value))}
                style={{ width: '100%', accentColor: 'black' }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginTop: '0.5rem', color: 'var(--color-text-muted)' }}>
                <span>$0</span>
                <span>$2000</span>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="shop-content">
            <div className="shop-controls">
              <div style={{ position: 'relative', flex: 1, maxWidth: '400px' }}>
                <Search size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)' }} />
                <input 
                  type="text" 
                  placeholder="Search products..." 
                  className="newsletter-input" 
                  style={{ width: '100%', paddingLeft: '3rem', borderBottom: '1px solid var(--color-border)' }}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                <span className="result-count">{filteredProducts.length} items</span>
                <select className="sort-select" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                  <option value="featured">Sort by Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="product-grid">
                <AnimatePresence mode="popLayout">
                  {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </AnimatePresence>
              </div>
            ) : (
              <div className="no-results">
                <h3 className="elegant-font">No items found matching your criteria.</h3>
                <p style={{ color: 'var(--color-text-muted)', marginTop: '1rem' }}>Try adjusting your filters or search query.</p>
                <button 
                  onClick={() => { setSelectedCategory('All'); setSearchQuery(''); setPriceRange(2000); }} 
                  className="btn-secondary" 
                  style={{ marginTop: '2rem' }}
                >
                  Reset All Filters
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Shop;
