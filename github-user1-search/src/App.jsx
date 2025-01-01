import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { fetchUserData } from './services/githubService';
import Search from './components/Search';


function App() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (query) => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchUserData(query); 
      setUserData(data); 
    } catch (err) {
      setError('Looks like we can’t find the user');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      {/* Edit the header to see HMR in action */}
      <h1>GitHub User Search - React & Vite</h1> {/* Updated text */}
      <div className="card">
        <button onClick={() => setUserData(null)}>
          Clear Search
        </button>
      </div>

      {/* Search Form */}
      <div>
        <Search onSearch={handleSearch} />
      </div>

      {/* Display loading, error, or user data */}
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {/* Display user information */}
      {userData && (
        <div className="space-y-4 mt-4">
          <div className="flex items-center space-x-4 border p-4 rounded">
            <img
              src={userData.avatar_url}
              alt={userData.login}
              className="w-16 h-16 rounded-full"
            />
            <div>
              <p className="font-semibold">{userData.login}</p>
              <a
                href={userData.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                View Profile
              </a>
              <p className="text-sm">Location: {userData.location || 'Not available'}</p>
              <p className="text-sm">Repositories: {userData.public_repos}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
