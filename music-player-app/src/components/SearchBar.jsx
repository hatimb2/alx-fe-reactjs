import React from "react";
const SearchBar = ({ onSearch }) => {
  const handleChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <div className="search-bar mb-4">
      <input
        type="text"
        className="p-2 border rounded-md w-full"
        placeholder="Search for tracks, artists, or albums"
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
