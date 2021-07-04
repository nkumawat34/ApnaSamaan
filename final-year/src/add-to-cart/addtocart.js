import React from 'react'
import {db} from "../firebase"
import { useState,useEffect } from 'react'
import {BiSearchAlt,BiHeart} from "react-icons/bi";
import {FaShoppingCart} from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import firebase from "firebase/app";
export default function AddToCart({user}) {

    var docRef = db.collection("addtocart").doc(user.uid)
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
    
{mycart.map((Wooden)=>{
                  return(
                    
                
        <div className="col-md-4">
           <div class="box-self ">
            <img src={Wooden.imgsrc} class="img-size" />

           <div className="product-name"> <center><h4>{Wooden.name}</h4></center> </div>
            <div className="product-price"><h3><b>₹{Wooden.price}</b></h3></div>
           <div className="container mt-3  d-flex justify-content-around"> <button className="btn btn-outline-danger product-icons" data-bs-toggle="tooltip" data-bs-placement="top" title="add to wishlist " ><BiHeart className="product-icons"/></button>
           <button className="btn btn-outline-danger product-icons " data-bs-toggle="tooltip" data-bs-placement="top" id="delete-product" title="delete product" onClick={()=>{DeleteFromCart(Wooden)}} ><MdDelete className="product-icons "/></button>
                                  <button className="btn btn-outline-danger product-icons"data-bs-toggle="tooltip" id="add-cart" data-bs-placement="top" title="add to cart"><FaShoppingCart className="product-icons"/></button>
           </div> </div>
        </div>)
              })}</div></div>
    </>
    )
}
