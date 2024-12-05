import Header from './header.js';
import backgroundImage from './images/netflixbackground.jpg';
import {useState, useRef} from 'react';
import CheckValidData from '../utils/validate.js';
import {createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile   } from "firebase/auth";
import {auth} from '../utils/firebase.js';
import {useDispatch} from 'react-redux';
import {addUser} from '../utils/userSlice.js';
import userlogo from './images/netflixuserlogo.jpg'; 


const Login = () =>{
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const dispatch = useDispatch();

    const displayName = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleButtonClick = () =>{
        console.log('Inside handleButtonClick');
        const message =  CheckValidData(email.current.value, password.current.value);
        setErrorMessage(message);
        // If no message that means  there is no error create a new user
        if(message)
        {
            return 
        }

        // Sign In and Sign Up logic
        if(!isSignInForm)
        {
            // Sign Up logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;

            // update profile logic is here
             updateProfile(user, {
                displayName: displayName.current.value , photoURL: userlogo 
              }).then(() => {
                const {uid, email, displayName} = auth.currentUser;
                dispatch(addUser({uid:uid,email:email,displayName: displayName}))
                console.log("I am the user name " + displayName);
              }).catch((error) => {
                // An error occurred
                setErrorMessage(error.message);
              }); 
          
            })
            .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode +" - " + errorMessage);
             });
        }
        else
        {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            })
            .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
                setErrorMessage(errorCode + " " + errorMessage);
            });
        }
       
              
    }

    const toggleSignInForm = () =>{
        setIsSignInForm(!isSignInForm);
    }
    return(
        <div  style={{backgroundImage:`url(${ backgroundImage})`, height:"600px"}} className='h-100'>
            <Header/>
            <div className='text-white'>
                <form onSubmit={(e) => e.preventDefault() } className=' w-3/12 m-auto bg-black bg-opacity-80 rounded text-white' >
                    <h1 className='text-center py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>

                    <input  ref={email} type='text' placeholder="Email Address" className="py-2 mx-20 my-2 w-250 bg-gray-500"/>
                    {!isSignInForm && <input type='text' ref={displayName} placeholder="Full name" className="py-2 mx-20 my-2 w-250 bg-gray-500"/>}
                    <input ref={password} type='password' placeholder="Password" className="py-2 mx-20 w-250 bg-gray-500" /><br></br>
                    <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>
                    <button className="py-2  my-4 mx-20 bg-red-600 w-1/2 rounded-lg" onClick={handleButtonClick} >{isSignInForm ? "Sign In" : "Sign Up"} </button>
                    <p className="text-center py-4 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now":"Already registered? Sign In now"}</p>
                </form>
               
            </div>
        </div>
    )
}
export default Login;