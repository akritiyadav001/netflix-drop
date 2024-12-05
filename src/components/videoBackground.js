import { useSelector } from "react-redux";
import useMovieTrailer from '../customHooks/useMovieTrailer';
const VideoBackGround = ({movieId}) =>{
    const trailer_video = useSelector(store => store.movies?.trailerVideo)
    useMovieTrailer(movieId)
    
    return(
        <div className="w-screen">
            <iframe className="w-screen aspect-video"  src={"https://www.youtube.com/embed/"+trailer_video?.key+"?&autoplay=1&mute=1" } title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen ></iframe>
        </div>
    )
}

export default VideoBackGround;