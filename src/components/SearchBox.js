import "./SearchBox.css"

const SearchBox = (props) => {

	return (
		<div className="search-container">
			{console.log({props})}
			<input
				className="search-input"
				value={props.value}
				onChange={(event) =>  props.setSearchMovie(event.target.value) }
				placeholder="Search a Film"></input>

		</div>
	)
}

export default SearchBox;