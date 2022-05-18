import React from 'react'
import { useLocation } from 'react-router'
import {BiSearchAlt,BiHeart} from "react-icons/bi";
import {FaShoppingCart} from "react-icons/fa";
import { useHistory } from 'react-router';
import { db } from '../firebase';
import firebase from "firebase/app";
import "./product.css"
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

const AddToCart=(Painting)=>{
    if(user){
    var docRef=db.collection("addtocart").doc(user.uid)
    db.collection("addtocart").doc(user.uid).set({},{merge:true})


    
  docRef.update({
    cart:firebase.firestore.FieldValue.arrayUnion(location.state)
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
            <div className="col-md-5">
            <div className="box-self">
            <img src={imageurl} class="img-size" />

           <div className="product-name"> <center><h4>{name}</h4></center> </div>
            <div className="product-price"><h3><b>₹{price}</b></h3></div>
           <div className="product-cart"> <button className="btn btn-outline-danger product-icons" data-bs-toggle="tooltip" data-bs-placement="top" title="add to wishlist" onClick={()=>{AddToWishList()}}><BiHeart className="product-icons"/></button>
                                  <button className="btn btn-outline-danger product-icons"data-bs-toggle="tooltip" id="add-cart" data-bs-placement="top" title="add to cart" onClick={()=>{AddToCart()}}><FaShoppingCart className="product-icons"/></button>
           </div> </div>
        </div>
        <div className="col-md-6">
        <p className="product-data">We present our clients a work of extremely high quality  Handicrafts  range. 
        This Wood Carvings items are the hot favourite of interior decorations and Vaastu designs for offices, homes and other places of being.
         The products made and carved by us are surely a classic piece of classical Indian handicrafts to cherish and behold.</p>
         <center><button type="button" class="btn btn-success btn-lg" id="buy" onClick={()=>{AddToCart();history.push('/addtocart')}}> Buy Now</button></center>
        </div>
        </div>
        </div>
    )
}
