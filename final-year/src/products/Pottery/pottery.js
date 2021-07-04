import React from 'react';
import './pottery.css';
// import jar from "jar.jpg"
// import jar from "../wooden/jar.jpg"
// import data from "../../new_product/productdata.js"
import {BiSearchAlt,BiHeart} from "react-icons/bi";
import {FaShoppingCart} from "react-icons/fa";
import { Pottery } from '../../tabSection/commondata';
import firebase from "firebase/app";
import {db} from "../../firebase"
import {useHistory} from "react-router-dom"
export default function POttery({user}) {

    let history=useHistory();
    const AddToWishList=(pottery)=>{
        if(user){
        var docRef=db.collection("wishlist").doc(user.uid)
        db.collection("wishlist").doc(user.uid).set({},{merge:true})
    
    
        
      docRef.update({
        wishlist:firebase.firestore.FieldValue.arrayUnion(pottery)
    })
    }
    
    else
    {
           history.push("/signin")
    }
}
const AddToCart=(Pottery)=>{
    if(user){
    var docRef=db.collection("addtocart").doc(user.uid)
    db.collection("addtocart").doc(user.uid).set({},{merge:true})


    
  docRef.update({
    cart:firebase.firestore.FieldValue.arrayUnion(Pottery)
})
}

else
{
 history.push("/signin")
}
 }

    return (
       
<>
<div className="container mycontainer">
<div className="row  ">
{Pottery.map((Pottery)=>{
                  return(
                    
                  
        <div className="col-md-4">
           <div class="box-self ">
            <img src={Pottery.imgsrc} class="img-size" />

           <div className="product-name"> <center><h4>{Pottery.name}</h4></center> </div>
            <div className="product-price"><h3><b>₹{Pottery.price}</b></h3></div>
           <div className="product-cart"> <button className="btn btn-outline-danger product-icons" data-bs-toggle="tooltip" data-bs-placement="top" title="add to wishlist" onClick={()=>{AddToWishList(Pottery)}}><BiHeart className="product-icons"/></button>
                                  <button className="btn btn-outline-danger product-icons"data-bs-toggle="tooltip" id="add-cart" data-bs-placement="top" title="add to cart" onClick={()=>{AddToCart(Pottery)}}><FaShoppingCart className="product-icons"/></button>
           </div> </div>
        </div>)
              })}</div></div>
    



            
 </>
    )
}





