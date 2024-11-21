import Header from "./header";
import { useSelector } from 'react-redux'; 



const Browse = () =>{

    return(
        <div>
                    <Header/>
                    <h3 className="text-center">Browse</h3>
                    {/* <h4>{user.photoURL}</h4> */}
                
        </div>
    )
}
export default Browse;