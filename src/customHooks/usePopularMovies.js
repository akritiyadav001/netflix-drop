import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addPopularMovies } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";

const usePopularMovies = () =>{
    // Below lines from 8 to 17 fetching the movies data from TMDB website to storing into redux store
    const dispatch = useDispatch();
    const getPopularMovies  = async () =>{
        const data  = await fetch("https://api.themoviedb.org/3/movie/popular?page=1", API_OPTIONS);
        const json = await data.json();
        /* console.log(json.results); */
        dispatch(addPopularMovies(json.results));
    }
    useEffect(() =>{
        getPopularMovies();
    },[])
}

export default usePopularMovies;