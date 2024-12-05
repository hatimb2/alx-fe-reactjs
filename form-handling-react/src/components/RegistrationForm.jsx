// src/components/RegistrationForm.jsx
import React, { useState } from 'react';

const RegistrationForm = () => {
  // State to store form input data (username, email, password)
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  // State to store error messages for validation
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
      [name]: value,  // Update the state for the corresponding input field
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation logic
    const newErrors = {};

    if (!formData.username) {
      newErrors.username = 'Username is required';
    }
    if (!formData.email) {
      newErrors.email = 'Email is required';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    // If validation errors exist, set them in the state
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;  // Stop form submission if validation fails
    }

    // If no errors, log the form data to the console
    console.log('Form submitted with data:', formData);

    // Reset form after successful submission
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
          value={formData.username}  // Binding value to state
          onChange={handleChange}  // Handle state updates on input change
        />
        {errors.username && <p>{errors.username}</p>}  {/* Show error message if any */}
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}  // Binding value to state
          onChange={handleChange}  // Handle state updates on input change
        />
        {errors.email && <p>{errors.email}</p>}  {/* Show error message if any */}
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}  // Binding value to state
          onChange={handleChange}  // Handle state updates on input change
        />
        {errors.password && <p>{errors.password}</p>}  {/* Show error message if any */}
      </div>

      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
