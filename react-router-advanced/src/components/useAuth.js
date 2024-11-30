import { useState } from 'react';

function useAuth() {
  // Simulating authentication state (this would normally come from context, API, or other state management)
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return {
    isAuthenticated,
    login,
    logout,
  };
}

export default useAuth;
