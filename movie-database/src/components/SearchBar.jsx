import { useState } from 'react'

function SearchBar({ onSearch }) {
    const [query, setQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(query);
    };

    return (
        <form onSubmit={handleSubmit} className="flex space-x-2 mb-4">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for movies..."
                className="px-4 py-2 border rounded-md w-full sm:w-2/3 md:w-1/2"
            />
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">
                Search
            </button>
        </form>
    );
}

export default SearchBar;
