import React from "react";
import { useState } from "react";

const MainPage = () =>{
    
    const [isSignup, setIsSignup] = useState(true);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = () => console.log("Signup", email,username,password);
    const handleLogin = () => console.log("Login", email,username,password);
    
    return(
        <div className='text-center'> 
          <h1>{isSignup ? "Signup" : "Login"}</h1>
          <br />
          <form action="">
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
              {
                isSignup?(
                  <button className='form-control-group btn-send-form-signup' onClick={()=>handleSignup()}>Signup</button>
                ):<button className='form-control-group btn-send-form-login' onClick={()=>handleLogin()}>Login</button>
              }
          </form>
          <br />
          <button type='button' onClick={()=>setIsSignup(!isSignup)} className='btn-info'>
            {isSignup ? "Already have an account? Login" : "Don't have an account? Signup"}
          </button>
        </div>
    )
}
export default MainPage