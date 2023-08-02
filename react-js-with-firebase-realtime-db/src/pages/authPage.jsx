/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { auth } from "../config/firebase";

import { useNavigate } from "react-router-dom";

const AuthPage = () =>{
    
    const [isSignup, setIsSignup] = useState(true);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const db = getDatabase();
    const navigate = useNavigate();



    const handleSignup = () => {
      console.log(email, username, password);
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
               
          // set(ref(db, `users/${success.user.uid}`), {
          //   username: username,
          //   email: email,
          //   id:success.user.uid
          // });

          const user = userCredential.user;

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log('Signup error:', errorCode, errorMessage);
        });
    };
    const handleLogin = () => {
      console.log("Login", email,username,password);
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        let log ={
          uids : user.uid
        }
        // console.log(log.uids)
        
      navigate('/home' , {
        state:log
      })
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('Signup error:', errorCode, errorMessage);
      });
    };
    
    return(
        <div className='container-fluid text-center'> 
          <h1>{isSignup ? "Signup" : "Login"}</h1>
          <br />          
           <form action="#">
           {isSignup &&(
              <div className='form-control-group'>
                <label htmlFor="username" className='text-label'>UserName</label>
                <br />
                <input type="text" id="username" className='form-input-text' value={username} onChange={(e)=>setUsername(e.target.value)}/>
              </div>  
            )}
              <div className='form-control-group'>
                <label htmlFor="email" className='text-label'>Email</label>
                <br />
                <input type="email" id="email" className='form-input-text' value={email} onChange={(e)=>setEmail(e.target.value)}/>
              </div> 
              <div className='form-control-group'>
                <label htmlFor="password" className='text-label'>Password</label>
                <br />
                <input type="password" id="password" className='form-input-text' value={password} onChange={(e)=>setPassword(e.target.value)}/>
              </div> 
              <br />
              {
                isSignup?(
                  <button className='form-control-group btn-send-form-signup' onClick={handleSignup}>Signup</button>
                ):<button className='form-control-group btn-send-form-login' onClick={handleLogin}>Login</button>
              } 
            </form>         
          <br /><br />
          <button type='button' onClick={()=>setIsSignup(!isSignup)} className='btn-info'>
            {isSignup ? "Already have an account? Login" : "Don't have an account? Signup"}
          </button>
        </div>
    )
}
export default AuthPage