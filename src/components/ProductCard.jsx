import React from "react";
import { Link } from "react-router-dom";
import { Heart, Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { motion } from "framer-motion";
import "./ProductCard.css";

const ProductCard = ({ product, variant = "" }) => {
  const { cart, addToCart, removeFromCart, updateQuantity } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const cartItem = cart.find((item) => item.id === product.id);
  const isInCart = !!cartItem;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`product-card ${variant ? `product-card--${variant}` : ""}`.trim()}
    >
      <div className="product-image-container">
        {product.isNew && <span className="badge-tag">New</span>}

        <Link to={`/product/${product.id}`}>
          <img
            src={product.images[0]}
            alt={product.name}
            className="product-image"
            loading="lazy"
          />
        </Link>

        <button
          className={`wishlist-btn ${isInWishlist(product.id) ? "wishlist-active" : ""}`}
          onClick={() => toggleWishlist(product)}
        >
          <Heart size={18} fill={isInWishlist(product.id) ? "#000" : "none"} />
        </button>

        {/* Overlay: show "Add to Cart" or cart controls */}
        <div
          className={`quick-view-overlay ${isInCart ? "cart-controls-visible" : ""}`}
        >
          {isInCart ? (
            <div className="cart-controls-inline">
              <button
                className="cart-ctrl-btn"
                onClick={() => {
                  if (cartItem.quantity <= 1) {
                    removeFromCart(product.id);
                  } else {
                    updateQuantity(product.id, cartItem.quantity - 1);
                  }
                }}
                title={
                  cartItem.quantity <= 1
                    ? "Remove from cart"
                    : "Decrease quantity"
                }
              >
                {cartItem.quantity <= 1 ? (
                  <Trash2 size={16} />
                ) : (
                  <Minus size={16} />
                )}
              </button>
              <span className="cart-qty-display">{cartItem.quantity}</span>
              <button
                className="cart-ctrl-btn"
                onClick={() =>
                  updateQuantity(product.id, cartItem.quantity + 1)
                }
                title="Increase quantity"
              >
                <Plus size={16} />
              </button>
            </div>
          ) : (
            <button
              className="btn-quick-view"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>

      <div className="product-info">
        <p className="product-category">{product.category}</p>
        <Link to={`/product/${product.id}`}>
          <h3 className="product-name elegant-font">{product.name}</h3>
        </Link>
        <div className="product-price-row">
          <p className="product-price">${product.price.toFixed(2)}</p>
          {isInCart && (
            <span className="product-cart-badge">
              In Cart · {cartItem.quantity}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
