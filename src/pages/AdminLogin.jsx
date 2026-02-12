import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";


const AdminLogin = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      alert("Please fill all fields");
      return;
    }

    console.log("Admin Login:", form);

    navigate("/admin-recipes");
  };

  return (
    <div className="admin-container">
      <div className="admin-box">
        <h2>Admin Login</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Admin Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Admin Password"
            value={form.password}
            onChange={handleChange}
            required
          />

          <button type="submit" className="admin-btn">
            Login
          </button>
        </form>

        <p className="back-link">
          <Link to="/">← Back to Home</Link>
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;
