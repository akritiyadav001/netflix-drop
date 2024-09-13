import Header from './header.js';
import backgroundImage from './images/netflixbackground.jpg';
import {useState} from 'react';

const Login = () =>{
    const [isSignInForm, setIsSignInForm] = useState(true);
    const toggleSignInForm = () =>{
        setIsSignInForm(!isSignInForm);
    }
    return(
        <div  style={{backgroundImage:`url(${ backgroundImage})`, height:"600px"}} className='h-100'>
            <Header/>
            <div className='text-white'>
                <form className=' w-3/12 m-auto bg-black bg-opacity-80 rounded text-white' >
                    <h1 className='text-center py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                    <input type='text' placeholder="Email Address" className="py-2 mx-20 my-2 w-250 bg-gray-500"/>
                    {!isSignInForm && <input type='text' placeholder="Full name" className="py-2 mx-20 my-2 w-250 bg-gray-500"/>}
                    <input type='password' placeholder="Password" className="py-2 mx-20 w-250 bg-gray-500" /><br></br>
                    <button className="py-2  my-4 mx-20 bg-red-600 w-1/2 rounded-lg">{isSignInForm ? "Sign In" : "Sign Up"}</button>
                    <p className="text-center py-4 cursor-pointer" onClick={toggleSignInForm}>New to Nelflix? Sign Up Now</p>
                </form>
               
            </div>
        </div>
    )
}
export default Login;