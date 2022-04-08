
import { useEffect, useState } from 'react';
import MovieList from './components/MovieList';
// import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css" 

function App() {
  const [movies, setMovies] = useState([]);
  const [searchMovie, setSearchMovie] = useState('');


  const getMovieRequest = async () => {
    const apiKey = process.env.REACT_APP_API_KEY
    const url = `http://www.omdbapi.com/?s=avengers&apikey=${apiKey}`
    const response = await fetch(url);  
    const responseJSON = await response.json();
    console.log(responseJSON)
    setMovies(responseJSON.Search)
  }

  useEffect(() => {
    getMovieRequest();
  }, []);


  return (
    <div className="container">
        <h1 className='main-header'>Movies</h1>
      
      <div className="container-movie"> 
        <MovieList movies={movies} />
      </div>
    </div>
  );
}

export default App;
