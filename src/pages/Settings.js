import React from "react";
import { FirstsideBar } from "./HeaderWork";
import Header from "./HeaderWork";
import { useState } from "react";
import {AiOutlineArrowLeft} from "react-icons/ai"

//let navigate to the account
function navigateToAccount(){
    window.location.href="/account"
}

//this is to navigate to the help 
function navigateTOHelp(){
    window.location.href="/contact"
}
//this is to navigate to the home
const goHome=()=>{
    window.location.href="/"
}

//this is navigation for setting
const Navigatesetting=()=>{
    return(
        <div className="navisett  text-start">

<span onClick={navigateToAccount} className="m-1">My account</span>
<span className="">Notifications</span>
<span className="">Themes</span>
<span className="">Mode</span>
<span className="">Languages</span>
<span className="">Typing</span>
<span onClickCapture={navigateTOHelp} className="">Help</span>
        </div>
    )
}
const Notify=()=>{
    return(
        <div className="text-start pt-5">
            <h1>Notification Settings</h1>
            <span>We may send you important notification about your account</span>
        </div>
    )
}
const Comments=()=>{
    const [bgColor,setBgColor]=useState("#A0BDFF");
    const [bgColor1,setBgColor1]=useState("#A0BDFF");
    const [bgColor2,setBgColor2]=useState("#A0BDFF");
    const ColorChange=(e)=>{
        e.preventDefault();
        setBgColor((prevColor) => (prevColor === "#A0BDFF"?"#D9D9D9":"#A0BDFF"));
    }
    const colorChange1=(e)=>{
        e.preventDefault();
        setBgColor1((prevColor) => (prevColor === "#A0BDFF"?"#D9D9D9":"#A0BDFF"));
    }
    const colorChange2=(e)=>{
        e.preventDefault();
        setBgColor2((prevColor) => (prevColor === "#A0BDFF"?"#D9D9D9":"#A0BDFF"));
    }
    return(
        <div className="text-start mt-5">

            <h1>Comments</h1>
            <span>These are comments of your posts or 
                replies to your posts
            </span>

<div className="mt-5">    
            <div className="sett1 mt-5">
            <p className="sett1Div" onClick={ColorChange} style={{ backgroundColor: bgColor }}>
            </p>
            <span>Push</span>              
      </div>
      <div className="sett2">
      <p className="sett2Div"  onClick={colorChange1} style={{ backgroundColor: bgColor1}}>
      </p>
    <span>email</span>  
      </div>
      <div className="sett3">
      <p className="sett3Div " onClick={colorChange2} style={{ backgroundColor: bgColor2}}></p>
      <span>sms</span>
      </div>
        </div>
        </div>
    )
}

//this is the tage
 const Tags=()=>{
    const [bgColor,setBgColor]=useState("#A0BDFF");
    const [bgColor1,setBgColor1]=useState("#A0BDFF");
    const [bgColor2,setBgColor2]=useState("#A0BDFF");
    const ColorChange=(e)=>{
        e.preventDefault();
        setBgColor((prevColor) => (prevColor === "#A0BDFF"?"#D9D9D9":"#A0BDFF"));
    }
    const colorChange1=(e)=>{
        e.preventDefault();
        setBgColor1((prevColor) => (prevColor === "#A0BDFF"?"#D9D9D9":"#A0BDFF"));
    }
    const colorChange2=(e)=>{
        e.preventDefault();
        setBgColor2((prevColor) => (prevColor === "#A0BDFF"?"#D9D9D9":"#A0BDFF"));
    }
    return(
        <div className="tags text-start mt-5">
            <h1>Tags</h1>
            <span>These are notification when someone mentions you in a post or repely</span>

            <div className="settag1 mt-5">
            <p className="settag1Div" onClick={ColorChange} style={{ backgroundColor: bgColor }}>
            </p>
            <span>Push</span>               
      </div>
      <div className="settag2">
      <p className="settag2Div"  onClick={colorChange1} style={{ backgroundColor: bgColor1}}></p>
    <span>email</span>  
      </div>
      <div className="settag3">
      <p className="settag3Div" onClick={colorChange2} style={{ backgroundColor: bgColor2}}></p>
      <span>sms</span>
      </div>
        </div>
    )
 }

 const Reminders=()=>{
    const [bgColor,setBgColor]=useState("#A0BDFF");
    const [bgColor1,setBgColor1]=useState("#A0BDFF");
    const [bgColor2,setBgColor2]=useState("#A0BDFF");
    const ColorChange=(e)=>{
        e.preventDefault();
        setBgColor((prevColor) => (prevColor === "#A0BDFF"?"#D9D9D9":"#A0BDFF"));
    }
    const colorChange1=(e)=>{
        e.preventDefault();
        setBgColor1((prevColor) => (prevColor === "#A0BDFF"?"#D9D9D9":"#A0BDFF"));
    }
    const colorChange2=(e)=>{
        e.preventDefault();
        setBgColor2((prevColor) => (prevColor === "#A0BDFF"?"#D9D9D9":"#A0BDFF"));
    }
    return(
        <div className="remender text-start">
            <h1>Reminders</h1>
            
            <span>These are notifications for reminding 
                you of updates you have missed.   </span>
                <div className="setrem1">
            <p className="setrem1Div" onClick={ColorChange} style={{ backgroundColor: bgColor }}>
            </p>
            <span>Push</span>
      </div>
      <div className="setrem2">
      <p className="setrem2Div"  onClick={colorChange1} style={{ backgroundColor: bgColor1}}></p>
    <span>email</span>  
      </div>
      <div className="setrem3">
      <p className="setrem3Div" onClick={colorChange2} style={{ backgroundColor: bgColor2}}></p>
      <span>sms</span>
      </div>
         
        </div>
    )
 }

 const MoreActive=()=>{
    const [bgColor,setBgColor]=useState("#A0BDFF");
    const [bgColor1,setBgColor1]=useState("#A0BDFF");
    const [bgColor2,setBgColor2]=useState("#A0BDFF");
    const ColorChange=(e)=>{
        e.preventDefault();
        setBgColor((prevColor) => (prevColor === "#A0BDFF"?"#D9D9D9":"#A0BDFF"));
    }
    const colorChange1=(e)=>{
        e.preventDefault();
        setBgColor1((prevColor) => (prevColor === "#A0BDFF"?"#D9D9D9":"#A0BDFF"));
    }
    const colorChange2=(e)=>{
        e.preventDefault();
        setBgColor2((prevColor) => (prevColor === "#A0BDFF"?"#D9D9D9":"#A0BDFF"));
    }
    return(
        <div className="Moreactive text-start">
            <h1>More activies</h1>
            <span>These are notifications for likes on
                your post and other comments
            </span>
            <div className="setMore1">
            <p className="setMore1Div" onClick={ColorChange} style={{ backgroundColor: bgColor }}>
            </p>
            <span>Push</span>
      </div>
      <div className="setMore2">
      <p className="setMore2Div"  onClick={colorChange1} style={{ backgroundColor: bgColor1}}></p>
    <span>email</span>  
      </div>
      <div className="setMore3">
      <p className="setMore3Div" onClick={colorChange2} style={{ backgroundColor: bgColor2}}></p>
      <span>sms</span>
      </div>
        </div>
    )
 }

export const Settings=()=>{

    return(
        <div className="settingsFun">
                <Header/>
                <div className="">
            <FirstsideBar/>
            </div>
       <div className="text-start" style={{color:"#407BFF",paddingTop:"7%",marginLeft:"20%"}}
       onClick={goHome}
       >
        <AiOutlineArrowLeft className="fs-1" 
        style={{color:"#407BFF"}}
        />

        <span 
          style={{color:"#407BFF"}}
        >
        Back to home
        </span>
        <h2>Settings</h2>
       </div>
       <Navigatesetting/>
 <div style={{marginLeft:"20%"}}>         
         
          <Notify/>
          <hr/>
          <Comments/>
          <hr/>
          <Tags/>
          <hr/>
          <Reminders/>
          <hr/>
          <MoreActive/>
          </div> 
        </div>
    )
}