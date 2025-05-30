// src/pages/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];

    const user = users.find((u) => u.email === email);

    if (!user) {
      setMessage('❌ Account does not exist!');
    } else if (user.password !== password) {
      setMessage('❌ Invalid password!');
    } else {
      setMessage('✅ Login successful!');
      localStorage.setItem('loggedInUser', JSON.stringify(user));
      setTimeout(() => navigate('/'), 1000);
    }
  };

  return (
    <div className="container mt-5 col-md-6">
      <h2 className="mb-4 text-primary">Login</h2>
      {message && <div className="alert alert-warning">{message}</div>}
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label>Email</label>
          <input type="email" className="form-control" required
            value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input type="password" className="form-control" required
            value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button className="btn btn-primary" type="submit">Login</button>
        <p className="mt-3 text-dark">Don't have an account? <a href="/signup">Sign Up</a></p>
      </form>
    </div>
  );
}

export default Login;
