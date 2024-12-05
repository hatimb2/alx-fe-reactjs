// src/components/RegistrationForm.jsx
import React, { useState } from 'react';

const RegistrationForm = () => {
  // Define form state with useState hook
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  // State to handle form errors
  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,  // Dynamically update the formData object
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation logic
    const newErrors = {};
    if (!formData.username) newErrors.username = 'Username is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';

    // If there are errors, set them in the errors state and stop submission
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // If no errors, log the form data and reset the form
    console.log('Form submitted with data:', formData);

    // Reset form
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
          value={formData.username}  // Bind input to formData.username
          onChange={handleChange}  // Update state on change
        />
        {errors.username && <p>{errors.username}</p>}  {/* Show error message */}
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}  // Bind input to formData.email
          onChange={handleChange}  // Update state on change
        />
        {errors.email && <p>{errors.email}</p>}  {/* Show error message */}
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}  // Bind input to formData.password
          onChange={handleChange}  // Update state on change
        />
        {errors.password && <p>{errors.password}</p>}  {/* Show error message */}
      </div>

      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
