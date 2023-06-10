
import { useState } from "react";
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
const Profile=()=>{
    // const[profile1,setProfile]=useState(null);
    // //to update profile
    // const HandleChange=(e)=>{
  
    

    // const file=e.target.files[0];
    // const reader= new FileReader();
    // reader.onload=()=>{
    //     setProfile(reader.result);
    // }
    // if(file){
    //     reader.readAsDataURL(file);
    // }
    // };
//function to orient the user to the workspace
// const FromProf=()=>{
//     window.location.href='/work'
// }
    return(
        <div>
          
{/* <form encType="multipart/form-data">

    <input type="file"
    id='image'
    file={profile1}
    name="profile"
    accept="image/*"
    onChange={HandleChange}
    />
    <button>ADD PROFILE</button>
    <button onClick={FromProf}>NOT NOW</button>
</form> 
{profile1 && <img src={profile1} alt="This is the space of your profile."/>} */}

        </div>
    )
}

export const Collapsed=()=>{
    return (
        <div>
            <Header/>
          <FirstsideBarCall/>
        
<Profile/>     
<Thought/>
<Post/>  

        </div>
    )

}
