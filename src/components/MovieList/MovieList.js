import React from 'react'
import { useSelector } from 'react-redux';
import { getAllMovies, getAllShows } from '../../features/movies/movieSlice';
import MovieCard from "../../components/MovieCard/MovieCard";
import "./MovieList.scss"

const MovieList = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);

  let renderMovies, rederShows = "";
  renderMovies = 
    movies.Response === "True"?(
      movies.Search.map((movie, index)=>(
        <MovieCard key={index} data={movie} />
      ))
  ) : (
    <div className="movies-error">
     <h3>{movies.error}</h3>
    </div>
    );

  rederShows = 
  shows.Response === "True"?(
    shows.Search.map((movie, index)=>(
        <MovieCard key={index} data={movie} />
      ))
  ) : (
    <div className="movies-error">
     <h3>{shows.error}</h3>
    </div>
    );
    
  return (
    <div className="movie-wrapper">
      <div className='movie-list'>
        <h2> Movies</h2>
        <div className='movie-container'>
          {renderMovies}
        </div>
      </div>
      <div className='movie-list'>
        <h2> Shows</h2>
        <div className='movie-container'>
          {rederShows}
        </div>
      </div>
    </div>
  );
}

export default MovieList;