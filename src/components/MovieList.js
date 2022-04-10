import "./MovieList.css"

function MovieList({ movies }) {

	return (
		<>
			
			{movies.map((movie, index) => <div key={movie.imdbID} className="movie-card">
				
				<img src={movie.Poster} alt="moviePoster" />
				<div className="card-text-container">Hello there</div>
			</div>)}

		</>

	)
}

export default MovieList;