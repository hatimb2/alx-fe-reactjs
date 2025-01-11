import React from "react";
import { useState } from 'react'

const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(input); // Trigger the search with the input value
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center mb-6">
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Search for tracks, artists, or albums"
        className="p-2 border border-gray-300 rounded-lg"
      />
      <button type="submit" className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg">Search</button>
    </form>
  );
};

export default SearchBar;
