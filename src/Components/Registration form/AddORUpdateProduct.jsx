import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./AddOrUpdate.css";

const UpdateProduct = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const product = state?.product;
  const admin = state?.admin;

  const [formData, setFormData] = useState({
    pid: "",
    name: "",
    rating: "",
    price: "",
    off: "",
    delivery: "",
    bank: "",
    img: "",
  });

  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    if (product) {
      setFormData({
        pid: product.pid,
        name: product.name,
        rating: product.rating,
        price: product.price,
        off: product.off,
        delivery: product.delivery,
        bank: product.bank,
        img: product.img,
      });
    }
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let imageUrl = formData.img;

    // Step 1: Upload image if a new file is selected
    if (imageFile) {
      const imageForm = new FormData();
      imageForm.append("img", imageFile);

      try {
        const imageRes = await fetch("http://localhost:8080/admin/upload-product-image", {
          method: "POST",
          body: imageForm,
        });

        if (!imageRes.ok) throw new Error("Image upload failed");

        imageUrl = await imageRes.text(); // This should be the image URL
      } catch (err) {
        console.error(err);
        alert("Image upload failed");
        return;
      }
    }

    // Step 2: Prepare updated product object
    const updatedProduct = {
      pid: formData.pid,
      name: formData.name,
      rating: parseFloat(formData.rating),
      price: parseFloat(formData.price),
      off: formData.off,
      delivery: formData.delivery,
      bank: formData.bank,
      img: imageUrl,
    };

    // Step 3: Send product update to backend using admin ID
    try {
      const response = await fetch(`http://localhost:8080/admin/updatebyid/${admin.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...admin,
          plist: [updatedProduct],
        }),
      });

      if (!response.ok) throw new Error("Update failed");

      alert("Product updated successfully");
      navigate("/admin-dashboard", { state });
    } catch (error) {
      console.error("Update failed:", error);
      alert("Failed to update product");
    }
  };

  return (
    <div className="product-form-container">
      <h2>Update Product</h2>
      <form onSubmit={handleSubmit} className="product-form">
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Product Name" required />
        <input type="number" step="0.1" name="rating" value={formData.rating} onChange={handleChange} placeholder="Rating" required />
        <input type="number" name="price" value={formData.price} onChange={handleChange} placeholder="Price" required />
        <input type="text" name="off" value={formData.off} onChange={handleChange} placeholder="Discount/Offer" />
        <input type="text" name="delivery" value={formData.delivery} onChange={handleChange} placeholder="Delivery Info" />
        <input type="text" name="bank" value={formData.bank} onChange={handleChange} placeholder="Bank Offer" />
        <input type="file" accept="image/*" onChange={handleFileChange} />

        <button className="submit-btn" type="submit">Update Product</button>
      </form>
    </div>
  );
};

export default UpdateProduct;
