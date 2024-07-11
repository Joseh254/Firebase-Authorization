import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from '../firebase/auth';
import { UseAuth } from '../firebase/contexts/context/Auth';
import { FcGoogle } from "react-icons/fc";
import './Home.css';

function Home() {
    const { userIsLoggedIn } = UseAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSignedIn, setIsSignedIn] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const onSubmit = async (event) => {
        event.preventDefault();
        if (!isSignedIn) {
            setIsSignedIn(true);
            try {
                await doSignInWithEmailAndPassword(email, password);
            } catch (error) {
                setErrorMessage("An error occured");
                console.log(error.message);
                setIsSignedIn(false);
            }
        }
    };

    const onGoogleSignIn = async (event) => {
        event.preventDefault();
        if (!isSignedIn) {
            setIsSignedIn(true);
            try {
                await doSignInWithGoogle();
            } catch (error) {
                setErrorMessage("An error has Occured..please try refleshing the page");
                console.log(error.message);
                setIsSignedIn(false);
            }
        }
    };

    return (
        <div className='form'>
            
           

            <form className='signInForm' onSubmit={onSubmit}>
            CREATE AN ACCOUNT
                <input
                    type="text"
                    placeholder='Full Name'
                />
                <input
                    type="email"
                    placeholder='Email Address'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    type="password"
                    placeholder='Confirm Password'
                />

                <button
                    type='submit'
                    disabled={isSignedIn}
                    className='submit'
                >
                    {isSignedIn ? 'Signing in...' : 'Sign in'}
                </button>
                <p>Already a member? <Link to="/register">Log in</Link></p>
            <button
                disabled={isSignedIn}
                onClick={onGoogleSignIn}
                className='google'
                
            >
               <FcGoogle/>  Sign in with Google
                
            </button>

            {errorMessage && <p className="error">{errorMessage}</p>}
            </form>
    

        </div>
    );
}

export default Home;
