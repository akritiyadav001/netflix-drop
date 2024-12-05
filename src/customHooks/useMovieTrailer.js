import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";

const useMovieTrailer = (movieId) =>{
    const dispatch = useDispatch()
    const getMovievideos = async () =>{
     const data = await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US', API_OPTIONS)
     const json_data = await data.json();
     console.log(json_data.results);
     
     const  all_trailer = json_data.results.filter(video => video.type === 'Trailer')
     console.log("I am trailer");
     const main_trailer = all_trailer.length ? all_trailer[0] : json_data.results[0]
     console.log(main_trailer);
     dispatch(addTrailerVideo(main_trailer))
    }

    useEffect(() =>{
        getMovievideos()
    },[])
}

export default useMovieTrailer;