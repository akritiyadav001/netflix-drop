import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";

const useNowPlayingMovies = () =>{
    // Below lines from 8 to 17 fetching the movies data from TMDB website to storing into redux store
    const dispatch = useDispatch();
    const getNowPlayingMovies  = async () =>{
        const data  = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1", API_OPTIONS);
        const json = await data.json();
        /* console.log(json.results); */
        dispatch(addNowPlayingMovies(json.results));
    }
    useEffect(() =>{
        getNowPlayingMovies();
    },[])
}

export default useNowPlayingMovies;