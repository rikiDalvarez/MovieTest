import "./MovieList.css"

function MovieList({ movies }) {

	return (
		<>
			
			{movies.map((movie, index) => <div class="movie-card">
				<img src={ movie.Poster } alt ="moviePoster"/>
			</div>)}

		</>

	)
}

export default MovieList;