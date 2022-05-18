import React from 'react'
import "./tabsection.css"
import {useState} from "react"
import {WoodenCraft,Pottery,Painting} from "./commondata"
import Slide1 from "./slide1"
import bgimg from "../assest/bgimg.jpg";


function TabSection({user}){

 

    let [state,setState]=useState({
        first:true,
        second:false,
        third:false
    });

   var hideComponent=(props)=> {
        switch (props) {
          case "first":
            setState({ first: !state.first });
            break;
          case "second":
            setState({ second: !state.second });
            break;
            case "third":
            setState({ third: !state.third });
            break;
            default:console.log("");
        }
      }
      
    return(
    <>
    <div className="main-parallax">
    <div className="inner_parallax ">The object of basic education is the physical,<br/> intellectual and moral development of children through the medium of handicraft. </div>
    <div class="parallax" style={{ backgroundImage: `url(${bgimg})` }}> 
    </div>
    </div>
    <div className="container tab_main">
        <div className=" d-flex justify-content-between">
           <p className="tab_heading">
                TOP SELLING
           </p>
           <ul class="section-tab-nav tab-nav">
			    <li class={state.first?"active":""}><a data-toggle="tab" href="#tab" onClick={() => hideComponent("first")}>WOODEN</a></li>
			    <li class={state.second?"active":""}><a data-toggle="tab" href="#tab" onClick={() => hideComponent("second")}>POTTERY</a></li>
				<li class={state.third?"active":""}><a data-toggle="tab" href="#tab" onClick={() => hideComponent("third")}>PAINTING</a></li>
			</ul>
        </div>
        <div className="container" id="tab">
        {state.first && <Slide1 data={WoodenCraft} user={user} />}
        {state.second && <Slide1 data={Pottery} user={user} />}
        {state.third && <Slide1 data={Painting} user={user} />}
        </div>
    </div>
    </>);
}

export default TabSection;