import React from 'react'
import { WoodenCraft } from './tabSection/commondata'
import { Painting } from './tabSection/commondata'
import { Pottery } from './tabSection/commondata'
import { BiHeart } from 'react-icons/bi'
import { FaShoppingCart } from 'react-icons/fa'

export default function search(props) {
    const { state } = props.location
    
    return (
        <>
        
<div className="container mycontainer">
<div className="row  ">
{Painting.map((Painting)=>{

              if(state.toLowerCase()==Painting.name.toLowerCase()){
                  return(
                    
                
        <div className="col-md-4">
           <div class="box-self ">
            <img src={Painting.imgsrc} class="img-size" />

           <div className="product-name"> <center><h4>{Painting.name}</h4></center> </div>
            <div className="product-price"><h3><b>₹{Painting.price}</b></h3></div>
           <div className="product-cart"> <button className="btn btn-outline-danger product-icons" data-bs-toggle="tooltip" data-bs-placement="top" title="add to wishlist"><BiHeart className="product-icons"/></button>
                                  <button className="btn btn-outline-danger product-icons"data-bs-toggle="tooltip" id="add-cart" data-bs-placement="top" title="add to cart"><FaShoppingCart className="product-icons"/></button>
           </div> </div>
        </div>)
              }
            }
              )
            }

            {  WoodenCraft.map((Wooden)=>{

if(state.toLowerCase()==Wooden.name.toLowerCase()){
    return(
      
  
<div className="col-md-4">
<div class="box-self ">
<img src={Wooden.imgsrc} class="img-size" />

<div className="product-name"> <center><h4>{Wooden.name}</h4></center> </div>
<div className="product-price"><h3><b>₹{Wooden.price}</b></h3></div>
<div className="product-cart"> <button className="btn btn-outline-danger product-icons" data-bs-toggle="tooltip" data-bs-placement="top" title="add to wishlist"><BiHeart className="product-icons"/></button>
                    <button className="btn btn-outline-danger product-icons"data-bs-toggle="tooltip" id="add-cart" data-bs-placement="top" title="add to cart"><FaShoppingCart className="product-icons"/></button>
</div> </div>
</div>)
}
}
)
}
{Pottery.map((Pottery)=>{

if(state.toLowerCase()==Pottery.name.toLowerCase()){
    return(
      
  
<div className="col-md-4">
<div class="box-self ">
<img src={Pottery.imgsrc} class="img-size" />

<div className="product-name"> <center><h4>{Pottery.name}</h4></center> </div>
<div className="product-price"><h3><b>₹{Pottery.price}</b></h3></div>
<div className="product-cart"> <button className="btn btn-outline-danger product-icons" data-bs-toggle="tooltip" data-bs-placement="top" title="add to wishlist"><BiHeart className="product-icons"/></button>
                    <button className="btn btn-outline-danger product-icons"data-bs-toggle="tooltip" id="add-cart" data-bs-placement="top" title="add to cart"><FaShoppingCart className="product-icons"/></button>
</div> </div>
</div>)
}
}
)
}
              </div>
              </div>
            
            
 </>
    )
}
    

