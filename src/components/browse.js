import Header from "./header";
import useNowPlayingMovies from '../customHooks/usePlayMovies';
import MainContainer from "./mainContainer";
import SecondaryContainer from "./secondaryContainer";
const Browse = () =>{
    useNowPlayingMovies()
    return(
        <div>
                    <Header/>
                    <h3 className="text-center">Browse</h3>
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