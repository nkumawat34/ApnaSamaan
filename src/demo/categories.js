import React from 'react'
import qwe from "../assest/qwe.jpg"
import painting from "../assest/painting.jpg"
import handicraft from "../assest/handicraft.jpg"
import './categories.css'
import { FaArrowCircleRight} from "react-icons/fa";
import {Link} from "react-router-dom"

function Categories(){
    return(
        <>
            <div className="cat_container my-5">
                
                <div className="container">
                <h3>Top Categories Of The Month </h3>
                <hr className="mt-3 mb-4"/>
                    <div className="row gy-3">
                        <div className="col-md-4">
                            <div className= "inner_container card">
                            <img src={qwe} className=" img-fluid imgClass"/>
                              <div className="name_div">  <h4>Wooden Craft</h4>
                                
                                <h4 className="my-2">Collection</h4>

                                <Link to="/wooden" className="self-link"> <p className="mt-4 ">shop now  <FaArrowCircleRight/></p></Link>
                              </div>
                                
                            </div>
                            
                        </div>
                        <div className="col-md-4">
                        <div className= "inner_container card">
                              <div className="name_div">  <h4>Pottery</h4>
                                
                                <h4 className="my-2">Collection</h4>

                                <Link to="/pottery" className="self-link"> <p className="mt-4">shop now  <FaArrowCircleRight/></p></Link>
                              </div>
                                <img src={handicraft} className=" img-fluid imgClass"/>
                            </div>
                        </div>
                        <div className="col-md-4">
                        <div className= "inner_container card">
                              <div className="name_div">  <h4>Painting</h4>
                                
                                <h4 className="my-2">Collection</h4>

                               <Link to="/painting" className="self-link"> <p className="mt-4">shop now  <FaArrowCircleRight/></p></Link>
                              </div>
                                <img src={painting} className="img-fluid imgClass"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Categories;