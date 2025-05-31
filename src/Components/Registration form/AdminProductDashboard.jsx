import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./AdminProductDashboard.css";

const AdminProductDashboard = () => {
  const { state: adminData } = useLocation();
  const [productList, setProductList] = useState(adminData?.plist || []);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (adminData) setIsLoading(false);
  }, [adminData]);

  const getImageUrl = (url) => {
    if (!url || url.trim() === "") return "/default-image.png";
    const trimmed = url.trim();
    return trimmed.startsWith("http")
      ? trimmed
      : `http://localhost:8080${trimmed.startsWith("/") ? "" : "/"}${trimmed}`;
  };

  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = "/fallback-product-img.jpg";
  };

  if (isLoading) {
    return <div className="loading">Loading products...</div>;
  }

  return (
    <div className="admin-dashboard">
      <div className="product-grid">
        {productList.length > 0 ? (
          productList.map(product => (
            <div key={product.pid} className="product-card">
              <img
                src={getImageUrl(product.img)}
                alt={product.name}
                onError={handleImageError}
              />
              <span className="rating">⭐ {product.rating}</span>
              <h2>{product.name}</h2>
              <p className="price">₹{product.price.toLocaleString()}</p>
              <p className="discount">{product.off}</p>
              <p className="delivery">🚚 {product.delivery}</p>
              <p className="bank">💳 {product.bank}</p>

              <div className="actions">
                <button className="buy-btn">Buy Now</button>
              </div>
            </div>
          ))
        ) : (
          <p className="no-products">No products available.</p>
        )}
      </div>
    </div>
  );
};

export default AdminProductDashboard;
