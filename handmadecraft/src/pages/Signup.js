import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
   name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.find((user) => user.email === formData.email);

    if (userExists) {
      alert('User already exists. Please login.');
    } else {
      users.push(formData);
      localStorage.setItem('users', JSON.stringify(users));
      alert('Account created successfully!');
      navigate('/login');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4 text-primary">Sign Up</h2>
      <form onSubmit={handleSubmit} className="w-50 mx-auto shadow p-4 rounded">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" name="name"placeholder="Enter your full name"
            value={formData.name} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input   type="email"  className="form-control"  id="email"  name="email" placeholder="Enter your email"
            value={formData.email} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" name="password"
          placeholder="Create a password" value={formData.password} onChange={handleChange} required  />
        </div>
        <button type="submit" className="btn btn-primary w-100">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
