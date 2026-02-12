import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div className="home-bg">
      <div className="overlay"></div>

      <div className="home-card">
        <h1> 🤭 Welcome To...😋  </h1>
        <p>  𝔸2ℤ ℝ𝕖𝕔𝕚𝕡𝕖 𝔽𝕒𝕚𝕟𝕥𝕖𝕣 𝔸𝕡𝕡  </p>

        <div className="home-links">
          <Link to="/register" className="home-btn">User Register</Link>
          <Link to="/login" className="home-btn">User Login</Link>

          <Link to="/admin-login" className="home-btn admin">Admin Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
