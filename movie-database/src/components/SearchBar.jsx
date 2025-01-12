import React from 'react';

function SearchBar({ searchQuery, onSearchChange, onSearchClick }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSearchClick();
      }}
      className="flex flex-col items-center space-y-4 md:space-y-0 md:flex-row md:space-x-4 p-6 bg-gray-800 rounded-lg shadow-lg"
    >
      <input
        type="text"
        value={searchQuery}
        onChange={onSearchChange}
        placeholder="Search for movies..."
        className="w-full md:w-1/2 lg:w-1/3 px-4 py-2 rounded-lg border border-gray-600 bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />
      <button
        type="submit"
        className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;
