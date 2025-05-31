import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./AddOrUpdate.css";

const AddProduct = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const admin = state?.admin;

  const [formData, setFormData] = useState({
    name: "",
    rating: "",
    price: "",
    off: "",
    delivery: "",
    bank: "",
  });

  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Clear error for this field on change
    setErrors((prev) => ({ ...prev, [name]: null }));

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setImageFile(e.target.files[0]);
    } else {
      setImageFile(null);
    }
  };

  // Simple validation before submit
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.rating || isNaN(formData.rating)) newErrors.rating = "Valid rating is required";
    if (!formData.price || isNaN(formData.price)) newErrors.price = "Valid price is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!admin || !admin.id) {
      alert("Admin information is missing. Cannot add product.");
      return;
    }

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);

    try {
      const form = new FormData();
      form.append("name", formData.name.trim());
      form.append("rating", parseFloat(formData.rating));
      form.append("price", parseFloat(formData.price));
      form.append("off", formData.off.trim());
      form.append("delivery", formData.delivery.trim());
      form.append("bank", formData.bank.trim());
      if (imageFile) form.append("img", imageFile);

      const res = await fetch(`http://localhost:8080/admin/add/${admin.id}`, {
        method: "POST",
        body: form,
      });

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(errorText || "Add failed");
      }

      alert("Product added successfully");

      // Clear form after success
      setFormData({
        name: "",
        rating: "",
        price: "",
        off: "",
        delivery: "",
        bank: "",
      });
      setImageFile(null);

      navigate("/admin-dashboard", { state });
    } catch (err) {
      console.error(err);
      alert("Error adding product: " + err.message);
    } finally {
      setLoading(false);
    }
  };

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
