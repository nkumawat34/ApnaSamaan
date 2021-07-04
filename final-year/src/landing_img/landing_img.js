import React from 'react'
import jar from "../assest/jar.jpg"
import "./landing_img.css"
function Landing_Img(){
    return(
        <>
            <div className=" mx-0 px-0 container-fluid">
                <div className="inner_box">
                    <img src={jar} className="imgsrc" alt="" />
                    <div className="content">
                    <h1 className="head">WELCOME  TO THE TRIBE</h1>
                        <h1 className="lines">Tribal art pieces are made with love.</h1>
                        <p className="p-lines">Art is not a handicraft, it is the transmission of feeling<br/> the artist has experienced.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Landing_Img;