// import React from 'react';
// import { Link } from 'react-router-dom';

// const Home = () => {
//   return (
//     <div className='ho1'>
//       <h1 className='one'>Welcome to the Home Page</h1>
//       <p className='two'>This is the home page of our multi-page React app.</p>
//       <nav>
//         <Link to="/login">Login</Link> | <Link to="/register">Register</Link> | <Link to="/admin-login">Admin Login</Link>
//       </nav>
//     </div>
//   );
// };

// export default Home;
import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div className="home-bg">
      <div className="overlay"></div>

      <div className="home-card">
        <h1> 😋 Welcome To...🤭  </h1>
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
