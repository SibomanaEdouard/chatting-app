
import React from "react";
import { NavigationTab } from "./Home";
import Enjoy from '../Images/about.svg'

//function to navigate to the login
const Logo=(e)=>{
    e.preventDefault();
    window.location.href="/sign/login";
}
//function to display the image
const ImageAbout=()=>{

    return (<div>

        <img src={Enjoy} alt="This is the sign of happiness and friendship" className="imageAbout"/>
    </div>)
}
const DisplayContent=()=>{
    return(<div className="mission">
    
    <h1>Our mission</h1>
    <p>To help to build  </p>
       <p><span className="pabout">Unlimited Joyful moments</span> and</p> 
    <p>grow connections wide</p> 
      <p>we provide you with </p>
        <p className="pabout">unlimited communication </p>
        <p> <span className="pabout">features </span>such as media</p>
        <p>sharing </p> 
    
        <button onClick={Logo}>Join Us</button>
    </div>)
}
//function to display the input
const About=()=>{
    
    return(
    <div>
        <NavigationTab />
        <ImageAbout/>
<DisplayContent/>

    </div>
    )
}

export default About;