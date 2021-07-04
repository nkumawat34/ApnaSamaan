import React from 'react'
import Slider from "react-slick";
import   "./NewProduct.css";
import data from "./productdata"
import {BiSearchAlt,BiHeart} from "react-icons/bi";
import {FaShoppingCart} from "react-icons/fa";
import firebase from "firebase/app";
import {db} from "../firebase";
import  {useHistory}  from "react-router-dom";
function NewProducts({user})
{
  let history = useHistory();
  const AddToWishList=(data)=>{
    if(user){
    var docRef=db.collection("wishlist").doc(user.uid)
    db.collection("wishlist").doc(user.uid).set({},{merge:true})


    
  docRef.update({
    wishlist:firebase.firestore.FieldValue.arrayUnion(data)
})
    }
    else
    {
       history.push("/signin");
    }
}
const AddToCart=(Product)=>{
  if(user){
  var docRef=db.collection("addtocart").doc(user.uid)
  db.collection("addtocart").doc(user.uid).set({},{merge:true})


  
docRef.update({
  cart:firebase.firestore.FieldValue.arrayUnion(Product)
})
}

else
{
history.push("/signin")
}
}
    
        var settings = {
          dots: true,
          infinite: true,
          slidesToShow: 4,
          slidesToScroll: 4,
          initialSlide: 0,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 2000,
          pauseOnHover: true,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        };
        return (
          <div className="container newproduct_container">
            <div className="mb-5 new_product_headline"> New Products </div>
            <  Slider {...settings}>
              {data.map((data)=>{
                  return<div className='row'>
                           <div class="col">
                              <div className="box">
                                <div className="img_container">
                                  <img src ={data.imgsrc} alt="" className="img_src"/>
                                </div>
                                <div className="mt-2 text-center">
                                  <div className="fontStyle uppercase  my-1">{data.name}</div>
                                  <h5 class="product-price my-2">₹{data.price} <del class="product-old-price">₹990.00</del></h5>
                                </div>
                                <div className="d-flex justify-content-around mx-3 my-3">
                                  <button className="btn btn-outline-danger product-icons" data-bs-toggle="tooltip" data-bs-placement="top" title="add to wishlist" onClick={()=>{AddToWishList(data)}}><BiHeart className="product-icons"/></button>
                                  <button className="btn btn-outline-danger product-icons"data-bs-toggle="tooltip" data-bs-placement="top" title="add to cart" onClick={()=>{AddToCart(data)}}><FaShoppingCart className="product-icons"/></button>
                                </div>
                              </div>
                           </div>
                        </div>
              })}
            </Slider>
          </div>
        ); 
}

export default NewProducts;