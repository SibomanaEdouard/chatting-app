import React from "react";
import Header from "./HeaderWork";
import { FirstsideBar } from "./HeaderWork";
import { Thought } from "./HeaderWork";
import { Post } from "./HeaderWork";

const lastname=localStorage.getItem('lastname');

export const Username = () => {
 
  
  
    return (
      <div className="">
        <p>{lastname}</p>
      </div>
    );
  };

const Profile=()=>{
    return(
        <div>
            <Header/>

<FirstsideBar/>
<Thought/>
<Post />
        </div>
    )
}

export default Profile;



