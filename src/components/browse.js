import Header from "./header";
import useNowPlayingMovies from '../customHooks/useNowPlayMovies';
import MainContainer from "./mainContainer";
import SecondaryContainer from "./secondaryContainer";
import usePopularMovies from "../customHooks/usePopularMovies";
const Browse = () =>{
    useNowPlayingMovies()
    usePopularMovies()
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