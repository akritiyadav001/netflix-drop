import {useSelector} from 'react-redux';
import VideoBackGround from './videoBackground';
import VideoTitle from './videoTitle';
const MainContainer = () =>{
    const movies = useSelector( (store) => store.movies?.nowPlayingMovies);
    console.log(movies);
    if (!movies)
    {
        return;
    }
    const mainMovie = movies[0];  
    const {original_title, overview, id} = mainMovie
    console.log(mainMovie);
    return <div>
        <VideoTitle title={original_title} overview={overview}/>
        <VideoBackGround  movieId={id}/>
        
    </div>
}

export default MainContainer;