import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice';
import moviesReducer from "./moviesSlice";
const appStore = configureStore(
    {
        // This reducer will have different reducers from different slices
        reducer:{
            user:  userReducer,
            movies: moviesReducer,
        }
    }
)

export default appStore;