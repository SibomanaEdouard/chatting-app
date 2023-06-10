import React from "react";
import { FirstsideBar } from "./HeaderWork";
import Header from "./HeaderWork";
const lastname=localStorage.getItem('lastname');

//this is the header for the account
const AccountHeader=()=>{
    return(
        <div className="accPrNav">
            <div className="AccProf">
<h1>Abba</h1>
<p>{lastname}</p>
<p>Edit profile photo</p>
            </div>
            <div className="accNav">
            <p>Edit profile photo</p>
            <GoAbout/>
            <GoPosts/>
            <GoFriends/>
            

            </div>

        </div>
    )
}
//the following are navigation bar
const GoAbout=()=>{
    return(
        <div>
            <h1>About</h1>
            </div>
    )

}
const GoPosts=()=>{
    return(
        <div>
<h1>Posts</h1>

        </div>
    )
    
}

const GoFriends=()=>{
    return(
        <div>
            <h1>Friends</h1>
        </div>
    )
    
}
//this is about content
const About=()=>{
    return(<div className="aboutcontent">
        <h1>About</h1>

    </div>)
}

export const Account=()=>{

    return(
        <div>
            <FirstsideBar/>
            <Header/>
            <AccountHeader/>
            <About/>
        </div>
    )
}