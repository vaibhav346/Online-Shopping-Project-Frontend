import React, { useState } from "react";
import { useParams, useEffect } from "react-router-dom";
import "./AddOrUpdate.css";
import axios from "axios";

const AddProduct = () => {
  let params=useParams();
  let id=params.id;
  console.log(id);
 
  return (
    <div className="product-form-container">
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit} className="product-form" encType="multipart/form-data" noValidate>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Product Name"
          required
          aria-invalid={!!errors.name}
        />
        {errors.name && <small className="error">{errors.name}</small>}

        <input
          type="number"
          name="rating"
          step="0.1"
          value={formData.rating}
          onChange={handleChange}
          placeholder="Rating"
          required
          aria-invalid={!!errors.rating}
        />
        {errors.rating && <small className="error">{errors.rating}</small>}

        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Price"
          required
          aria-invalid={!!errors.price}
        />
        {errors.price && <small className="error">{errors.price}</small>}

        <input
          type="text"
          name="off"
          value={formData.off}
          onChange={handleChange}
          placeholder="Discount/Offer"
        />
        <input
          type="text"
          name="delivery"
          value={formData.delivery}
          onChange={handleChange}
          placeholder="Delivery Info"
        />
        <input
          type="text"
          name="bank"
          value={formData.bank}
          onChange={handleChange}
          placeholder="Bank Offer"
        />

        <label htmlFor="img-upload" className="file-label">
          {imageFile ? `Selected: ${imageFile.name}` : "Upload Image"}
        </label>
        <input
          type="file"
          id="img-upload"
          accept="image/*"
          onChange={handleFileChange}
          style={{ display: "none" }}
        />

        <button className="submit-btn" type="submit" disabled={loading}>
          {loading ? "Adding..." : "Add Product"}
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
