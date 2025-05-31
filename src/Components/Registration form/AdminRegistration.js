import React, { useState } from "react";
import axios from "axios";
import "./adminregistration.css";

const AdminRegistration = () => {
  const [formData, setFormData] = useState({
    adminusername: "",
    adminpassword: "",
    email: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("adminusername", formData.adminusername);
    data.append("adminpassword", formData.adminpassword);
    data.append("email", formData.email);
    data.append("image", formData.image);

    try {
      const res = await axios.post("http://localhost:8080/admin/register", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        validateStatus: () => true, // <- Prevent axios from throwing automatically
      });

      console.log("Response:", res);

      if (res.status <= 200 && res.status > 300) {
        alert("Admin Registered Successfully!");
      } else {
        alert(`Registration failed: ${res.data}`);
      }
    } catch (error) {
      console.error("Error:", error.message);
      alert("An unexpected error occurred.");
    }
  };

  return (
    <div className="admin-container">
      <form className="admin-form" onSubmit={handleSubmit}>
        <h2 className="form-title">Admin Registration</h2>

        <label>Username</label>
        <input
          type="text"
          name="adminusername"
          value={formData.adminusername}
          onChange={handleChange}
          required
        />

        <label>Password</label>
        <input
          type="password"
          name="adminpassword"
          value={formData.adminpassword}
          onChange={handleChange}
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Upload Image</label>
        <input
          type="file"
          name="image"
          onChange={handleChange}
          accept="image/*"
          required
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default AdminRegistration;
