import React from "react";
import { useState } from "react";
import Header from "./HeaderWork";
import { FirstsideBar } from "./HeaderWork";
import { Thought } from "./HeaderWork";
import { Post } from "./HeaderWork";


const lastname=localStorage.getItem('lastname');
const Id=localStorage.getItem('id');
export const UserId=()=>{
    return(
        <div>
            {Id}
        </div>
    )
}

export const Username=()=>{

    return (
        <div className="username">
    {lastname}
    </div>
    )

}
//this is the components to add profile picture
const Profile=()=>{
    const[profile1,setProfile]=useState(null);
    //to update profile
    const HandleChange=(e)=>{
  
    

    const file=e.target.files[0];
    const reader= new FileReader();
    reader.onload=()=>{
        setProfile(reader.result);
    }
    if(file){
        reader.readAsDataURL(file);
    }
    };
//function to orient the user to the workspace
const FromProf=()=>{
    window.location.href='/work'
}



    return(
        <div>
            <Header/>
<form encType="multipart/form-data">
{/*   
    <input type="file"
    id='image'
    file={profile1}
    name="profile"
    accept="image/*"
    onChange={HandleChange}
    /> */}
    {/* <button>ADD PROFILE</button>
    <button onClick={FromProf}>NOT NOW</button> */}
</form>
{profile1 && <img src={profile1} alt="This is the space of your profile."/>}
<FirstsideBar/>
<Thought/>
<Post />
        </div>
    )
}

export default Profile;


