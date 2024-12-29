import React, { useState } from 'react';
import axios from 'axios';
import UserCard from './UserCard';

const UserSearch = () => {
  const [query, setQuery] = useState('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get(`https://api.github.com/users/${query}`);
      setUser(response.data);
    } catch (err) {
      setError('User not found or an error occurred.');
    }
    setLoading(false);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search GitHub user..."
        value={query}
        onChange={(e) => setQuery(e['target']['value'])} 
      />
      <button onClick={handleSearch} disabled={loading}>
        {loading ? 'Searching...' : 'Search'}
      </button>
      {error && <p>{error}</p>}
      {user && <UserCard user={user} />}
    </div>
  );
};

export default UserSearch;
