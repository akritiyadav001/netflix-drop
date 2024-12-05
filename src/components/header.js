import logo from './images/netflixlogo.png';
 import userlogo from './images/netflixuserlogo.jpg'; 
import {signOut} from 'firebase/auth';
import {auth} from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import {onAuthStateChanged } from "firebase/auth";
import {addUser, removeUser} from '../utils/userSlice.js';
import { useDispatch } from 'react-redux';

const Header = () =>{
    const navigate = useNavigate();
    const user =  useSelector(store => store.user);
    const dispatch = useDispatch()
   
    
    
    const handleSignOut = () =>{
        signOut(auth).then(() => {
          }).catch((error) => {
            // An error happened.
            navigate('/error');
          });
          
    }

    // Moved useEffect logic from body component to the header component
    useEffect(() =>{
      const unsubscribe =   onAuthStateChanged(auth, (user) => {
            if (user) {
              const {uid, email, displayName} = user;
              // Here dispatch hook will dispatch an action
              dispatch(
                addUser({
                    uid:uid,email:email,displayName: displayName
                })
            );  
            navigate("/browse")
            }
             else {
                dispatch(removeUser());
                navigate("/");
            }
          }); 
          return () => unsubscribe()
    },[])
    return(
        <div> 
            <div className="px-8 py-2 bg-gradient-to-b from-black flex items-center justify-between">
              <img src={logo} className='w-40 h-30' alt='netflixlogo' />
                { user &&  <div className=' bg-pink flex justify-around'>
                      <img src={userlogo} className='w-15 h-10' alt='userlogo' /> 
                    {/*  <div>{user.email}</div>  */}
                    <div>{user?.displayName}</div> 
                    <img src={user?.photoURL} />
                    <button className='bg-red-500 p-2 mx-2 text-white' onClick={handleSignOut}>Sign Out</button>
                    </div>
                }
            </div>
        </div>
    )
}
export default Header;