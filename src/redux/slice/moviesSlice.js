import { createSlice } from "@reduxjs/toolkit";
import SimilarMovie from "../../pages/details/MovieDetails/SimilarMovie";
import RecomenddedMovie from "../../pages/details/MovieDetails/Recommendations";

const initialState = {
    trending  :[],
    popular : [],
    topRated : [],
    movies : [],
    tvShows : [],
    officialVideos : [],
    similarMovie : [],
    recomendedMovie :[],
    idBased : [],
    topCast : [],
    topCrew  : [],
    officialVideo : []
}

const movieSlice = createSlice({
    name : "MoviesData",
    initialState,
    reducers : {
        setTrending :(state , action)=>{
            state.trending = action.payload
        },
        setPopular : (state , action)=>{
            state.popular  = action.payload
        },
        setTopRated  :(state , action)=>{
            state.topRated = action.payload
        },
        setMovies : (state , action)=>{
            state.movies = action.payload
        },
        setTvShows : (state , action)=>{
            state.tvShows = action.payload
        },
        setOfficialVideos :(state , action)=>{
            state.officialVideos = action.payload
        },
        setSimilarMovies : (state , action)=>{
            state.similarMovie = action.payload
        },
        setRecomeded : (state , action)=>{
            state.recomendedMovie = action.payload
        },
        setIdBased : (state , action)=>{
            state.idBased = action.payload
        },
        setTopCast : (state , action)=>{
            state.topCast = action.payload
        },
        setTopCrew : (state , action)=>{
            state.topCrew = action.payload
        },
        setOfficialVideo : (state , action)=>{
            state.officialVideo = action.payload
        }
    }
})

export const {setTrending , setPopular , setTopRated , setMovies , setTvShows , setOfficialVideos , setRecomeded , setSimilarMovies , setIdBased , setTopCast , setTopCrew , setOfficialVideo} = movieSlice.actions
export const movieReducer = movieSlice.reducer