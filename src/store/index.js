import {configureStore } from "@reduxjs/toolkit";
import { moviesReducer,addMovie, removeMovie } from "./slices/moviesSlice";
import { songsReducer, addSong,removeSong } from "./slices/songsSlice";
import { reset } from "./actions";






//song actioncreators
// const addSongActionCreator=songSlice.actions.addSong();
// const removeSongActionCreator=songSlice.actions.removeSong()

// //movie action creators
// const addMovieActionCreator=movieSlice.actions.addMovie()
// const removeMovieActionCreator=movieSlice.actions.removeMovie()


// export const {addMovie,removeMovie}=moviesSlice.actions;
// export const {addSong,removeSong}=songsSlice.actions;

//store object configuration with all reducer
const store=configureStore({
    reducer:{
        songs:songsReducer,
        movies:moviesReducer
    }
});
export {store,reset,addMovie,removeMovie,addSong,removeSong}
