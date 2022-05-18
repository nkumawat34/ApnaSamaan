import React from 'react'
import {db} from "../firebase"
import { useState,useEffect } from 'react'
import {BiSearchAlt,BiHeart} from "react-icons/bi";
import {FaShoppingCart} from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import firebase from "firebase/app";
import "./addtocart.css"
import { Link } from 'react-router-dom';
import { async } from 'q';
export default function AddToCart({user}) {

   
    const [mycart,setmycart]=useState([])    

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
      },[mycart]);

      const DeleteFromCart=(Wooden)=>{
        var docRef=db.collection("addtocart").doc(user.uid)
    
      docRef.update({
        cart:firebase.firestore.FieldValue.arrayRemove(Wooden)
    })
    }
      
    return (
        <>
<div className="container mycontainer">
<div className="row  ">
    
{mycart && mycart.map((Wooden)=>{
                  return(
                    
                
        <div className="col-md-4">
           <div class="box-cart">
            <img src={Wooden.imgsrc} class="img-size" />

           <div className="product-name"> <center><h4>{Wooden.name}</h4></center> </div>
            <div className="product-price"><h3><b>₹{Wooden.price}</b></h3></div>
           <div className="container mt-3  d-flex justify-content-around"> 
           <button className="btn btn-outline-danger product-icons " data-bs-toggle="tooltip" data-bs-placement="top" id="delete-product" title="delete product" onClick={()=>{DeleteFromCart(Wooden)}} ><MdDelete className="product-icons "/></button>
                                 
           </div> </div>
        </div>)
              })}</div>
              <div className="row">
                  <div className="col-md">
              {mycart?<center><Link to="/checkout"><button type="button" class="btn btn-danger btn-lg button-width">Check Out</button></Link></center>:""}
                  </div></div>
                  </div>
    </>
    )
}
