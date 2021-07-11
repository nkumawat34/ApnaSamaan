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
      });
      

    return (
        <div className="container">
           <div className="row">
          <center><h1>ORDER DETAILS</h1></center>
           </div>
        <div className="center-self">
           {cart.map((data)=>{
               {total=total+data.price}
                  return(
                          <>
            <h4 className="data-name">{data.name}</h4>
             <h3 className="data-price"><b>₹{data.price}</b></h3>
             </>
                  )}
           )}
           </div>
           <div className="total"><center><h3 >TOTAL</h3></center></div>
           <div className="total-price"><center><h4 >{total}</h4></center></div>
           <div className="place-order"><center><button type="button" class="btn btn-danger btn-lg button-width">PLACE ORDER</button></center></div>
           
        </div>
    )
}
