// src/components/RegistrationForm.jsx
import React, { useState } from 'react';

const RegistrationForm = () => {
  // State to store form data (username, email, password)
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  // State to store error messages
  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
  });

  // Handle input field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,  // Dynamically update the state field based on the name of the input
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Error object to store validation errors
    const newErrors = {};

    // Basic validation checks
    if (!formData.username) {
      newErrors.username = 'Username is required';
    }
    if (!formData.email) {
      newErrors.email = 'Email is required';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    // Check if there are any validation errors
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);  // Set the errors in state if any are found
      return;  // Prevent form submission if there are errors
    }

    // If no errors, proceed with form submission (e.g., log data or send it to an API)
    console.log('Form submitted with data:', formData);

    // Clear form fields after submission
    setFormData({
      username: '',
      email: '',
      password: '',
    });

    // Clear errors after successful submission
    setErrors({
      username: '',
      email: '',
      password: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}  // Controlled input, bound to state
          onChange={handleChange}  // Update state when input changes
        />
        {errors.username && <p>{errors.username}</p>}  {/* Show error if any */}
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}  // Controlled input, bound to state
          onChange={handleChange}  // Update state when input changes
        />
        {errors.email && <p>{errors.email}</p>}  {/* Show error if any */}
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}  // Controlled input, bound to state
          onChange={handleChange}  // Update state when input changes
        />
        {errors.password && <p>{errors.password}</p>}  {/* Show error if any */}
      </div>

      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
