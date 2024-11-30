import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth'; // Import the useAuth hook

function ProtectedRoute({ element }) {
  const { isAuthenticated } = useAuth(); // Get authentication status from the hook

  return isAuthenticated ? element : <Navigate to="/login" />;
}

export default ProtectedRoute;
