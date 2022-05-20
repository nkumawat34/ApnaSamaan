import React from 'react'
import firebase from "firebase/app";
import {db} from "../firebase"
import  {useHistory}  from "react-router-dom";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import "./checkout.css"
export default function Checkout({user}) {

//    var docRef = db.collection("addtocart").doc(user.uid)
    const [cart,setmycart]=useState([])  
    var [total,setTotal]=useState(0)
    const history=useHistory();
      useEffect(()=>{
db.collection("addtocart")
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            
            
            if(user.uid==doc.id)
            // doc.data() is never undefined for query doc snapshots
            setmycart(doc.data().cart);
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });
      },[]);
      
const placedOrder=()=>{
    alert("Your Order is placed succesfully");
    history.push("/ApnaSamaan")
   // if(user){
    //var docRef=db.collection("addtocart").doc(user.uid)
    db.collection("addtocart").doc(user.uid).set({},{merge:false})

}
    return (
        <div className="container ">
           <div className="row ">
          <center><h1>ORDER DETAILS</h1></center>
           </div>
        <div className=" d-flex flex-column justify-content-center ">
           {cart&& cart.map((data)=>{
               {total=total+data.price}
                  return(
                          <div className='border border-success p-4'>
            <h4 className="data-name">{data.name}</h4>
             <h3 className="data-price text-end"><b>₹{data.price}</b></h3>
             </div>
                  )}
           )}
           </div>
           <div className='d-flex justify-content-center border border-danger align-items-center'>
           <div className="total"><center><h3 >TOTAL</h3></center></div>
           <div className="total-price ms-2"><center><h3 >{total}</h3></center></div></div>
           <div className="place-order"><center><button type="button" class="btn btn-danger btn-lg button-width" onClick={()=>{placedOrder()}}>PLACE ORDER</button></center></div>
           
        </div>
    )
}
