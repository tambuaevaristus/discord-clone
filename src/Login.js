import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react'
import { auth, provider } from './firebase'

function Login() {
    const signIn=()=>{
        signInWithPopup(auth, provider).catch((error)=>alert(error.message));
    }
  return (
    <div className="text-center">
        <button className="btn btn-primary" onClick={signIn}> SignIn</button>
    </div>
  )
}

export default Login