function MovieDetails({ movie }) {
    return (
        <div className="p-4 mt-6 border-t-2">
            <h1 className="text-2xl font-bold">{movie.Title} ({movie.Year})</h1>
            <img src={movie.Poster} alt={movie.Title} className="w-1/3 h-auto mt-4" />
            <p className="mt-4">{movie.Plot}</p>
            <p className="mt-2">Cast: {movie.Actors}</p>
            <p className="mt-2">Rating: {movie.Ratings.map((rating) => `${rating.Source}: ${rating.Value}`).join(', ')}</p>
            <p className="mt-2">Genre: {movie.Genre}</p>
        </div>
    );
}

export default MovieDetails;
