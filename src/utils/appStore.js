import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice';
const appStore = configureStore(
    {
        // This reducer will have different reducers from different slices
        reducer:{
            user:  userReducer,
        }
    }
)

export default appStore;