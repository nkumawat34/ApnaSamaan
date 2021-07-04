import React from 'react'
import "./contact.css"
import { useState } from 'react'
import { db } from '../firebase';
import { useHistory } from 'react-router';

export default function Contact({user}) {

const [name,setname]=useState('');
const [email,setemail]=useState('');
const [message,setmessage]=useState('');

let history=useHistory();
const FormSubmit=()=>{

  if(user){
    
   db.collection('addtocart').doc(user.uid).set({
      name:name,
      email:email,
      message:message
    })
  }

else
{
        history.push("/signin")
}
}


    return (
        

            <div class="container">
                <center><h1>Contact Page</h1></center>

                <form>
                <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Your Name</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Your Name" onChange={(e)=>{
    setname(e.target.value)
  }} />
</div>
                <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" onChange={(e)=>{
    setemail(e.target.value)
  }}/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Message</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" onChange={(e)=>{
    setmessage(e.target.value)
  }}></textarea>
</div>

<center><input class="btn btn-primary self-width" type="submit" value="Submit" onClick={()=>{
  FormSubmit()
}}></input></center>
                </form>



                <div class="card card-self">
  <div class="card-header">
    <h2><b>Apna Samaan Information</b></h2>
    <button onClick={()=>{FormSubmit()}}>Hello</button>
  </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0">
      <p >E-Mail Address:- nkumawat34@gmail.com</p> <p>Phone NO:- 7014069682</p>
      <footer class="blockquote-footer">Made only in India </footer>
    </blockquote>
  </div>
</div>

            </div>      
    
    )
}
