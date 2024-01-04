import React from 'react';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getAuth } from "firebase/auth";
import app from '../firebase/firebase.config';

const googleProvider = new GoogleAuthProvider();

const Login = () => {
const auth = getAuth();
const handleLogin = () => {
  signInWithPopup(auth, googleProvider).then((result) => {
    const user = result.user;
    console.log(user)

  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
  });

}

  return (
    <div className='h-screen w-full flex items-center justify-center'>
        <button className='bg-blue px-8 py-4 text-white' onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login  