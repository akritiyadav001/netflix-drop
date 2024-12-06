import MovieList from "./movieList";
import { useSelector } from "react-redux";
const SecondaryContainer = () =>{
    const movies = useSelector( store => store.movies);
    console.log("Up");
    console.log(movies.upComingMovies);
    
    return( movies.nowPlayingMovies && movies.popularMovies && movies.topRatedMovies && movies.upComingMovies &&<div className="bg-black">
        <div className="-mt-52 relative z-20 pl-5 ">
            <MovieList title="Now Playing" movies={movies.nowPlayingMovies}/>
            <MovieList title="Top Rated" movies={movies.topRatedMovies}/> 
            <MovieList title="Popular" movies={movies.popularMovies}/>
            <MovieList title="Upcoming Movies" movies={movies.upComingMovies}/>   
        </div>
    </div>)
}

export default SecondaryContainer;