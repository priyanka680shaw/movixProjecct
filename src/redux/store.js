import { configureStore } from "@reduxjs/toolkit";
import { homeReducer } from "./slice/homeSlice";
import { movieReducer } from "./slice/moviesSlice";
export const store = configureStore({
    reducer : {
    home : homeReducer ,
    movie : movieReducer
    }
})