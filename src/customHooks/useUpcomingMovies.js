import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addUpComingMovies } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";

const useUpComingMovies = () =>{
    // Below lines from 8 to 17 fetching the movies data from TMDB website to storing into redux store
    const dispatch = useDispatch();
    const getUpComingMovies  = async () =>{
        const data  = await fetch("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1", API_OPTIONS);
        const json = await data.json();
        console.log("Result of upcoming");
         console.log(json.results); 
        dispatch(addUpComingMovies(json.results));
    }
    useEffect(() =>{
        getUpComingMovies();
    },[])
}

export default useUpComingMovies;