import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'username') setUsername(value);
    if (name === 'location') setLocation(value);
    if (name === 'minRepos') setMinRepos(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username) return;

    setLoading(true);
    setError('');
    setUserData(null);

    try {
      const data = await fetchUserData(username, location, minRepos);
      setUserData(data);
    } catch (err) {
      setError('Looks like we cant find the user.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto">
        <input
          type="text"
          name="username"
          placeholder="Search for GitHub users..."
          value={username}
          onChange={handleChange}
          className="p-2 w-full border border-gray-300 rounded-lg"
        />
        <input
          type="text"
          name="location"
          placeholder="Location (optional)"
          value={location}
          onChange={handleChange}
          className="p-2 w-full border border-gray-300 rounded-lg"
        />
        <input
          type="number"
          name="minRepos"
          placeholder="Min repositories"
          value={minRepos}
          onChange={handleChange}
          className="p-2 w-full border border-gray-300 rounded-lg"
        />
        <button
          type="submit"
          className="p-2 w-full bg-blue-500 text-white rounded-lg"
        >
          Search
        </button>
      </form>

      {loading && <p className="mt-4 text-center">Loading...</p>}

      {error && <p className="mt-4 text-center text-red-500">{error}</p>}

      {userData && !loading && !error && (
        <div className="mt-4">
          {userData.items && userData.items.map(user => (
            <div key={user.id} className="p-4 border border-gray-200 rounded-lg mb-4">
              <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
              <h2 className="text-xl mt-2">{user.name || user.login}</h2>
              <p><strong>Username:</strong> {user.login}</p>
              {user.location && <p><strong>Location:</strong> {user.location}</p>}
              <p><strong>Repositories:</strong> {user.public_repos}</p>
              <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">View Profile</a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
