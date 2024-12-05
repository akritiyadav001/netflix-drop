import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

const VideoBackGround = ({movieId}) =>{
    const dispatch = useDispatch()
    const trailer_video = useSelector(store => store.movies?.trailerVideo)
    const getMovievideos = async () =>{
     const data = await fetch('https://api.themoviedb.org/3/movie/1241982/videos?language=en-US', API_OPTIONS)
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
    return(
        <div>
            {/* Make API call for fetching the trailer of the movie*/}
            <iframe width="560" height="315" src={"https://www.youtube.com/embed/"+trailer_video.key } title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    )
}

export default VideoBackGround;