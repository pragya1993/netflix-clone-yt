import React, { useState } from 'react'
import "./css/Login.css"
import SignUp from './SignUp';
function Login() {
    const [signIn, SetSignIn] = useState(false);
    const showSignUp = (e)=>{
        e.preventDefault();
        SetSignIn(true);
    }
  return (
    <div className="login">
        <div className="login__header">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png" alt="img" className="login__logo"/>
          <button className="login__button">
            Sign In
          </button>
        </div>
       <div className="login__body">
        {
            signIn ? (<SignUp/>) : (
                <>
               <h1>Unlimited films, TV programmes and more.</h1>
               <h2>Watch Anymore, Cancle at any time.</h2>
               <h3>Ready to watch? Enter your email to create or restart your membership.</h3>

        <form className="login__form"  onSubmit={showSignUp}>
            <input type="text" placeholder="Email Address"/>
            <button>Get Started</button>
        </form>
    
       </>
            )
        }
          </div>
       <div className="login__gradient">

       </div>
    </div>
  )
}

export default Login
