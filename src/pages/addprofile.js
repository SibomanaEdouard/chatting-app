import React from "react";
import Header from "./HeaderWork";
import { FirstsideBar } from "./HeaderWork";
import { Thought } from "./HeaderWork";
import { Post } from "./HeaderWork";
import { UserImage } from "./HeaderWork";
const Profile=()=>{
    return(
        <div className="profileCont">
            <Header/>
<div className="text-fixed" style={{
  position: "fixed",
  left: "50%",
  transform: "translate(-50%, -50%)",
  paddingTop:"50vh"
}}>
  <UserImage />
  <div>
  <Thought/>
  </div>
</div>
<FirstsideBar/>
<Post/>
        </div>
    )
}

export default Profile;



