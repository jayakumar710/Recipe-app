import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';


const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Admin Login:', { email, password });
    navigate('/admin-recipes');
  };

  return (
    <div className="admin-bg">
      <div className="overlay"></div>

      <div className="admin-card">
        <h2>Admin Login</h2>
        <p className="subtitle">Admin only</p>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Admin email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>



          <button type="submit" className="admin-btn">
            Admin Login
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
