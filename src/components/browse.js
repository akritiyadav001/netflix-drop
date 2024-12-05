import Header from "./header";
import useNowPlayingMovies from '../customHooks/usePlayMovies';
import MainContainer from "./mainContainer";
import SecondaryContainer from "./secondaryContainer";
const Browse = () =>{
    useNowPlayingMovies()
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