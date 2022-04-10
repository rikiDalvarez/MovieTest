
import { useEffect, useState } from 'react';
import MovieList from './components/MovieList';
// import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css" 
import SearchBox from './components/SearchBox';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchMovie, setSearchMovie] = useState('star wars');


  const getMovieRequest = async (searchMovie) => {
    const apiKey = process.env.REACT_APP_API_KEY
    const url = `http://www.omdbapi.com/?s=${searchMovie}&apikey=${apiKey}`
    const response = await fetch(url);  
    const responseJSON = await response.json();
    console.log({response})
     if (responseJSON.Search){
      setMovies(responseJSON.Search)
     }
    
  }

  useEffect(() => {
    getMovieRequest(searchMovie);
  }, [searchMovie]);


  return (
    <div className="container">
      <div className="search-component">
        <SearchBox searchMovie={searchMovie} setSearchMovie={setSearchMovie} />
      </div>
      <h1 className='main-header'>Movies</h1>
      <div className="container-movie"> 
        <MovieList movies={movies} />
      </div>
    </div>
  );
}

export default App;
