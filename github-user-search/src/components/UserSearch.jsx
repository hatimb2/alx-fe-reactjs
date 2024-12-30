import React, { useState } from 'react';
import axios from 'axios';  
import UserCard from './UserCard';  

const UserSearch = () => {
  const [username, setUsername] = useState('');  
  const [userData, setUserData] = useState(null);  
  const [loading, setLoading] = useState(false);  
  const [error, setError] = useState('');  

  const handleChange = (e) => {
    setUsername(e.target.value);  
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username) return; 

    setLoading(true); 
    setError('');  
    setUserData(null);  

    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setUserData(response.data); 
    } catch (err) {
      setError('User not found or an error occurred');  
    } finally {
      setLoading(false);  
    }
  };

  return (
    <div className="user-search-container">
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          placeholder="Search for GitHub user..."
          value={username}
          onChange={handleChange} 
          className="input"
        />
        <button type="submit" className="search-button">
          {loading ? 'Searching...' : 'Search'}
        </button>
      </form>

      
      {loading && <p>Loading...</p>}

      
      {error && <p className="error">{error}</p>}

      
      {userData && !loading && !error && (
        <UserCard user={userData} />  
      )}
    </div>
  );
};

export default UserSearch;
