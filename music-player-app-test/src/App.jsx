import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import './index.css';
import TrackCard from './components/TrackCard';
import MusicPlayer from './components/MusicPlayer';
import SearchBar from './components/SearchBar';
import useFetchTracks from './hooks/useFetchTracks';
import React from 'react';

function App() {
  const [query, setQuery] = useState('eminem'); // Default search query
  const [tracks, setTracks] = useState([]); // Holds the tracks fetched from the API
  const [currentTrack, setCurrentTrack] = useState(null); // Holds the currently selected track

  // Custom hook to fetch tracks from Spotify API
  const { data, error, loading } = useFetchTracks(query);

  useEffect(() => {
    setTracks(data); // Set the fetched tracks when data changes
  }, [data]);

  // Handler for searching tracks
  const handleSearch = (newQuery) => {
    setQuery(newQuery); // Set the query and trigger the custom hook to fetch new tracks
  };

  return (
    <div className="container mx-auto p-4">
      {/* Logos and app header */}
      <div className="flex justify-between items-center">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="text-4xl font-semibold text-center my-4">Vite + React Music Player</h1>

      {/* Search bar */}
      <SearchBar onSearch={handleSearch} />

      {/* Error handling for search */}
      {error && <p className="text-red-500">{error}</p>}
      {loading && <p>Loading...</p>}

      {/* Display music tracks */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {tracks.length > 0 ? (
          tracks.map((track) => (
            <TrackCard key={track.id} track={track} onClick={() => setCurrentTrack(track)} />
          ))
        ) : (
          <p>No tracks found.</p>
        )}
      </div>

      {/* Music player */}
      {currentTrack && (
        <div className="mt-8">
          <MusicPlayer track={currentTrack} />
        </div>
      )}
    </div>
  );
}

export default App;
