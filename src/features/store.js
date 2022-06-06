import { configureStore } from "@reduxjs/toolkit";
import movieReduser from "./movies/movieSlice";

export const store = configureStore({
    reducer:{
        movies:movieReduser
    },
})