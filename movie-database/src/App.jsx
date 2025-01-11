import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from './components/MovieCard';
import SearchBar from './components/SearchBar';
import MovieDetails from './components/MovieDetails';
function App() {
  // State variables
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch movies based on search query
  const fetchMovies = async () => {
    if (!searchQuery) return; // Don't fetch if there's no search query

    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `http://www.omdbapi.com/?apikey=${import.meta.env.VITE_OMDB_API_KEY}&s=${searchQuery}`
      );
      if (response.data.Response === "True") {
        setMovies(response.data.Search);
      } else {
        setMovies([]);
        setError('No results found.');
      }
    } catch (err) {
      setError('Error fetching data.');
    } finally {
      setLoading(false);
    }
  };

  // Fetch movie details
  const fetchMovieDetails = async (id) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `http://www.omdbapi.com/?apikey=${import.meta.env.VITE_OMDB_API_KEY}&i=${id}`
      );
      setSelectedMovie(response.data);
    } catch (err) {
      setError('Error fetching movie details.');
    } finally {
      setLoading(false);
    }
  };

  // Handle Search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Handle Search button click
  const handleSearchClick = () => {
    fetchMovies();
  };

  // Handle movie card click to show details
  const handleMovieClick = (id) => {
    fetchMovieDetails(id);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-800 text-white">
      <header className="w-full p-4 text-center">
        <h1 className="text-4xl font-semibold">Movie Database</h1>
      </header>

      {/* Search Section */}
      <section className="w-full max-w-3xl p-4">
        <input
          type="text"
          placeholder="Search for a movie..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSearchClick}
          className="mt-4 w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500"
        >
          Search
        </button>
      </section>

      {/* Error Message */}
      {error && <p className="text-red-500">{error}</p>}

      {/* Movie List Section */}
      {loading ? (
        <p className="text-white">Loading...</p>
      ) : (
        <section className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {movies.map((movie) => (
            <div
              key={movie.imdbID}
              onClick={() => handleMovieClick(movie.imdbID)}
              className="cursor-pointer p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition"
            >
              <img
                src={movie.Poster !== "N/A" ? movie.Poster : 'https://via.placeholder.com/200x300?text=No+Image'}
                alt={movie.Title}
                className="w-full h-48 object-cover rounded-lg"
              />
              <h2 className="mt-2 text-xl font-semibold">{movie.Title}</h2>
              <p className="text-sm text-gray-400">Year: {movie.Year}</p>
            </div>
          ))}
        </section>
      )}

      {/* Movie Details Section */}
      {selectedMovie && (
        <section className="w-full max-w-3xl p-4 bg-gray-700 rounded-lg mt-8">
          <h2 className="text-3xl font-semibold">{selectedMovie.Title} ({selectedMovie.Year})</h2>
          <p className="text-gray-400">{selectedMovie.Genre}</p>
          <p className="mt-4">{selectedMovie.Plot}</p>
          <h3 className="mt-4 text-xl font-semibold">Cast:</h3>
          <ul>
            {selectedMovie.Actors.split(', ').map((actor, index) => (
              <li key={index}>{actor}</li>
            ))}
          </ul>
          <h3 className="mt-4 text-xl font-semibold">Ratings:</h3>
          <ul>
            {selectedMovie.Ratings.map((rating) => (
              <li key={rating.Source}>
                {rating.Source}: {rating.Value}
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}

export default App;
