import React from 'react'
import "./footer.css"
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGoogle} from "react-icons/fa";
import { ImPhone } from "react-icons/im";
import { TiLocation } from "react-icons/ti";
import { FaEnvelope } from "react-icons/fa";
function Footer(){
    return(
        <>
            <div className="footer_section">
                <div className="section py-5">
                    <div className="container">
                        <div className="row  ">
                            <div className="col-md-4 col-xs-6 ">
                                <h3 class="footer-title mb-4">About Us</h3>
                                <p style={{color:'grey'}} className="fontstyle">Apna Samaan provide<br/> all tribal product.</p>
                                <div>
                                    <button className="icon_span btn btn-outline-danger me-1"><FaFacebookF /></button>
                                    <button className="icon_span btn btn-outline-danger mx-1"><FaTwitter/></button>
                                    <button className="icon_span btn btn-outline-danger mx-1"><FaInstagram/></button>
                                    <button className="icon_span btn btn-outline-danger mx-1"><FaGoogle/></button>
                                </div>
                            </div>
                            <div className="col-md-4 col-xs-6">
                                <h3 class="footer-title mb-4">CATEGORIES</h3>
                                <ul class="footer-links">
									<li><a href="s">Wooden</a></li>
									<li><a href="s">Pottery</a></li>
									<li><a href="s">Painting</a></li>
                                    <li><a href="s">top product</a></li>
									
								</ul>
                            </div>
                            <div className="col-md-4 col-xs-6">
                            <h3 class="footer-title mb-4">CONTACT US</h3>
                                <ul class="footer-links">
									<li><span>< ImPhone/></span><a href="s">2332478921</a></li>
									<li><span><TiLocation/></span><a href="s">Pottery</a></li>
									<li><span><FaEnvelope/></span><a href="s">Painting</a></li>
									
								</ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;