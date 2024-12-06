import MovieList from "./movieList";
import { useSelector } from "react-redux";
const SecondaryContainer = () =>{
    const movies = useSelector( store => store.movies);
    
    return(movies.nowPlayingMovies && movies.popularMovies && <div className="bg-black">
        <div className="-mt-52 relative z-20 pl-5 ">
            <MovieList title="Now Playing" movies={movies.nowPlayingMovies}/>
            <MovieList title="Popular" movies={movies.popularMovies}/>
             <MovieList title="Top Rated" movies={movies.nowPlayingMovies}/>
            <MovieList title="Upcoming Movies" movies={movies.nowPlayingMovies}/>
        </div>
    </div>)
}

export default SecondaryContainer;