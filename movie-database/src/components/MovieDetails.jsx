function MovieDetails({ movie }) {
    return (
      <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row">
          <img
            src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400x600?text=No+Image'}
            alt={`Poster of ${movie.Title}`}
            className="w-full md:w-1/3 h-auto rounded-lg shadow-md"
          />
          <div className="mt-4 md:mt-0 md:ml-6 flex-1">
            <h1 className="text-3xl font-bold text-white">{movie.Title} ({movie.Year})</h1>
            <p className="mt-2 text-gray-400">Plot: {movie.Plot || 'No plot available.'}</p>
            <p className="mt-2 text-gray-400">Director: {movie.Director || 'Unknown'}</p>
            <p className="mt-2 text-gray-400">Actors: {movie.Actors || 'Unknown'}</p>
            <p className="mt-2 text-gray-400">Genre: {movie.Genre || 'Unknown'}</p>
            <p className="mt-2 text-gray-400">IMDB Rating: {movie.imdbRating || 'N/A'}</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default MovieDetails;
  