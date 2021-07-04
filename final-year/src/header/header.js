import React from 'react'
import {BiSearchAlt,BiHeart} from "react-icons/bi";
import {FaRegLightbulb, FaShoppingCart} from "react-icons/fa";
import {FaUserAlt} from "react-icons/fa";
import "./header.css"
import {Link} from "react-router-dom"
import {auth} from "../firebase"
import {useHistory} from 'react-router-dom'
import {useState} from 'react'

function Header({user}){

  const history=useHistory();
  const [searchterm,setSearchTerm]= useState('') 
    return(
        <>
            <div className="container-fluid header_container py-4">
                <div className="inside_container mx-auto">
                    <div className="row">
                        <div className="col-md-3 d-flex align-items-center">
                            <h1 className="logo">Apna Samaan
                            </h1>
                        </div>
                        <div className="col-md-6">
                            <div className="search_container mx-auto">
                                <div className="search_container mx-auto">
                                    <div className="input-group mt-3">
                                        <input type="search" className="form-control rounded input_area" placeholder="Search" onChange={(e)=>{
                                          setSearchTerm(e.target.value)
                                        }}  />
                                        <Link to={{
                                          pathname:"/search",
                                          state:searchterm}}><button type="button" className="btn btn-outline-danger" >search</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="container mt-3  d-flex justify-content-around">
                              
                                <div><Link to={user?"/wishlist":"/signin"} ><BiHeart className="icons"/> </Link></div>
                                <div><Link to ={user?"/addtocart":"/signin"}><FaShoppingCart className="icons"/></Link></div>
                                <div><FaUserAlt className="icons"/></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

           
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-5">
        <li class="nav-item">
          <Link to="/" class="nav-link active ms-5 " aria-current="page" >Home</Link>
        </li>
        
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle ms-5" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categories
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link to="wooden" class="dropdown-item">Wooden</Link></li>
            <li><Link to="pottery" class="dropdown-item" >Pottery</Link></li>
            
            
            <li><Link to="painting" class="dropdown-item " >painting</Link></li>
          </ul>
        </li>
        <li class="nav-item">
          <Link to="/contact" class="nav-link active  ms-5" aria-current="page" >Contact</Link>
        </li>
        <li class="nav-item">
          <Link to="/about" class="nav-link active ms-5" aria-current="page" >About</Link>
        </li>
        {
          user?
          <li class="nav-item logout" >
          <button type="button" class="nav-link active ms-5 self-button" aria-current="page" onClick={()=>{
            auth.signOut();
            history.push('/')
          }} >LogOut</button>
        </li>
        :
          <>
        <li class="nav-item">
          <Link to="/signin" class="nav-link active ms-5" aria-current="page" >Sign In</Link>
        </li>
        <li class="nav-item">
          <Link to="/signup" class="nav-link active ms-5" aria-current="page" >Sign Up</Link>
        </li>
        </>
        
}
       
      </ul>
     
    </div>
  </div>
</nav>

        </>
    )
}

export default Header;