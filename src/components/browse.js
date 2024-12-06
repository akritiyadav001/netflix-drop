import Header from "./header";
import useNowPlayingMovies from '../customHooks/useNowPlayMovies';
import MainContainer from "./mainContainer";
import SecondaryContainer from "./secondaryContainer";
import usePopularMovies from "../customHooks/usePopularMovies";
import useTopRatedMovies from "../customHooks/useTopRatedMovies";
import useUpComingMovies from "../customHooks/useUpcomingMovies";
const Browse = () =>{
    useNowPlayingMovies()
    usePopularMovies()
    useTopRatedMovies()
    useUpComingMovies()
    return(
        <div>
                    <Header/>
                     <MainContainer/>
                    <SecondaryContainer/> 
            
                    {/* 
                            MainContainer
                                - VideoBackGround
                                - VideoTitle
                            SecondaryContainer
                                - MovieList * n
                                - Cards * n
                        */}
                    
            </div>
        )
}
export default Browse;