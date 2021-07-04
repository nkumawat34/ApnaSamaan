import React from 'react'
import './signin.css'
import {Link} from "react-router-dom"
import {auth} from "../firebase"
import { useState } from 'react'
import { useHistory } from 'react-router'
export default function Signin() {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const history =useHistory()
    const handleSubmit=async (e)=>{
        e.preventDefault();
        try{
            const result=await auth.signInWithEmailAndPassword(email,password)
            
            history.push('/')
        }
        catch(err)
        {
                
        }

    }
    return (
        


<div id="logreg-forms">
        <form class="form-signin" onSubmit={(e)=>handleSubmit(e)}>
            <h1 class="h3 mb-3 font-weight-normal text-self" > Sign in</h1>
            <div class="social-login">
                <button class="btn facebook-btn social-btn" type="button"><span><i class="fab fa-facebook-f"></i> Sign in with Facebook</span> </button>
                <button class="btn google-btn social-btn" type="button"><span><i class="fab fa-google-plus-g"></i> Sign in with Google+</span> </button>
            </div>
            <p className="text-self"> OR  </p>
            <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus="" onChange={(e)=>setEmail(e.target.value)}/>
            <input type="password" id="inputPassword" class="form-control" placeholder="Password" required=""  onChange={(e)=>setPassword(e.target.value)}/>
            
            <button class="btn btn-success btn-block" type="submit"><i class="fas fa-sign-in-alt"></i> Sign in</button>
            <a href="#" id="forgot_pswd">Forgot password?</a>
            <hr />
            <p>Don't have an account!</p>  
            <button class="btn btn-primary btn-block" type="button" id="btn-signup"><i class="fas fa-user-plus"></i> Sign up New Account</button>
            </form>

            <form action="/reset/password/" class="form-reset">
                <input type="email" id="resetEmail" class="form-control" placeholder="Email address" required="" autofocus="" />
                <button class="btn btn-primary btn-block" type="submit">Reset Password</button>
                <a href="#" id="cancel_reset"><i class="fas fa-angle-left"></i> Back</a>
            </form>
            
            <form action="/signup/" class="form-signup">
                <div class="social-login">
                    <button class="btn facebook-btn social-btn" type="button"><span><i class="fab fa-facebook-f"></i> Sign up with Facebook</span> </button>
                </div>
                <div class="social-login">
                    <button class="btn google-btn social-btn" type="button"><span><i class="fab fa-google-plus-g"></i> Sign up with Google+</span> </button>
                </div>
                
                <p className="text-self">OR</p>

                <input type="text" id="user-name" class="form-control" placeholder="Full name" required="" autofocus="" />
                <input type="email" id="user-email" class="form-control" placeholder="Email address" required autofocus="" />
                <input type="password" id="user-pass" class="form-control" placeholder="Password" required autofocus="" />
                <input type="password" id="user-repeatpass" class="form-control" placeholder="Repeat Password" required autofocus="" />

                <button class="btn btn-primary btn-block" type="submit"><i class="fas fa-user-plus"></i> Sign Up</button>
                <a href="#" id="cancel_signup"><i class="fas fa-angle-left"></i> Back</a>
            </form>
            <br />
            
    </div>
  
    )
}
