import "./MovieList.css"

function MovieList({ movies }) {

	return (
		<>
			
			{movies.map((movie, index) => <div key={movie.imdbID} className="movie-card">
				
				<img src={ movie.Poster } alt ="moviePoster"/>
			</div>)}

		</>

	)
}

export default MovieList;