import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Package,
  Truck,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";
import "./Shop.css";

const OrderTracking = () => {
  const [orderId, setOrderId] = useState("");
  const [trackingData, setTrackingData] = useState(null);
  const [isSearching, setIsSearching] = useState(false);

  const handleTrack = (e) => {
    e.preventDefault();
    if (!orderId) return;

    setIsSearching(true);
    // Simulate API call
    setTimeout(() => {
      setTrackingData({
        id: orderId,
        status: "In Transit",
        lastUpdate: "Departure from distribution center in metropolis.",
        date: "April 09, 2026",
        steps: [
          { status: "Order Secured", date: "April 07", done: true },
          { status: "Quality Assured", date: "April 07", done: true },
          { status: "Departure", date: "April 08", done: true },
          { status: "Out for Delivery", date: "Pending", done: false },
        ],
      });
      setIsSearching(false);
    }, 1500);
  };

  return (
    <div className="shop-page">
      <div className="shop-header">
        <div className="container">
          <span className="section-subtitle">Real-time Visibility</span>
          <h1 className="elegant-font">Trace Your Acquisition</h1>
        </div>
      </div>

      <div className="container tracking-container">
        <div className="tracking-shell">
          <form onSubmit={handleTrack} className="tracking-form">
            <Search size={24} className="tracking-search-icon" />
            <input
              type="text"
              placeholder="Enter Order Identification Number"
              className="checkout-input tracking-input"
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
            />
            <button
              type="submit"
              className="btn-primary tracking-submit-btn"
              disabled={isSearching}
            >
              {isSearching ? "Tracing..." : "Track"}
            </button>
          </form>

          <AnimatePresence>
            {trackingData && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="tracking-result"
              >
                <div className="tracking-result-head">
                  <div>
                    <span
                      className="section-subtitle"
                      style={{ fontSize: "0.7rem" }}
                    >
                      Current Status
                    </span>
                    <h2
                      className="elegant-font"
                      style={{ fontSize: "2rem", marginTop: "0.5rem" }}
                    >
                      {trackingData.status}
                    </h2>
                    <p
                      style={{
                        color: "var(--color-text-muted)",
                        fontSize: "0.9rem",
                        marginTop: "1rem",
                      }}
                    >
                      {trackingData.lastUpdate}
                    </p>
                  </div>
                  <div className="tracking-status-icon-box">
                    <Package size={32} strokeWidth={1.5} />
                  </div>
                </div>

                <div className="tracking-timeline">
                  {trackingData.steps.map((step, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        gap: "2rem",
                        position: "relative",
                        paddingBottom: "3rem",
                      }}
                    >
                      {i !== trackingData.steps.length - 1 && (
                        <div
                          style={{
                            position: "absolute",
                            left: "11px",
                            top: "24px",
                            bottom: 0,
                            width: "2px",
                            background: step.done
                              ? "black"
                              : "var(--color-border)",
                          }}
                        ></div>
                      )}
                      <div
                        style={{
                          width: "24px",
                          height: "24px",
                          borderRadius: "50%",
                          background: step.done ? "black" : "white",
                          border: "2px solid black",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          zIndex: 1,
                        }}
                      >
                        {step.done && <CheckCircle2 size={12} color="white" />}
                      </div>
                      <div style={{ flex: 1 }}>
                        <h4
                          style={{
                            fontSize: "1rem",
                            fontWeight: step.done ? "600" : "400",
                          }}
                        >
                          {step.status}
                        </h4>
                        <p
                          style={{
                            fontSize: "0.8rem",
                            color: "var(--color-text-muted)",
                            marginTop: "0.4rem",
                          }}
                        >
                          {step.date}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {!trackingData && !isSearching && (
            <div style={{ textAlign: "center", opacity: 0.5 }}>
              <p>Common IDs for testing: GK-39281, GK-10293</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderTracking;
