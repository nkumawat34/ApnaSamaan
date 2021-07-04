import React from 'react'
import "./signup.css"
import { useState } from 'react'
import {auth} from '../firebase'
import { useHistory } from 'react-router'
export default function Signup() {

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [confirm_password,setConfirmPassword]=useState('')
    const [firstname,setFirstName]=useState('')
    const [lastname,setLastName]=useState('')
    const history=useHistory()

    const handleSubmit=async (e)=>{
        e.preventDefault();
        try{
            if(password==confirm_password)
           { 
               const result=await auth.createUserWithEmailAndPassword(email,password) 
               history.push('/')
           }
           else
           {
               alert("Password does not match enter again")
           }
        }
        catch(err)
        {
                alert("Try Again")
        }

    }

    return (
        <div className="center-self"><div>

<div class="container self-container" id="wrap">
	  <div class="row">
        <div class="col-md-6 col-md-offset-3">
            <form onSubmit={(e)=>handleSubmit(e)} method="post" accept-charset="utf-8" class="form" role="form">   <legend>Sign Up</legend>
                    <h4>It's free and always will be.</h4>
                    <div class="row">
                        <div class="col-xs-6 col-md-6 self-margin">
                            <input type="text" name="firstname"  class="form-control input-lg " placeholder="First Name" onChange={(e)=>setFirstName(e.target.value)} />                        </div>
                        <div class="col-xs-6 col-md-6 self-margin">
                            <input type="text" name="lastname"  class="form-control input-lg " placeholder="Last Name" onChange={(e)=>setLastName(e.target.value)} />                        </div>
                    </div>
                    <input type="text" name="email" class="form-control input-lg self-margin" placeholder="Your Email" onChange={(e)=>setEmail(e.target.value)} />
                    <input type="password" name="password"  class="form-control input-lg self-margin" placeholder="Password"  onChange={(e)=>setPassword(e.target.value)}/>
                    <input type="password" name="confirm_password" class="form-control input-lg self-margin" placeholder="Confirm Password" onChange={(e)=>setConfirmPassword(e.target.value)} />                  
                    
                    <br />
                    <button class="btn btn-lg btn-primary btn-block signup-btn" type="submit" >
                        Create my account</button>
            </form>          
          </div>
</div>            
</div>
</div>
            </div>
        
    )
}
