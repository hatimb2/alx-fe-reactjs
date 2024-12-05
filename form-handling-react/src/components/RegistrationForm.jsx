// src/components/RegistrationForm.jsx
import React, { useState } from 'react';

const RegistrationForm = () => {
  // Form data state to store input field values
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  // Error state to store error messages for validation
  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
  });

  // Handle changes in input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,  // Dynamically update the formData for each field
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation logic
    const newErrors = {};
    if (!formData.username) newErrors.username = 'Username is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';

    // If there are validation errors, set them and prevent form submission
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // If no errors, log the form data to the console
    console.log('Form submitted with data:', formData);

    // Reset form fields after submission
    setFormData({
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
          value={formData.username}  // Corrected value binding
          onChange={handleChange}  // Update the form data when input changes
        />
        {errors.username && <p>{errors.username}</p>}  {/* Show error if any */}
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}  // Corrected value binding
          onChange={handleChange}  // Update the form data when input changes
        />
        {errors.email && <p>{errors.email}</p>}  {/* Show error if any */}
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}  // Corrected value binding
          onChange={handleChange}  // Update the form data when input changes
        />
        {errors.password && <p>{errors.password}</p>}  {/* Show error if any */}
      </div>

      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
