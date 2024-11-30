import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Profile from './components/Profile';
import Post from './components/Post';
import ProtectedRoute from './components/ProtectedRoute';
import BlogPost from './components/BlogPost';
import useAuth from './components/useAuth';

function App() {
  const { isAuthenticated, login, logout } = useAuth(); // Access auth state from useAuth

  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/posts/1">Post 1</Link>
          </li>
          <li>
            <Link to="/blog/1">Blog Post 1</Link>
          </li>
          <li>
            <Link to="/blog/2">Blog Post 2</Link>
          </li>
          <li>
            <button onClick={() => (isAuthenticated ? logout() : login())}>
              {isAuthenticated ? 'Logout' : 'Login'}
            </button>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<h2>Login Page</h2>} />
        
        {/* Protected Route for Profile */}
        <Route
          path="/profile/*"
          element={
            <ProtectedRoute
              element={<Profile />}
            />
          }
        />
        
        <Route path="/posts/:postId" element={<Post />} />
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </Router>
  );
}

function Home() {
  return <h2>Home Page</h2>;
}

export default App;