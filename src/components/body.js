import Login from './login.js';
import Browse from './browse.js';
import Header from './header.js';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { useEffect } from 'react';
import {onAuthStateChanged } from "firebase/auth";
import {auth} from '../utils/firebase.js';
import { useDispatch } from 'react-redux';
import {addUser, removeUser} from '../utils/userSlice.js';
const Body = () =>{
    const dispatch = useDispatch();
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

    useEffect(() =>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              const {uid, email, displayName} = user;
              // Here dispatch hook will dispatch an action
              dispatch(addUser({uid:uid,email:email,displayName: displayName}));  
            }
             else {
                dispatch(removeUser());
            }
          }); 
    },[])

    return(
        <div>
            <RouterProvider router={appRouter}/>
        </div>
    )
}
export default Body;