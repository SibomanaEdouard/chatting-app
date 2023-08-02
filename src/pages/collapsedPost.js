

 import React from "react";
// import { RiMessage3Fill } from "react-icons/ri";
import { RiSettings2Fill } from "react-icons/ri"
import {BiLogOut} from "react-icons/bi"
import {TbMessageCircle2Filled} from "react-icons/tb"
import {RiUserReceivedFill} from "react-icons/ri"
import {RiPhoneCameraFill} from "react-icons/ri"
import{RiAdvertisementFill} from "react-icons/ri"
import {RiArrowRightSLine} from "react-icons/ri"
import Header from "./HeaderWork";
import { Thought } from "./HeaderWork";
import { Post } from "./HeaderWork";


//function to navigate through the sidebar

//this is for account
const Myaccount=(e)=>{
    e.preventDefault();
window.location.href='/account'


}
//this is for friends
const Myfriend=(e)=>{
    e.preventDefault();
window.location.href='/friends'


}
//this is for messages
const Mymessages=(e)=>{
    e.preventDefault();
window.location.href='/messages'


}
//this is for recommends
const Myrecommends=(e)=>{
    e.preventDefault();
window.location.href='/recommends'
}
//this is for setting
const Mysettings=(e)=>{
    e.preventDefault();
window.location.href='/settings'
}
//this is for logout
const MyLogout=(e)=>{
    e.preventDefault();
alert("Are you sure you want to logout?");
window.location.href='/'


}
//this is for post
const MyPosts=(e)=>{
    e.preventDefault();
window.location.href="/profile"

}

//This the function to return The Header




export const FirstsideBarCall=()=>{
    return(
<div className="firstsidebarcal">

<div>
    <div className="" onClick={Myaccount}>

    </div>
  
    My account
</div>
<div>
    <RiUserReceivedFill className="iconsHd" onClick={Myfriend}/>
 
</div>
<div>
< TbMessageCircle2Filled className="iconsHd" onClick={Mymessages}/>

</div>
<div>
 
<RiPhoneCameraFill className="iconsHd" onClick={MyPosts}/>
  
</div>
<div>
   <RiAdvertisementFill className="iconsHd" onClick={Myrecommends}/>
    
</div>
<div>
<RiSettings2Fill className="iconsHd" onClick={Mysettings}/>
    
</div>
<hr color="black"/>
<br/>
<br/>
<br/>
<div>
    <BiLogOut className="iconsHd"  onClick={MyLogout}/>
   
</div>
<div>
    <RiArrowRightSLine className="iconsHd" onClick={MyPosts}/>
</div>
</div>

    )
}
export const Collapsed=()=>{
    return (
        <div>
            <Header/>
          <FirstsideBarCall/>
        
    
<Thought/>
<Post/>  

        </div>
    )

}
