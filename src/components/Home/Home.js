 import React, { useEffect, useState } from 'react'
 import MovieList from "../MovieList/MovieList"
 import {useDispatch} from "react-redux"
 import {fetchAsyncMovies, fetchAsyncShows} from "../../features/movies/movieSlice"
 import "./Home.scss"
 
 const Home = () => {

   const dispatch = useDispatch();
   const movieText = "Harry";
   const showText = "Friends";

   useEffect(()=>{
     dispatch(fetchAsyncMovies(movieText));
     dispatch(fetchAsyncShows(showText));
   }, [dispatch]);


   return (
     <div>
       <div className="banner-img"></div>
       <MovieList></MovieList>
    </div>
   )
 }

 export default Home;
 