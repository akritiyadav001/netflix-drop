import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";

const useTopRatedMovies = () =>{
    // Below lines from 8 to 17 fetching the movies data from TMDB website to storing into redux store
    const dispatch = useDispatch();
    const getTopRatedMovies  = async () =>{
        const data  = await fetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1", API_OPTIONS);
        const json = await data.json();
        /* console.log(json.results); */
        dispatch(addTopRatedMovies(json.results));
    }
    useEffect(() =>{
        getTopRatedMovies();
    },[])
}

export default useTopRatedMovies;