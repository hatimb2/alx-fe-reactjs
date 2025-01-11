function MovieCard({ movie, onClick }) {
    return (
        <div
            onClick={() => onClick(movie.imdbID)}
            className="cursor-pointer p-4 border rounded-md"
        >
            <img
                src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/200'}
                alt={movie.Title}
                className="w-40 h-60 object-cover"
            />
            <h2 className="text-lg font-bold">{movie.Title}</h2>
            <p>{movie.Year}</p>
        </div>
    );
}

export default MovieCard;
