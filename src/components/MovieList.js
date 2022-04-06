function MovieList(props) {

	return (
		<>
			{props.movies.map((movie, index) => <div>
				<img src={ movie.Poster} alt ="moviePoster"/>
			</div>)}

		</>

	)
}

export default MovieList;