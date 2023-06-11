import React from "react";
import { FirstsideBar } from "./HeaderWork";
import Header from "./HeaderWork";
import { useState } from "react";

//this is navigation for setting
const Navigatesetting=()=>{
    return(
        <div className="navisett">

<p>My account</p>
<p>Notifications</p>
<p>Themes</p>
<p>Mode</p>
<p>Languages</p>
<p>Typing</p>
<p>Help</p>
        </div>
    )
}
const Notify=()=>{
    return(
        <div>
            <h1>Notification Settings</h1>
            <>We may send you important notification about your account</>
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
        <div className="comments">

            <h1>Comments</h1>
            <p>These are comments of your posts or 
                replies to your posts
            </p>
            <div className="sett1" >
            <p className="sett1Div" onClick={ColorChange} style={{ backgroundColor: bgColor }}>
            </p>
            <p>Push</p>
                .
      </div>
      <div className="sett2">
      <p className="sett2Div"  onClick={colorChange1} style={{ backgroundColor: bgColor1}}>.</p>
    <p>email</p>  
      </div>
      <div className="sett3">
      <p className="sett3Div" onClick={colorChange2} style={{ backgroundColor: bgColor2}}>.</p>
      <p>sms</p>
      </div>
      
        </div>
    )
}
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
        <div className="tags">
            <h1>Tags</h1>
            <p>These are notification when someone mentions you in a post or repely</p>

            <div className="settag1">
            <p className="settag1Div" onClick={ColorChange} style={{ backgroundColor: bgColor }}>
            </p>
            <p>Push</p>
                .
      </div>
      <div className="settag2">
      <p className="settag2Div"  onClick={colorChange1} style={{ backgroundColor: bgColor1}}>.</p>
    <p>email</p>  
      </div>
      <div className="settag3">
      <p className="settag3Div" onClick={colorChange2} style={{ backgroundColor: bgColor2}}>.</p>
      <p>sms</p>
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
        <div className="remender">
            <h1>Reminders</h1>
            
            <p>These are notifications for reminding 
                you of updates you have missed.   </p>
                <div className="setrem1">
            <p className="setrem1Div" onClick={ColorChange} style={{ backgroundColor: bgColor }}>
            </p>
            <p>Push</p>
                .
      </div>
      <div className="setrem2">
      <p className="setrem2Div"  onClick={colorChange1} style={{ backgroundColor: bgColor1}}>.</p>
    <p>email</p>  
      </div>
      <div className="setrem3">
      <p className="setrem3Div" onClick={colorChange2} style={{ backgroundColor: bgColor2}}>.</p>
      <p>sms</p>
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
        <div className="Moreactive">
            <h1>More activies</h1>
            <p>These are notifications for likes on
                your post and other comments
            </p>
            <div className="setMore1">
            <p className="setMore1Div" onClick={ColorChange} style={{ backgroundColor: bgColor }}>
            </p>
            <p>Push</p>
                .
      </div>
      <div className="setMore2">
      <p className="setMore2Div"  onClick={colorChange1} style={{ backgroundColor: bgColor1}}>.</p>
    <p>email</p>  
      </div>
      <div className="setMore3">
      <p className="setMore3Div" onClick={colorChange2} style={{ backgroundColor: bgColor2}}>.</p>
      <p>sms</p>
      </div>
        </div>
    )
 }
export const Settings=()=>{

    return(
        <div className="settingsFunc">
           
            <FirstsideBar/>
            <Header/>
            <h1>Back to home</h1>
            <h2>Settings</h2>
          <Navigatesetting/>
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
    )
}