import React from "react";
import { FirstsideBar } from "./HeaderWork";
import Header from "./HeaderWork";

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
    return(
        <div>

            <h1>Comments</h1>
            <>These are comments of your posts or 
                replies to your posts
            </>
        </div>
    )
}
 const Tags=()=>{
    return(
        <div>
            <h1>Tags</h1>
            <>These are notification when someone mentions you in a post or repely</>
        </div>
    )
 }
 const Reminders=()=>{
    return(
        <div>
            <h1>Reminders</h1>
            
            <>These are notifications for reminding 
                you of updates you have missed.   </>
         
        </div>
    )
 }

 const MoreActive=()=>{
    return(
        <div>
            <h1>More activies</h1>
            <>These are notifications for likes on
                your post and other comments
            </>
        </div>
    )
 }
export const Settings=()=>{

    return(
        <div>
           
            <FirstsideBar/>
            <Header/>
            <h1>Back to home</h1>
            <h2>Settings</h2>
          <Navigatesetting/>
          <Notify/>
          <Comments/>
          <Tags/>
          <Reminders/>
          <MoreActive/>
        </div>
    )
}