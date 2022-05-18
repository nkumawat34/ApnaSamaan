import React, { useEffect } from 'react';
import './wooden.css';
// import jar from "jar.jpg"
// import jar from "../wooden/jar.jpg"
// import data from "../../new_product/productdata.js"
import {BiSearchAlt,BiHeart} from "react-icons/bi";
import {FaShoppingCart} from "react-icons/fa";
import { WoodenCraft } from '../../tabSection/commondata';
import { db } from '../../firebase';
import { useState} from 'react';
import firebase from "firebase/app";
import {useHistory} from "react-router-dom"
import {Link} from "react-router-dom"
 function Wooden({user}) {
  let history=useHistory();

  const [mywishlist,setmywishlist]=useState([])
 

const AddToWishList=(Wooden)=>{
    if(user){
    var docRef=db.collection("wishlist").doc(user.uid)
    db.collection("wishlist").doc(user.uid).set({},{merge:true})


    
  docRef.update({
    wishlist:firebase.firestore.FieldValue.arrayUnion(Wooden)
})
}

else
{
 history.push("/signin")
}
 }
 const AddToCart=(Wooden)=>{
    if(user){
    var docRef=db.collection("addtocart").doc(user.uid)
    db.collection("addtocart").doc(user.uid).set({},{merge:true})


    
  docRef.update({
    cart:firebase.firestore.FieldValue.arrayUnion(Wooden)
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
    
{WoodenCraft.map((Wooden)=>{
                  return(
                    
                
        <div className="col-md-4">
           <div class="box-self ">
            <Link to={{
                pathname:"/product",
                state:Wooden
            }}><img src={Wooden.imgsrc} class="img-size" /></Link>

           <div className="product-name"> <center><h4>{Wooden.name}</h4></center> </div>
            <div className="product-price"><h3><b>₹{Wooden.price}</b></h3></div>
           <div className="product-cart"> <button className="btn btn-outline-danger product-icons" data-bs-toggle="tooltip" data-bs-placement="top" title="add to wishlist " onClick={()=>{AddToWishList(Wooden)}}><BiHeart className="product-icons"/></button>
                                  <button className="btn btn-outline-danger product-icons"data-bs-toggle="tooltip" id="add-cart" data-bs-placement="top" title="add to cart" onClick={()=>{AddToCart(Wooden)}}><FaShoppingCart className="product-icons"/></button>
           </div> </div>
        </div>)
              })}</div></div>
    
    
{/* <div className="container mycontainer">
    <div className="row ">
        <div className="col">
           <div class="box-self ">
            <img src={jar} class="img-size" />

            <h3>computer higher{data[0].name}</h3>
            <h3><b>₹1200</b></h3>
            </div>
        </div>

        <div className="col">
           <div class="box-self">
            <img src={jar} class="img-size" />

            <h4>computer higher processor and ram</h4>
            <h3><b>₹1200</b></h3>
            </div>
        </div>

        <div className="col">
           <div class="box-self">
            <img src={jar} class="img-size" />

            <h3>computer higher processor and ram</h3>
            <h3><b>₹1200</b></h3>
            </div>
        </div>

        <div className="col">
           <div class="box-self">
            <img src={jar} class="img-size" />

            <h3>computer higher processor and ram</h3>
            <h3><b>$1200</b></h3>
            </div>
        </div>
    </div>


    <div className="row row-self">
        <div className="col">
           <div class="box-self">
            <img src={jar} class="img-size" />

            <h3>computer higher processor and ram</h3>
            <h3><b>$1200</b></h3>
            </div>
        </div>

        <div className="col">
           <div class="box-self">
            <img src={jar} class="img-size" />

            <h3>computer higher processor and ram</h3>
            <h3><b>$1200</b></h3>
            </div>
        </div>

        <div className="col">
           <div class="box-self">
            <img src={jar} class="img-size" />

            <h3>computer higher processor and ram</h3>
            <h3><b>$1200</b></h3>
            </div>
        </div>

        <div className="col">
           <div class="box-self">
            <img src={jar} class="img-size" />

            <h3>computer higher processor and ram</h3>
            <h3><b>$1200</b></h3>
            </div>
        </div>
    </div>
</div>
 */}



            
 </>
    )
}

export default Wooden



