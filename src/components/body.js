import Login from './login.js';
import Browse from './browse.js';
import Header from './header.js';
import {createBrowserRouter, RouterProvider} from "react-router-dom";


const Body = () =>{
    const appRouter = createBrowserRouter([
        {
            path: '/',
            element: <Login/>
        },
        {
            path:'/browse',
            element: <Browse/>
        },
        {
            path:"/header",
            element: <Header/>
        }
    ])

    

    return(
        <div>
            <RouterProvider router={appRouter}/>
        </div>
    )
}
export default Body;