function MovieCard({ movie, onClick }) {
    return (
      <div
        onClick={() => onClick(movie.imdbID)}
        className="cursor-pointer p-4 bg-gray-700 rounded-lg hover:shadow-lg hover:bg-gray-600 transition-transform duration-300 transform hover:scale-105 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
      >
        <div className="relative">
          <img
            src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/200x300?text=No+Image'}
            alt={movie.Title}
            className="w-full h-60 object-cover rounded-lg"
          />
          <button
            className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs"
            onClick={(e) => {
              e.stopPropagation();
              console.log(`${movie.Title} added to favorites`);
            }}
          >
            ❤️
          </button>
        </div>
        <h2 className="mt-2 text-lg font-semibold text-white">{movie.Title}</h2>
        <p className="text-sm text-gray-400">Year: {movie.Year}</p>
      </div>
    );
  }
  
  export default MovieCard;
  