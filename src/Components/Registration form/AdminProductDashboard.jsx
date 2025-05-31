import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./AdminProductDashboard.css";

const AdminProductDashboard = () => {
  const { state: adminData } = useLocation();
  const navigate = useNavigate();

  const [productList, setProductList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("http://localhost:8080/admin/");
      if (!response.ok) throw new Error("Failed to fetch products");
      const data = await response.json();
      setProductList(data || []);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const getImageUrl = (url) => {
    if (!url?.trim()) return "/default-image.png";
    const trimmed = url.trim();
    return trimmed.startsWith("http")
      ? trimmed
      : `http://localhost:8080${trimmed.startsWith("/") ? "" : "/"}${trimmed}`;
  };

  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = "/fallback-product-img.jpg";
  };

  const handleDelete = async (pid) => {
    const confirmed = window.confirm("Are you sure you want to delete this product?");
    if (!confirmed) return;

    try {
      const res = await fetch(`http://localhost:8080/admin/${pid}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Delete request failed");

      // Re-fetch list after delete
      fetchProducts();
    } catch (error) {
      console.error("Delete failed:", error);
      alert("Failed to delete product.");
    }
  };

  const handleUpdate = (product) => {
    navigate("/AddOrUpdate", { state: { product } });
  };

  const handleAddProduct = () => {
    navigate("/AddProduct", { state: { admin: adminData } });
  };

  if (isLoading) {
    return <div className="loading">Loading products...</div>;
  }

  return (
    <div className="admin-dashboard">
      <div className="dashboard-header">
        <h1>Product Dashboard</h1>
        <button className="add-btn" onClick={handleAddProduct}>
          Add Product
        </button>
      </div>

      <div className="product-grid">
        {productList.length > 0 ? (
          productList.map((product) => (
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
                <button className="update-btn" onClick={() => handleUpdate(product)}>Update</button>
                <button className="delete-btn" onClick={() => handleDelete(product.pid)}>Delete</button>
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
