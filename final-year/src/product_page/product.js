import React from 'react'
import { useLocation } from 'react-router'
import {BiSearchAlt,BiHeart} from "react-icons/bi";
import {FaShoppingCart} from "react-icons/fa";
import { useHistory } from 'react-router';
import { db } from '../firebase';
import firebase from "firebase/app";
export default function Product({user}) {

    let location=useLocation();
    let imageurl=location.state.imgsrc;
    let name=location.state.name;
    let price=location.state.price;
    let history=useHistory();

    const AddToWishList=()=>{
        if(user){
        var docRef=db.collection("wishlist").doc(user.uid)
        db.collection("wishlist").doc(user.uid).set({},{merge:true})
    
    
        
      docRef.update({
        wishlist:firebase.firestore.FieldValue.arrayUnion(location.state)
    })
    }
    
    else
    {
           history.push("/signin")
    }
}

    
    return (
        <div className="container">
            <div className="row">
        <center><h1>{name}</h1></center>
        </div>
        <div className="row">
            <div className="col-5">
            <div class="box-self ">
            <img src={imageurl} class="img-size" />

           <div className="product-name"> <center><h4>{name}</h4></center> </div>
            <div className="product-price"><h3><b>₹{price}</b></h3></div>
           <div className="product-cart"> <button className="btn btn-outline-danger product-icons" data-bs-toggle="tooltip" data-bs-placement="top" title="add to wishlist" onClick={()=>{AddToWishList()}}><BiHeart className="product-icons"/></button>
                                  <button className="btn btn-outline-danger product-icons"data-bs-toggle="tooltip" id="add-cart" data-bs-placement="top" title="add to cart"><FaShoppingCart className="product-icons"/></button>
           </div> </div>
        </div>
        <div className="col-6">
        
        </div>
        </div>
        </div>
    )
}
