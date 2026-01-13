// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';

// const AdminLogin = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [adminCode, setAdminCode] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here you would typically handle admin login logic, e.g., API call with admin code
//     console.log('Admin Login:', { email, password, adminCode });
//     // For demo, just navigate to home
//     navigate('/admin-recipes');
//   };

//   const styles = {
//     container: {
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       minHeight: '100vh',
//       background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//       fontFamily: 'Arial, sans-serif',
//     },
//     formWrapper: {
//       background: 'rgba(255, 255, 255, 0.95)',
//       padding: '40px',
//       borderRadius: '15px',
//       boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
//       width: '100%',
//       maxWidth: '400px',
//       backdropFilter: 'blur(10px)',
//       border: '1px solid rgba(255, 255, 255, 0.2)',
//     },
//     title: {
//       textAlign: 'center',
//       marginBottom: '30px',
//       color: '#333',
//       fontSize: '28px',
//       fontWeight: 'bold',
//       textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
//     },
//     form: {
//       display: 'flex',
//       flexDirection: 'column',
//     },
//     inputGroup: {
//       marginBottom: '20px',
//     },
//     label: {
//       display: 'block',
//       marginBottom: '5px',
//       color: '#555',
//       fontWeight: '600',
//       fontSize: '14px',
//     },
//     input: {
//       width: '100%',
//       padding: '12px 15px',
//       border: '2px solid #e1e5e9',
//       borderRadius: '8px',
//       fontSize: '16px',
//       transition: 'all 0.3s ease',
//       boxSizing: 'border-box',
//       backgroundColor: '#f8f9fa',
//     },
//     inputFocus: {
//       borderColor: '#667eea',
//       boxShadow: '0 0 0 3px rgba(102, 126, 234, 0.1)',
//       backgroundColor: '#fff',
//     },
//     button: {
//       background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//       color: 'white',
//       border: 'none',
//       padding: '15px',
//       borderRadius: '8px',
//       fontSize: '16px',
//       fontWeight: 'bold',
//       cursor: 'pointer',
//       transition: 'all 0.3s ease',
//       marginTop: '10px',
//     },
//     buttonHover: {
//       transform: 'translateY(-2px)',
//       boxShadow: '0 10px 20px rgba(102, 126, 234, 0.3)',
//     },
//     link: {
//       textAlign: 'center',
//       marginTop: '20px',
//       color: '#667eea',
//       textDecoration: 'none',
//       fontSize: '14px',
//       transition: 'color 0.3s ease',
//     },
//     linkHover: {
//       color: '#764ba2',
//     },
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.formWrapper}>
//         <h1 style={styles.title}>Admin Login</h1>
//         <form onSubmit={handleSubmit} style={styles.form}>
//           <div style={styles.inputGroup}>
//             <label style={styles.label}>Email:</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               style={styles.input}
//               onFocus={(e) => Object.assign(e.target.style, styles.inputFocus)}
//               onBlur={(e) => Object.assign(e.target.style, styles.input)}
//             />
//           </div>
//           <div style={styles.inputGroup}>
//             <label style={styles.label}>Password:</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               style={styles.input}
//               onFocus={(e) => Object.assign(e.target.style, styles.inputFocus)}
//               onBlur={(e) => Object.assign(e.target.style, styles.input)}
//             />
//           </div>
//           <div style={styles.inputGroup}>
//             <label style={styles.label}>Admin Code:</label>
//             <input
//               type="text"
//               value={adminCode}
//               onChange={(e) => setAdminCode(e.target.value)}
//               required
//               style={styles.input}
//               onFocus={(e) => Object.assign(e.target.style, styles.inputFocus)}
//               onBlur={(e) => Object.assign(e.target.style, styles.input)}
//             />
//           </div>
//           <button
//             type="submit"
//             style={styles.button}
//             onMouseEnter={(e) => Object.assign(e.target.style, styles.buttonHover)}
//             onMouseLeave={(e) => Object.assign(e.target.style, styles.button)}
//           >
//             Admin Login
//           </button>
//         </form>
//         <Link to="/" style={styles.link}>Back to Home</Link>
//       </div>
//     </div>
//   );
// };

// export default AdminLogin;
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
// import './AdminLogin.css';

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
