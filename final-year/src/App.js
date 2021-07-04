import Header from "./header/header.js"
import Categories from "./demo/categories.js"
import NewProducts from "./new_product/NewProducts.js"
import Landing_Img from "./landing_img/landing_img.js"
import Wooden from "./products/wooden/wooden.js"
import Contact from "./contact/contact.js"
import Footer from "./footer/footer.js"
import Signin from "./signin/signin.js"
import Signup from "./signup/signup.js"
import TabSection from "./tabSection/tabsection.js"
import Painting from "./products/painting/painting.js"
import Pottery from "./products/Pottery/pottery.js"
import { BrowserRouter, Route,Switch } from "react-router-dom"
import {useEffect,useState } from 'react'
import {auth} from './firebase'
import React from "react"
import search, {Search} from "./search"
import Wishlist from "./wishlist/wishlist.js"
import Product from "./product_page/product.js"
import AddToCart from "./add-to-cart/addtocart"

function App() {

  const[user,setUser]=useState();
  
useEffect(()=>{
    auth.onAuthStateChanged(user=>{
  
      if(user)
      {
             setUser(user)        
      }
      else
      {
               setUser(null)
      }
    }
    )

},[])    

  return (
    <>
     <BrowserRouter>
      <Header user={user}/>
      
      <Switch>
      <Route exact path='/' >
      <Landing_Img />
      <Categories user={user}/>
      <NewProducts user={user}/>
      <TabSection user={user}/>
      </Route>

      <Route exact path='/home' >
      <Landing_Img/>
      <Categories user={user}/>
      <NewProducts user={user}/>
      <TabSection user={user}/>
      </Route>


      <Route exact path='/contact'>
        <Contact user={user}/>
      </Route>
      <Route exact path='/signin' component={Signin} />
      <Route exact path='/signup' component={Signup} />
      <Route exact path='/wooden'>
       <Wooden user={user}/>
       </Route>
      <Route exact path='/pottery'>
        <Pottery user={user}/>
      </Route>
      <Route exact path='/painting'>
        <Painting user={user}/>
      </Route>
      <Route exact path='/search' component={search} />
      <Route exact path='/wishlist'>
        <Wishlist user={user}/>
        </Route> 
        <Route exact path='/product'>
          <Product user={user}/>
        </Route>
        <Route exact path='/addtocart'>
          <AddToCart user={user}/>
        </Route>
      </Switch>
     
      <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
