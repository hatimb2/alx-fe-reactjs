import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from './components/MovieCard';
import SearchBar from './components/SearchBar';
import MovieDetails from './components/MovieDetails';
import './index.css';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  
  useEffect(() => {
    if (searchQuery.trim()) {
      fetchMovies();
    }
  }, [searchQuery]);

  
  const fetchMovies = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_OMDB_API_KEY}&s=${searchQuery.trim()}`
      );
      if (response.data.Response === "True") {
        setMovies(response.data.Search);
      } else {
        setMovies([]);
        setError('No results found.');
      }
    } catch (err) {
      setError('Error fetching movie data. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  
  const fetchMovieDetails = async (id) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_OMDB_API_KEY}&i=${id}`
      );
      setSelectedMovie(response.data);
    } catch (err) {
      setError('Error fetching movie details. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  
  const handleSearchClick = () => {
    if (searchQuery.trim()) {
      fetchMovies();
    }
  };

  
  const handleMovieClick = (id) => {
    fetchMovieDetails(id);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-900 text-white transition-colors duration-300">
      <header className="w-full p-4 text-center animate__animated animate__fadeIn">
        <h1 className="text-4xl font-semibold">Movie Database</h1>
      </header>

      {/* Centered Search Bar */}
      <div className="flex items-center justify-center w-full flex-grow animate__animated animate__fadeIn">
        <div className="w-full max-w-md p-4">
          <SearchBar
            searchQuery={searchQuery}
            onSearchChange={handleSearchChange}
            onSearchClick={handleSearchClick}
          />
        </div>
      </div>

      {/* Error Message */}
      {error && <p className="text-red-500">{error}</p>}

      {/* Movie List Section */}
      {loading ? (
        <p className="text-white">Loading...</p>
      ) : (
        <section className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 animate__animated animate__fadeIn">
          {movies.length > 0 ? (
            movies.map((movie) => (
              <MovieCard
                key={movie.imdbID}
                movie={movie}
                onClick={() => handleMovieClick(movie.imdbID)}
              />
            ))
          ) : (
            <p className="text-white">No movies found. Please try again with a different search.</p>
          )}
        </section>
      )}

      {/* Movie Details Section */}
      {selectedMovie && (
        <section className="w-full max-w-3xl p-4 bg-gray-700 rounded-lg mt-8 animate__animated animate__fadeIn">
          <MovieDetails movie={selectedMovie} />
        </section>
      )}
    </div>
  );
}

export default App;
