// src/components/FormikForm.jsx

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Validation schema using Yup
const validationSchema = Yup.object({
  username: Yup.string()
    .required('Username is required')
    .min(3, 'Username must be at least 3 characters long'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters long'),
});

const FormikForm = () => {
  // Initial form values
  const initialValues = {
    username: '',
    email: '',
    password: '',
  };

  // Handle form submission
  const handleSubmit = (values) => {
    console.log('Form submitted:', values);
    // Here you can call your API or process the form data as needed.
  };

  return (
    <div>
      <h1>User Registration</h1>

      {/* Formik Form */}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ touched, isSubmitting }) => (
          <Form>
            {/* Username Field */}
            <div>
              <label htmlFor="username">Username</label>
              <Field
                type="text"
                id="username"
                name="username"
                className={touched.username && errors.username ? 'input-error' : ''}
              />
              <ErrorMessage name="username" component="div" className="error" />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email">Email</label>
              <Field
                type="email"
                id="email"
                name="email"
                className={touched.email && errors.email ? 'input-error' : ''}
              />
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password">Password</label>
              <Field
                type="password"
                id="password"
                name="password"
                className={touched.password && errors.password ? 'input-error' : ''}
              />
              <ErrorMessage name="password" component="div" className="error" />
            </div>

            {/* Submit Button */}
            <div>
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Register'}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikForm;
