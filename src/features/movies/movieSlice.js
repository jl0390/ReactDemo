import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import moiveApi from "../../common/apis/movieApi"
import {APIKey} from "../../common/apis/MovieApiKey"

export const fetchAsyncMovies = createAsyncThunk("movies/fetchAsyncMovies", async (term)=>{
    console.log("fetching");

    const response = await moiveApi
    .get(`?apiKey=${APIKey}&s=${term}&type=movie`)

    console.log("get list:" + response.data);
    return response.data;
});
export const fetchAsyncShows = createAsyncThunk("movies/fetchAsyncShows", async (term)=>{
    const response = await moiveApi
    .get(`?apiKey=${APIKey}&s=${term}&type=series`)

    return response.data;
});
export const fetchAsyncSelectItem = createAsyncThunk("movies/fetchAsyncSelectItem", async (id)=>{
    const movieText = "friend";
    const response = await moiveApi
    .get(`?apiKey=${APIKey}&i=${id}&plot=full`)

    return response.data;
});

const initialState={
    movies:{},
    shows:{},
    item: {}
}

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        addMoves:(state, {payload})=>{
            state.movies = payload;
        },
        removeSelectedItem:(state)=>{
            state.item = {};
        }
    },
    extraReducers: {
        [fetchAsyncMovies.pending]:()=>{
            console.log("pending");
        },
        [fetchAsyncMovies.fulfilled]:(state, {payload})=>{
            console.log("fetched surcessfully");
            return {...state, movies: payload};
        },
        [fetchAsyncShows.fulfilled]:(state, {payload})=>{
            console.log("fetched surcessfully");
            return {...state, shows: payload};
        },
        [fetchAsyncSelectItem.fulfilled]:(state, {payload})=>{
            console.log("fetched surcessfully");
            return {...state, item: payload};
        }
    },

});

export const {addMoves, removeSelectedItem} = movieSlice.actions;
export const getAllMovies = (state) =>state.movies.movies;
export const getAllShows = (state) =>state.movies.shows;
export const getSelectedMovie = (state) =>state.movies.item;
export default movieSlice.reducer;